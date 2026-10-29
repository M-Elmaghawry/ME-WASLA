# 04 — التكاملات وواجهات API والاعتمادات

الفصل الأساسي: وجود adapter أوSDK ≠ تهيئة credentials ≠ صلاحيات حساب الخدمة ≠ اختبار ناجح. لم يُستدعَ أي API خاص بالتطبيق. أسماء حقول الأسرار مذكورة لتحديد مكان الإعداد فقط؛ القيم والصفوف غير معروضة.

## قنوات التكامل الفعلية

| الخدمة | الأدلة الدقيقة | المتطلبات والحدود | التحقق المتبقي |
| --- | --- | --- | --- |
| Facebook/Instagram | [Fb_rx_login](../../application/libraries/Fb_rx_login.php)::login_for_user_access_token وinstagram_account_check_by_id؛ [Social_accounts](../../application/controllers/Social_accounts.php)، [Social_apps](../../application/controllers/Social_apps.php) | تطبيق Meta وصفحات وتوكنات وصلاحيات؛ facebook_rx_config وfacebook_rx_fb_user_info وfacebook_rx_fb_page_info | app review، نوع الحساب، تجديد/إلغاء token، سيناريوهات الأخطاء |
| Webhook FB/IG | [Home](../../application/controllers/Home.php)::central_webhook_callback → Messenger_bot::webhook_callback_main / Comment_automation::webhook_callback_main / Instagram_reply::webhook_callback | عنوان عام وتحقق اشتراك وcURL داخلي؛ معالجة event حسب النوع | signature validation وإعادة المحاولة والتكرار وتسليم كل event |
| Google/Facebook login | Home::google_login_back/facebook_login_back وGoogle_login/Fb_rx_login | OAuth callback وإعداد login_config | state/session binding وربط حساب موجود والتعامل مع رفض الإذن |
| Pusher | [Ci_pusher](../../application/libraries/Ci_pusher.php)، [pusher.php](../../application/config/pusher.php)، Home::insert_livechat_data | إعدادات أساسية فارغة محليًا؛ أحداث livechat_channel/livechat_event | عزل private channels قبل تفعيله؛ لا تكتفِ بفلترة المتصفح |
| SMS providers | [Sms_manager](../../application/libraries/Sms_manager.php)::send_sms؛ [Sms_email_manager](../../application/controllers/Sms_email_manager.php)::ajax_create_sms_api | sms_api_config ومصادقة مزود وإعداد sender/country/encoding | إرسال تجريبي مصرح لاحقًا؛ DLR ودعم العربية لكل مزود |
| HTTP SMS custom | Sms_email_manager::create_custom_api/create_custom_api_post_method وSms_manager فروع custom/custom_post | URL أوPOST mapping؛ بعض النتائج تعد أي body غير فارغ Submitted | فحص الحالة والمعنى وليس طول الاستجابة، ومنع SSRF |
| SMTP | Sms_email_manager::smtp_config وHome::_email_send_function/_mail_sender | email_smtp_config/email_config وإعداد الإدارة | TLS وSPF/DKIM/DMARC وإرسال محدود واختبار unsubscribe؛ لم تفحص DNS |
| SendGrid | [Email_manager](../../application/libraries/Email_manager.php)::sendgrid_email_send | email_sendgrid_config؛ adapter بالصياغة القديمة | مصادقة API ومرفقات وأخطاء فعلية |
| Mailgun | Email_manager::mailgun_email_send | email_mailgun_config | domain/region/auth وحدود الحساب |
| Mandrill | Email_manager::send_madrill_email ومكتبات Mandrill | email_mandrill_config | صلاحيات الحساب ونتيجة الإرسال |
| Autoresponders | [Email_auto_responder_integration](../../application/controllers/Email_auto_responder_integration.php)::mailchimp_list/activecampaign_list/sendinblue_list/mautic_list/acelle_list؛ Home::send_email_to_autoresponder | APIs قوائم وتسويق خارجية؛ Sendinblue اسم legacy لـBrevo | تحقق كل provider وإصداره، opt-in والحقول والوسوم؛ لا ادعاء إدارة كل خدماته |
| OpenAI | [Integration](../../application/controllers/Integration.php)::open_ai_api_credentials_action و[Openai_api](../../application/libraries/Openai_api.php)::open_ai_completion | open_ai_config + AI addon/module + حساب خدمة | [التفاصيل والحدود](05-ai-and-whatsapp-audit.md) |
| RSS/YouTube/WordPress feeds | [Autoposting](../../application/controllers/Autoposting.php)::add_feed_action/create_campaign، Cron_job::rss_auto_post، Rss_feed | URL feed وCron؛ بوابة project39 لبعض المسارات | مطابقة المصدر والوقت وعدم التكرار؛ ليس YouTube publishing |
| WordPress self-hosted | [Wordpress_self_hosted](../../application/libraries/Wordpress_self_hosted.php)، wordpress_config_self_hosted | adapter وإعدادات؛ لا توسيع إلى CMS sync كامل دون تتبع | المصادقة والإضافة الخارجية ومسارات الاستخدام |
| Vendor updater/licensing | [Update_system](../../application/controllers/Update_system.php)::initialize_update/addon_initialize_update، Home::addon_credential_check | خدمة مورد وتراخيص؛ غير مستدعاة في التدقيق | entitlement والتوافق ومراجعة files/SQL وbackup |

## صلاحيات Meta ونوع الحساب

تطلب `Fb_rx_login::login_for_user_access_token()` أسماء مثل `pages_manage_posts`, `pages_manage_engagement`, `pages_manage_metadata`, `pages_read_engagement`, `pages_show_list`, `pages_messaging`, `read_insights`, `business_management`، ومع علم Instagram: `instagram_basic`, `instagram_manage_comments`, `instagram_manage_insights`, `instagram_content_publish`, `instagram_manage_messages`.

الدليل مسار Facebook Login وربط `instagram_business_account` بالصفحة. لا دليل على استيراد كل أنواع حساب Instagram أوعلى Instagram Login مستقل دون Facebook. توجد إصدارات Graph مختلفة، منها v10.0/v18.0 في المكتبة وv2.6 في دوال Home. هذه **ملاحظات شيفرة**، وليست إقرارًا بأن permissions أوversions أونافذة الرسائل متاحة حاليًا. يلزم مطابقة الوثائق الحالية للمنصة وقت الاختبار، دون توسيع صلاحيات حساب إنتاج أثناء هذا التدقيق.

## بوابات الدفع

اشتراك المنصة: [Payment](../../application/controllers/Payment.php)::payment_button و[Stripe_action](../../application/controllers/Stripe_action.php) و[Paypal_ipn](../../application/controllers/Paypal_ipn.php)، باستخدام payment_config وtransaction_history. المتجر: [Ecommerce](../../application/controllers/Ecommerce.php) باستخدام ecommerce_config وecommerce_cart. اسم Stripe_action يشمل بوابات متعددة.

| البوابة | دليل التنفيذ | نقاط تحتاج اختبارًا |
| --- | --- | --- |
| PayPal | Ecommerce::paypal_action/paypal_action_main، Paypal_ipn؛ Paypal_class* | تحقق IPN وreceiver/amount/currency وتكرار callback؛ recurring في اشتراك المنصة |
| Stripe | Ecommerce::stripe_action، Stripe_action::index، Stripe_class* | طريقة التحصيل وإصدار SDK والتحقق المستقل من السداد |
| Razorpay | Ecommerce/Stripe_action::razorpay_action | signature ومبلغ ومعاملة |
| Paystack | Ecommerce/Stripe_action::paystack_action | reference verification ومنع التكرار |
| Mollie | Ecommerce/Stripe_action::mollie_action | حالة الدفع server-side |
| MercadoPago | Ecommerce/Stripe_action::mercadopago_action | بلد/عملة وتوكن وstatus |
| SSLCommerz | sslcommerz_action/sslcommerz_success | validation endpoint وحالات fail |
| SenangPay | senangpay_action | HMAC موجود؛ يلزم مراجعة التحقق inbound لا الاكتفاء بالتوقيع outbound |
| Instamojo | instamojo_action/instamojo_success | lookup والتحقق من المبلغ |
| Xendit | xendit_action/xendit_success/xendit_fail | callback/auth/idempotency |
| Paymaya | paymaya_action/paymaya_success | sandbox/live والتحقق |
| ToyyibPay | toyyibpay_action/toyyibpay_success | bill/status ومعاملة |
| MyFatoorah | myfatoorah_action/myfatoorah_success | InvoiceStatus/transactions من API؛ لا يعد مولد فواتير SaaS مستقلًا |
| COD/Manual | Ecommerce::cod_payment/manual_payment؛ Payment::manual_payment_approve | إجراءات تشغيلية ومرفقات وتفويض؛ ليس تحصيلًا آليًا |

لا توجد مراجعة لأهلية تاجر مصري أوعملات التسوية أوترخيص كل مزود؛ لا يصح تسويق «كل البوابات تعمل في مصر». ولم تُفحص بوابة مصرية إضافية مثل Paymob أوFawry كتكامل جاهز؛ لا دليل تطبيقي متكامل ضمن المحولات المعروفة. الحاجة إلى مزود محلي قرار تطوير وتحقق تجاري لاحق.

## API module والموصلات الغائبة

[Native_api](../../application/controllers/Native_api.php)::get_api_key/get_api_action يولد ويخزن مفتاحًا. لا يوجد Api.php في المتحكمات أوالوحدات الحالية رغم رابط api/doc داخل documentation. `plugins/api` أصول عرض وليست REST backend. لم توجد وحدات تنفيذ لإدارة Google Sheets أوGoogle Contacts أوHTTP API Integration العام. وجود Google SDK أوCustom SMS API لا يثبت تلك الوظائف. راجع L01–L04 في المصفوفة.

## الاعتمادات المقفلة

المصدر [composer.lock](../../composer.lock)، وعدد حزم packages **14**. لا تعني الأرقام أن SDKs المضمنة الأخرى محدثة أوأنها متوافقة.

| الحزمة | الإصدار |
| --- | --- |
| guzzlehttp/guzzle | 7.8.1 |
| guzzlehttp/promises | 2.0.2 |
| guzzlehttp/psr7 | 2.6.2 |
| paragonie/random_compat | v9.99.100 |
| paragonie/sodium_compat | v1.20.0 |
| psr/http-client | 1.0.3 |
| psr/http-factory | 1.0.2 |
| psr/http-message | 2.0 |
| psr/log | 3.0.0 |
| pusher/pusher-php-server | 7.2.3 |
| ralouphie/getallheaders | 3.0.3 |
| symfony/deprecation-contracts | v3.4.0 |
| symfony/polyfill-mbstring | v1.28.0 |
| symfony/var-dumper | v6.4.0 |

لا ملف frontend package.json جذري لإعادة بناء Flow Builder؛ توجد bundles وmaps فقط. مجلدات SDK المضمنة ليست كلها تحت القفل الجذري. الإصدارات المعلنة التي أمكن تحديدها نصيًا: Facebook SDK **5.2.0** في `application/libraries/Facebook/Facebook.php::VERSION`، وStripe SDK **1.18.0** في `application/libraries/Stripe/lib/Stripe/Stripe.php::VERSION`، وMercadoPago **2.2.1** في `application/libraries/mercadopago/mercadopago/dx-php/src/MercadoPago/Version.php`. لا تعني هذه الثوابت إثبات الحزمة التي استدعيت في Runtime. Google/Twilio/Mandrill وDoctrine المتداخل تحتاج جرد إصدار أدق عند اعتمادها؛ بعض composer.json المتداخلة بلا version صريح. لا تمنحها إصدار حزمة Composer الجذرية لمجرد تشابه الاسم. لم يُشغل composer audit أوفحص CVE، ولا توجد نتيجة «خالٍ من الثغرات».

## مقارنة بالمراجع الرسمية

| المرجع العام | المقارنة المحلية |
| --- | --- |
| [صفحة ChatPion](https://xeroneit.net/portfolio/chatpion-best-multichannel-marketing-application-white-label) تعرض FB/IG bot، متجرًا، حملات، نشرًا وSaaS | توجد مسارات محلية لهذه العائلات؛ لا يثبت الإعلان التفعيل أوالتطابق الكامل، والإصداران مختلفان |
| الصفحة نفسها تصف متطلبات PHP واسعة وMySQL 5.x | القفل المحلي يفرض PHP 8.1 فأعلى، والحد الأدنى الدقيق للقاعدة غير محسوم |
| [Conditional Reply](https://xeroneit.net/portfolio/visual-flow-builder-conditional-reply-chatpion-add-on) | مقيّم شروط في core وبوابة إضافة؛ حزمة مستقلة غائبة |
| [WhatsApp Order Send](https://xeroneit.net/portfolio/whatsapp-e-commerce-order-send-button-chatpion-add-on) | وصف المورد لزر تفاصيل طلب؛ محليًا إعدادات وبقايا دون مسار مكتمل، وليس Cloud API |
| [API Documentation](https://xeroneit.net/portfolio/chatpion-api-documentation) | يصف إضافة API ذات قيد إداري؛ backend الإضافة غير موجود محليًا |

فُتح رابط الدليل المستضاف من صفحة المنتج لكنه لم يُرجع محتوى قابلًا للقراءة في أداة التصفح؛ لم يُستخدم دليلًا. البديل المحلي `documentation/*.html` متاح، ويحتوي صورًا ووصفًا لا يحلان محل تتبع الشيفرة. لم تستخدم تعليقات العملاء أوبيانات الدخول التجريبية في الاستنتاجات.
