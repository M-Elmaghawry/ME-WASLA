# 03 — جرد الإضافات وحالة التضمين

**الحالة الفيزيائية فقط مؤكدة.** لا اتصال بقاعدة ولا قراءة تراخيص أوحسابات. لذلك Installed/Active/Disabled/Entitlement لكل إضافة **UNDETERMINED**. عدم وجود install.txt لا يثبت التفعيل؛ `Home::addon_exist()` يستعلم عن `add_ons`، وتدخل `modules/package.module_ids` في الإتاحة. أسماء الإضافات المطلوبة من المستخدم عولجت كلها أدناه، مع البحث عن legacy names ومعرفات project/module.

## الحزم الموجودة فعليًا

| الحزمة داخل application/modules | الإصدار المعلن | الدليل | Code Status |
| --- | --- | --- | --- |
| ai_reply | 1.1 | [Ai_reply::activate](../../application/modules/ai_reply/controllers/Ai_reply.php)، project 67/module 340 | ADDON_PRESENT |
| blog | 1.0 | [Blog.php](../../application/modules/blog/controllers/Blog.php)، blog_posts | ADDON_PRESENT |
| instagram_bot | 1.0 | [Instagram_bot.php](../../application/modules/instagram_bot/controllers/Instagram_bot.php)، تسجيل الإضافة؛ التنفيذ المشترك في Messenger_bot | ADDON_PRESENT |
| instagram_poster | 1.0 | [Instagram_poster::image_video_add_auto_post_action](../../application/modules/instagram_poster/controllers/Instagram_poster.php) | ADDON_PRESENT |
| menu_manager | 1.0 | [Menu_manager::create_page_action](../../application/modules/menu_manager/controllers/Menu_manager.php) | ADDON_PRESENT |
| simplesupport | 1.0 | [Simplesupport::open_ticket_action](../../application/modules/simplesupport/controllers/Simplesupport.php) | ADDON_PRESENT |
| ultrapost | 1.0 | [Ultrapost::carousel_slider_add_post_action](../../application/modules/ultrapost/controllers/Ultrapost.php) | ADDON_PRESENT |
| visual_flow_builder | 1.6.9 | [Visual_flow_builder::flowbuilder_submit](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php)، project 59/module 315 | ADDON_PRESENT |

لم توجد markers تعطيل في أي من هذه المجلدات. لا يمكن استخراج عدد موثوق لإضافات «موجودة لكنها معطلة»؛ العدد **غير معلوم وليس صفرًا**. `facebook_poster_group_enable_disable` معطل في الإعداد الحالي، لكنه علم ميزة داخل core ولا يثبت وجود حزمة Group Tools.

## الإضافات الـ24 المطلوبة

كل حالة ADDON_NOT_FOUND تعني غياب **حزمة التسجيل والإدارة المستقلة** من المجلدات الموجودة، حتى عندما توجد أجزاء مستهلكة في core. لا يعني ذلك أن الوظيفة كلها غائبة. لا تضاف هذه الصفوف إلى عدد الميزات؛ هي inventory للحزم، وترتبط بمعرفات المصفوفة لتجنب العد المزدوج.

| # | الإضافة المطلوبة / الاسم البديل | حالة الحزمة | أدلة core أوالمراجع | القرار |
| --- | --- | --- | --- | --- |
| 1 | Comment Reply Enhancers / comment_reply_enhancers | ADDON_NOT_FOUND | Cron_job::auto_comment_on_post، project 29، دعم auto_like/share | مراجع وأجزاء؛ تحقق نسخة الحزمة والتسجيل |
| 2 | Messenger Bot Enhancers / messenger_bot_enhancers | ADDON_NOT_FOUND | Home::broadcaster_exist/drip_campaigner_exist، project 30؛ F01/F10 | محركات موجودة وبوابات مفقودة |
| 3 | Messenger Bot Connectivity / messenger_bot_connectivity | ADDON_NOT_FOUND | Home::webview_exist/messenger_bot_import_export_exist، project 31؛ VF::addWebhookResponse | A20/A26/L02 تحتاج مراجعة الترخيص والحزمة |
| 4 | WooCommerce Abandoned Cart / woocommerce_abandoned_cart | ADDON_NOT_FOUND | Cron_job::woocommerce_abandoned_cart_reminder، project 33 | جداول/receiver ناقصة، I25 |
| 5 | Email SMS Sequence / sms_email_sequence | ADDON_NOT_FOUND | Home::sms_email_drip_campaigner_exist، project 40، SE::get_sequence_campaigns | G14/H09 لا يثبتان دورة كاملة |
| 6 | WP and YT Feed Auto Post / auto_social_sharing | ADDON_NOT_FOUND | Home::auto_social_sharing_exist، project 39، Autoposting وRSS Cron | أجزاء تنفيذ مدمجة E11/E12 |
| 7 | E-commerce Product Price Variation | ADDON_NOT_FOUND | Ecommerce::calculate_price_basedon_attribute، ecommerce_attribute_product_price | جدول السعر غير موجود في SQL؛ I06 |
| 8 | Instagram Reply Enhancers | ADDON_NOT_FOUND | Instagram_reply::webhook_callback، addon_exist('instagram_reply_enhancers') | أجزاء الردود الموسعة C02 |
| 9 | User Input & Custom Fields / user_input_flow | ADDON_NOT_FOUND | Messenger_bot::process_user_input، SM::get_subscriber_customfields_data | بعض حقول الأساس موجودة وجداول user_input_flow_* ناقصة |
| 10 | E-commerce Product Review & Comment | ADDON_NOT_FOUND | Ecommerce::ecommerce_review_comment_exist، project 48، comment/review | جداول review/comment غير معرفة في الأساس |
| 11 | WooCommerce Integration | ADDON_NOT_FOUND | حقول woocommerce_* في Ecommerce وSQL | لا متحكم config/sync كامل موجود |
| 12 | E-commerce Digital Product | ADDON_NOT_FOUND | Ecommerce::download_item، addon ecommerce_digital_product/module 316 | كود تنزيل موجود؛ I22 مقيد |
| 13 | Flow Builder Insight | ADDON_NOT_FOUND | VF::load_builder project 64/module 330، messenger_bot_message_sent_stat | L06 أجزاء تتطلب حزمة/تسجيل |
| 14 | Flow Builder Conditional Reply | ADDON_NOT_FOUND | VF::load_builder project 63/module 325، Home::check_all_condition | evaluator موجود؛ A07 |
| 15 | Recurring Notifications for Facebook | ADDON_NOT_FOUND | Home::recurring_notification_exist project 66/module 335، BR::rcn_* | F03 مستهلك قوي؛ لا حزمة مستقلة |
| 16 | Team Member Manager / team_member | ADDON_NOT_FOUND | Home::get_team_member_list، VF project 65، team_members/team_roles | D06/D07/S17؛ الجداول غائبة من الأساس |
| 17 | Google Sheets Integration | ADDON_NOT_FOUND | بحث google_sheet/google_sheets وعميل Sheets مستخدم في application | لا إدارة OAuth أوmapping أوsync متكامل |
| 18 | HTTP API Integration | ADDON_NOT_FOUND | VF::addWebhookResponse وthirdparty_webhook tables/hooks | ليس Custom HTTP SMS Gateway ولا REST module؛ L02 |
| 19 | Google Contacts Integration | ADDON_NOT_FOUND | بحث google_contact وPeople API caller | SDK Google_login لا يثبت Contacts sync |
| 20 | ChatPion Affiliate System | ADDON_NOT_FOUND | Home::affiliate_commission وref cookie؛ affiliate_* غائب من DDL | لا لوحة affiliate مستقلة؛ S18 |
| 21 | WhatsApp E-commerce Order Send | ADDON_NOT_FOUND | Ecommerce::appearance_settings_action وorder وJS settings | إعدادات فقط دون رابط/زر إرسال مكتمل؛ W11 |
| 22 | ChatPion API Documentation / api | ADDON_NOT_FOUND | Native_api يولد مفتاحًا، documentation يربط api/doc؛ لا Api controller | plugins/api assets لا تنفذ REST؛ L04 |
| 23 | Group Posting Tools | ADDON_NOT_FOUND | group tables/flags ومسارات legacy في النشر | علم تعطيل ومخاطر API؛ L05 |
| 24 | AI Integration / ai_reply | ADDON_PRESENT | Ai_reply::activate، Openai_api وIntegration::open_ai_api_credentials | الحزمة موجودة؛ لا إثبات تسجيل أوصلاحية النماذج |

روابط الأدلة المشتركة: [Home](../../application/controllers/Home.php)، [Cron_job](../../application/controllers/Cron_job.php)، [Ecommerce](../../application/controllers/Ecommerce.php)، [Instagram_reply](../../application/controllers/Instagram_reply.php)، [Messenger_bot](../../application/controllers/Messenger_bot.php)، [Subscriber_manager](../../application/controllers/Subscriber_manager.php)، [Visual_flow_builder](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php)، [Native_api](../../application/controllers/Native_api.php)، [DDL](../../assets/backup_db/initial_db.sql).

حصيلة قائمة الـ24: **1 حزمة موجودة، و23 حزمة مستقلة غير موجودة**؛ هذا ليس عدد الميزات الغائبة ولا عدد الحزم المدفوعة. إجمالي الحزم الفيزيائية الموجودة في المشروع **8**، منها **7 إضافية** خارج قائمة الـ24. لا تجمع 8 و1 لأن AI مشترك بين المجموعتين.

## التفعيل والتراخيص والتحقق المتبقي

`Home::register_addon()/unregister_addon()` يديران add_ons/modules/menus وmarkers، و`addon_credential_check()` يتعامل مع استحقاق المورد. هذه الإجراءات لم تُنفذ. لا تُنشئ سجلات add_ons يدويًا لتجاوز غياب الحزمة أوالترخيص؛ بعض الحزم تضيف DDL ومنطقًا لا يوفره تغيير flag.

التثبيت الموجود يحتاج تحققًا مصرحًا لاحقًا من: النسخة الدقيقة لكل حزمة، توافقها مع 9.1.1 وPHP، تعريفات SQL، حالة التسجيل، منح الباقة، ثم اختبار الوظيفة end-to-end. مصدر الشيفرة لا يثبت حقوق الترخيص.

تؤكد صفحات المورد أن [الرد الشرطي](https://xeroneit.net/portfolio/visual-flow-builder-conditional-reply-chatpion-add-on) إضافة مستقلة، وأن [API Documentation](https://xeroneit.net/portfolio/chatpion-api-documentation) له قيود على endpoints الإدارية. هذه مراجع للمقارنة وليست إثباتًا لتثبيتها محليًا.
