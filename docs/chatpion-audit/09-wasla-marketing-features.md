# 09 — خريطة قدرات وصلة AI والموقع والتسويق

هذا **دفتر تحرير داخلي** مبني على الشيفرة، وليس موافقة نشر. يوجد 149 صفًا مصنفًا CANDIDATE_AFTER_TESTING؛ الكتيب أدناه يغطيها كلها بمعرفاتها. لا توجد قدرة جاهزة الآن وفق اختبار Runtime. الأولوية العامة لإصلاحات [07](07-security-and-readiness.md)، ثم التراخيص والإعداد والتشغيل. لا testimonials أوأرقام أداء أوضمان مبيعات أوأسعار مقترحة.

## ما يصلح مرشحًا للموقع بعد الاختبار

العائلات المرشحة: بوت Messenger، وظائف bot/DM وFlow حسب حزمها وصلاحياتها، ردود التعليقات، Live Chat لـFacebook وInstagram، جهات اتصال وlabels، نشر وجدولة، حملات SMS/Email مع مزودين، متجر متصفح/QR، COD وmanual، تقارير، وعربية/RTL. AI يقتصر على ردود نصية موجهة بتعليمات؛ لا وعد Agents أوRAG أوذاكرة كاملة.

- **تفعيل APIs:** META وSMS وMAIL/PAY وAI وPusher/RSS يحتاج حسابًا وصلاحيات وإعدادًا واختبارًا؛ الاسم التجاري لمزود لا يعني دعمه في كل بلد.
- **حزم موجودة تتطلب تفعيلًا:** الحزم الثماني في 03، مع استحقاق/registration وmodule access غير معلوم.
- **حزم غير متاحة:** الـ23 حزمة الغائبة من catalog الطلب موضحة في 03؛ لا تعلن واجهتها لمجرد وجود hooks.
- **تطوير جديد/استكمال:** WhatsApp Business، RAG/Agents/AI metering، فواتير/كوبونات SaaS، custom domains، bounce pipeline، وعزل وأمن المنتج.
- **تعليق الإعلان:** كل DO_NOT_ADVERTISE_YET، وخصوصًا WhatsApp Inbox، unified omnichannel inbox، Dark Posts غير المحسومة، ومزايا addon لم تختبر.

## مجموعات الصفحة الرئيسية المقترحة

| المجموعة المقترحة | الأدلة | صياغة محافظة بعد التحقق |
| --- | --- | --- |
| محادثات وردود منظمة | A02/A04/A08–A19، D01–D05 | ردود وسيناريوهات Messenger وInstagram بالقنوات المدعومة |
| نمو جمهور وإدارة تعليقات | A23–A25، B01–B09، C01/C03 | جمع بيانات اختيارية وتنظيم الجمهور وردود التعليقات |
| النشر والتسويق | E01–E13، G01/H01 | جدولة محتوى وحملات عبر الحسابات والمزودين المهيئين |
| متجر وطلبات | I01–I21/I26–I29 | متجر ويب وقائمة QR وطلبات وخيارات دفع مهيأة |
| متابعة وتقارير | J01–J08 مع تقارير القنوات | متابعة بيانات وحالات الحملات والطلبات المتاحة |
| واجهة عربية وهوية | S19/S20/S24–S26 | عربية وإنجليزية واتجاه واجهة وفق الإعداد |
| AI اختياري | AI03/AI04/AI06/AI15 | ردود نصية بتعليمات قابلة للإعداد؛ تضاف بعد استكمال adapter والتقييم |

Flow Builder عنوان صفحة منفصلة مشروط بـA01 وتسجيل الحزمة؛ لا تحوله إلى وعد عام قبل الاختبار. لا تضع أيقونة WhatsApp بين القنوات المتاحة حاليًا.

## صفحات مخصصة مقترحة

1. /messenger-chatbot — الكلمات والردود والأزرار؛ A02–A30 مع استبعاد addons غير المفعلة.
2. /instagram-automation — A03 وC؛ افتحها بعد اختبار الحسابات والصلاحيات.
3. /flow-builder — A01، مع علامات واضحة للعقد الاختيارية وعدم ادعاء RAG.
4. /comment-automation — B/C01–C03، ولا وعد Dark Posts قبل تحقق B04.
5. /live-chat — D01–D10؛ اشرح أنه للقناتين المدعومتين وليس Inbox شاملًا.
6. /social-publishing — E وC04–C06، مع القيود الحالية لكل نوع منشور.
7. /sms-marketing و/email-marketing — G/H؛ المزود والرسوم والموافقة شروط منفصلة.
8. /online-store و/restaurant-qr-menu — I؛ بوابات المراجعات/التنزيل الرقمي اختيارية وغير معلنة قبل التفعيل.
9. /reports — بيانات متاحة وحالات إرسال، دون وعود أداء أووصول.
10. /ai-replies — AI03/AI04/AI06/AI15 فقط بعد التحديث والتقييم، مع إفصاح حدود السياق.
11. /integrations — محولات اختبرت فعليًا فقط؛ لا badges للشركات توحي بشراكة.
12. /security-and-data — معلومات عمليات مثبتة بعد الإصلاح، لا شهادات أوامتثال مخترع.

## صفحات استخدامات مقترحة

| الاستخدام | قدرات يمكن التحقق منها | ما لا يفترض |
| --- | --- | --- |
| متجر صغير | FAQ bot، منتجات وطلبات وCOD | تكامل ERP أوتحصيل تلقائي بكل مصر |
| مطعم | QR/menu، ساعات، pickup وbrowser checkout | POS وطابعة ESC/POS أوتوصيل شركة بعينها |
| مستقل/خدمات | جمع بريد/هاتف باختيار العميل، labels وcanned replies | CRM متقدم أوجدولة حجوزات غير مدققة |
| وكالة تسويق | عدة صفحات ونشر وتقارير وحسابات | Teams أوtenant domains أوunlimited قبل توفيرها |
| خدمة عملاء | Live Chat FB/IG، قوالب وسجل | WhatsApp موحد أوAI Agent مستقل |

## قائمة مقارنة مستقبلية لباقات SaaS

استخدم محاور مقارنة قابلة للاختبار بدل أسعار أوقيم حدية مصطنعة: القنوات المسموحة، عدد الصفحات/المتاجر وفق quota، إتاحة Flow Builder وأنواع العقد، labels والجمهور، النشر والجدولة، SMS/email provider connectors، المتجر/المنتجات/الدفع، reports/export، اللغة والهوية، وإضافات مصرح بها. تكلفة SMS/email/AI/payment خدمات خارجية منفصلة عن إتاحة الميزة. عدد الموظفين لا يدخل الباقات حتى توفير Team Member واختبار العزل. لا تقدم «رسائل غير محدودة» أوtoken quota غير منفذة.

## شاشات يوصى بالتقاطها لاحقًا

| الشاشة/المصدر | دليل اللقطة المطلوبة |
| --- | --- |
| Dashboard::index | بيانات اصطناعية حقيقية من بيئة الاختبار؛ لا demo_data كأرقام عملاء |
| Social_accounts::index | حساب صفحة اختبار؛ تنقيح IDs/tokens |
| VF::load_builder وflowbuilder_manager | Flow محفوظ ويعاد فتحه وينفذ ردًا، لا canvas فقط |
| Messenger_bot::template_manager | text/media/buttons/fallback حسب القناة |
| Comment_automation::all_auto_reply_report | تعليق ورد وحالة موثقة |
| Instagram_reply::get_account_details | حساب اختبار ونتيجة صلاحية |
| Livechat::load_livechat fb/ig | محادثة اصطناعية مع unread/canned response |
| Subscriber_manager::bot_subscribers | labels وحقول غير حساسة |
| Instagram_poster::image_video وUltrapost | منشور اختبار وموعد ونتيجة فعلية |
| Sms_email_manager::create_sms_campaign | إعداد منقح وحملة اختبار دون أرقام أشخاص |
| Sms_email_manager::drag_drop_email_template | تصميم عربي اختبر في عملاء البريد |
| Sms_email_manager::email_campaign_reports | أرقام اصطناعية موسومة دون إيحاء أداء تجاري |
| Ecommerce::store_list/product_list/store | متجر ومنتجات اصطناعية وصفحة عامة |
| Ecommerce::qr_code/order | QR وإيصال اختبار وطباعة عربية |
| Ecommerce::order_list وDashboard e-commerce | حالة سداد من sandbox |
| Payment::package_manager/transaction_log | باقات اختبار بلا أسعار تسويق من اختراع التدقيق |
| Admin::general_settings | هوية Wasla بعد تكليف تغيير منفصل؛ تنقيح كل الأسرار |
| Integration::open_ai_api_credentials | لا تظهر مفاتيح؛ لقطة الإعداد وحدها لا تثبت AI |
| Multi_language/RTL screens | ترجمة وتخطيط فعليان في المتجر والمحرر والطباعة |

## قيود يجب الإفصاح عنها

FB/IG وOTN/RCN وpublishing تعتمد أهلية وصلاحيات وسياسات مزود قابلة للتغير؛ SMS/email يتطلبان مزودًا وتكلفة وموافقة؛ submission لا يعني delivery؛ AI خارجي ذوحدود سياق ولا ضمان صحة؛ المتجر لا يساوي محاسبة/POS/فواتير ضريبية؛ النسخة الحالية لا تثبت WhatsApp Business؛ بعض الميزات تحتاج إضافات؛ White Label الكامل وعزل tenant يحتاجان عملًا واختبارًا.

## بطاقة لكل قدرة مرشحة بعد الاختبار

القواعد المشتركة: كل بطاقة تحتاج أولًا بيئة DB/PHP ومخططًا صحيحًا وإصلاح P0/P1 واختبار tenant. رموز المتطلبات مفصلة في 08. وصف عربي/إنجليزي هنا صياغة داخلية محافظة، ولا ينشر تلقائيًا. بعض بطاقات الإدارة مفيدة لمشغل SaaS؛ ليست كلها مزايا تعرض على عميل الصفحة الرئيسية.


<details>
<summary>A02 — بوت Facebook Messenger / Facebook Messenger Bot</summary>

- **العنوان العربي:** بوت Facebook Messenger.
- **English title:** Facebook Messenger Bot.
- **الوصف العربي القصير:** إتاحة بوت Facebook Messenger ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Messenger Bot capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; send_message_bot_reply`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: لا إثبات تشغيل خارجي.

</details>

<details>
<summary>A04 — تشغيل البوت بالكلمات المفتاحية / Keyword-Triggered Automation</summary>

- **العنوان العربي:** تشغيل البوت بالكلمات المفتاحية.
- **English title:** Keyword-Triggered Automation.
- **الوصف العربي القصير:** إتاحة تشغيل البوت بالكلمات المفتاحية ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Keyword-Triggered Automation capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; messenger_bot.keywords`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: معالجة نصوص؛ ليست intent detection.

</details>

<details>
<summary>A05 — مطابقة Exact / Exact Keyword Matching</summary>

- **العنوان العربي:** مطابقة Exact.
- **English title:** Exact Keyword Matching.
- **الوصف العربي القصير:** إتاحة مطابقة Exact ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Exact Keyword Matching capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; trigger_matching_type=exact`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اختبار تطبيع العربية مطلوب.

</details>

<details>
<summary>A06 — مطابقة جزئية String Match / Partial Keyword Matching</summary>

- **العنوان العربي:** مطابقة جزئية String Match.
- **English title:** Partial Keyword Matching.
- **الوصف العربي القصير:** إتاحة مطابقة جزئية String Match ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Partial Keyword Matching capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; stripos`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اختبار التشكيل والمسافات.

</details>

<details>
<summary>A08 — رسائل نصية / Text Replies</summary>

- **العنوان العربي:** رسائل نصية.
- **English title:** Text Replies.
- **الوصف العربي القصير:** إتاحة رسائل نصية ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Text Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `send_message_bot_reply; create_template_action`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اختبار Messenger وInstagram منفصل.

</details>

<details>
<summary>A09 — رسائل صور / Image Replies</summary>

- **العنوان العربي:** رسائل صور.
- **English title:** Image Replies.
- **الوصف العربي القصير:** إتاحة رسائل صور ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Image Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_image_only; create_template_action`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: مراجعة أمان الرفع.

</details>

<details>
<summary>A10 — رسائل صوت / Audio Replies</summary>

- **العنوان العربي:** رسائل صوت.
- **English title:** Audio Replies.
- **الوصف العربي القصير:** إتاحة رسائل صوت ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Audio Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_audio_file; create_template_action`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: قيود القناة تحتاج اختبار.

</details>

<details>
<summary>A11 — رسائل فيديو / Video Replies</summary>

- **العنوان العربي:** رسائل فيديو.
- **English title:** Video Replies.
- **الوصف العربي القصير:** إتاحة رسائل فيديو ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Video Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_live_video; create_template_action`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اسم الدالة لا يعني بثًا حيًا.

</details>

<details>
<summary>A12 — إرفاق ملفات / File Attachments</summary>

- **العنوان العربي:** إرفاق ملفات.
- **English title:** File Attachments.
- **الوصف العربي القصير:** إتاحة إرفاق ملفات ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the File Attachments capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_general_file; create_template_action`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: أنواع وقنوات مقيدة.

</details>

<details>
<summary>A13 — GIF / GIF Replies</summary>

- **العنوان العربي:** GIF.
- **English title:** GIF Replies.
- **الوصف العربي القصير:** إتاحة GIF ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the GIF Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_image_only; gif ضمن الامتدادات`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اختبار الحركة والعرض.

</details>

<details>
<summary>A14 — Quick Replies / Quick Replies</summary>

- **العنوان العربي:** Quick Replies.
- **English title:** Quick Replies.
- **الوصف العربي القصير:** إتاحة Quick Replies ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Quick Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/visual_flow_builder/controllers/Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `generate_quick_replies`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: تختلف القابلية حسب القناة.

</details>

<details>
<summary>A15 — Persistent Menus / Persistent Menus</summary>

- **العنوان العربي:** Persistent Menus.
- **English title:** Persistent Menus.
- **الوصف العربي القصير:** إتاحة Persistent Menus ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Persistent Menus capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `publish_persistent_menu; create_persistent_menu_action`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: لا تعميم على كل قناة.

</details>

<details>
<summary>A16 — Postback Buttons / Postback Buttons</summary>

- **العنوان العربي:** Postback Buttons.
- **English title:** Postback Buttons.
- **الوصف العربي القصير:** إتاحة Postback Buttons ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Postback Buttons capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `create_template_action; messenger_bot_postback`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: ربط Postback بالصفحة.

</details>

<details>
<summary>A17 — URL Buttons / URL Buttons</summary>

- **العنوان العربي:** URL Buttons.
- **English title:** URL Buttons.
- **الوصف العربي القصير:** إتاحة URL Buttons ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the URL Buttons capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/visual_flow_builder/controllers/Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; button_type`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: صلاحية الروابط واختبار القناة.

</details>

<details>
<summary>A18 — Phone Buttons / Phone Buttons</summary>

- **العنوان العربي:** Phone Buttons.
- **English title:** Phone Buttons.
- **الوصف العربي القصير:** إتاحة Phone Buttons ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Phone Buttons capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/visual_flow_builder/controllers/Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; phone_number`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اختبار الهاتف والمنطقة.

</details>

<details>
<summary>A19 — Carousel وGeneric Templates / Carousel and Generic Templates</summary>

- **العنوان العربي:** Carousel وGeneric Templates.
- **English title:** Carousel and Generic Templates.
- **الوصف العربي القصير:** إتاحة Carousel وGeneric Templates ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Carousel and Generic Templates capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Flow_builder.php](../../application/libraries/Flow_builder.php) — `get_carousel_item_info; get_button_info`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: حدود عناصر القناة.

</details>

<details>
<summary>A23 — جمع البريد من Quick Reply / Email Collection via Quick Replies</summary>

- **العنوان العربي:** جمع البريد من Quick Reply.
- **English title:** Email Collection via Quick Replies.
- **الوصف العربي القصير:** إتاحة جمع البريد من Quick Reply ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Collection via Quick Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `is_email; email_info_send_auto_responder`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: المزامنة تحتاج مزودًا.

</details>

<details>
<summary>A24 — جمع الهاتف من Quick Reply / Phone Collection via Quick Replies</summary>

- **العنوان العربي:** جمع الهاتف من Quick Reply.
- **English title:** Phone Collection via Quick Replies.
- **الوصف العربي القصير:** إتاحة جمع الهاتف من Quick Reply ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Phone Collection via Quick Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `is_phone_number; phone_info_auto_responder`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: الحصول على الرقم لا يثبت موافقة تسويقية عامة.

</details>

<details>
<summary>A25 — تقسيم المشتركين والوسوم / Subscriber Labels and Segmentation</summary>

- **العنوان العربي:** تقسيم المشتركين والوسوم.
- **English title:** Subscriber Labels and Segmentation.
- **الوصف العربي القصير:** إتاحة تقسيم المشتركين والوسوم ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Subscriber Labels and Segmentation capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `ajax_label_insert; bulk_group_assign`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: نفس IDs مرجع التقسيم في البث.

</details>

<details>
<summary>A27 — Typing Indicator / Typing Indicators</summary>

- **العنوان العربي:** Typing Indicator.
- **English title:** Typing Indicators.
- **الوصف العربي القصير:** إتاحة Typing Indicator ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Typing Indicators capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `typing_on_settings; send_message_bot_reply`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: قد يطيل تنفيذ الطلب.

</details>

<details>
<summary>A28 — تأخير الردود / Reply Delays</summary>

- **العنوان العربي:** تأخير الردود.
- **English title:** Reply Delays.
- **الوصف العربي القصير:** إتاحة تأخير الردود ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Reply Delays capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `send_message_bot_reply; delay_in_reply`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: اختبار الزمن والتزامن.

</details>

<details>
<summary>A29 — Icebreakers / Conversation Icebreakers</summary>

- **العنوان العربي:** Icebreakers.
- **English title:** Conversation Icebreakers.
- **الوصف العربي القصير:** إتاحة Icebreakers ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Conversation Icebreakers capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `get_page_details; ice_breaker_status; ig_ice_breaker_status`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: دعم كل قناة يحتاج API test.

</details>

<details>
<summary>A30 — Default وFallback Replies / Default and Fallback Replies</summary>

- **العنوان العربي:** Default وFallback Replies.
- **English title:** Default and Fallback Replies.
- **الوصف العربي القصير:** إتاحة Default وFallback Replies ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Default and Fallback Replies capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `get_started_welcome_message; no_match_found_reply`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: فحص قواعد الأولوية.

</details>

<details>
<summary>A31 — Bot Error Logs / Bot Error Logs</summary>

- **العنوان العربي:** Bot Error Logs.
- **English title:** Bot Error Logs.
- **الوصف العربي القصير:** إتاحة Bot Error Logs ضمن سيناريوهات البوت للقنوات المدعومة، بعد الإعداد والاختبار.
- **English short description:** Use the Bot Error Logs capability within supported bot scenarios; channel-specific limits apply.
- **فائدة العميل/المشغل:** تنظيم خيارات الرد وتوجيه المحادثة وفق السيناريو المحدد.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `error_log_report; messenger_bot_reply_error_log`.
- **التحقق المتبقي:** تجربة الرد على القناة المستهدفة، وحفظ/تنفيذ السيناريو، والتحقق من فشل API والملكية. قيد خاص: لا تكشف محتويات السجلات.

</details>

<details>
<summary>B01 — الرد التلقائي على تعليق Facebook / Facebook Comment Auto Replies</summary>

- **العنوان العربي:** الرد التلقائي على تعليق Facebook.
- **English title:** Facebook Comment Auto Replies.
- **الوصف العربي القصير:** إتاحة الرد التلقائي على تعليق Facebook ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Comment Auto Replies capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `ajax_autoreply_submit; webhook_callback_main`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: Webhook وحقوق الصفحة.

</details>

<details>
<summary>B02 — Private Reply على التعليقات / Private Replies to Comments</summary>

- **العنوان العربي:** Private Reply على التعليقات.
- **English title:** Private Replies to Comments.
- **الوصف العربي القصير:** إتاحة Private Reply على التعليقات ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Private Replies to Comments capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Fb_rx_login.php](../../application/libraries/Fb_rx_login.php) — `send_private_reply; CA webhook_callback_main`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: القيود والموافقة تحتاج تحققًا.

</details>

<details>
<summary>B03 — تصفية التعليقات بالكلمات / Comment Keyword Filtering</summary>

- **العنوان العربي:** تصفية التعليقات بالكلمات.
- **English title:** Comment Keyword Filtering.
- **الوصف العربي القصير:** إتاحة تصفية التعليقات بالكلمات ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Comment Keyword Filtering capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `webhook_callback_main; trigger_matching_type`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: Exact وpartial موجودان.

</details>

<details>
<summary>B05 — الإعجاب التلقائي بالتعليق / Automatic Comment Likes</summary>

- **العنوان العربي:** الإعجاب التلقائي بالتعليق.
- **English title:** Automatic Comment Likes.
- **الوصف العربي القصير:** إتاحة الإعجاب التلقائي بالتعليق ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Automatic Comment Likes capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `webhook_callback_main; auto_like_comment`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: يعتمد على صلاحيات API.

</details>

<details>
<summary>B06 — إدارة وإخفاء وحذف التعليقات / Comment Moderation</summary>

- **العنوان العربي:** إدارة وإخفاء وحذف التعليقات.
- **English title:** Comment Moderation.
- **الوصف العربي القصير:** إتاحة إدارة وإخفاء وحذف التعليقات ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Comment Moderation capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `delete_single_comment; block_person_from_commenting; hide_comment_after_comment_reply`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: اختبار التفويض على كل عملية.

</details>

<details>
<summary>B07 — تعليقات مجدولة ودورية / Scheduled and Periodic Comments</summary>

- **العنوان العربي:** تعليقات مجدولة ودورية.
- **English title:** Scheduled and Periodic Comments.
- **الوصف العربي القصير:** إتاحة تعليقات مجدولة ودورية ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Scheduled and Periodic Comments capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `ajax_autocomment_reply_submit; CJ auto_comment_on_post_orginal`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: دورية/serial/random بحسب الحملة.

</details>

<details>
<summary>B08 — قوالب الردود والتعليقات / Comment Reply Templates</summary>

- **العنوان العربي:** قوالب الردود والتعليقات.
- **English title:** Comment Reply Templates.
- **الوصف العربي القصير:** إتاحة قوالب الردود والتعليقات ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Comment Reply Templates capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `template_manager; comment_template_manager`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: معاينة المتغيرات والعربية.

</details>

<details>
<summary>B09 — تقارير حملات التعليقات / Comment Campaign Reports</summary>

- **العنوان العربي:** تقارير حملات التعليقات.
- **English title:** Comment Campaign Reports.
- **الوصف العربي القصير:** إتاحة تقارير حملات التعليقات ضمن أدوات تعليقات صفحات Facebook، بعد الإعداد والاختبار.
- **English short description:** Use the Comment Campaign Reports capability within connected Facebook Page comment workflows; API permissions apply.
- **فائدة العميل/المشغل:** إدارة التفاعل مع التعليقات والرجوع إلى نتائج المعالجة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Comment_automation.php](../../application/controllers/Comment_automation.php) — `all_auto_reply_report; download_get_reply_info`.
- **التحقق المتبقي:** حدث تعليق مصرح مع إعادة تسليم واختبار كلمة ومالك صفحة ونتيجة الرد. قيد خاص: النتائج لا تثبت وصول الرد لكل مستلم.

</details>

<details>
<summary>C01 — ردود تعليقات Instagram / Instagram Comment Auto Replies</summary>

- **العنوان العربي:** ردود تعليقات Instagram.
- **English title:** Instagram Comment Auto Replies.
- **الوصف العربي القصير:** إتاحة ردود تعليقات Instagram ضمن أدوات حساب Instagram المؤهل، بعد الإعداد والاختبار.
- **English short description:** Use the Instagram Comment Auto Replies capability within eligible connected Instagram account workflows; API permissions apply.
- **فائدة العميل/المشغل:** تنظيم التفاعل والمحتوى للحساب المرتبط بدل التنقل بين إعدادات منفصلة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `ajax_autoreply_submit; webhook_callback`.
- **التحقق المتبقي:** اختبار نوع الحساب والأذونات والموعد والنتيجة على API المستخدم. قيد خاص: بعض أنواع الردوف الموسعة تتطلب Enhancers.

</details>

<details>
<summary>C03 — كلمات مفتاحية لتعليقات Instagram / Instagram Comment Keywords</summary>

- **العنوان العربي:** كلمات مفتاحية لتعليقات Instagram.
- **English title:** Instagram Comment Keywords.
- **الوصف العربي القصير:** إتاحة كلمات مفتاحية لتعليقات Instagram ضمن أدوات حساب Instagram المؤهل، بعد الإعداد والاختبار.
- **English short description:** Use the Instagram Comment Keywords capability within eligible connected Instagram account workflows; API permissions apply.
- **فائدة العميل/المشغل:** تنظيم التفاعل والمحتوى للحساب المرتبط بدل التنقل بين إعدادات منفصلة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `webhook_callback; trigger_matching_type`.
- **التحقق المتبقي:** اختبار نوع الحساب والأذونات والموعد والنتيجة على API المستخدم. قيد خاص: DM keyword مرجعه A04.

</details>

<details>
<summary>C05 — جدولة منشورات Instagram / Scheduled Instagram Posts</summary>

- **العنوان العربي:** جدولة منشورات Instagram.
- **English title:** Scheduled Instagram Posts.
- **الوصف العربي القصير:** إتاحة جدولة منشورات Instagram ضمن أدوات حساب Instagram المؤهل، بعد الإعداد والاختبار.
- **English short description:** Use the Scheduled Instagram Posts capability within eligible connected Instagram account workflows; API permissions apply.
- **فائدة العميل/المشغل:** تنظيم التفاعل والمحتوى للحساب المرتبط بدل التنقل بين إعدادات منفصلة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/instagram_poster/controllers/Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action; schedule_time`.
- **التحقق المتبقي:** اختبار نوع الحساب والأذونات والموعد والنتيجة على API المستخدم. قيد خاص: تشترك مع مجدول النشر.

</details>

<details>
<summary>C06 — نشر فيديو Instagram / Instagram Video Publishing</summary>

- **العنوان العربي:** نشر فيديو Instagram.
- **English title:** Instagram Video Publishing.
- **الوصف العربي القصير:** إتاحة نشر فيديو Instagram ضمن أدوات حساب Instagram المؤهل، بعد الإعداد والاختبار.
- **English short description:** Use the Instagram Video Publishing capability within eligible connected Instagram account workflows; API permissions apply.
- **فائدة العميل/المشغل:** تنظيم التفاعل والمحتوى للحساب المرتبط بدل التنقل بين إعدادات منفصلة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/instagram_poster/controllers/Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action; image_video_upload_video`.
- **التحقق المتبقي:** اختبار نوع الحساب والأذونات والموعد والنتيجة على API المستخدم. قيد خاص: حالة معالجة الفيديو والقيود بحاجة لاختبار.

</details>

<details>
<summary>C07 — Instagram Analytics / Instagram Insights</summary>

- **العنوان العربي:** Instagram Analytics.
- **English title:** Instagram Insights.
- **الوصف العربي القصير:** إتاحة Instagram Analytics ضمن أدوات حساب Instagram المؤهل، بعد الإعداد والاختبار.
- **English short description:** Use the Instagram Insights capability within eligible connected Instagram account workflows; API permissions apply.
- **فائدة العميل/المشغل:** تنظيم التفاعل والمحتوى للحساب المرتبط بدل التنقل بين إعدادات منفصلة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `media_insights_modal_data; FB instagram_user_insight`.
- **التحقق المتبقي:** اختبار نوع الحساب والأذونات والموعد والنتيجة على API المستخدم. قيد خاص: المقاييس المتاحة API-dependent.

</details>

<details>
<summary>D01 — Messenger Live Chat / Messenger Live Chat</summary>

- **العنوان العربي:** Messenger Live Chat.
- **English title:** Messenger Live Chat.
- **الوصف العربي القصير:** إتاحة Messenger Live Chat ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Messenger Live Chat capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+PUSHER وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; reply_to_conversation`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: لا يتطلب WhatsApp.

</details>

<details>
<summary>D02 — Instagram Live Chat / Instagram Live Chat</summary>

- **العنوان العربي:** Instagram Live Chat.
- **English title:** Instagram Live Chat.
- **الوصف العربي القصير:** إتاحة Instagram Live Chat ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Instagram Live Chat capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+PUSHER وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; media_type=ig`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: التبديل بين القناتين.

</details>

<details>
<summary>D03 — سجل المحادثات / Conversation History</summary>

- **العنوان العربي:** سجل المحادثات.
- **English title:** Conversation History.
- **الوصف العربي القصير:** إتاحة سجل المحادثات ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Conversation History capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `insert_livechat_data; livechat_messages`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: سياسة الاحتفاظ غير مكتملة التوثيق.

</details>

<details>
<summary>D04 — وسوم جهة الاتصال داخل المحادثة / Contact Labels in Conversations</summary>

- **العنوان العربي:** وسوم جهة الاتصال داخل المحادثة.
- **English title:** Contact Labels in Conversations.
- **الوصف العربي القصير:** إتاحة وسوم جهة الاتصال داخل المحادثة ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Contact Labels in Conversations capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `create_label_and_assign; LC get_subscriber_list`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: إعادة استخدام تقسيم المشتركين.

</details>

<details>
<summary>D05 — ردود محفوظة Canned Responses / Canned Responses</summary>

- **العنوان العربي:** ردود محفوظة Canned Responses.
- **English title:** Canned Responses.
- **الوصف العربي القصير:** إتاحة ردود محفوظة Canned Responses ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Canned Responses capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Livechat.php](../../application/controllers/Livechat.php) — `canned_response_list; add_canned_response`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: قوالب Postback عبر send_postback_reply أيضًا.

</details>

<details>
<summary>D08 — البحث في المحادثات / Conversation Search</summary>

- **العنوان العربي:** البحث في المحادثات.
- **English title:** Conversation Search.
- **الوصف العربي القصير:** إتاحة البحث في المحادثات ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Conversation Search capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Livechat.php](../../application/controllers/Livechat.php) — `search_subscriber; get_conversation_list`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: اختبار العربي وأحجام البيانات.

</details>

<details>
<summary>D09 — تصفية وأرشفة المحادثات / Conversation Filters and Archiving</summary>

- **العنوان العربي:** تصفية وأرشفة المحادثات.
- **English title:** Conversation Filters and Archiving.
- **الوصف العربي القصير:** إتاحة تصفية وأرشفة المحادثات ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Conversation Filters and Archiving capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Livechat.php](../../application/controllers/Livechat.php) — `get_conversation_list; update_mark_as_action`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: يوجد خطر نطاق user_id في عملية التحديث؛ راجع 07.

</details>

<details>
<summary>D10 — مؤشرات غير المقروء / Unread Conversation Indicators</summary>

- **العنوان العربي:** مؤشرات غير المقروء.
- **English title:** Unread Conversation Indicators.
- **الوصف العربي القصير:** إتاحة مؤشرات غير المقروء ضمن مساحة محادثات Messenger وInstagram، بعد الإعداد والاختبار.
- **English short description:** Use the Unread Conversation Indicators capability within the Messenger and Instagram conversation workspace.
- **فائدة العميل/المشغل:** مراجعة المحادثة والرد عليها مع معلومات الاتصال المتاحة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL+PUSHER وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Livechat.php](../../application/controllers/Livechat.php) — `update_mark_as_action; unseen_count`.
- **التحقق المتبقي:** اختبار حسابين وpage scope، ثم تحديث الواجهة والتاريخ والصلاحيات وعزل Pusher. قيد خاص: اختبار مزامنة المؤشرات.

</details>

<details>
<summary>E01 — نشر نصوص Facebook / Facebook Text Publishing</summary>

- **العنوان العربي:** نشر نصوص Facebook.
- **English title:** Facebook Text Publishing.
- **الوصف العربي القصير:** إتاحة نشر نصوص Facebook ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Text Publishing capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: إعداد الحملة من الواجهة.

</details>

<details>
<summary>E02 — نشر صور Facebook / Facebook Image Publishing</summary>

- **العنوان العربي:** نشر صور Facebook.
- **English title:** Facebook Image Publishing.
- **الوصف العربي القصير:** إتاحة نشر صور Facebook ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Image Publishing capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: وسائط عامة قابلة للوصول.

</details>

<details>
<summary>E03 — نشر فيديو Facebook / Facebook Video Publishing</summary>

- **العنوان العربي:** نشر فيديو Facebook.
- **English title:** Facebook Video Publishing.
- **الوصف العربي القصير:** إتاحة نشر فيديو Facebook ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Video Publishing capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: التحقق من معالجة الوسائط.

</details>

<details>
<summary>E04 — Facebook Multi-image / Facebook Multi-Image Publishing</summary>

- **العنوان العربي:** Facebook Multi-image.
- **English title:** Facebook Multi-Image Publishing.
- **الوصف العربي القصير:** إتاحة Facebook Multi-image ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Multi-Image Publishing capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; image_url`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: اختبار عدد الصور.

</details>

<details>
<summary>E06 — نشر روابط Facebook / Facebook Link Publishing</summary>

- **العنوان العربي:** نشر روابط Facebook.
- **English title:** Facebook Link Publishing.
- **الوصف العربي القصير:** إتاحة نشر روابط Facebook ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Link Publishing capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: معاينة الروابط.

</details>

<details>
<summary>E07 — جدولة منشورات Facebook / Scheduled Facebook Posts</summary>

- **العنوان العربي:** جدولة منشورات Facebook.
- **English title:** Scheduled Facebook Posts.
- **الوصف العربي القصير:** إتاحة جدولة منشورات Facebook ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Scheduled Facebook Posts capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `publish_post; schedule_time; time_zone`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: اختبار الزمن.

</details>

<details>
<summary>E08 — منشورات متكررة / Recurring Posts</summary>

- **العنوان العربي:** منشورات متكررة.
- **English title:** Recurring Posts.
- **الوصف العربي القصير:** إتاحة منشورات متكررة ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Recurring Posts capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; repeat_times; time_interval`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: لا وعد بتكرار غير محدود.

</details>

<details>
<summary>E09 — RSS Auto Posting / RSS Auto Posting</summary>

- **العنوان العربي:** RSS Auto Posting.
- **English title:** RSS Auto Posting.
- **الوصف العربي القصير:** إتاحة RSS Auto Posting ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the RSS Auto Posting capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ RSS+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Autoposting.php](../../application/controllers/Autoposting.php) — `settings; add_feed_action; CJ rss_auto_post`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: توجد قيود وصول وإضافات لبعض المصادر.

</details>

<details>
<summary>E10 — النشر إلى عدة صفحات / Multi-Page Publishing</summary>

- **العنوان العربي:** النشر إلى عدة صفحات.
- **English title:** Multi-Page Publishing.
- **الوصف العربي القصير:** إتاحة النشر إلى عدة صفحات ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Multi-Page Publishing capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; parent_campaign_id; page_ids`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: المحصلة تقاس لكل صفحة.

</details>

<details>
<summary>E13 — تقارير النشر الاجتماعي / Social Publishing Reports</summary>

- **العنوان العربي:** تقارير النشر الاجتماعي.
- **English title:** Social Publishing Reports.
- **الوصف العربي القصير:** إتاحة تقارير النشر الاجتماعي ضمن أدوات النشر للحسابات المرتبطة، بعد الإعداد والاختبار.
- **English short description:** Use the Social Publishing Reports capability within connected social publishing workflows and configured schedules.
- **فائدة العميل/المشغل:** تجهيز المحتوى ومواعيده ومراجعة نتيجة النشر لكل حساب.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/instagram_poster/controllers/Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `ajax_get_text_report; facebook_rx_auto_post`.
- **التحقق المتبقي:** نشر تجريبي لكل نوع، مع توقيت وتوازي وفشل وإعادة محاولة دون تكرار. قيد خاص: حالة النشر ليست تلقائيًا reach/conversions.

</details>

<details>
<summary>F02 — One-Time Notifications / One-Time Notification Campaigns</summary>

- **العنوان العربي:** One-Time Notifications.
- **English title:** One-Time Notification Campaigns.
- **الوصف العربي القصير:** إتاحة One-Time Notifications ضمن حملات جمهور وافق على الإرسال وفق قيود المنصة، بعد الإعداد والاختبار.
- **English short description:** Use the One-Time Notification Campaigns capability within opted-in campaign workflows where the platform permits them.
- **فائدة العميل/المشغل:** تنظيم الجمهور والقوالب والمواعيد ومتابعة حالة الإرسال.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; MB otn_subscribers`.
- **التحقق المتبقي:** اختبار opt-in وopt-out والنافذة وtoken والحالة والجدولة وقيود الإضافة. قيد خاص: وجود الشيفرة لا يثبت توفر المنتج API حاليًا.

</details>

<details>
<summary>F04 — جدولة حملات Messenger / Scheduled Messenger Campaigns</summary>

- **العنوان العربي:** جدولة حملات Messenger.
- **English title:** Scheduled Messenger Campaigns.
- **الوصف العربي القصير:** إتاحة جدولة حملات Messenger ضمن حملات جمهور وافق على الإرسال وفق قيود المنصة، بعد الإعداد والاختبار.
- **English short description:** Use the Scheduled Messenger Campaigns capability within opted-in campaign workflows where the platform permits them.
- **فائدة العميل/المشغل:** تنظيم الجمهور والقوالب والمواعيد ومتابعة حالة الإرسال.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; schedule_time`.
- **التحقق المتبقي:** اختبار opt-in وopt-out والنافذة وtoken والحالة والجدولة وقيود الإضافة. قيد خاص: الدفع/الإرسال حسب حالة الحملة.

</details>

<details>
<summary>F05 — استهداف شرائح المشتركين / Segmented Subscriber Targeting</summary>

- **العنوان العربي:** استهداف شرائح المشتركين.
- **English title:** Segmented Subscriber Targeting.
- **الوصف العربي القصير:** إتاحة استهداف شرائح المشتركين ضمن حملات جمهور وافق على الإرسال وفق قيود المنصة، بعد الإعداد والاختبار.
- **English short description:** Use the Segmented Subscriber Targeting capability within opted-in campaign workflows where the platform permits them.
- **فائدة العميل/المشغل:** تنظيم الجمهور والقوالب والمواعيد ومتابعة حالة الإرسال.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; label_ids; excluded_label_ids`.
- **التحقق المتبقي:** اختبار opt-in وopt-out والنافذة وtoken والحالة والجدولة وقيود الإضافة. قيد خاص: A25 هو إدارة الوسوم نفسها.

</details>

<details>
<summary>F06 — قوالب البث / Broadcast Templates</summary>

- **العنوان العربي:** قوالب البث.
- **English title:** Broadcast Templates.
- **الوصف العربي القصير:** إتاحة قوالب البث ضمن حملات جمهور وافق على الإرسال وفق قيود المنصة، بعد الإعداد والاختبار.
- **English short description:** Use the Broadcast Templates capability within opted-in campaign workflows where the platform permits them.
- **فائدة العميل/المشغل:** تنظيم الجمهور والقوالب والمواعيد ومتابعة حالة الإرسال.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `otn_create_template_action; rcn_template_manager`.
- **التحقق المتبقي:** اختبار opt-in وopt-out والنافذة وtoken والحالة والجدولة وقيود الإضافة. قيد خاص: دعم كل نوع حسب القناة.

</details>

<details>
<summary>F07 — تقارير إرسال Messenger / Messenger Sending Reports</summary>

- **العنوان العربي:** تقارير إرسال Messenger.
- **English title:** Messenger Sending Reports.
- **الوصف العربي القصير:** إتاحة تقارير إرسال Messenger ضمن حملات جمهور وافق على الإرسال وفق قيود المنصة، بعد الإعداد والاختبار.
- **English short description:** Use the Messenger Sending Reports capability within opted-in campaign workflows where the platform permits them.
- **فائدة العميل/المشغل:** تنظيم الجمهور والقوالب والمواعيد ومتابعة حالة الإرسال.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_campaign_sent_status; rcn_campaign_sent_status`.
- **التحقق المتبقي:** اختبار opt-in وopt-out والنافذة وtoken والحالة والجدولة وقيود الإضافة. قيد خاص: ميّز الإرسال عن القراءة.

</details>

<details>
<summary>F09 — موافقة OTN/RCN وإلغاء الاشتراك / Notification Opt-In and Unsubscribe</summary>

- **العنوان العربي:** موافقة OTN/RCN وإلغاء الاشتراك.
- **English title:** Notification Opt-In and Unsubscribe.
- **الوصف العربي القصير:** إتاحة موافقة OTN/RCN وإلغاء الاشتراك ضمن حملات جمهور وافق على الإرسال وفق قيود المنصة، بعد الإعداد والاختبار.
- **English short description:** Use the Notification Opt-In and Unsubscribe capability within opted-in campaign workflows where the platform permits them.
- **فائدة العميل/المشغل:** تنظيم الجمهور والقوالب والمواعيد ومتابعة حالة الإرسال.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `otn_subscribers; rcn_subscribers; permission`.
- **التحقق المتبقي:** اختبار opt-in وopt-out والنافذة وtoken والحالة والجدولة وقيود الإضافة. قيد خاص: يلزم اختبار token/opt-out ومنع إعادة الإرسال.

</details>

<details>
<summary>G01 — إنشاء حملات SMS / SMS Campaign Creation</summary>

- **العنوان العربي:** إنشاء حملات SMS.
- **English title:** SMS Campaign Creation.
- **الوصف العربي القصير:** إتاحة إنشاء حملات SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the SMS Campaign Creation capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_sms_campaign; create_sms_campaign_action`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: لا ضمان تسليم شبكة.

</details>

<details>
<summary>G02 — CSV لجهات اتصال SMS والبريد / CSV Contact Import for SMS and Email</summary>

- **العنوان العربي:** CSV لجهات اتصال SMS والبريد.
- **English title:** CSV Contact Import for SMS and Email.
- **الوصف العربي القصير:** إتاحة CSV لجهات اتصال SMS والبريد ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the CSV Contact Import for SMS and Email capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `ajax_import_csv_files; import_contact_action_ajax`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: خاصية واحدة مشتركة؛ H يعيد استخدامها.

</details>

<details>
<summary>G03 — تقسيم جهات اتصال SMS والبريد / Contact Groups for SMS and Email</summary>

- **العنوان العربي:** تقسيم جهات اتصال SMS والبريد.
- **English title:** Contact Groups for SMS and Email.
- **الوصف العربي القصير:** إتاحة تقسيم جهات اتصال SMS والبريد ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Contact Groups for SMS and Email capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `contact_group_list; add_contact_group_action`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: contact_type_id والجمهور المستورد.

</details>

<details>
<summary>G04 — جدولة SMS / Scheduled SMS Campaigns</summary>

- **العنوان العربي:** جدولة SMS.
- **English title:** Scheduled SMS Campaigns.
- **الوصف العربي القصير:** إتاحة جدولة SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Scheduled SMS Campaigns capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `sms_sending_command; SE create_sms_campaign_action`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: توقيت ودفعات.

</details>

<details>
<summary>G06 — Twilio SMS / Twilio SMS Connector</summary>

- **العنوان العربي:** Twilio SMS.
- **English title:** Twilio SMS Connector.
- **الوصف العربي القصير:** إتاحة Twilio SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Twilio SMS Connector capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Sms_manager.php](../../application/libraries/Sms_manager.php) — `twilio_sms_sent`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: اختبار نسخة SDK ومصادقة الحساب.

</details>

<details>
<summary>G07 — Plivo SMS / Plivo SMS Connector</summary>

- **العنوان العربي:** Plivo SMS.
- **English title:** Plivo SMS Connector.
- **الوصف العربي القصير:** إتاحة Plivo SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Plivo SMS Connector capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Sms_manager.php](../../application/libraries/Sms_manager.php) — `plivo_sms_send`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: API credentials.

</details>

<details>
<summary>G08 — Vonage/Nexmo SMS / Vonage and Nexmo SMS Connector</summary>

- **العنوان العربي:** Vonage/Nexmo SMS.
- **English title:** Vonage and Nexmo SMS Connector.
- **الوصف العربي القصير:** إتاحة Vonage/Nexmo SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Vonage and Nexmo SMS Connector capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Sms_manager.php](../../application/libraries/Sms_manager.php) — `nexmo_send_sms`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: اسم Nexmo؛ URL ونوع encoding قديمان.

</details>

<details>
<summary>G09 — Clickatell SMS / Clickatell SMS Connector</summary>

- **العنوان العربي:** Clickatell SMS.
- **English title:** Clickatell SMS Connector.
- **الوصف العربي القصير:** إتاحة Clickatell SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Clickatell SMS Connector capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Sms_manager.php](../../application/libraries/Sms_manager.php) — `clickatell_send_sms; clickatell_platform_send_sms`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: اختيار منصة صحيحة؛ أحد المسارات HTTP.

</details>

<details>
<summary>G10 — MSG91 SMS / MSG91 SMS Connector</summary>

- **العنوان العربي:** MSG91 SMS.
- **English title:** MSG91 SMS Connector.
- **الوصف العربي القصير:** إتاحة MSG91 SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the MSG91 SMS Connector capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Sms_manager.php](../../application/libraries/Sms_manager.php) — `msg91_send_sms`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: country=91 وroute=4 ثابتان؛ لا يفترض توافق مصر.

</details>

<details>
<summary>G12 — Custom HTTP SMS GET/POST / Custom HTTP SMS Gateways</summary>

- **العنوان العربي:** Custom HTTP SMS GET/POST.
- **English title:** Custom HTTP SMS Gateways.
- **الوصف العربي القصير:** إتاحة Custom HTTP SMS GET/POST ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Custom HTTP SMS Gateways capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS+HTTP وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_custom_api; create_custom_api_post_method; SMS send_sms`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: قوالب URL/POST وليست بوابة REST عامة.

</details>

<details>
<summary>G15 — إعداد اتصال ومصادقة SMS / SMS Provider Configuration</summary>

- **العنوان العربي:** إعداد اتصال ومصادقة SMS.
- **English title:** SMS Provider Configuration.
- **الوصف العربي القصير:** إتاحة إعداد اتصال ومصادقة SMS ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the SMS Provider Configuration capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `sms_api_lists; ajax_create_sms_api; send_test_sms`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: أسماء حقول فقط؛ لا قيم مفاتيح ضمن التقارير.

</details>

<details>
<summary>G16 — مزودو SMS إضافيون / Additional SMS Adapters</summary>

- **العنوان العربي:** مزودو SMS إضافيون.
- **English title:** Additional SMS Adapters.
- **الوصف العربي القصير:** إتاحة مزودو SMS إضافيون ضمن مساحة إعداد الرسائل وجهات الاتصال والمزودين، بعد الإعداد والاختبار.
- **English short description:** Use the Additional SMS Adapters capability within the SMS and contact-management workspace after provider setup where required.
- **فائدة العميل/المشغل:** إعداد بيانات الحملة والمزود وجهات الاتصال بصورة قابلة للمتابعة.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Sms_manager.php](../../application/libraries/Sms_manager.php) — `textlocal_in; infobip_send_sms; semysms_send_sms; send_sms_route`.
- **التحقق المتبقي:** استيراد/إعداد واختبار محدود مصرح؛ encoding/segments وحالات المزود وموافقة الجمهور. قيد خاص: ليست شهادة توافق حالي أو ملاءمة إقليمية.

</details>

<details>
<summary>H01 — إنشاء حملات Email / Email Campaign Creation</summary>

- **العنوان العربي:** إنشاء حملات Email.
- **English title:** Email Campaign Creation.
- **الوصف العربي القصير:** إتاحة إنشاء حملات Email ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Campaign Creation capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_email_campaign; create_email_campaign_action`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: مصدر المستلمين الأساسي أوالمستورد.

</details>

<details>
<summary>H02 — إدارة قوالب البريد / Email Template Management</summary>

- **العنوان العربي:** إدارة قوالب البريد.
- **English title:** Email Template Management.
- **الوصف العربي القصير:** إتاحة إدارة قوالب البريد ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Template Management capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_templates_list; save_template; view_template`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: مراجعة HTML والمتغيرات.

</details>

<details>
<summary>H03 — Drag-and-Drop Email Editor / Drag-and-Drop Email Editor</summary>

- **العنوان العربي:** Drag-and-Drop Email Editor.
- **English title:** Drag-and-Drop Email Editor.
- **الوصف العربي القصير:** إتاحة Drag-and-Drop Email Editor ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Drag-and-Drop Email Editor capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `drag_drop_email_template; plugins/email-template-builder`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: اختبار قوالب عملاء البريد.

</details>

<details>
<summary>H04 — SMTP / SMTP Configuration</summary>

- **العنوان العربي:** SMTP.
- **English title:** SMTP Configuration.
- **الوصف العربي القصير:** إتاحة SMTP ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the SMTP Configuration capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `smtp_config; ajax_save_smtp_api; H _email_send_function`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: TLS ومصادقة مزود البريد.

</details>

<details>
<summary>H05 — SendGrid / SendGrid Connector</summary>

- **العنوان العربي:** SendGrid.
- **English title:** SendGrid Connector.
- **الوصف العربي القصير:** إتاحة SendGrid ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the SendGrid Connector capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Email_manager.php](../../application/libraries/Email_manager.php) — `sendgrid_email_send; SE sendgrid_api_config`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: آلية المستخدم/كلمة المرور تتطلب مراجعة API الحالية.

</details>

<details>
<summary>H06 — Mailgun / Mailgun Connector</summary>

- **العنوان العربي:** Mailgun.
- **English title:** Mailgun Connector.
- **الوصف العربي القصير:** إتاحة Mailgun ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Mailgun Connector capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Email_manager.php](../../application/libraries/Email_manager.php) — `mailgun_email_send; SE mailgun_api_config`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: تحقق النطاق والمنطقة.

</details>

<details>
<summary>H07 — Mandrill / Mandrill Connector</summary>

- **العنوان العربي:** Mandrill.
- **English title:** Mandrill Connector.
- **الوصف العربي القصير:** إتاحة Mandrill ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Mandrill Connector capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/libraries/Email_manager.php](../../application/libraries/Email_manager.php) — `send_madrill_email; SE mandrill_api_config`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: يتطلب حساب خدمة.

</details>

<details>
<summary>H08 — جدولة حملات Email / Scheduled Email Campaigns</summary>

- **العنوان العربي:** جدولة حملات Email.
- **English title:** Scheduled Email Campaigns.
- **الوصف العربي القصير:** إتاحة جدولة حملات Email ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Scheduled Email Campaigns capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `email_sending_command`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: الدفعات وفق الإعداد.

</details>

<details>
<summary>H10 — Open Tracking / Email Open Tracking</summary>

- **العنوان العربي:** Open Tracking.
- **English title:** Email Open Tracking.
- **الوصف العربي القصير:** إتاحة Open Tracking ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Open Tracking capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL+PUBLICURL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `checking_open_rate; email_sending_campaign_send`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: صور tracking قد تمنع أوتجلب آليًا؛ لا تساوي قراءة مؤكدة.

</details>

<details>
<summary>H11 — Click Tracking / Email Click Tracking</summary>

- **العنوان العربي:** Click Tracking.
- **English title:** Email Click Tracking.
- **الوصف العربي القصير:** إتاحة Click Tracking ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Click Tracking capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL+PUBLICURL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `checking_click_rate; email_clickrate_links_backup`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: اختبار redirect والعزل.

</details>

<details>
<summary>H12 — Unsubscribe Email / Email Unsubscribe</summary>

- **العنوان العربي:** Unsubscribe Email.
- **English title:** Email Unsubscribe.
- **الوصف العربي القصير:** إتاحة Unsubscribe Email ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Unsubscribe capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL+PUBLICURL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `unsubscribe; unsubscribe_action; sms_email_contacts.unsubscribed`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: اختبار روابط وسيناريوهات إعادة الاستيراد.

</details>

<details>
<summary>H14 — تقارير حملات Email / Email Campaign Reports</summary>

- **العنوان العربي:** تقارير حملات Email.
- **English title:** Email Campaign Reports.
- **الوصف العربي القصير:** إتاحة تقارير حملات Email ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Campaign Reports capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_campaign_reports; ajax_get_email_campaign_report_info`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: لا تعني Inbox placement.

</details>

<details>
<summary>H15 — Mailchimp Autoresponder / Mailchimp List Integration</summary>

- **العنوان العربي:** Mailchimp Autoresponder.
- **English title:** Mailchimp List Integration.
- **الوصف العربي القصير:** إتاحة Mailchimp Autoresponder ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Mailchimp List Integration capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAILAPI وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `mailchimp_list; H send_email_to_autoresponder`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: تكامل قوائم وليس استضافة Mailchimp.

</details>

<details>
<summary>H16 — ActiveCampaign Autoresponder / ActiveCampaign List Integration</summary>

- **العنوان العربي:** ActiveCampaign Autoresponder.
- **English title:** ActiveCampaign List Integration.
- **الوصف العربي القصير:** إتاحة ActiveCampaign Autoresponder ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the ActiveCampaign List Integration capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAILAPI وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `activecampaign_list; H send_email_to_autoresponder`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: اختبار حقول وتاغات.

</details>

<details>
<summary>H17 — Brevo/Sendinblue Autoresponder / Brevo and Sendinblue List Integration</summary>

- **العنوان العربي:** Brevo/Sendinblue Autoresponder.
- **English title:** Brevo and Sendinblue List Integration.
- **الوصف العربي القصير:** إتاحة Brevo/Sendinblue Autoresponder ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Brevo and Sendinblue List Integration capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAILAPI وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `sendinblue_list; H send_email_to_autoresponder`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: لا تستنتج دعم جميع واجهات Brevo الحديثة.

</details>

<details>
<summary>H18 — Mautic Autoresponder / Mautic List Integration</summary>

- **العنوان العربي:** Mautic Autoresponder.
- **English title:** Mautic List Integration.
- **الوصف العربي القصير:** إتاحة Mautic Autoresponder ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Mautic List Integration capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAILAPI وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `mautic_list; H send_email_to_autoresponder`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: المصادقة والإصدار.

</details>

<details>
<summary>H19 — Acelle Autoresponder / Acelle List Integration</summary>

- **العنوان العربي:** Acelle Autoresponder.
- **English title:** Acelle List Integration.
- **الوصف العربي القصير:** إتاحة Acelle Autoresponder ضمن حملات البريد والتكاملات الخارجية المهيأة، بعد الإعداد والاختبار.
- **English short description:** Use the Acelle List Integration capability within configured email campaigns or connected autoresponder workflows.
- **فائدة العميل/المشغل:** تنظيم تصميم البريد وإرساله ومتابعة مؤشرات محددة دون ضمان وصول.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAILAPI وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `acelle_list; H send_email_to_autoresponder`.
- **التحقق المتبقي:** تصميم عربي واختبار مزود/روابط/إلغاء اشتراك ومتابعة؛ لا تساوي open قراءة إنسانية. قيد خاص: تنسيق URL وإصدار الخدمة.

</details>

<details>
<summary>I01 — إنشاء وإدارة متجر / Store Creation and Management</summary>

- **العنوان العربي:** إنشاء وإدارة متجر.
- **English title:** Store Creation and Management.
- **الوصف العربي القصير:** إتاحة إنشاء وإدارة متجر ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Creation and Management capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `add_store; add_store_action; edit_store_action`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: قناة وصول عامة مستقلة عن Messenger.

</details>

<details>
<summary>I02 — متاجر متعددة للمستخدم / Multiple Stores per Account</summary>

- **العنوان العربي:** متاجر متعددة للمستخدم.
- **English title:** Multiple Stores per Account.
- **الوصف العربي القصير:** إتاحة متاجر متعددة للمستخدم ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Multiple Stores per Account capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE+QUOTA وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `store_list; add_store_action; _check_usage(268)`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: العدد وفق الباقة؛ لا غير محدود.

</details>

<details>
<summary>I03 — إدارة المنتجات / Product Management</summary>

- **العنوان العربي:** إدارة المنتجات.
- **English title:** Product Management.
- **الوصف العربي القصير:** إتاحة إدارة المنتجات ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Product Management capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `add_product_action; edit_product_action; delete_product`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: الحالة والمخزون.

</details>

<details>
<summary>I04 — تصنيفات المنتجات / Product Categories</summary>

- **العنوان العربي:** تصنيفات المنتجات.
- **English title:** Product Categories.
- **الوصف العربي القصير:** إتاحة تصنيفات المنتجات ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Product Categories capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `ajax_create_new_category; sort_category`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: ترتيب وتصنيف.

</details>

<details>
<summary>I05 — خصائص واختيارات المنتج / Product Attributes and Options</summary>

- **العنوان العربي:** خصائص واختيارات المنتج.
- **English title:** Product Attributes and Options.
- **الوصف العربي القصير:** إتاحة خصائص واختيارات المنتج ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Product Attributes and Options capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `ajax_create_new_attribute; ecommerce_attribute`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: السعر المتغير ميزة منفصلة I06.

</details>

<details>
<summary>I07 — صور المنتجات والمتجر / Product and Store Images</summary>

- **العنوان العربي:** صور المنتجات والمتجر.
- **English title:** Product and Store Images.
- **الوصف العربي القصير:** إتاحة صور المنتجات والمتجر ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Product and Store Images capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `upload_product_thumb; upload_featured_image; upload_store_logo`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: يلزم مراجعة أمان الملفات.

</details>

<details>
<summary>I08 — كوبونات متجر / Store Coupons</summary>

- **العنوان العربي:** كوبونات متجر.
- **English title:** Store Coupons.
- **الوصف العربي القصير:** إتاحة كوبونات متجر ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Coupons capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `check_coupon; apply_coupon; add_coupon_action`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: ليست خصومات اشتراك SaaS.

</details>

<details>
<summary>I09 — Shopping Cart / Shopping Cart</summary>

- **العنوان العربي:** Shopping Cart.
- **English title:** Shopping Cart.
- **الوصف العربي القصير:** إتاحة Shopping Cart ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Shopping Cart capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `cart; add_to_cart_modal; update_cart_item`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: إعادة حساب الأسعار في الخادم.

</details>

<details>
<summary>I10 — Checkout / Store Checkout</summary>

- **العنوان العربي:** Checkout.
- **English title:** Store Checkout.
- **الوصف العربي القصير:** إتاحة Checkout ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Checkout capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE+PAY وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `proceed_checkout; valid_cart_data`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: فحص العبث بالمبلغ والمعرفات.

</details>

<details>
<summary>I11 — إدارة الطلبات / Order Management</summary>

- **العنوان العربي:** إدارة الطلبات.
- **English title:** Order Management.
- **الوصف العربي القصير:** إتاحة إدارة الطلبات ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Order Management capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `order_list; change_payment_status`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: التحقق من المالك والصلاحيات.

</details>

<details>
<summary>I12 — سجلات العملاء والعناوين / Customer Records and Addresses</summary>

- **العنوان العربي:** سجلات العملاء والعناوين.
- **English title:** Customer Records and Addresses.
- **الوصف العربي القصير:** إتاحة سجلات العملاء والعناوين ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Customer Records and Addresses capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `customer_list; save_address; get_buyer_profile`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: بيانات خاصة لا تنشر في أمثلة.

</details>

<details>
<summary>I13 — Store Pickup وPickup Points / Store Pickup and Pickup Points</summary>

- **العنوان العربي:** Store Pickup وPickup Points.
- **English title:** Store Pickup and Pickup Points.
- **الوصف العربي القصير:** إتاحة Store Pickup وPickup Points ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Pickup and Pickup Points capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `apply_store_pickup; pickup_point_list`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: ساعات وفروع الاستلام.

</details>

<details>
<summary>I14 — إعداد الشحن والتوصيل / Shipping and Delivery Settings</summary>

- **العنوان العربي:** إعداد الشحن والتوصيل.
- **English title:** Shipping and Delivery Settings.
- **الوصف العربي القصير:** إتاحة إعداد الشحن والتوصيل ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Shipping and Delivery Settings capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `appearance_settings_action; ecommerce_store.shipping_charge`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: رسوم وإعدادات؛ لا تكامل شركة توصيل مؤكد.

</details>

<details>
<summary>I15 — إشعارات الطلبات / Order Notifications</summary>

- **العنوان العربي:** إشعارات الطلبات.
- **English title:** Order Notifications.
- **الوصف العربي القصير:** إتاحة إشعارات الطلبات ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Order Notifications capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+MAIL+SMS وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `confirmation_message_sender; notification_settings_action`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: قنوات حسب المزود وإعداد المتجر.

</details>

<details>
<summary>I16 — Abandoned Cart لمتجر ChatPion / Store Abandoned Cart Reminders</summary>

- **العنوان العربي:** Abandoned Cart لمتجر ChatPion.
- **English title:** Store Abandoned Cart Reminders.
- **الوصف العربي القصير:** إتاحة Abandoned Cart لمتجر ChatPion ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Abandoned Cart Reminders capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Cron_job.php](../../application/controllers/Cron_job.php) — `ecommerce_abandoned_cart_reminder; EC reminder_settings_action`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: يفصل عن WooCommerce I25.

</details>

<details>
<summary>I17 — واجهة متجر عبر المتصفح / Browser-Based Storefront</summary>

- **العنوان العربي:** واجهة متجر عبر المتصفح.
- **English title:** Browser-Based Storefront.
- **الوصف العربي القصير:** إتاحة واجهة متجر عبر المتصفح ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Browser-Based Storefront capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE+PUBLICURL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `store; product; guest_login_action`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: مسارات مبنية على الموقع الرئيسي.

</details>

<details>
<summary>I18 — ربط المتجر بـMessenger / Messenger Store Integration</summary>

- **العنوان العربي:** ربط المتجر بـMessenger.
- **English title:** Messenger Store Integration.
- **الوصف العربي القصير:** إتاحة ربط المتجر بـMessenger ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Messenger Store Integration capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META+STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/visual_flow_builder/controllers/Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `get_store_list; get_storewise_products; EC store`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: تدفق ومنتجات وروابط.

</details>

<details>
<summary>I19 — QR للمتجر والطلب / Store and Ordering QR Codes</summary>

- **العنوان العربي:** QR للمتجر والطلب.
- **English title:** Store and Ordering QR Codes.
- **الوصف العربي القصير:** إتاحة QR للمتجر والطلب ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store and Ordering QR Codes capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `qr_code; qr_code_action; download_qr`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: يؤدي إلى واجهة متجر؛ ليس نظام POS كامل.

</details>

<details>
<summary>I20 — قائمة مطعم وطلب طعام / Restaurant Menus and Ordering</summary>

- **العنوان العربي:** قائمة مطعم وطلب طعام.
- **English title:** Restaurant Menus and Ordering.
- **الوصف العربي القصير:** إتاحة قائمة مطعم وطلب طعام ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Restaurant Menus and Ordering capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `store_type; business_hour_settings_action; pickup_point_list`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: يناسب تدفق القوائم والطلبات دون ضمان POS.

</details>

<details>
<summary>I21 — طباعة إيصال Thermal عبر المتصفح / Browser-Based Thermal Receipt Printing</summary>

- **العنوان العربي:** طباعة إيصال Thermal عبر المتصفح.
- **English title:** Browser-Based Thermal Receipt Printing.
- **الوصف العربي القصير:** إتاحة طباعة إيصال Thermal عبر المتصفح ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Browser-Based Thermal Receipt Printing capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PRINTER وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/views/ecommerce/bare-theme.php](../../application/views/ecommerce/bare-theme.php) — `print-options; window.frames.print; assets/css/print`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: تنسيق CSS وطباعة متصفح؛ لا بروتوكول ESC/POS أوتكامل جهاز مثبت.

</details>

<details>
<summary>I26 — بوابات دفع المتجر / Store Payment Gateways</summary>

- **العنوان العربي:** بوابات دفع المتجر.
- **English title:** Store Payment Gateways.
- **الوصف العربي القصير:** إتاحة بوابات دفع المتجر ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Payment Gateways capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PAY+STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `stripe_action; paypal_action; payment_accounts_action`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: التوفر التجاري في مصر لكل مزود يحتاج تحققًا.

</details>

<details>
<summary>I27 — Cash on Delivery / Cash on Delivery</summary>

- **العنوان العربي:** Cash on Delivery.
- **English title:** Cash on Delivery.
- **الوصف العربي القصير:** إتاحة Cash on Delivery ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Cash on Delivery capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `cod_payment`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: حالة الطلب والسداد عند التسليم.

</details>

<details>
<summary>I28 — Manual/Bank Payment للمتجر / Manual and Bank Payments for Stores</summary>

- **العنوان العربي:** Manual/Bank Payment للمتجر.
- **English title:** Manual and Bank Payments for Stores.
- **الوصف العربي القصير:** إتاحة Manual/Bank Payment للمتجر ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Manual and Bank Payments for Stores capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Ecommerce.php](../../application/controllers/Ecommerce.php) — `manual_payment; manual_payment_upload_file`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: مراجعة مرفقات وموافقة المدير.

</details>

<details>
<summary>I29 — مبيعات وإيراد المتجر / Store Sales and Revenue Views</summary>

- **العنوان العربي:** مبيعات وإيراد المتجر.
- **English title:** Store Sales and Revenue Views.
- **الوصف العربي القصير:** إتاحة مبيعات وإيراد المتجر ضمن المتجر والطلبات عبر الويب، بعد الإعداد والاختبار.
- **English short description:** Use the Store Sales and Revenue Views capability within browser-based store and ordering workflows after configuration.
- **فائدة العميل/المشغل:** عرض المنتجات وتنظيم رحلة الطلب وعمليات المتجر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ STORE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Dashboard.php](../../application/controllers/Dashboard.php) — `get_ecommerce_div_content; EC order_list_data`.
- **التحقق المتبقي:** طلب اصطناعي end-to-end، مع تفويض ومعاملة وأسعار ومخزون ودفع sandbox عند الحاجة. قيد خاص: التعريف المالي وفق paid/status؛ لا يعد نظام محاسبة.

</details>

<details>
<summary>J01 — مؤشرات Dashboard / Dashboard Metrics</summary>

- **العنوان العربي:** مؤشرات Dashboard.
- **English title:** Dashboard Metrics.
- **الوصف العربي القصير:** إتاحة مؤشرات Dashboard ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Dashboard Metrics capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Dashboard.php](../../application/controllers/Dashboard.php) — `index; get_first_div_content`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: توجد أيضًا دوال demo؛ تستخدم بيانات حقيقية فقط في العرض التجاري.

</details>

<details>
<summary>J02 — تحليلات المشتركين والنمو / Subscriber Growth Views</summary>

- **العنوان العربي:** تحليلات المشتركين والنمو.
- **English title:** Subscriber Growth Views.
- **الوصف العربي القصير:** إتاحة تحليلات المشتركين والنمو ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Subscriber Growth Views capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Dashboard.php](../../application/controllers/Dashboard.php) — `index; SM bot_subscribers_data; messenger_bot_subscriber`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: لا تستخدم demo_data كقياس منتج.

</details>

<details>
<summary>J03 — Messenger Analytics / Messenger Analytics</summary>

- **العنوان العربي:** Messenger Analytics.
- **English title:** Messenger Analytics.
- **الوصف العربي القصير:** إتاحة Messenger Analytics ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Messenger Analytics capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Messenger_bot_analytics.php](../../application/controllers/Messenger_bot_analytics.php) — `result`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: module 260.

</details>

<details>
<summary>J04 — Facebook Page Analytics / Facebook Page Analytics</summary>

- **العنوان العربي:** Facebook Page Analytics.
- **English title:** Facebook Page Analytics.
- **الوصف العربي القصير:** إتاحة Facebook Page Analytics ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Facebook Page Analytics capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Page_analytics.php](../../application/controllers/Page_analytics.php) — `analytics; Facebook_page_insight`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: مقاييس API قديمة بحاجة مراجعة.

</details>

<details>
<summary>J05 — تصدير بيانات وتقارير / Data and Report Export</summary>

- **العنوان العربي:** تصدير بيانات وتقارير.
- **English title:** Data and Report Export.
- **الوصف العربي القصير:** إتاحة تصدير بيانات وتقارير ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Data and Report Export capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `download_result; EC download_csv; CA download_get_reply_info`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: التغطية لكل شاشة؛ ليس report builder عامًا.

</details>

<details>
<summary>J06 — Date Filters / Date Filters</summary>

- **العنوان العربي:** Date Filters.
- **English title:** Date Filters.
- **الوصف العربي القصير:** إتاحة Date Filters ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Date Filters capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_campaign_reports; DA index`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: اختبار timezone ونطاق التاريخ.

</details>

<details>
<summary>J07 — Charts وGraphs / Visual Charts</summary>

- **العنوان العربي:** Charts وGraphs.
- **English title:** Visual Charts.
- **الوصف العربي القصير:** إتاحة Charts وGraphs ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Visual Charts capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Dashboard.php](../../application/controllers/Dashboard.php) — `index; assets/modules; plugins/apexcharts`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: مكتبات الرسم لا تثبت دقة المؤشرات.

</details>

<details>
<summary>J08 — إيرادات اشتراكات المنصة / Platform Subscription Revenue</summary>

- **العنوان العربي:** إيرادات اشتراكات المنصة.
- **English title:** Platform Subscription Revenue.
- **الوصف العربي القصير:** إتاحة إيرادات اشتراكات المنصة ضمن شاشات البيانات والتقارير المتاحة، بعد الإعداد والاختبار.
- **English short description:** Use the Platform Subscription Revenue capability within reports based on the records and API metrics available to the account.
- **فائدة العميل/المشغل:** الرجوع إلى البيانات المتاحة لاتخاذ قرار، مع فهم تعريف كل مؤشر.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PAY+LICENSE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Payment.php](../../application/controllers/Payment.php) — `earning_summary; transaction_log`.
- **التحقق المتبقي:** مطابقة النتائج مع SQL/API وعينة اختبار وتوقيت وتصدير؛ استبعاد demo من العرض. قيد خاص: مختلف عن إيرادات المتجر I29.

</details>

<details>
<summary>AI03 — توليد نص عبر API / AI Text Generation</summary>

- **العنوان العربي:** توليد نص عبر API.
- **English title:** AI Text Generation.
- **الوصف العربي القصير:** إتاحة توليد نص عبر API ضمن ردود AI النصية الموجهة بالتعليمات، بعد الإعداد والاختبار.
- **English short description:** Use the AI Text Generation capability within prompt-based text replies using a configured external AI service.
- **فائدة العميل/المشغل:** صياغة رد نصي من تعليمات النشاط ضمن حدود الخدمة الخارجية.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ AI+ADDON67 وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `get_ai_reply_open_ai`.
- **التحقق المتبقي:** تحديث توافق النموذج، اختبار العربية والفشل والسلامة والبيانات المرسلة والتكلفة وحدود السياق. قيد خاص: استجابة choices؛ لا محرر محتوى عام مستقل مؤكد.

</details>

<details>
<summary>AI04 — ردود AI داخل البوت وFlows / AI Replies in Bot Flows</summary>

- **العنوان العربي:** ردود AI داخل البوت وFlows.
- **English title:** AI Replies in Bot Flows.
- **الوصف العربي القصير:** إتاحة ردود AI داخل البوت وFlows ضمن ردود AI النصية الموجهة بالتعليمات، بعد الإعداد والاختبار.
- **English short description:** Use the AI Replies in Bot Flows capability within prompt-based text replies using a configured external AI service.
- **فائدة العميل/المشغل:** صياغة رد نصي من تعليمات النشاط ضمن حدود الخدمة الخارجية.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ AI+ADDON67+META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/modules/visual_flow_builder/controllers/Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; openaiInput; MB send_message_bot_reply`.
- **التحقق المتبقي:** تحديث توافق النموذج، اختبار العربية والفشل والسلامة والبيانات المرسلة والتكلفة وحدود السياق. قيد خاص: توليد رد واحد حسب تعليمات ووصف.

</details>

<details>
<summary>AI06 — Prompts وتعليمات قابلة للإعداد / Configurable AI Instructions</summary>

- **العنوان العربي:** Prompts وتعليمات قابلة للإعداد.
- **English title:** Configurable AI Instructions.
- **الوصف العربي القصير:** إتاحة Prompts وتعليمات قابلة للإعداد ضمن ردود AI النصية الموجهة بالتعليمات، بعد الإعداد والاختبار.
- **English short description:** Use the Configurable AI Instructions capability within prompt-based text replies using a configured external AI service.
- **فائدة العميل/المشغل:** صياغة رد نصي من تعليمات النشاط ضمن حدود الخدمة الخارجية.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ AI وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Integration.php](../../application/controllers/Integration.php) — `open_ai_api_credentials_action; instruction_to_ai; VF reply_text`.
- **التحقق المتبقي:** تحديث توافق النموذج، اختبار العربية والفشل والسلامة والبيانات المرسلة والتكلفة وحدود السياق. قيد خاص: وصف التدريب نص حر وليس تدريب نموذج.

</details>

<details>
<summary>AI15 — AI لردود تعليقات Facebook وInstagram / AI Comment Replies</summary>

- **العنوان العربي:** AI لردود تعليقات Facebook وInstagram.
- **English title:** AI Comment Replies.
- **الوصف العربي القصير:** إتاحة AI لردود تعليقات Facebook وInstagram ضمن ردود AI النصية الموجهة بالتعليمات، بعد الإعداد والاختبار.
- **English short description:** Use the AI Comment Replies capability within prompt-based text replies using a configured external AI service.
- **فائدة العميل/المشغل:** صياغة رد نصي من تعليمات النشاط ضمن حدود الخدمة الخارجية.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ AI+META+ADDON67 وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `webhook_callback; ai_reply; CA get_ai_reply_open_ai calls`.
- **التحقق المتبقي:** تحديث توافق النموذج، اختبار العربية والفشل والسلامة والبيانات المرسلة والتكلفة وحدود السياق. قيد خاص: تحتاج سلامة المحتوى واختبار الإفصاح.

</details>

<details>
<summary>S01 — حسابات SaaS متعددة / Multiple SaaS Accounts</summary>

- **العنوان العربي:** حسابات SaaS متعددة.
- **English title:** Multiple SaaS Accounts.
- **الوصف العربي القصير:** إتاحة حسابات SaaS متعددة ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Multiple SaaS Accounts capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `sign_up_action; users; package_id`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: قاعدة مشتركة تعتمد user_id.

</details>

<details>
<summary>S03 — لوحة المدير وإدارة المستخدمين / Administrator and User Management</summary>

- **العنوان العربي:** لوحة المدير وإدارة المستخدمين.
- **English title:** Administrator and User Management.
- **الوصف العربي القصير:** إتاحة لوحة المدير وإدارة المستخدمين ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Administrator and User Management capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Admin.php](../../application/controllers/Admin.php) — `settings; user management views; H user_delete_action`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: يجب اختبار كل action لا menu فقط.

</details>

<details>
<summary>S04 — تسجيل مستخدم / User Registration</summary>

- **العنوان العربي:** تسجيل مستخدم.
- **English title:** User Registration.
- **الوصف العربي القصير:** إتاحة تسجيل مستخدم ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the User Registration capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `sign_up; sign_up_action; account_activation_action`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: تفعيل ورمز CAPTCHA حسابي.

</details>

<details>
<summary>S05 — تسجيل دخول / User Login</summary>

- **العنوان العربي:** تسجيل دخول.
- **English title:** User Login.
- **الوصف العربي القصير:** إتاحة تسجيل دخول ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the User Login capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `login; login_page; logout`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: MD5 blocker قبل الإطلاق.

</details>

<details>
<summary>S06 — استرداد كلمة المرور / Password Recovery</summary>

- **العنوان العربي:** استرداد كلمة المرور.
- **English title:** Password Recovery.
- **الوصف العربي القصير:** إتاحة استرداد كلمة المرور ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Password Recovery capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `code_genaration; recovery_check; forget_password`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: اختبار عمر الرمز وتحديد المعدل.

</details>

<details>
<summary>S07 — باقات اشتراك / Subscription Packages</summary>

- **العنوان العربي:** باقات اشتراك.
- **English title:** Subscription Packages.
- **الوصف العربي القصير:** إتاحة باقات اشتراك ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Subscription Packages capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LICENSE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Payment.php](../../application/controllers/Payment.php) — `package_manager; add_package_action; edit_package_action`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: قيود license_type في المسارات.

</details>

<details>
<summary>S08 — حدود ميزات بحسب الباقة / Package Feature Limits</summary>

- **العنوان العربي:** حدود ميزات بحسب الباقة.
- **English title:** Package Feature Limits.
- **الوصف العربي القصير:** إتاحة حدود ميزات بحسب الباقة ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Package Feature Limits capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ QUOTA وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `module_access; _check_usage; package.module_ids`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: مزيج helper وفحوص متحكم.

</details>

<details>
<summary>S09 — حصص استخدام خاصة بالمستخدم / Per-User Usage Quotas</summary>

- **العنوان العربي:** حصص استخدام خاصة بالمستخدم.
- **English title:** Per-User Usage Quotas.
- **الوصف العربي القصير:** إتاحة حصص استخدام خاصة بالمستخدم ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Per-User Usage Quotas capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ QUOTA وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `_insert_usage_log; _delete_usage_log; _check_usage`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: monthly_limit وbulk_limit؛ ليست tokens AI.

</details>

<details>
<summary>S10 — Trial ومدة تجربة / Trial Accounts and Expiration</summary>

- **العنوان العربي:** Trial ومدة تجربة.
- **English title:** Trial Accounts and Expiration.
- **الوصف العربي القصير:** إتاحة Trial ومدة تجربة ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Trial Accounts and Expiration capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LICENSE+CRON وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `sign_up_action; package.price=Trial; expired_date`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: اختبار انتهاء وحالة المستخدم.

</details>

<details>
<summary>S11 — انتهاء وتجديد الاشتراك / Subscription Expiration and Renewal</summary>

- **العنوان العربي:** انتهاء وتجديد الاشتراك.
- **English title:** Subscription Expiration and Renewal.
- **الوصف العربي القصير:** إتاحة انتهاء وتجديد الاشتراك ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Subscription Expiration and Renewal capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ CRON+PAY وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `member_validity; CJ membership_alert; expired_users_disable_bot`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: الوقت والمنطقة وحالة الدفع.

</details>

<details>
<summary>S12 — فوترة وشراء اشتراك / Subscription Purchase and Billing</summary>

- **العنوان العربي:** فوترة وشراء اشتراك.
- **English title:** Subscription Purchase and Billing.
- **الوصف العربي القصير:** إتاحة فوترة وشراء اشتراك ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Subscription Purchase and Billing capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PAY+LICENSE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Payment.php](../../application/controllers/Payment.php) — `payment_button; buy_package; transaction_log`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: فحص webhooks/idempotency.

</details>

<details>
<summary>S13 — تفعيل باقة تلقائي بعد الدفع / Post-Payment Package Activation</summary>

- **العنوان العربي:** تفعيل باقة تلقائي بعد الدفع.
- **English title:** Post-Payment Package Activation.
- **الوصف العربي القصير:** إتاحة تفعيل باقة تلقائي بعد الدفع ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Post-Payment Package Activation capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PAY+LICENSE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Stripe_action.php](../../application/controllers/Stripe_action.php) — `index; subscriber_login; IP processing`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: نجاح واجهة المتصفح ليس إثبات الدفع.

</details>

<details>
<summary>S14 — Manual Payment وموافقة المدير للاشتراك / Manual Subscription Payment Approval</summary>

- **العنوان العربي:** Manual Payment وموافقة المدير للاشتراك.
- **English title:** Manual Subscription Payment Approval.
- **الوصف العربي القصير:** إتاحة Manual Payment وموافقة المدير للاشتراك ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Manual Subscription Payment Approval capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PAY+LICENSE+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Payment.php](../../application/controllers/Payment.php) — `manual_payment; manual_payment_approve; manual_payment_reject`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: مختلف عن COD متجر.

</details>

<details>
<summary>S19 — تغيير Logo وFavicon عام / Application Logo and Favicon</summary>

- **العنوان العربي:** تغيير Logo وFavicon عام.
- **English title:** Application Logo and Favicon.
- **الوصف العربي القصير:** إتاحة تغيير Logo وFavicon عام ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Application Logo and Favicon capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ BRAND+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Admin.php](../../application/controllers/Admin.php) — `general_settings_action; upload logo/favicon`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: فحص مقاسات وأماكن ظهور الهوية.

</details>

<details>
<summary>S20 — تغيير اسم التطبيق والهوية / Application Name and Branding</summary>

- **العنوان العربي:** تغيير اسم التطبيق والهوية.
- **English title:** Application Name and Branding.
- **الوصف العربي القصير:** إتاحة تغيير اسم التطبيق والهوية ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Application Name and Branding capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ BRAND وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Admin.php](../../application/controllers/Admin.php) — `general_settings_action; my_config product_name/product_short_name`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: اسم Wasla لم يطبق ضمن التدقيق.

</details>

<details>
<summary>S21 — علامة تجارية في رسائل البريد / Email Branding Templates</summary>

- **العنوان العربي:** علامة تجارية في رسائل البريد.
- **English title:** Email Branding Templates.
- **الوصف العربي القصير:** إتاحة علامة تجارية في رسائل البريد ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Email Branding Templates capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ BRAND+MAIL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Admin.php](../../application/controllers/Admin.php) — `email template settings; H _mail_sender`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: بعض النصوص والروابط ثابتة؛ تحتاج جرد.

</details>

<details>
<summary>S22 — Brand Logo خاص بالمستخدم / Per-User Brand Logo</summary>

- **العنوان العربي:** Brand Logo خاص بالمستخدم.
- **English title:** Per-User Brand Logo.
- **الوصف العربي القصير:** إتاحة Brand Logo خاص بالمستخدم ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Per-User Brand Logo capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ BRAND+UPLOAD وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Myprofile.php](../../application/controllers/Myprofile.php) — `edit_profile_action; users.brand_logo; brand_url`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: لا يعادل نطاقًا خاصًا لكل عميل.

</details>

<details>
<summary>S24 — دعم العربية / Arabic Language Interface</summary>

- **العنوان العربي:** دعم العربية.
- **English title:** Arabic Language Interface.
- **الوصف العربي القصير:** إتاحة دعم العربية ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Arabic Language Interface capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LANGUAGE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Multi_language.php](../../application/controllers/Multi_language.php) — `application/language/arabic; _language_loader`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: وجود ترجمة لا يضمن اكتمال جميع الوحدات.

</details>

<details>
<summary>S25 — دعم الإنجليزية / English Language Interface</summary>

- **العنوان العربي:** دعم الإنجليزية.
- **English title:** English Language Interface.
- **الوصف العربي القصير:** إتاحة دعم الإنجليزية ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the English Language Interface capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LANGUAGE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Multi_language.php](../../application/controllers/Multi_language.php) — `application/language/english; config language`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: اختبار جميع الشاشات.

</details>

<details>
<summary>S26 — RTL/LTR / RTL and LTR Layouts</summary>

- **العنوان العربي:** RTL/LTR.
- **English title:** RTL and LTR Layouts.
- **الوصف العربي القصير:** إتاحة RTL/LTR ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the RTL and LTR Layouts capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LANGUAGE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `is_rtl; _viewcontroller; EC store_locale`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: اختبار Flow Builder والمحررات والطباعة.

</details>

<details>
<summary>S28 — Google/Facebook Social Login / Google and Facebook Social Login</summary>

- **العنوان العربي:** Google/Facebook Social Login.
- **English title:** Google and Facebook Social Login.
- **الوصف العربي القصير:** إتاحة Google/Facebook Social Login ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Google and Facebook Social Login capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ GOOGLE+META وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Home.php](../../application/controllers/Home.php) — `google_login_back; facebook_login_back`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: إعداد OAuth وcallback.

</details>

<details>
<summary>S29 — PayPal Recurring Subscription / PayPal Recurring Subscriptions</summary>

- **العنوان العربي:** PayPal Recurring Subscription.
- **English title:** PayPal Recurring Subscriptions.
- **الوصف العربي القصير:** إتاحة PayPal Recurring Subscription ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the PayPal Recurring Subscriptions capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ PAY+LICENSE وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Payment.php](../../application/controllers/Payment.php) — `payment_button; paypal_payment_type=recurring; IP`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: لا يثبت recurring في جميع البوابات.

</details>

<details>
<summary>S30 — سجل دخول وإعلانات للمستخدمين / Login Records and User Announcements</summary>

- **العنوان العربي:** سجل دخول وإعلانات للمستخدمين.
- **English title:** Login Records and User Announcements.
- **الوصف العربي القصير:** إتاحة سجل دخول وإعلانات للمستخدمين ضمن إدارة الحسابات والاشتراك وهوية الخدمة، بعد الإعداد والاختبار.
- **English short description:** Use the Login Records and User Announcements capability within account, subscription and branding administration after security and license validation.
- **فائدة العميل/المشغل:** تنظيم إدارة الخدمة وحساباتها وباقاتها وهوية واجهتها.
- **المتطلبات التقنية:** البيئة المشتركة أولًا؛ LOCAL وفق مفاتيح 08. لا تجاوز لبوابات الإضافة أوالخدمة.
- **دليل التنفيذ:** [application/controllers/Admin.php](../../application/controllers/Admin.php) — `login log views; H user_login_info; Announcement controller`.
- **التحقق المتبقي:** اختبار التسجيل/الدور/الباقة أوالتخصيص المعني مع حسابين وإصلاح أمن المنتج. قيد خاص: ليس Audit Trail شامل لكل تغيير.

</details>

## قائمة التفعيل والتطوير والتعليق

كل القوائم التالية مشتقة من Marketing Readiness في المصفوفة؛ لا تضيف قدرات جديدة إلى عددها.

### تحتاج تفعيلًا — REQUIRES_ACTIVATION

| ID | القدرة | المتطلب/الحد |
| --- | --- | --- |
| A01 | منشئ Flow مرئي Drag-and-Drop | META+ADDON؛ حزم واجهة جاهزة؛ تفعيل 315 غير معلوم |
| A03 | بوت Instagram DM وتدفقاته | META+ADDON؛ يشمل طلب C الخاص برسائل DM؛ لا يعد مرتين |
| A07 | تدفقات شرطية | ADDON63+META؛ المقيّم موجود؛ بوابة project_id=63 والحزمة غير موجودة |
| A20 | Webview ونماذج الويب | ADDON31+META؛ حزمة Connectivity غير موجودة وبعض النماذج موجود |
| A21 | حقول المشترك المخصصة | ADDONINPUT+META؛ تخزين وعرض موجودان؛ واجهة دورة إدارة الإضافة غير متوفرة |
| A22 | جمع إجابات المستخدم متعدد الخطوات | ADDONINPUT+META؛ جداول user_input_flow_* غير معرفة في SQL الأولي |
| A26 | تصدير واستيراد إعدادات البوت | ADDON31+META؛ بعض الأزرار مقيدة؛ اختبار round-trip ومطابقة IDs |
| C02 | Private Replies من تعليقات Instagram | META+ADDONIG؛ توجد معالجات؛ الاختلاف بين template والرد البسيط يحتاج اختبار |
| C04 | نشر صور Instagram | META+CRON+ADDON؛ يستخدم حسابًا مرتبطًا عبر Facebook |
| D06 | إسناد المحادثات | ADDON65+PUSHER؛ الدوال موجودة لكن حزمة إدارة الفريق وجداولها غائبة |
| E05 | Facebook Carousel/Slideshow | META+CRON+ADDON؛ أنواع API قديمة تحتاج تحققًا |
| E11 | YouTube Feed Auto Posting | ADDON39+RSS+CRON؛ لا توجد حزمة auto_social_sharing المنفصلة |
| E12 | WordPress Feed Auto Posting | ADDON39+RSS+CRON؛ ليس نشرًا كاملًا لإدارة WordPress |
| F01 | Messenger Broadcasting | META+CRON+ADDON30؛ المحرك موجود؛ بوابات الباقة والإضافة تحتاج تحققًا |
| F03 | Recurring Notifications | META+CRON+ADDON66؛ الحزمة المنفصلة غير موجودة |
| F10 | تسلسلات Messenger Drip | META+CRON+ADDON30؛ منطق إرسال مع بوابة إضافة غير موجودة |
| I06 | سعر بحسب Variation | ADDONVAR+STORE؛ حزمة وجدول سعر الخاصية غير موجودين في الأساس |
| I22 | منتجات رقمية وتنزيل | ADDONDIGITAL+STORE؛ مسار موجود؛ الحزمة غير موجودة وتحتاج entitlement |
| I23 | تقييم وتعليق منتج | ADDON48+STORE؛ جداول ecommerce_product_review/comment غير موجودة في المخطط الأولي |
| I30 | Related/Upsell/Downsell Products | ADDONRELATED+STORE؛ حقول ومسارات؛ حزمة التسجيل غير موجودة |
| AI01 | OpenAI API Integration | AI+ADDON67؛ التسجيل لا يعني مفاتيح جاهزة |
| S17 | Roles وصلاحيات أعضاء الفريق | ADDON65؛ توجد آلية check لكن إدارة الأدوار والإضافة غير موجودة |
| L02 | HTTP API Integration عام في Flow | ADDONHTTP+HTTP؛ Custom SMS Gateway ليس هذه الميزة |
| L06 | Flow Builder Insight | ADDON64+META؛ messenger_bot_message_sent_stat موجود؛ لا حزمة تسجيل |
| L07 | Blog | LICENSE؛ محتوى مستخدم مستقل عن AI |
| L08 | Support Desk | LICENSE؛ join team_members يحتاج معالجة مخطط/إضافة |
| L09 | Menu وCustom Pages | LOCAL؛ تأثير الصلاحيات والقائمة |

### تحتاج تطويرًا — REQUIRES_DEVELOPMENT

| ID | القدرة | المتطلب/الحد |
| --- | --- | --- |
| G11 | Africa's Talking SMS | SMS؛ عنوان sandbox ثابت عبر HTTP؛ يحتاج معالجة واختبار |
| G13 | SMS عربي Unicode | SMS؛ لا دعم Unicode موحد؛ اختبار UCS-2/segments لكل مزود |
| H13 | Bounce Handling | MAIL؛ يلزم مزامنة callbacks وsuppression list |
| AI02 | اختيار Model Identifier | AI؛ قوائم مؤرخة؛ أي اسم غير معروف يذهب لمسار text |
| AI05 | سياق محادثة متعدد الأدوار | AI؛ لا قراءة تاريخ livechat_messages لتكوين history |
| AI07 | Knowledge Base وDocument Retrieval/RAG | BASE؛ لا رفع مستندات ومعالجة واسترجاع مرتبطان برد AI |
| AI08 | Intent Detection تلقائي | BASE؛ المطابقة النصية ليست classifier مستقلًا |
| AI09 | مساعدة خدمة عملاء واعية بالمحادثة | AI+META؛ لا agent desktop copilot أوhandoff AI موثق كامل |
| AI10 | Token Usage Metering | AI؛ maximum_token حد طلب وليس حساب الاستهلاك |
| AI11 | إدارة تكلفة AI وميزانية | AI؛ لا صرف مالي أوتنبيه ميزانية مستقل |
| AI12 | حدود AI لكل مستخدم | AI+QUOTA؛ لا دليل quota tokens شهرية أوخصم رصيد |
| AI13 | مزودو AI بديلون | BASE؛ المحول يحصر URL في api.openai.com |
| AI14 | AI Agents وأدوات وخطط مستقلة | BASE؛ اسم AI Agent في prompt ليس Agent runtime |
| W02 | ربط WABA ورقم أعمال | BASE؛ أسماء حقول Livechat لا تكفي |
| W03 | WhatsApp Incoming Webhook | BASE؛ الموزع للرسائل والتعليقات FB/IG |
| W04 | إرسال رسائل WhatsApp Business | BASE؛ الإرسال الفعلي عبر Facebook token |
| W05 | WhatsApp Chatbot Flows | BASE؛ لا منفذ WhatsApp للتدفقات |
| W06 | WhatsApp Template Messaging | BASE؛ قوالب Messenger ليست WhatsApp Approved Templates |
| W07 | WhatsApp Bulk Messaging | BASE؛ لا محرك حملة WhatsApp |
| W10 | WhatsApp Campaign Reporting | BASE؛ لا pipeline حالات رسائل WhatsApp |
| W11 | إرسال تفاصيل طلب متجر إلى WhatsApp | STORE+ADDONWA؛ لم يوجد wa.me أوapi.whatsapp.com أوزر إخراج مكتمل |
| W12 | WhatsApp Payment/Ordering Workflow كامل | BASE؛ المتجر والمتصفح لا يساويان WhatsApp Payments |
| S02 | عزل Tenant/Customer | LOCAL؛ لا قواعد بيانات مستقلة؛ توجد عمليات غير مقيدة بالمالك |
| S15 | فاتورة اشتراك SaaS مستقلة | BASE؛ receipt المتجر وInvoiceStatus عند المزود لا يثبتان فاتورة اشتراك |
| S16 | Coupons لاشتراك SaaS | BASE؛ ecommerce_coupon خاص بالمتجر |
| S23 | Custom Domain/Subdomain لكل Tenant | BASE؛ base_url عام وdomain_whitelist للبوت شيء مختلف |
| S27 | White Label كامل بلا مراجع مورد | BRAND+LICENSE؛ مراجع ثابتة وتراخيص الطرف الثالث تحتاج مراجعة |

### لا تعلن الآن — DO_NOT_ADVERTISE_YET

| ID | القدرة | المتطلب/الحد |
| --- | --- | --- |
| B04 | تعليقات Ads أوDark Posts | META؛ توجد معالجة post_id عامة؛ لم يثبت مسار Ads/Dark Post خاص |
| C08 | أنواع حسابات Instagram والصلاحيات | META؛ الحساب المرتبط instagram_business_account؛ لا دليل دعم كل الأنواع أو Instagram Login مستقل |
| D07 | إدارة أعضاء فريق متعددين | ADDON65؛ لا متحكم team_member ضمن الوحدات |
| D11 | صندوق قنوات موحد شامل | META؛ واجهة FB/IG مع اختيار قناة؛ لا WhatsApp/SMS/Email Inbox شامل |
| E14 | أداء المنشور التفصيلي | META؛ توجد قياسات؛ تغطية كل نوع منشور غير مؤكدة |
| F08 | قيود نافذة الرسائل وMessage Tags | META؛ مؤقتات 1430/10050 دقيقة بالشيفرة؛ لا تعد سياسة حالية مؤكدة |
| G05 | تقارير إرسال SMS | SMS؛ delivery_id أوSubmitted ليس Delivery Receipt نهائيًا |
| G14 | SMS Sequence Campaigns | ADDON40+SMS+CRON؛ مراجع sms_email_sequence في الكود؛ لا حزمة الإنشاء/المجدول الكاملة |
| H09 | Email Sequences | ADDON40+MAIL+CRON؛ ربط تسلسل لا يثبت وجود إدارة وتنفيذ كاملين |
| I24 | WooCommerce Synchronization | ADDONWC؛ حقول عرض وارتباط لا تثبت تنفيذ مزامنة كاملة |
| I25 | WooCommerce Cart Recovery | ADDON33+CRON+META؛ مستهلكات وجداول غير متاحة |
| W01 | WhatsApp Business Cloud API | BASE؛ لا عميل Cloud API مثبت |
| W08 | WhatsApp Contact Management | BASE؛ لا CRUD WhatsApp متكامل أوschema |
| W09 | WhatsApp Conversation Inbox | BASE؛ لا يصح تسويق WhatsApp Inbox |
| S18 | Affiliate Management | ADDONAFF+LICENSE؛ توجد hooks؛ لا إدارة أوجداول الأساس |
| L01 | Google Sheets Integration | ADDONSHEETS؛ SDK أوصورة أيقونة لا يعد تكاملًا |
| L03 | Google Contacts Integration | ADDONCONTACTS؛ لا مزامنة جهات اتصال مثبتة |
| L04 | ChatPion API Documentation وREST module | ADDONAPI+LICENSE؛ plugins/api ملفات واجهة؛ native_api يولد مفتاحًا فقط |
| L05 | Facebook Group Posting | META+ADDONGROUP؛ flag معطل حاليًا؛ صلاحية المنصة الحالية غير متحققة |
| L10 | تحديثات التطبيق والإضافات | VENDOR+LICENSE؛ لا تشغيل updater ضمن التدقيق؛ يحتاج backup/review |
