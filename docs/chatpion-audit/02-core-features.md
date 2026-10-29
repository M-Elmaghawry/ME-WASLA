# 02 — تدقيق الميزات الأساسية A–J

كل خاصية مطلوبة في الفئات العشر مغطاة بصف أدناه أوبإحالة إلى Canonical ID مشترك. مرجع التصنيف الشامل [08](08-master-feature-matrix.md). **IMPLEMENTED_IN_SOURCE لا تعني التشغيل أوالأمان أوالتفعيل**؛ جميع القدرات NOT_TESTED تشغيليًا. الأدلة روابط ملفات مع methods/fields. الصف ذوPARTIALLY_IMPLEMENTED يحتاج توضيح فجوة؛ ADDON_PRESENT يعني الملفات فقط.

## إحالات تمنع تكرار العد

| التكرار في قائمة الطلب | المرجع الوحيد |
| --- | --- |
| Instagram DM وInstagram chatbot flows ضمن A وC | A03 مع A01/A04 |
| Instagram image/video/scheduling ضمن C وE | C04/C05/C06 |
| CSV وcontact segmentation ضمن SMS وEmail | G02/G03 |
| targeting/audience segmentation في البث | F05 مع إدارة labels في A25 |
| analytics المتعلقة بـInstagram/comments/campaigns/SMS/email/store | C07/B09/E13/F07/G05/H14/I29 |
| order details إلى WhatsApp | W11 في تقرير05 |
| team management/assignment ضمن livechat وSaaS | D06/D07، وفحص RBAC في S17 |
| AI replies في البوت | AI03/AI04/AI15 في تقرير05 |


## A — Chatbot Builder

المنشئ ليس مجرد صورة: توجد واجهة bundles وload_builder وflowbuilder_submit ومكتبة استخراج عقد، ثم تخزين visual_flow_builder_campaign وربط بيانات التنفيذ في messenger_bot/postback. الحزمة موجودة لكن حالة تسجيلها مجهولة. المتحكم يدعم نصًا ووسائط وأزرارًا وQuick Replies، ويحتاج اختبار صلاحية كل نوع على كل قناة.

الحقول وجمع المدخلات والتدفقات الشرطية وWebview وimport/export لديها مسارات فعلية، لكنها تتقاطع مع بوابات إضافات غائبة. تميّز A23/A24 جمع البريد/الهاتف من Quick Reply عن دورة User Input متعددة الأسئلة A22.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| A01 | منشئ Flow مرئي Drag-and-Drop | ADDON_PRESENT | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `load_builder; flowbuilder_submit; plugins/flow_builder/js` | حزم واجهة جاهزة؛ تفعيل 315 غير معلوم |
| A02 | بوت Facebook Messenger | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; send_message_bot_reply` | لا إثبات تشغيل خارجي |
| A03 | بوت Instagram DM وتدفقاته | ADDON_PRESENT | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; media_type=ig; IGADD` | يشمل طلب C الخاص برسائل DM؛ لا يعد مرتين |
| A04 | تشغيل البوت بالكلمات المفتاحية | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; messenger_bot.keywords` | معالجة نصوص؛ ليست intent detection |
| A05 | مطابقة Exact | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; trigger_matching_type=exact` | اختبار تطبيع العربية مطلوب |
| A06 | مطابقة جزئية String Match | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; stripos` | اختبار التشكيل والمسافات |
| A07 | تدفقات شرطية | PARTIALLY_IMPLEMENTED | [Home.php](../../application/controllers/Home.php) — `process_message_condition; check_all_condition; VF load_builder` | المقيّم موجود؛ بوابة project_id=63 والحزمة غير موجودة |
| A08 | رسائل نصية | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `send_message_bot_reply; create_template_action` | اختبار Messenger وInstagram منفصل |
| A09 | رسائل صور | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_image_only; create_template_action` | مراجعة أمان الرفع |
| A10 | رسائل صوت | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_audio_file; create_template_action` | قيود القناة تحتاج اختبار |
| A11 | رسائل فيديو | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_live_video; create_template_action` | اسم الدالة لا يعني بثًا حيًا |
| A12 | إرفاق ملفات | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_general_file; create_template_action` | أنواع وقنوات مقيدة |
| A13 | GIF | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_image_only; gif ضمن الامتدادات` | اختبار الحركة والعرض |
| A14 | Quick Replies | IMPLEMENTED_IN_SOURCE | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `generate_quick_replies` | تختلف القابلية حسب القناة |
| A15 | Persistent Menus | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `publish_persistent_menu; create_persistent_menu_action` | لا تعميم على كل قناة |
| A16 | Postback Buttons | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `create_template_action; messenger_bot_postback` | ربط Postback بالصفحة |
| A17 | URL Buttons | IMPLEMENTED_IN_SOURCE | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; button_type` | صلاحية الروابط واختبار القناة |
| A18 | Phone Buttons | IMPLEMENTED_IN_SOURCE | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; phone_number` | اختبار الهاتف والمنطقة |
| A19 | Carousel وGeneric Templates | IMPLEMENTED_IN_SOURCE | [Flow_builder.php](../../application/libraries/Flow_builder.php) — `get_carousel_item_info; get_button_info` | حدود عناصر القناة |
| A20 | Webview ونماذج الويب | PARTIALLY_IMPLEMENTED | [Webview_builder.php](../../application/controllers/Webview_builder.php) — `get_email; get_phone; get_location; views/webview_builder` | حزمة Connectivity غير موجودة وبعض النماذج موجود |
| A21 | حقول المشترك المخصصة | PARTIALLY_IMPLEMENTED | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `get_subscriber_customfields_data; user_input_custom_fields` | تخزين وعرض موجودان؛ واجهة دورة إدارة الإضافة غير متوفرة |
| A22 | جمع إجابات المستخدم متعدد الخطوات | PARTIALLY_IMPLEMENTED | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `process_user_input; get_user_input_flow_next_question` | جداول user_input_flow_* غير معرفة في SQL الأولي |
| A23 | جمع البريد من Quick Reply | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `is_email; email_info_send_auto_responder` | المزامنة تحتاج مزودًا |
| A24 | جمع الهاتف من Quick Reply | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `is_phone_number; phone_info_auto_responder` | الحصول على الرقم لا يثبت موافقة تسويقية عامة |
| A25 | تقسيم المشتركين والوسوم | IMPLEMENTED_IN_SOURCE | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `ajax_label_insert; bulk_group_assign` | نفس IDs مرجع التقسيم في البث |
| A26 | تصدير واستيراد إعدادات البوت | PARTIALLY_IMPLEMENTED | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `export_bot; import_bot; saved_templates` | بعض الأزرار مقيدة؛ اختبار round-trip ومطابقة IDs |
| A27 | Typing Indicator | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `typing_on_settings; send_message_bot_reply` | قد يطيل تنفيذ الطلب |
| A28 | تأخير الردود | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `send_message_bot_reply; delay_in_reply` | اختبار الزمن والتزامن |
| A29 | Icebreakers | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `get_page_details; ice_breaker_status; ig_ice_breaker_status` | دعم كل قناة يحتاج API test |
| A30 | Default وFallback Replies | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `get_started_welcome_message; no_match_found_reply` | فحص قواعد الأولوية |
| A31 | Bot Error Logs | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `error_log_report; messenger_bot_reply_error_log` | لا تكشف محتويات السجلات |

**التحقق اللاحق المطلوب:** حفظ→إعادة فتح→تصدير/استيراد؛ keywords عربية exact/partial؛ fallback؛ تحميل وسائط؛ custom fields؛ صلاحيات صفحة مختلفة؛ لا API calls ضمن التدقيق.

## B — Facebook Automation

المسار الأساسي تعليق→Webhook مركزي→Comment_automation→رد عام/خاص→تقرير موجود. هناك تصفية keyword، وإخفاء/حذف، وتعليقات مجدولة وقوالب، وحقول auto_like_comment.

Dark Posts/Ads مصنفة UNDETERMINED: وجود post_id عام ليس إثبات استيراد وإدارة تعليقات إعلانات بكل أنواعها. بعض enhancers لها project29 references دون حزمة.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| B01 | الرد التلقائي على تعليق Facebook | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `ajax_autoreply_submit; webhook_callback_main` | Webhook وحقوق الصفحة |
| B02 | Private Reply على التعليقات | IMPLEMENTED_IN_SOURCE | [Fb_rx_login.php](../../application/libraries/Fb_rx_login.php) — `send_private_reply; CA webhook_callback_main` | القيود والموافقة تحتاج تحققًا |
| B03 | تصفية التعليقات بالكلمات | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `webhook_callback_main; trigger_matching_type` | Exact وpartial موجودان |
| B04 | تعليقات Ads أوDark Posts | UNDETERMINED | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `checking_post_id; get_tableid_by_postid` | توجد معالجة post_id عامة؛ لم يثبت مسار Ads/Dark Post خاص |
| B05 | الإعجاب التلقائي بالتعليق | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `webhook_callback_main; auto_like_comment` | يعتمد على صلاحيات API |
| B06 | إدارة وإخفاء وحذف التعليقات | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `delete_single_comment; block_person_from_commenting; hide_comment_after_comment_reply` | اختبار التفويض على كل عملية |
| B07 | تعليقات مجدولة ودورية | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `ajax_autocomment_reply_submit; CJ auto_comment_on_post_orginal` | دورية/serial/random بحسب الحملة |
| B08 | قوالب الردود والتعليقات | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `template_manager; comment_template_manager` | معاينة المتغيرات والعربية |
| B09 | تقارير حملات التعليقات | IMPLEMENTED_IN_SOURCE | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `all_auto_reply_report; download_get_reply_info` | النتائج لا تثبت وصول الرد لكل مستلم |

**التحقق اللاحق المطلوب:** صفحة اختبار وتعليق وقبول/رفض keyword؛ إعادة تسليم نفس event؛ صلاحيات moderation؛ Dark Post مصرح في حساب تجريبي قبل أي وعد.

## C — Instagram Automation

DM والبوت والتدفقات المشتركة مدققة مرة واحدة في A03/A01/A04. وحدتا instagram_bot وinstagram_poster موجودتان، وتعليقات Instagram تقرأ business account المرتبط بصفحة.

الرد الخاص الموسع وmentions وبعض المسارات مشروطة بـinstagram_reply_enhancers. لا يوجد إثبات دعم الحسابات الشخصية أوكل professional types أومسار Instagram Login مستقل.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| C01 | ردود تعليقات Instagram | IMPLEMENTED_IN_SOURCE | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `ajax_autoreply_submit; webhook_callback` | بعض أنواع الردوف الموسعة تتطلب Enhancers |
| C02 | Private Replies من تعليقات Instagram | PARTIALLY_IMPLEMENTED | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `get_private_reply_postbacks; webhook_callback` | توجد معالجات؛ الاختلاف بين template والرد البسيط يحتاج اختبار |
| C03 | كلمات مفتاحية لتعليقات Instagram | IMPLEMENTED_IN_SOURCE | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `webhook_callback; trigger_matching_type` | DM keyword مرجعه A04 |
| C04 | نشر صور Instagram | ADDON_PRESENT | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action` | يستخدم حسابًا مرتبطًا عبر Facebook |
| C05 | جدولة منشورات Instagram | IMPLEMENTED_IN_SOURCE | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action; schedule_time` | تشترك مع مجدول النشر |
| C06 | نشر فيديو Instagram | IMPLEMENTED_IN_SOURCE | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action; image_video_upload_video` | حالة معالجة الفيديو والقيود بحاجة لاختبار |
| C07 | Instagram Analytics | IMPLEMENTED_IN_SOURCE | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `media_insights_modal_data; FB instagram_user_insight` | المقاييس المتاحة API-dependent |
| C08 | أنواع حسابات Instagram والصلاحيات | PARTIALLY_IMPLEMENTED | [Fb_rx_login.php](../../application/libraries/Fb_rx_login.php) — `instagram_account_check_by_id; login_for_user_access_token` | الحساب المرتبط instagram_business_account؛ لا دليل دعم كل الأنواع أو Instagram Login مستقل |

**التحقق اللاحق المطلوب:** تجربة نوع الحساب والإذن والنشر وصورة/فيديو/scheduled وتحديث حالة container؛ اختبار public/private reply ومقاييس insight.

## D — Live Chat

Livechat يستخدم نفس الواجهة للقناتين fb وig، ويحفظ livechat_messages، ويدعم search/filter/canned responses/unread/archive وإرسال Postback. Pusher مسار اختياري وليس دليلًا لتفعيل realtime حاليًا.

assignment وteam_access موجودان كمستهلكات، لكن إدارة Team Member وحزمته وجداول الأساس غائبة. الواجهة المشتركة لا تثبت Inbox يشمل WhatsApp أوSMS أوEmail. أسماء whatsapp_* موروثة لا تغير القناة الفعلية.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| D01 | Messenger Live Chat | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; reply_to_conversation` | لا يتطلب WhatsApp |
| D02 | Instagram Live Chat | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; media_type=ig` | التبديل بين القناتين |
| D03 | سجل المحادثات | IMPLEMENTED_IN_SOURCE | [Home.php](../../application/controllers/Home.php) — `insert_livechat_data; livechat_messages` | سياسة الاحتفاظ غير مكتملة التوثيق |
| D04 | وسوم جهة الاتصال داخل المحادثة | IMPLEMENTED_IN_SOURCE | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `create_label_and_assign; LC get_subscriber_list` | إعادة استخدام تقسيم المشتركين |
| D05 | ردود محفوظة Canned Responses | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `canned_response_list; add_canned_response` | قوالب Postback عبر send_postback_reply أيضًا |
| D06 | إسناد المحادثات | PARTIALLY_IMPLEMENTED | [Home.php](../../application/controllers/Home.php) — `assign_conversation_to_team_member; agent_assign_notifications` | الدوال موجودة لكن حزمة إدارة الفريق وجداولها غائبة |
| D07 | إدارة أعضاء فريق متعددين | ADDON_NOT_FOUND | [Home.php](../../application/controllers/Home.php) — `get_team_member_list; team_members; team_roles` | لا متحكم team_member ضمن الوحدات |
| D08 | البحث في المحادثات | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `search_subscriber; get_conversation_list` | اختبار العربي وأحجام البيانات |
| D09 | تصفية وأرشفة المحادثات | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `get_conversation_list; update_mark_as_action` | يوجد خطر نطاق user_id في عملية التحديث؛ راجع 07 |
| D10 | مؤشرات غير المقروء | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `update_mark_as_action; unseen_count` | اختبار مزامنة المؤشرات |
| D11 | صندوق قنوات موحد شامل | PARTIALLY_IMPLEMENTED | [Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; get_bot_whatsapp_by_phone_number_id` | واجهة FB/IG مع اختيار قناة؛ لا WhatsApp/SMS/Email Inbox شامل |

**التحقق اللاحق المطلوب:** حسابان وصفحتان واختبار كل action/download؛ استكمال tenant channel auth قبل Pusher؛ فحص ownership للحالة؛ اختبار موظف محدود بعد توفير الإضافة.

## E — Social Publishing

النشر يربط حملات facebook_rx_auto_post/cta/slider بمجدول Cron ومكتبات Meta. توجد schedule/repeat/multi-page وRSS وUltrapost. نشر Instagram مدقق تحت C04–C06 ولا يعد ثانية.

WP/YouTube feed موجودان كمصادر مرتبطة بإضافة39؛ ليسا وعدًا بإدارة WordPress أونشر فيديو YouTube. تقرير نجاح publish لا يثبت reach أوconversions. Carousel/Slideshow وGroup APIs تحتاج مراجعة توافق.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| E01 | نشر نصوص Facebook | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | إعداد الحملة من الواجهة |
| E02 | نشر صور Facebook | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | وسائط عامة قابلة للوصول |
| E03 | نشر فيديو Facebook | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | التحقق من معالجة الوسائط |
| E04 | Facebook Multi-image | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; image_url` | اختبار عدد الصور |
| E05 | Facebook Carousel/Slideshow | ADDON_PRESENT | [Ultrapost.php](../../application/modules/ultrapost/controllers/Ultrapost.php) — `carousel_slider_post; carousel_slider_add_post_action; CJ carousel_slider_post` | أنواع API قديمة تحتاج تحققًا |
| E06 | نشر روابط Facebook | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | معاينة الروابط |
| E07 | جدولة منشورات Facebook | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `publish_post; schedule_time; time_zone` | اختبار الزمن |
| E08 | منشورات متكررة | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; repeat_times; time_interval` | لا وعد بتكرار غير محدود |
| E09 | RSS Auto Posting | IMPLEMENTED_IN_SOURCE | [Autoposting.php](../../application/controllers/Autoposting.php) — `settings; add_feed_action; CJ rss_auto_post` | توجد قيود وصول وإضافات لبعض المصادر |
| E10 | النشر إلى عدة صفحات | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; parent_campaign_id; page_ids` | المحصلة تقاس لكل صفحة |
| E11 | YouTube Feed Auto Posting | PARTIALLY_IMPLEMENTED | [Autoposting.php](../../application/controllers/Autoposting.php) — `feed_type; youtube_channel_id; CJ rss_auto_post` | لا توجد حزمة auto_social_sharing المنفصلة |
| E12 | WordPress Feed Auto Posting | PARTIALLY_IMPLEMENTED | [Autoposting.php](../../application/controllers/Autoposting.php) — `feed_type; wordpress_blog_url; CJ rss_auto_post` | ليس نشرًا كاملًا لإدارة WordPress |
| E13 | تقارير النشر الاجتماعي | IMPLEMENTED_IN_SOURCE | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `ajax_get_text_report; facebook_rx_auto_post` | حالة النشر ليست تلقائيًا reach/conversions |
| E14 | أداء المنشور التفصيلي | PARTIALLY_IMPLEMENTED | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `get_post_analytics; FB insights` | توجد قياسات؛ تغطية كل نوع منشور غير مؤكدة |

**التحقق اللاحق المطلوب:** نص/صورة/فيديو/رابط وصفحات متعددة وموعد ومنطقة زمنية؛ معالجة انقطاع cron وتكراره؛ التمييز بين قبول API ونشر متاح فعليًا.

## F — Marketing Campaigns

توجد حملات وإرسال OTN/RCN وتقارير ومستلمون ووسوم وقوالب وجدولة، لكن بعض بوابات الإتاحة والإضافات لا تتوفر محليًا. F01/F10/F03 ليست ضمان توفر بث حر.

تستخدم بعض دوال Livechat ثوابت 1430 و10050 دقيقة وتسميات tags. تلك سياسة مشفرة في النسخة وليست مراجعة لسياسات Meta الحالية. opt-in/token/permission لا يمثل موافقة عامة لكل قناة.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| F01 | Messenger Broadcasting | PARTIALLY_IMPLEMENTED | [Cron_job.php](../../application/controllers/Cron_job.php) — `subscriber_broadcaster; braodcast_message` | المحرك موجود؛ بوابات الباقة والإضافة تحتاج تحققًا |
| F02 | One-Time Notifications | IMPLEMENTED_IN_SOURCE | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; MB otn_subscribers` | وجود الشيفرة لا يثبت توفر المنتج API حاليًا |
| F03 | Recurring Notifications | PARTIALLY_IMPLEMENTED | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `rcn_subscriber_bulk_broadcast_add_action; H recurring_notification_exist` | الحزمة المنفصلة غير موجودة |
| F04 | جدولة حملات Messenger | IMPLEMENTED_IN_SOURCE | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; schedule_time` | الدفع/الإرسال حسب حالة الحملة |
| F05 | استهداف شرائح المشتركين | IMPLEMENTED_IN_SOURCE | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; label_ids; excluded_label_ids` | A25 هو إدارة الوسوم نفسها |
| F06 | قوالب البث | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `otn_create_template_action; rcn_template_manager` | دعم كل نوع حسب القناة |
| F07 | تقارير إرسال Messenger | IMPLEMENTED_IN_SOURCE | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_campaign_sent_status; rcn_campaign_sent_status` | ميّز الإرسال عن القراءة |
| F08 | قيود نافذة الرسائل وMessage Tags | IMPLEMENTED_IN_SOURCE | [Livechat.php](../../application/controllers/Livechat.php) — `reply_to_conversation; NON_PROMOTIONAL; HUMAN_AGENT` | مؤقتات 1430/10050 دقيقة بالشيفرة؛ لا تعد سياسة حالية مؤكدة |
| F09 | موافقة OTN/RCN وإلغاء الاشتراك | IMPLEMENTED_IN_SOURCE | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `otn_subscribers; rcn_subscribers; permission` | يلزم اختبار token/opt-out ومنع إعادة الإرسال |
| F10 | تسلسلات Messenger Drip | PARTIALLY_IMPLEMENTED | [Cron_job.php](../../application/controllers/Cron_job.php) — `sequence_message_broadcast_hourly; sequence_message_broadcast_daily` | منطق إرسال مع بوابة إضافة غير موجودة |

**التحقق اللاحق المطلوب:** اختبار نافذة ورسالة وopt-in ثم opt-out وtoken expiry وإعادة محاولة؛ مراجعة أهلية حساب المنصة والإضافة والقيود الحالية.

## G — SMS Marketing

الحملات والاتصالات وCSV والجروبات وإعدادات المزودين وGET/POST custom adapters موجودة. G02/G03 يعاد استخدامهما للبريد دون عد مزدوج.

تقارير Submitted/delivery_id لا تثبت DLR نهائيًا. Clickatell platform يرسل unicode=1، بينما Nexmo adapter يرسل type=text، وMSG91 يحوي country/route ثابتين، وAfrica's Talking sandbox HTTP. لا وعد SMS عربي شامل لكل مزود.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| G01 | إنشاء حملات SMS | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_sms_campaign; create_sms_campaign_action` | لا ضمان تسليم شبكة |
| G02 | CSV لجهات اتصال SMS والبريد | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `ajax_import_csv_files; import_contact_action_ajax` | خاصية واحدة مشتركة؛ H يعيد استخدامها |
| G03 | تقسيم جهات اتصال SMS والبريد | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `contact_group_list; add_contact_group_action` | contact_type_id والجمهور المستورد |
| G04 | جدولة SMS | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `sms_sending_command; SE create_sms_campaign_action` | توقيت ودفعات |
| G05 | تقارير إرسال SMS | PARTIALLY_IMPLEMENTED | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `ajax_get_sms_campaign_report_info; sms_sending_campaign_send` | delivery_id أوSubmitted ليس Delivery Receipt نهائيًا |
| G06 | Twilio SMS | IMPLEMENTED_IN_SOURCE | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `twilio_sms_sent` | اختبار نسخة SDK ومصادقة الحساب |
| G07 | Plivo SMS | IMPLEMENTED_IN_SOURCE | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `plivo_sms_send` | API credentials |
| G08 | Vonage/Nexmo SMS | IMPLEMENTED_IN_SOURCE | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `nexmo_send_sms` | اسم Nexmo؛ URL ونوع encoding قديمان |
| G09 | Clickatell SMS | IMPLEMENTED_IN_SOURCE | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `clickatell_send_sms; clickatell_platform_send_sms` | اختيار منصة صحيحة؛ أحد المسارات HTTP |
| G10 | MSG91 SMS | IMPLEMENTED_IN_SOURCE | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `msg91_send_sms` | country=91 وroute=4 ثابتان؛ لا يفترض توافق مصر |
| G11 | Africa's Talking SMS | PARTIALLY_IMPLEMENTED | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `africastalking_send_sms` | عنوان sandbox ثابت عبر HTTP؛ يحتاج معالجة واختبار |
| G12 | Custom HTTP SMS GET/POST | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_custom_api; create_custom_api_post_method; SMS send_sms` | قوالب URL/POST وليست بوابة REST عامة |
| G13 | SMS عربي Unicode | PARTIALLY_IMPLEMENTED | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `clickatell_platform_send_sms unicode=1; nexmo_send_sms type=text` | لا دعم Unicode موحد؛ اختبار UCS-2/segments لكل مزود |
| G14 | SMS Sequence Campaigns | ADDON_NOT_FOUND | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `get_sequence_campaigns; bulk_sequence_campaign_assign; H sms_email_drip_campaigner_exist` | مراجع sms_email_sequence في الكود؛ لا حزمة الإنشاء/المجدول الكاملة |
| G15 | إعداد اتصال ومصادقة SMS | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `sms_api_lists; ajax_create_sms_api; send_test_sms` | أسماء حقول فقط؛ لا قيم مفاتيح ضمن التقارير |
| G16 | مزودو SMS إضافيون | IMPLEMENTED_IN_SOURCE | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `textlocal_in; infobip_send_sms; semysms_send_sms; send_sms_route` | ليست شهادة توافق حالي أو ملاءمة إقليمية |

**التحقق اللاحق المطلوب:** مقاطع عربي/لاتيني وencoding وDLR وأخطاء المصادقة والرصيد والرقم؛ لا تشغيل فعلي الآن؛ Email/SMS Sequence يحتاج الحزمة الغائبة40.

## H — Email Marketing

إعداد SMTP/SendGrid/Mailgun/Mandrill وحملات وقوالب ومحرر drag-and-drop وopen/click tracking وunsubscribe وتقارير موجودة. CSV والجروبات مرجعهما G02/G03.

تكاملات Mailchimp/ActiveCampaign/Sendinblue/Mautic/Acelle قائمة autoresponders خارجية، وليست نسخًا من منتجاتها. لم يوجد bounce receiver/suppression pipeline. Open pixel ليس إثبات قراءة إنسانية.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| H01 | إنشاء حملات Email | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_email_campaign; create_email_campaign_action` | مصدر المستلمين الأساسي أوالمستورد |
| H02 | إدارة قوالب البريد | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_templates_list; save_template; view_template` | مراجعة HTML والمتغيرات |
| H03 | Drag-and-Drop Email Editor | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `drag_drop_email_template; plugins/email-template-builder` | اختبار قوالب عملاء البريد |
| H04 | SMTP | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `smtp_config; ajax_save_smtp_api; H _email_send_function` | TLS ومصادقة مزود البريد |
| H05 | SendGrid | IMPLEMENTED_IN_SOURCE | [Email_manager.php](../../application/libraries/Email_manager.php) — `sendgrid_email_send; SE sendgrid_api_config` | آلية المستخدم/كلمة المرور تتطلب مراجعة API الحالية |
| H06 | Mailgun | IMPLEMENTED_IN_SOURCE | [Email_manager.php](../../application/libraries/Email_manager.php) — `mailgun_email_send; SE mailgun_api_config` | تحقق النطاق والمنطقة |
| H07 | Mandrill | IMPLEMENTED_IN_SOURCE | [Email_manager.php](../../application/libraries/Email_manager.php) — `send_madrill_email; SE mandrill_api_config` | يتطلب حساب خدمة |
| H08 | جدولة حملات Email | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `email_sending_command` | الدفعات وفق الإعداد |
| H09 | Email Sequences | ADDON_NOT_FOUND | [Home.php](../../application/controllers/Home.php) — `sms_email_drip_campaigner_exist; SE get_sequence_campaigns` | ربط تسلسل لا يثبت وجود إدارة وتنفيذ كاملين |
| H10 | Open Tracking | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `checking_open_rate; email_sending_campaign_send` | صور tracking قد تمنع أوتجلب آليًا؛ لا تساوي قراءة مؤكدة |
| H11 | Click Tracking | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `checking_click_rate; email_clickrate_links_backup` | اختبار redirect والعزل |
| H12 | Unsubscribe Email | IMPLEMENTED_IN_SOURCE | [Home.php](../../application/controllers/Home.php) — `unsubscribe; unsubscribe_action; sms_email_contacts.unsubscribed` | اختبار روابط وسيناريوهات إعادة الاستيراد |
| H13 | Bounce Handling | NOT_FOUND | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `بحث bounce/bounced في المتحكمات وEmail_manager دون معالج` | يلزم مزامنة callbacks وsuppression list |
| H14 | تقارير حملات Email | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_campaign_reports; ajax_get_email_campaign_report_info` | لا تعني Inbox placement |
| H15 | Mailchimp Autoresponder | IMPLEMENTED_IN_SOURCE | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `mailchimp_list; H send_email_to_autoresponder` | تكامل قوائم وليس استضافة Mailchimp |
| H16 | ActiveCampaign Autoresponder | IMPLEMENTED_IN_SOURCE | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `activecampaign_list; H send_email_to_autoresponder` | اختبار حقول وتاغات |
| H17 | Brevo/Sendinblue Autoresponder | IMPLEMENTED_IN_SOURCE | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `sendinblue_list; H send_email_to_autoresponder` | لا تستنتج دعم جميع واجهات Brevo الحديثة |
| H18 | Mautic Autoresponder | IMPLEMENTED_IN_SOURCE | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `mautic_list; H send_email_to_autoresponder` | المصادقة والإصدار |
| H19 | Acelle Autoresponder | IMPLEMENTED_IN_SOURCE | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `acelle_list; H send_email_to_autoresponder` | تنسيق URL وإصدار الخدمة |

**التحقق اللاحق المطلوب:** render عربي بكل عميل بريد، unsubscribe وإعادة الاستيراد، click redirect، SMTP/API auth، bounce handling، sequence بعد الإضافة؛ اختبار deliverability منفصل.

## I — E-commerce

توجد متاجر متعددة ومنتجات وخصائص أساسية وصور وكوبونات وسلة وcheckout وطلبات وعناوين واستلام وشحن وإشعارات ومتجر browser وQR وتنسيق thermal print.

Variation pricing/digital/review/WooCommerce/related products تتضمن مستهلكات وبوابات إضافات؛ لا تحولها إلى ميزات مكتملة. COD وmanual موجودان. Thermal هو CSS/طباعة متصفح وليس hardware integration مثبتًا. WhatsApp order settings مدققة في W11، لا Cloud API.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| I01 | إنشاء وإدارة متجر | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `add_store; add_store_action; edit_store_action` | قناة وصول عامة مستقلة عن Messenger |
| I02 | متاجر متعددة للمستخدم | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `store_list; add_store_action; _check_usage(268)` | العدد وفق الباقة؛ لا غير محدود |
| I03 | إدارة المنتجات | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `add_product_action; edit_product_action; delete_product` | الحالة والمخزون |
| I04 | تصنيفات المنتجات | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `ajax_create_new_category; sort_category` | ترتيب وتصنيف |
| I05 | خصائص واختيارات المنتج | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `ajax_create_new_attribute; ecommerce_attribute` | السعر المتغير ميزة منفصلة I06 |
| I06 | سعر بحسب Variation | PARTIALLY_IMPLEMENTED | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `calculate_price_basedon_attribute; ecommerce_attribute_product_price` | حزمة وجدول سعر الخاصية غير موجودين في الأساس |
| I07 | صور المنتجات والمتجر | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `upload_product_thumb; upload_featured_image; upload_store_logo` | يلزم مراجعة أمان الملفات |
| I08 | كوبونات متجر | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `check_coupon; apply_coupon; add_coupon_action` | ليست خصومات اشتراك SaaS |
| I09 | Shopping Cart | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `cart; add_to_cart_modal; update_cart_item` | إعادة حساب الأسعار في الخادم |
| I10 | Checkout | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `proceed_checkout; valid_cart_data` | فحص العبث بالمبلغ والمعرفات |
| I11 | إدارة الطلبات | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `order_list; change_payment_status` | التحقق من المالك والصلاحيات |
| I12 | سجلات العملاء والعناوين | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `customer_list; save_address; get_buyer_profile` | بيانات خاصة لا تنشر في أمثلة |
| I13 | Store Pickup وPickup Points | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `apply_store_pickup; pickup_point_list` | ساعات وفروع الاستلام |
| I14 | إعداد الشحن والتوصيل | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `appearance_settings_action; ecommerce_store.shipping_charge` | رسوم وإعدادات؛ لا تكامل شركة توصيل مؤكد |
| I15 | إشعارات الطلبات | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `confirmation_message_sender; notification_settings_action` | قنوات حسب المزود وإعداد المتجر |
| I16 | Abandoned Cart لمتجر ChatPion | IMPLEMENTED_IN_SOURCE | [Cron_job.php](../../application/controllers/Cron_job.php) — `ecommerce_abandoned_cart_reminder; EC reminder_settings_action` | يفصل عن WooCommerce I25 |
| I17 | واجهة متجر عبر المتصفح | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `store; product; guest_login_action` | مسارات مبنية على الموقع الرئيسي |
| I18 | ربط المتجر بـMessenger | IMPLEMENTED_IN_SOURCE | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `get_store_list; get_storewise_products; EC store` | تدفق ومنتجات وروابط |
| I19 | QR للمتجر والطلب | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `qr_code; qr_code_action; download_qr` | يؤدي إلى واجهة متجر؛ ليس نظام POS كامل |
| I20 | قائمة مطعم وطلب طعام | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `store_type; business_hour_settings_action; pickup_point_list` | يناسب تدفق القوائم والطلبات دون ضمان POS |
| I21 | طباعة إيصال Thermal عبر المتصفح | IMPLEMENTED_IN_SOURCE | [bare-theme.php](../../application/views/ecommerce/bare-theme.php) — `print-options; window.frames.print; assets/css/print` | تنسيق CSS وطباعة متصفح؛ لا بروتوكول ESC/POS أوتكامل جهاز مثبت |
| I22 | منتجات رقمية وتنزيل | PARTIALLY_IMPLEMENTED | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `download_item; digital_product_orders; ecommerce_digital_product gate` | مسار موجود؛ الحزمة غير موجودة وتحتاج entitlement |
| I23 | تقييم وتعليق منتج | PARTIALLY_IMPLEMENTED | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `comment; review; ecommerce_review_comment_exist` | جداول ecommerce_product_review/comment غير موجودة في المخطط الأولي |
| I24 | WooCommerce Synchronization | ADDON_NOT_FOUND | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `woocommerce_product_id; woocommerce_config_id` | حقول عرض وارتباط لا تثبت تنفيذ مزامنة كاملة |
| I25 | WooCommerce Cart Recovery | ADDON_NOT_FOUND | [Cron_job.php](../../application/controllers/Cron_job.php) — `woocommerce_abandoned_cart_reminder; woocommerce_drip_campaign_webhook_call` | مستهلكات وجداول غير متاحة |
| I26 | بوابات دفع المتجر | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `stripe_action; paypal_action; payment_accounts_action` | التوفر التجاري في مصر لكل مزود يحتاج تحققًا |
| I27 | Cash on Delivery | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `cod_payment` | حالة الطلب والسداد عند التسليم |
| I28 | Manual/Bank Payment للمتجر | IMPLEMENTED_IN_SOURCE | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `manual_payment; manual_payment_upload_file` | مراجعة مرفقات وموافقة المدير |
| I29 | مبيعات وإيراد المتجر | IMPLEMENTED_IN_SOURCE | [Dashboard.php](../../application/controllers/Dashboard.php) — `get_ecommerce_div_content; EC order_list_data` | التعريف المالي وفق paid/status؛ لا يعد نظام محاسبة |
| I30 | Related/Upsell/Downsell Products | PARTIALLY_IMPLEMENTED | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `get_product_list; is_ecommerce_related_product_exist; related_product_ids` | حقول ومسارات؛ حزمة التسجيل غير موجودة |

**التحقق اللاحق المطلوب:** checkout والتلاعب بالأسعار ومعرف متجر آخر، كوبون وانتهاء ومخزون، دفع sandbox وcallback مكرر، إشعارات، تنزيل رقمي مفوض وطباعة عربية.

## J — Analytics

توجد dashboard ومشتركون وMessenger/Page insights ورسوم وتواريخ وتصدير وإيرادات. بعض دوال Dashboard اسمها demo_data/subscribers_demo_data؛ لا تستخدمها كبيانات حقيقية أوأرقام تسويق.

Instagram insights مرجعه C07؛ التعليقات B09؛ النشر E13/E14؛ البث F07؛ SMS G05؛ Email H14؛ متجر I29. هذه إحالات لميزات مدققة وليست صفوفًا إضافية.

| ID | القدرة | Code Status | الدليل | الحد |
| --- | --- | --- | --- | --- |
| J01 | مؤشرات Dashboard | IMPLEMENTED_IN_SOURCE | [Dashboard.php](../../application/controllers/Dashboard.php) — `index; get_first_div_content` | توجد أيضًا دوال demo؛ تستخدم بيانات حقيقية فقط في العرض التجاري |
| J02 | تحليلات المشتركين والنمو | IMPLEMENTED_IN_SOURCE | [Dashboard.php](../../application/controllers/Dashboard.php) — `index; SM bot_subscribers_data; messenger_bot_subscriber` | لا تستخدم demo_data كقياس منتج |
| J03 | Messenger Analytics | IMPLEMENTED_IN_SOURCE | [Messenger_bot_analytics.php](../../application/controllers/Messenger_bot_analytics.php) — `result` | module 260 |
| J04 | Facebook Page Analytics | IMPLEMENTED_IN_SOURCE | [Page_analytics.php](../../application/controllers/Page_analytics.php) — `analytics; Facebook_page_insight` | مقاييس API قديمة بحاجة مراجعة |
| J05 | تصدير بيانات وتقارير | IMPLEMENTED_IN_SOURCE | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `download_result; EC download_csv; CA download_get_reply_info` | التغطية لكل شاشة؛ ليس report builder عامًا |
| J06 | Date Filters | IMPLEMENTED_IN_SOURCE | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_campaign_reports; DA index` | اختبار timezone ونطاق التاريخ |
| J07 | Charts وGraphs | IMPLEMENTED_IN_SOURCE | [Dashboard.php](../../application/controllers/Dashboard.php) — `index; assets/modules; plugins/apexcharts` | مكتبات الرسم لا تثبت دقة المؤشرات |
| J08 | إيرادات اشتراكات المنصة | IMPLEMENTED_IN_SOURCE | [Payment.php](../../application/controllers/Payment.php) — `earning_summary; transaction_log` | مختلف عن إيرادات المتجر I29 |

**التحقق اللاحق المطلوب:** مطابقة كل metric مع query وحالات sent/paid/processed والتوقيت، ثم عينة محاسبية يدوية وCSV؛ لا performance numbers أوتوقع إيرادات من الشيفرة.

## حدود مراجعة الواجهة

وجود ملفات views أوCSS أوicons لا يثبت مسار كتابة/تنفيذ/تقرير. فُحصت handlers وقراءة الجداول والبوابات عند الإمكان. الحزم المبنية مسبقًا لا تساوي مشروع مصدر frontend قابلًا لإعادة البناء. الجداول الأولية لا تعكس قاعدة إنتاج، ولا توجد نتائج success مصطنعة في هذا التقرير.
