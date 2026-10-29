# 13 — استراتيجية Wasla AI دون إضافات ChatPion مدفوعة

**التاريخ: 29 أكتوبر 2026. النسخة المحلية: ChatPion 9.1.1.**

**القرار المعتمد:** المستخدم يملك ChatPion Extended License فقط، ولا يملك Add-on Bundle ولا يخطط لشراء إضافات مدفوعة الآن. تبنى الخطة على الشيفرة المرخصة الموجودة، والوظائف المضمنة، والحزم الرسمية المجانية التي يمكن الحصول عليها بشروطها، وتطوير أصلي محدود ومدروس. **ميزانية شراء إضافات ChatPion في هذه الخطة = صفر**؛ ذلك لا يجعل الاستضافة أوالرسائل أوAI أوالعمل الهندسي مجانية.

هذا امتداد للتدقيق السابق، وليس إعادة تدقيق من البداية. [08 — المصفوفة الأصلية](08-master-feature-matrix.md) تبقى مرجع وجود الشيفرة؛ يضيف هذا التقرير قرار التنفيذ والميزانية لكل **223 Canonical Feature ID**. وعند تعارض افتراض مالي قديم عن شراء/تفعيل إضافة مع هذا التقرير، يعتمد هذا التقرير في خطة Wasla. لا يعني ذلك تغيير Code Status القديم أوإثبات Runtime.

**نطاق العمل المنفذ:** قراءة تقارير وشيفرة ذات صلة، والتحقق من صفحات توثيق عامة. لم يُشغل التطبيق أوCron أوComposer أوSQL أوAPIs الإنتاج، ولم تُنزّل أوتُثبت إضافة، ولم تُقرأ قيم تراخيص أوأسرار. ملف التقرير هذا هو التغيير الوحيد في هذه الجولة. كل خطوات التطوير والتفعيل والاختبار أدناه مقترحات مستقبلية.

## 1. قواعد القرار: ما الذي يعنيه كل تصنيف؟

| التصنيف | معنى القرار في هذا التقرير |
| --- | --- |
| CORE_AVAILABLE | وظيفة أساسية موجودة في النسخة المرخصة، بلا شراء إضافة وبلا خدمة خارجية خاصة لازمة لاستخدام سطحها المحلي. إعداد البيئة والأمان العام مطلوب دائمًا. |
| CORE_REQUIRES_SETUP | وظيفة مضمنة تحتاج حسابًا/قناة/إعدادًا/تسجيلًا نظاميًا لوحدة مضمنة، ثم اختبارًا. لا يمنح التصنيف صلاحية API أويثبت التوافق؛ أي عيب يظهر يعالج قبل الإطلاق. |
| FREE_ADDON_OPTION | حزمة رسمية مجانية مرشحة ومحددة بالاسم، غير مثبتة محليًا؛ الحصول عليها والتوافق والاستحقاق والفحص شروط مستقلة. ليست وعد تنزيل متاح في حساب المستخدم الآن. |
| CUSTOM_DEVELOPMENT | مسار أصلي ممكن ومحدد النطاق لإكمال فجوة أومعالجة عيب، باستخدام واجهات Core المسموحة أومواصفات APIs العامة؛ لا شراء حزمة ولافتح حزمة محمية. |
| PAID_ADDON_ONLY | نسخة المورد الجاهزة من حزمة مدفوعة غير مشتراة؛ مستبعدة من الخطة. لا تعني استحالة بناء وظيفة عامة مشابهة بصورة أصلية. |
| NOT_FEASIBLE_NOW | استبعاد من نطاق الإطلاق الحالي بسبب غياب بنية كبيرة أواهلية API غير مثبتة أودليل غير كافٍ. ليس حكم استحالة دائمة، ولا دعوة لشراء حزمة. |

التصنيف يحدد **المسار المقترح للقدرة الوظيفية**، لا اسم المجلد. ملف داخل application/modules قد يكون جزءًا مضمنًا من المنتج. ولا يعني وجود دالة خلف project_id مدفوع أن تشغيلها أصبح مباحًا دون استحقاق.

### تصحيح مهم مبني على توثيق المورد

سجل المورد يذكر دمج Flow Builder وInstagram DM Bot في V8.0، ويذكر أن AI Integration أصبحت مجانية في V9.1. تتفق هذه المعلومات مع وجود الوحدات الثلاث في النسخة المحلية 9.1.1. لذلك تعامل **A01/A03/AI01 كوظائف مضمنة تحتاج إعدادًا، لا كشراء bundle جديد**. [سجل ChatPion الرسمي](https://xeroneit.net/blog/xerochat-change-log).

تؤكد [صفحة Bundle الرسمية](https://xeroneit.net/portfolio/chatpion-add-on-bundle/30) الفصل بين الوحدات المضمنة والحزم التجارية. لا نستنتج من وصف Condition Reply التاريخي المجاني لبعض المشترين السابقين أهلية لهذا العرض؛ المستخدم يملك Extended فقط ولم يذكر شراء Flow Builder سابقًا.

**التسجيل النظامي لا يعني تجاوز الفحص:** إن تعطل تفعيل وحدة مضمنة أومجانية بطلب رمز غير متاح، يستخدم مسار المورد الصحيح للحزمة/الإصدار والاستحقاق الحالي، أوتؤجل الوظيفة. لا تُحذف فحوص الترخيص، ولا تُختلق purchase codes أوملفات licence، ولا تُضاف سجلات add_ons لمعرفات إضافات غير مملوكة. إعداد صلاحيات ميزات Core للباقة من لوحة الإدارة العادية شيء مختلف عن ادعاء امتلاك حزمة.

### الأعداد دون تضخيم

| التصنيف الأساسي لقدرات المصفوفة | العدد |
| --- | ---: |
| CORE_AVAILABLE | 37 |
| CORE_REQUIRES_SETUP | 114 |
| FREE_ADDON_OPTION | 4 |
| CUSTOM_DEVELOPMENT | 49 |
| PAID_ADDON_ONLY | 0 |
| NOT_FEASIBLE_NOW | 19 |
| **الإجمالي** | **223** |

**151 قدرة** تقع في مساري Core، لكنها ليست 151 ميزة مختبرة أوكلها قابلة لإطلاق فوري. الأمان والمخطط وAPI compatibility شروط عامة. **49 قدرة تطوير ليست 49 مشروعًا**: عدة IDs تشترك في مشروع واحد، مثل أدوار الفريق أوعداد AI. الأربع المجانية هي I30/S18/W11/L04؛ Group Tools فرصة تاريخية معروضة أدناه لكن ID L05 مصنف NOT_FEASIBLE_NOW.

العدد صفر في PAID_ADDON_ONLY للقدرات الوظيفية لا يقول إن حزم المورد مجانية: **19 حزمة مورد تجارية** موثقة في القسم4، ومسار استخدامها الجاهز PAID_ADDON_ONLY ومستبعد. للوظائف المراد الاحتفاظ بها اقترحنا Core محدودًا أوتطويرًا أصليًا؛ وما لا يمكن الالتزام به الآن أجّلناه. جرد الحزم وحدة عد مختلفة لا يضاف إلى223.

لم يحدد المستخدم عدد مطورين أوميزانية ساعات أوموعد إطلاق، لذلك لا يمثل NOT_FEASIBLE_NOW إثباتًا لعجز الميزانية عن تمويل البرمجة. هو قرار نطاق محافظ للـMVP المقترح، أوتعليق بسبب أهلية/توافق غير مثبتين. إذا خصصت لاحقًا موارد لمشروع WhatsApp أوRAG مستقل، يعاد تقييمه كـCUSTOM_DEVELOPMENT High؛ عدم شراء Bundle ليس حاجزًا تقنيًا أبديًا أمام البرمجة الأصلية.

## 2. ما يمكن الاستفادة منه دون شراء إضافات

البيئة الحالية بلا database.php، ومخطط البداية لا يشمل كل جداول الإضافات المشار إليها. لا تعني امتلاك Extended أن كل references في المصدر يجب تشغيلها. يراجع [01 — المعمارية](01-project-architecture.md) و[07 — الأمن](07-security-and-readiness.md) قبل إعداد staging.

| العائلة | ما نحتفظ به | أدلة التنفيذ | الحدود |
| --- | --- | --- | --- |
| إدارة SaaS الأساسية | حسابات، دخول واسترداد، باقات وحدود وTrial وتجديد ومدفوعات يدوية | [Home](../../application/controllers/Home.php)::sign_up_action/login/_check_usage، [Payment](../../application/controllers/Payment.php)::package_manager/manual_payment_approve | استحقاق Extended معتمد من المستخدم؛ إصلاح MD5 والعزل والتفويض قبل الاستخدام التجاري. لا Teams أوفواتير ضريبية ضمنًا. |
| بوتات FB/IG وFlow | كلمات exact/partial، ردود وأزرار ووسائط وfallback وQuick Replies ومحرر Flow المضمن | [Messenger_bot](../../application/controllers/Messenger_bot.php)::webhook_callback_main/send_message_bot_reply، [Visual_flow_builder](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php)::load_builder/flowbuilder_submit | نماذج عقد Core فقط؛ كل نوع رسالة يختبر لكل قناة. لا Conditions/UserInput/Sequences مدفوعة تلقائيًا. |
| بيانات جهات الاتصال | labels، بيانات المشترك، جمع بريد/هاتف Quick Reply، CSV وجروبات | [Subscriber_manager](../../application/controllers/Subscriber_manager.php)::bulk_group_assign، [Sms_email_manager](../../application/controllers/Sms_email_manager.php)::ajax_import_csv_files/contact_group_list | جمع بريد/هاتف موجود لا يساوي User Input Builder عامًا. يراعى consent. |
| المحادثات | Messenger/Instagram، سجل، canned responses، بحث، فلاتر، unread/archive | [Livechat](../../application/controllers/Livechat.php)::load_livechat/reply_to_conversation/search_subscriber | مالك واحد لكل نشاط في MVP؛ تقييد user_id/page إلزامي؛ Pusher اختياري بعد إصلاح العزل. |
| تعليقات أساسية | رد عام/خاص Facebook، تصفية كلمات، إدارة وتعليقات وقوالب وتقارير؛ ردود Instagram العامة | [Comment_automation](../../application/controllers/Comment_automation.php)::webhook_callback_main، [Instagram_reply](../../application/controllers/Instagram_reply.php)::webhook_callback | لا وعد Dark Posts أوكل قدرات Enhancers؛ private replies الموسعة في C02 مشروع منفصل. |
| نشر وRSS | صيغ نشر موجودة وجدولة وصفحات متعددة وRSS متوافق؛ Instagram poster المضمن | [Cron_job](../../application/controllers/Cron_job.php)::publish_post/rss_auto_post، [Instagram_poster](../../application/modules/instagram_poster/controllers/Instagram_poster.php) | نجاح كل صيغة API شرط تفعيلها. Group Posting وSlideshow legacy لا يعلن عنهما دون تحقق. |
| متجر وQR | منتجات وتصنيفات وخصائص أساسية وصور وكوبونات وسلة وطلبات وعناوين واستلام وشحن وإيصال متصفح | [Ecommerce](../../application/controllers/Ecommerce.php)::add_store_action/proceed_checkout/qr_code/cod_payment | Variations مسعرة/Review/Digital/WooCommerce ليست امتدادًا تلقائيًا للمتجر. Thermal تنسيق وطباعة متصفح. |
| تقارير وهوية | Dashboard وتواريخ وCSV وبعض insights، اسم/logo/favicon، عربية/إنجليزية وRTL، Blog/Menu | [Dashboard](../../application/controllers/Dashboard.php)، [Admin](../../application/controllers/Admin.php)::general_settings_action، [Multi_language](../../application/controllers/Multi_language.php) | لا أرقام demo في التسويق؛ لا إزالة إشعارات تراخيص؛ White Label الكامل S27 عمل أصلي. |
| Support Desk المضمن | التذاكر والتصنيفات والردود في Extended | [Simplesupport](../../application/modules/simplesupport/controllers/Simplesupport.php)::reply/open_ticket_action | توجد join إلى team_members الغائب؛ T22 يصلح مسار المالك دون شراء Team Manager. لا يعد جاهزًا بالإعداد وحده. |

### بدائل موجودة يجب استخدامها قبل تطوير نظير مدفوع

- **بدل User Input لجمع البريد/الهاتف فقط:** A23/A24 وQuick Replies الموجودة؛ لا نبني state machine كاملًا لهذا الطلب البسيط.
- **بدل WP Feed add-on عند الحاجة إلى RSS فقط:** E09 وE12 باستخدام feed_type=rss وموجز RSS 2.0 متوافق يقدمه الموقع. مكتبة Rss_feed::getFeed تقرأ channel/item؛ لا نفترض أنها تقرأ Atom الخاص بكل مصدر.
- **بدل WooCommerce:** I01–I21 متجر ChatPion الأصلي، وI16 تذكير سلاله. هذا بديل منتج لمن لا يحتاج Woo، وليس مزامنة WooCommerce.
- **بدل Team Manager في الإطلاق:** مالك واحد مصرح لكل tenant؛ حسابات العملاء SaaS مستقلة وليست موظفين يتشاركون البيانات. لا مشاركة كلمة مرور.
- **بدل Google Sheets/Contacts connector أولًا:** G02/G03 وJ05، CSV واستيراد/تصدير يدوي؛ لا تكاليف تكامل ولاوعد مزامنة آلية.
- **بدل API node لرسائل SMS فقط:** G12؛ Custom HTTP SMS GET/POST موجود أصلًا. ليس REST module عامًا ولاتكامل HTTP داخل كل Flow.
- **بدل Pusher المدفوع عند الحاجة المحدودة:** استخدم مسار إعادة تحميل المحادثات الموجود؛ polling دوري أصلي تحسين Medium اختياري، لا يوصف كتحديث لحظي مثبت.
- **بدل دورة import/export كاملة:** نسخ وتصدير Flow عبر duplicate_builder_data/export_builder_data وmodule315 موجودان. import_flow_data يفحص257؛ لا ننزع الفحص لتفعيل Connectivity. A26 الكامل يحتاج importer أصليًا ذاformat وvalidation وملكية واضحة إن لم يوجد مسار Core مصرح مكتمل.

## 3. ما يحتاج إعدادًا فقط، وما يحتاج خدمة خارجية

هذا القسم يخص الاستفادة من مسارات موجودة **بعد معالجة بوابة الأمان العامة**؛ لا يعني أن جميع114 صفًا تخلو من عيوب قد تظهر بالاختبار. أي تحديث محدد مطلوب موضح باسمه في المصفوفة، وخصوصًا AI02/T15 وSupport Desk/T22 وSendGrid/T10.

| الإعداد | مسارات Core | الخدمة/العمل المطلوب | تكلفة شراء إضافة |
| --- | --- | --- | --- |
| FB/IG | A01–A19 ضمن أنواع القنوات المدعومة، B/C الأساسية وD | Meta app/OAuth/permissions/صفحات وحسابات مؤهلة/Webhook وتوكنات وAPI versions | لا |
| هوية ولغة ومتجر | S19/S20/S24–S26 وI الأساسية | بيانات المتجر، branding، RTL، حدود الباقات، upload/storage | لا |
| Cron للنشر والحملات الأساسية | E وG04/H08 | مصادقة scheduler وtimezone وlocks ومراقبة | لا |
| SMTP وبريد | H04 وS04/S06 وH01/H08 | حساب إرسال حقيقي وTLS/domain وunsubscribe للحملات؛ bounce قبل bulk عام | لا؛ استهلاك الخدمة منفصل |
| SMS | G01/G04 والمزود الذي ينجح اختباره | credentials/sender/دولة/رصيد؛ G10/G11/G13 تحتاج تعديلات وليست مجرد إعداد | لا؛ الرسائل منفصلة |
| دفع | I26 وS12/S13/S29 | بوابة واحدة مؤهلة وsandbox وcallback وتحقق مبلغ/عملة | لا؛ رسوم المعاملات منفصلة |
| COD/Manual | I27/I28/S14 | إجراء موافقة ومرفقات وحالات طلب/اشتراك | لا؛ قد تبقى رسوم بنك/تشغيل |
| AI المجاني المضمن | AI01 وواجهة التعليمات AI06 | تسجيل مشروع67 نظاميًا، مفتاح المستخدم، **تحديث adapter عبر T15 قبل عرض الردود للعملاء** | لا؛ API usage غير مجاني بحكم الترخيص |
| Blog/Menu | L07/L09 | محتوى وصلاحيات ومراجعة واجهة | لا |
| Pusher | D01/D02 كتطوير اختياري للتحديث | حساب خدمة بعد private tenant channels؛ راجع polling كبديل | لا؛ شروط خدمة realtime منفصلة |

AI03/AI04/AI15 مصنفة CUSTOM_DEVELOPMENT في هذا التقرير **لجاهزية الرد الإنتاجي**، رغم أن أصلها مضمن ومجاني: المطلوب تحديث توافق النماذج ومعالجة الفشل والحدود، وليس شراء ترخيص. لا يختزل ذلك في لصق مفتاح API.

## 4. فرص إضافات رسمية مجانية

الحزم الأربع التالية غير موجودة محليًا. المصدر الرسمي يوضح المجانية، لكنه لا يثبت أن تنزيل الحزمة متاح لحساب المستخدم اليوم أوأن آخر نسخة توافق9.1.1/PHP8.1. لم يتم تسجيل دخول للمورد أوClaim أوDownload أوInstall.

| الفرصة | ID والتصنيف | الدليل الرسمي | الأولوية والعمل المتبقي |
| --- | --- | --- | --- |
| E-commerce Related Products | I30 — FREE_ADDON_OPTION | [كتالوج ChatPion الرسمي](https://xeroneit.net/chatpionaddons) يعرضها مجانية | Medium؛ فحص claim والنسخة والتثبيت النظامي وmodule317 وعزل المتجر. لا نفترض أن Related تشمل كل upsell/downsell. |
| Affiliate System | S18 — FREE_ADDON_OPTION | [صفحة Affiliate الرسمية](https://xeroneit.net/portfolio/affiliate-manager-chatpion-add-on) تخصص العرض المجاني لمشتري Extended | Medium؛ أهلية المستخدم توافق وصف العرض، لكن لا قراءة بيانات شراء. توافق DDL وعمولات/refunds ومنع التكرار مطلوب؛ تؤجل عن MVP. |
| WhatsApp E-commerce Order Send | W11 — FREE_ADDON_OPTION | [صفحة الزر الرسمية](https://xeroneit.net/portfolio/whatsapp-e-commerce-order-send-button-chatpion-add-on) | Low لنطاق زر user-initiated؛ الحزمة/التوافق والظهور بعد checkout تحتاج اختبارًا. إن تعذر الحصول عليها يمكن زر URL أصلي، لا نسخ source الحزمة. ليس Cloud API ولاإرسالًا آليًا. |
| API Documentation/REST module | L04 — FREE_ADDON_OPTION | [صفحة API الرسمية](https://xeroneit.net/portfolio/chatpion-api-documentation/10) تعرضها مجانية وتربط endpoints الإدارية بـExtended | High للمراجعة الأمنية والنشر، ولو كان claim بسيطًا؛ ملف Native_api وحده ليس backend API. الإدارة للمشغل ولا تفتح تلقائيًا لكل باقة. |
| Group Posting Tools — فرصة تاريخية محجوزة | L05 — NOT_FEASIBLE_NOW | [قائمة مجانيات المنتج](https://xeroneit.net/portfolio/chatpion-best-multichannel-marketing-application-white-label/20) تذكرها | لا تنزل أوتفعل الآن. local flag معطل، وتوافق API الحالي غير متحقق؛ لا نعد عودة Group Posting جزءًا من الخطة. |

Flow Builder وInstagram Bot المضمنان، وAI المجاني منذ9.1، لا يعاملون كحزم مدفوعة تنتظر شراء. والتعليق القديم أوURL يحمل كلمة free لا يكفي لتحويل Messenger Bot Connectivity أوHTTP Integration إلى مجانيين؛ المرجع هو الاستحقاق والكتالوج الحالي. [سجل الدمج](https://xeroneit.net/blog/xerochat-change-log)، [الحزم التجارية المعلنة](https://xeroneit.net/portfolio/chatpion-add-on-bundle/30).

**ترتيب الاستفادة المجانية المقترح:** Related Products أوزر طلب محدود إن كانا حاجة مثبتة، ثم API بعد إغلاق مخاطر auth/tenant، وAffiliate بعد ضبط دورة الأموال. لا تؤخر النسخة الأساسية لأجل أي claim غير متاح. لا قيمة تحميل حالية مؤكدة من صفحات تاريخية.

## 5. تقييم بدائل الحزم المدفوعة دون شرائها

كل اسم حزمة مورد في الجدول **PAID_ADDON_ONLY بالنسبة إلى تنفيذ المورد الجاهز وغير المملوك**؛ لا يدخل هذا التنفيذ في Wasla. عمود البديل هو خطة مستقلة للوظيفة؛ تصنيفها الأساسي موجود ضمن223 في الملحق. لا تعني كلمة بديل إعادة إنتاج كامل واجهات الحزمة أوضمان feature parity.

مرجع وجود الحزم التجارية، دون تبني أسعارها أوالتوصية بشرائها: [قائمة Bundle الرسمية](https://xeroneit.net/portfolio/chatpion-add-on-bundle/30). الأدلة البرمجية التفصيلية في [03](03-addons-inventory.md) و[08](08-master-feature-matrix.md).

| حزمة المورد غير المشتراة | المكافئ الموجود في Core | التطوير الأصلي المقترح ونقطة التوسعة | التعقيد | التبعيات والتكلفة التشغيلية |
| --- | --- | --- | --- | --- |
| Comment Reply Enhancers | B01/B02/B03/B05/B06/B07/B08/B09: ردود وتصفية وإدارة وقوالب وتقارير | احتفظ بالأساس. أضف قواعد moderation مستقلة فقط عند تعريف فجوة؛ Comment_automation + queues/تقارير أصلية | Medium للنطاق الإضافي المحدود | Meta permissions وCron/استضافة؛ لا نعد كل وظائف الحزمة غير المدققة |
| Messenger Bot Enhancers | بوت وlabels وLivechat؛ لا runner متكامل متاح تلقائيًا | T07: wasla campaigns وموافقات واستهداف وإلغاء وتكرار آمن، عبر واجهات إرسال Core العامة المسموحة | High | قواعد Meta وworkers وrate limits؛ لا إرسال خارج إذن المنصة |
| Messenger Bot Connectivity | نماذج Webview وQuick Replies وتصدير Flow محدد | T04/T20: importer أوHTTP connector أصلي؛ schema وUI أصلية وBasic/Fb_rx_login | Medium للاستيراد المحدود، High للـHTTP العام | validation/SSRF/crypto وAPI مقصد؛ لا فتح project31 |
| WC Abandoned Cart Recovery | I16 خاص بسلال متجر ChatPion فقط | T14: receiver Woo أصلي وتوقيع ومطابقة carts وjobs قابلة للإلغاء | High | WordPress/Woo وhosting وMeta/email/SMS حسب القناة |
| Email SMS Sequence | حملات عادية وقوالب وجدولة جهات اتصال G/H | T09: state machine وصندوق outbox وخطوات وقواعد توقف مستقلة | High | email/SMS unit cost وscheduler وunsubscribe/bounce |
| WP and YT Feed Auto Post | E09 RSS؛ WordPress RSS متوافق يكفي لـE12 المحدود | T06: Atom/YouTube adapter أصلي فقط إن لزم؛ Rss_feed/Autoposting كنمط بيانات مرخص | Medium | المصدر وصلاحياته/حصصه وdedupe وCron؛ مكتبتا youtube_channel/wordpress_post غير موجودتين |
| E-commerce Product Price Variation | I05 خصائص واختيارات بلا تسعير variants مكتمل | T11: نموذج variants أصلي، سعر/مخزون يحسبان بالخادم وربط بسلة Core | Medium | MySQL/transactions واختبار coupon/stock؛ لا استبدال gate existing addon |
| Instagram Reply Enhancers | C01/C03 تعليقات عامة، A03 DM bot | T05: وظيفة private comment reply المحددة بعد تحقق API؛ controller/adapter أصلي مع events آمنة | High | Meta eligibility وwebhooks وسياسة الوقت؛ لا وعود mentions/full parity |
| User Input & Custom Fields | A23/A24 بريد/هاتف وبيانات مشترك موجودة | T02: حقول وأسئلة/answers وحالة أصلية ذات namespace مستقل، تربط بالـsubscriber وفق الملكية | High | tenant/schema/state validation؛ لا استيراد DDL خاص غير مرخص أوتفعيل custom_field_manager |
| E-commerce Product Review & Comment | منتجات وعملاء وطلبات | T13: جداول وآليات review/moderation أصلية متصلة بـstore/product/verified buyer | Medium | تخزين ومكافحة إساءة وصلاحيات؛ لا project48 |
| WooCommerce Integration | متجر ChatPion المستقل | T14: مزامنة أصلية محدودة أولًا product import أحادي الاتجاه، ثم webhooks ومفاتيح/IDs | High | API/Woo/plugin versions والـtenant tokens/استضافة؛ ليس إعدادًا مجانيًا جاهزًا |
| E-commerce Digital Products | صفحة منتج/سلة وحقول ومستهلك تنزيل | T12: entitlement download أصلي، ملفات خارج webroot وروابط محددة وعزل وسداد مؤكد | High | storage/bandwidth ومعاملات/تنزيلات؛ لا إعادة تفعيل ecommerce_digital_product |
| Flow Builder Insight | J03 وتقارير عامة وبعض message_sent_stat | T21: event IDs وتجميع node metrics أصلي؛ ابدأ شاشة تقرير خارج canvas | Medium | تخزين/retention ودقة event semantics؛ canvas overlays ترفع التعقيد |
| Flow Builder Conditional Reply | exact/partial وبيانات labels/core fields | T01: rule form ومقيّم أصلي محدود مع True/False routing؛ لا استخدام عقدة project63 المقيدة | Medium لشاشة مستقلة، High لعقدة canvas كاملة | schema/validation والـsubscriber scope؛ لا تطوير واجهة حزمة المورد |
| Recurring Notifications for Facebook | references RCN، لا entitlement/availability مثبتين | استبعاد حالي F03. فقط إن سمحت المنصة لاحقًا: T07 adapter أصلي وفق موافقة حقيقية | High ومشروط خارجيًا | Native platform eligibility/consent؛ لا حزمة تستطيع منح إذن المنصة |
| Team Member Manager | حساب مالك/tenant، helpers صلاحيات وبعض hooks | T03: أعضاء وأدوار وتعيين أصلية مع actor/owner وpage scoping وaudit؛ لا اصطناع project65 | High | auth/session/DB، private channels أوpolling؛ لا رسوم ترخيص لكن صيانة أمنية مستمرة |
| Google Sheets Integration | CSV G02/J05 | T19: export أصلي أحادي الاتجاه لملف مصرح؛ mappings وretry وoutbox | Medium للنطاق المحدود، High للمزامنة متعددة الاتجاهات | OAuth/service account مصرح حسب الحالة، Google quotas؛ لا شراء addon |
| HTTP API Integration | Custom HTTP SMS فقط، وبعض hooks | T20: وحدة Wasla أصلية للـoutbound HTTP/webhook، allowlist/توقيع/timeout/retry | High | SSRF/DNS/redirect controls وخدمة مقصد قد تكون مدفوعة |
| Google Contacts Integration | جهات اتصال وCSV | T19: connector أصلي عبر People API وOAuth/consent؛ ابدأ export لا sync كامل | High | scopes/verification وtokens وتعارضات ومحددات المزود؛ لا شراء addon |

## 6. طريقة التطوير الأصلي ونطاق تقدير التعقيد

**Low:** تغيير محدود في مسار معروف أوواجهة إعداد، مع تحقق مركز. **Medium:** adapter أوCRUD/schema وشاشة أصلية وحالات فشل معروفة. **High:** صلاحيات وهويات جديدة، state machines وتزامن، موصلات متعددة، أوبيانات وموافقات ومخاطر أموال. هذه تقديرات نسبية وليست عرض تكلفة أومدة؛ قد يزيد التعقيد عند غياب source/build للواجهة. يشمل تقدير كل صف العمل الخاص بالميزة، ولا يكرر إصلاح الأمن العام223 مرة.

### حدود إعادة الاستخدام

1. تعاد الاستفادة من طبقات النسخة المرخصة: Home للسياق المسموح، Basic/Query Builder، store/cart/products، subscribers/labels، إرسال القناة المصرح، وMX للوحدات. تبقى المصادقة والملكية والموافقة شروطًا صريحة.
2. تكتب وحدات مثل wasla_rules وwasla_campaigns وwasla_team بأسماء ومخططات وواجهات أصلية. لا تنتحل unique_name أوproject_id أوmodule ID لحزمة المورد غير المشتراة، ولا تدخلها إلى add_ons لتجاوز الإتاحة.
3. لا تربط شاشة أصلية بعقدة مدفوعة مخفية بعد تبديل feature flag. للمشروع الجديد renderer وإعدادات وتقييم وصلاحيات أصيلة، مع connector للواجهات الأساسية المسموحة فقط.
4. لا حاجة لتنزيل proprietary add-on source أونسخه. يقتصر التكامل الخارجي على التوثيق العام والمكتبات ذات التراخيص المناسبة وموافقة حساب الخدمة.
5. لا يعد توريث Home كافيًا للأمان: كل read/write/download/webhook يثبت tenant/owner وactor/action وpage scope. تختبر APIs المخصصة بحسابين وصفحتين.
6. حزم frontend الجاهزة في plugins/flow_builder ليست مشروع build كاملًا مثبتًا. ابدأ بصفحة قواعد/تقارير خارج canvas. أي تعديل visual node متكامل مشروع High منفصل، وليس Medium بسبب وجود صورة للعقدة.

### مفاتيح مشروعات التطوير في الملحق

| المفتاح | مخرج أصلي محدود أوعمل تصحيحي | الأدلة/واجهات إعادة الاستخدام | التعقيد المرجعي |
| --- | --- | --- | --- |
| T00 | security/tenant ownership/private event isolation + auth hardening | Home، Livechat::update_mark_as_action، Pusher، [نتائج07](07-security-and-readiness.md) | High؛ إلزامي قبل SaaS |
| T01 | conditional rule form مستقل | fields/labels وواجهة إرسال Core المسموح؛ لا project63 | Medium؛ canvas كامل High |
| T02 | حقول وأسئلة وanswers/state أصلية | subscriber IDs وBasic والتحقق والإرسال | High |
| T03 | موظفون وأدوار وتعيين أصلية | users/tenant/page سياقًا، schema عضوية أصلي | High |
| T04 | importer أصلي لformat موثق، مع dry-run وتحويل IDs وownership | export_builder_data/duplicate_builder_data المضمنان؛ لا إزالة257 | Medium |
| T05 | private reply أووظيفة Instagram موسعة محددة | أحداث ومكتبات Meta المسموحة، idempotency | High ومشروط API |
| T06 | Feed adapter Atom/YouTube أصلي | Rss_feed/Autoposting وcanonical content IDs | Medium |
| T07 | Messenger campaigns/drip runner أصلي | labels/consent وإرسال عام؛ جداول jobs/campaigns أصلية | High |
| T08 | إصلاح SMS locale/TLS/Unicode وDLR | Sms_manager المحولات المرخصة، providers callbacks | Medium |
| T09 | email/SMS sequences أصلية | حملات عادية وقوالب وunsubscribe مع outbox مستقل | High |
| T10 | Email adapter حديث وbounce/suppression | Email_manager/Home::_email_send_function؛ webhook أصلي | Medium |
| T11 | variant price/stock أصلي | product/cart/coupon/attributes مع حساب server-side | Medium |
| T12 | تسليم ملف رقمي آمن أصلي | order/payment verification وتخزين خاص وروابط موقعة | High |
| T13 | review/comment/moderation أصلي | store/product/customer/order المسموح | Medium |
| T14 | Woo connector/recovery أصلي محدود النطاق | Woo API/webhooks العامة وmapping مستقل | High |
| T15 | تحديث AI adapter ثم usage/budget/context/provider/intent حسب نطاق كل ID | Integration/open_ai_config؛ محول أصلي لا يتجاوز تراخيص؛ لا RAG تلقائيًا | Medium للـadapter/ledger؛ High للسياق/copilot |
| T16 | SaaS invoices/coupons أصلية | package/transaction_history، domain فواتير مستقل عن المتجر | Medium؛ امتثال ضريبي ليس مشمولًا |
| T17 | custom domains أصلية | tenant resolver/DNS proof/SSL/session boundaries | High |
| T18 | إتمام هوية Wasla المسموح بها | views/mail/config/assets مع حفظ إشعارات التراخيص | Medium؛ build limitations قد ترفعها |
| T19 | connector Google أصلي بأذونات ضيقة | CSV كنقطة بداية وOAuth/scoped mappings | Medium لتصدير Sheets محدود؛ Contacts/sync High |
| T20 | outbound HTTP node/webhook أصلي | allowlist/outbox والتوقيع، لا استعمال node المورد المقيدة | High |
| T21 | event metrics/report أصلي | campaign/node IDs وlogs دنيا مع retention | Medium |
| T22 | Support Desk owner-only fallback | Simplesupport::reply يحتوي join team_members؛ مسار owner/users موجود | Low للنطاق المحدد؛ لا يفعل Team Manager |

المفتاح BASE/INC في الملحق يعني الاستفادة من Core أووحدة مضمنة، لا مهمة تطوير أخرى. META/RSS/WEB/BRAND إعداد محدود، وFREE-* خيار مجاني. HOLD-* قرار تعليق نطاق، لا ادعاء أن الشراء يحله.

## 7. Minimum Viable Feature Set مقترح

**المبدأ: حساب مالك واحد لكل نشاط، domain عام واحد، بوابات محدودة اختبرت، بلا وعد Teams أوWhatsApp Business.** لا يلزم تنفيذ جميع المشروعات الأصلية قبل أول نسخة؛ T00 وموانع الأمان والمخطط أولًا.

| نطاق الإصدار | المحتوى | شروط الخروج إلى عميل |
| --- | --- | --- |
| SaaS وهوية | S01/S03–S14 ضمن المسارات الموجودة، S19/S20/S24–S26؛ بدء قبول manual payment إذا لزم | auth/password migration، عزل، mail reset، trial/expiry، موافقة يدوي واضحة، استحقاق Extended |
| Bot أساسي | A01/A02/A03/A04–A19 ضمن الأنواع التي نجحت، A23–A25/A27–A31 | صفحة FB وحساب IG مؤهل، webhook مصادق، keywords عربية وfallback، فحص وسائط، بدون paid nodes |
| Livechat | D01–D05/D08–D10 | read/reply/filter/archive/search بحسابين؛ refresh الأساسي مقبول؛ لا realtime مزعوم قبل إصلاحه |
| تعليق أساسي | B01/B02/B03/B06/B08/B09 وC01/C03 | إثبات public/private حسب القناة والحق، dedupe وتقرير حقيقي؛ لا Ads/Dark Posts غير متحقق |
| متجر صغير/QR | I01–I05/I07–I14/I17–I21/I27/I28، مع تقارير I29 | checkout وأسعار ومخزون وكوبون وعناوين وإيصال عربي؛ COD/manual؛ بوابة online واحدة اختيارية بعد sandbox |
| نشر اختياري | E01–E04/E06–E10، C04–C06 وRSS المتوافق | كل نوع API وcron/timezone/locks والتعامل مع الفشل اختبر؛ ما لا ينجح يخفى |
| تقارير وهوية | J01–J08 حسب البيانات المتاحة والباقة، العربية والإنجليزية | مصدر metrics واضح، لا demo أوأرقام أداء، data exports محمية |
| AI pilot بعد الاستقرار | AI01/AI06 + T15 لتمكين AI03/AI04/AI15 | نموذج مدعوم وTLS/timeouts/fallback وقياس/سقف صرف وموافقة بيانات؛ ليس شرط إطلاق كل وظائف Core |
| Email/SMS marketing لاحق محدود | H/G العادية فقط، مزود مختبر واحد لكل قناة | bounce/unsubscribe/consent وUnicode/DLR وفق المزود، وفوترة استهلاك منفصلة |

يمكن بيع منتج منظم للمحادثات والمتجر والنشر قبل إنهاء كل ميزات AI. اسم Wasla AI لا يبرر وصف Agents أوRAG أوردود AI عاملة قبل توافرها. Blog وAffiliate وAPI module وRelated تحسينات اختيارية؛ لا تحجب إطلاق الأساس بسبب حزمة مجانية لم يمكن claim لها.

### بوابة أمان لا تختزل إلى «إعداد»

تظل مخاطر07 قائمة: Cron api_key_check يقبل مبكرًا، MD5، نشر محتوى على Pusher channel عام عند تفعيله، تحديث محادثة دون owner scope كافٍ، signature/CSRF/upload/TLS غير موحدة، وإصدارات PHP/SDK وDDL متباينة. إصلاحها تطوير وصيانة للمنتج الأساسي تحت ميزانية التنفيذ، **ولا يتطلب شراء إضافة تجارية**.

## 8. ما يستبعد من الإعلان الأولي

- كل NOT_FEASIBLE_NOW: WhatsApp Business/Inbox/templates/bulk/payments، Inbox شامل لكل القنوات، RAG وAgents، OTN/RCN وأهلية API غير المثبتة، Group Posting وDark Posts غير المحسومة.
- الوظائف المقيدة بحزم مدفوعة قبل إنجاز البديل الأصلي واختباره: Teams، User Input Builder العام، Conditional canvas nodes، Flow Insight، Messenger/SMS/Email sequences، WooCommerce، Digital delivery، Reviews وVariants المسعرة.
- أي حزمة مجانية قبل الحصول على نسخة متوافقة وتشغيلها؛ خاصة API العام وAffiliate، وزر WhatsApp قبل ظهوره وتحقق الرابط. يوصف الزر «إرسال تفاصيل طلب باختيار العميل»، لا أتمتة WhatsApp.
- AI بالذاكرة أوالمعرفة أوحصة tokens غير المطبقة. وعبارات «غير محدود»، «كل بوابات الدفع تعمل في مصر»، «كل الرسائل تصل»، «فاتورة إلكترونية متوافقة ضريبيًا»، أو«مضمون/معتمد أمنيًا».
- إتاحة API provider مجانية أوفئة مجانية لا تعني أن برنامجك مجاني التشغيل أومسموحًا بإرسال رسائل دون consent. الخدمات والتكاليف والقيود تفصح منفصلة.

## 9. توزيع ميزات الاشتراك دون شراء إضافات

تصور تجاري أولي، بلا أسعار أوأرقام سعة مصطنعة. تحدد القيم بعد قياس الحمل والتكاليف واختبار أن quota التي تعرضها تطبق فعليًا. لا توضع IDs إضافات مدفوعة في package.module_ids لإظهار ميزة غير مملوكة.

| المحور | باقة أساسية | باقة متجر | باقة أعمال |
| --- | --- | --- | --- |
| مالك النشاط | مالك واحد | مالك واحد | مالك واحد حتى تطوير T03؛ ليست Agency Teams |
| FB/IG bot وFlow الأساسي | أنواع Core المختبرة | نفسها | نفس المحرك مع حدود أعلى فقط إن طبقت واختبرت |
| Livechat/labels/canned replies | متاح وفق القنوات | متاح | متاح؛ لا عزل أقل في باقة أرخص |
| الصفحات/flows/جمهور | حدود مدروسة | حدود مدروسة | توسعة حدود موجودة قابلة للإنفاذ؛ لا unlimited |
| المتجر/QR/الطلبات | غير مفعل أوحد أدنى مقصود | متجر ومنتجات وCOD/manual وفق حدود | متاجر أكثر/حدود أعلى من الوظائف نفسها بعد قياس |
| النشر/التقارير | نطاق اختبر | نطاق اختبر | إعدادات وحدود أوسع، لا APIs إضافية غير منفذة |
| Email/SMS | اختياري عند الجاهزية | اختياري | اختياري؛ استهلاك مزود منفصل لكل باقة |
| AI pilot | اختياري بعد T15 | اختياري | اختياري مع سقف ومحاسبة فعلية؛ ليس وعد tokens قبل ledger |
| إضافات مجانية | تضاف حسب الحاجة بعد تحقق | Related/زر الطلب إن نجحا | ليست امتيازًا جاهزًا قبل claim؛ API الإداري أداة مشغل |
| ميزات أصلية مستقبلية | غير معلنة حتى تسليمها | Variants/Reviews بعد T11/T13 | Teams/Rules/connectors بعد اكتمالها؛ ترخيص Wasla الأصلي لا يتنكر كحزمة مورد |

استخدم Package/Usage Log الحاليين لما يدعمانه فعلًا. أي metric جديد مثل AI tokens أوseats أوAPI requests يحتاج enforce/ledger ومراجعة before/after؛ monthly_limit وbulk_limit لا ينفذان كل هذه المقاييس تلقائيًا. مصروف messaging أوAI إما حساب عميل مصرح/BYOK أوusage يحاسب بسقف واضح؛ BYOK ينقل جهة الدفع ولا يلغي التكلفة أومسؤولية حماية المفتاح.

## 10. Roadmap مرتب بالعائد والمخاطر

| المرحلة | العمل | شرط القبول | ما لا يدخلها |
| --- | --- | --- | --- |
| R0 — تثبيت أساس قابل للتكرار | staging فقط، توافق PHP/lock وschema، backup/restore، T00 وبقية P0/P1، تدوير أسرار وmonitoring | حسابان وصفحتان، auth/reset وأفعال معزولة، cron لا يعمل لغير scheduler، webhooks متحققة واستعادة ناجحة | شراء Bundle أوإطلاق إنتاج قبل الإصلاح |
| R1 — Core MVP | الهوية وbot/Flow المضمن وLivechat الأساسي والمتجر COD/manual وعمليات SaaS | end-to-end محدود موثق بالعربية، quotas وصلاحيات صحيحة ومدة تجربة وانتهاء | فريق وRAG وWhatsApp وأتمتة غير مختبرة |
| R2 — تكاملات مربحة مضبوطة | بوابة دفع واحدة، مزود mail/SMS مختبر حسب حاجة فعلية؛ T15 للـAI pilot؛ T08/T10 عند لزومها | تكلفة لكل وحدة، TLS/fallback/dedupe، consent/unsubscribe، صلاحيات Meta ومقاييس حقيقية | دعم كل المزودين دفعة واحدة |
| R3 — المجاني المفيد فقط | claim رسمي منقح للحزم المتوافقة، review مصدرها وDDL ثم staging | لا أسرار في التقرير، لا إنشاء entitlement وهمي؛ regression للطلب والملكية والدفع | تحديث شامل غير مراجع أوتوسعة صلاحيات API الإداري لعملاء |
| R4 — تطوير أصلي محدود | T01 rule form أوT11 variants أوT13 reviews أوT19 export أحادي؛ اختر حاجة عميل مثبتة | schema وأسماء Wasla مستقلة، اختبارات tenant، ولافتح gate مدفوعة | إعادة كتابة كل الـ19 حزمة |
| R5 — توسعة منتج | T03/T07/T09/T14/T20 بعد قياس سعة وإيراد؛ T17 domains عند جدوى واضحة | نموذج أموال/صلاحيات/retry وصيانة مثبت | جدولة زمن أوتكلفة مخترعة قبل تصميم ومراجعة |
| مؤجل | WhatsApp كامل وRAG/Agents وOTN/RCN/Group غير المثبتة | دراسة منفصلة لأهلية/متطلبات/تقييم وتشغيل | شراء إضافات مدفوعة كحل افتراضي |

## 11. تكاليف التشغيل والفصل عن الترخيص

| بند | نوع التكلفة | القياس أوالقرار | كيف نقللها دون وعود مجانية |
| --- | --- | --- | --- |
| ChatPion Extended | ترخيص مملوك سابقًا وفق المستخدم | ليس شراءً جديدًا | يبقى أساس المشروع؛ لا افتراض أنه يمنح كل حزم المورد |
| إضافات ChatPion المدفوعة | شراء برنامج اختياري | **صفر في الخطة** | التنفيذ الجاهز غير مستخدم، والأصلي يكتب عند جدوى |
| الحزم الرسمية المجانية | تكلفة برنامج معلنة مجانية | claim/compatibility لا يساوي free engineering | مراجعة المصدر والاستعادة والاختبار والصيانة لها جهد |
| استضافة/PHP/MySQL/domain | ثابت ومتدرج | CPU/RAM/DB/concurrency/domain renewal | قياس قبل السعة، retention وpagination؛ لا سعر مفترض |
| وسائط/backup/restore | تخزين ونقل وتشغيل | GB والطلبات ومدة الاحتفاظ والاستعادة | ضغط وحدود رفع وprivate storage ونسخ مختبرة؛ لا اعتبار seed backup |
| البريد التشغيلي | خدمة إرسال وسمعة نطاق | طلبات تفعيل/reset/notifications | حجم صغير أولًا وحساب إرسال مناسب؛ PHP mail ليس ضمان إرسال ولاخدمة توصيل مجانية |
| حملات Email | حسب مزود وحجم وخطة | رسائل/مشتركون/أحداث وفشل/استرجاع | SMTP أوحساب العميل إذا سمحت الشروط؛ bounce/suppression يقللان إساءة الإرسال |
| SMS | استهلاك ورسوم حساب/رقم حسب المزود | دول ومسارات ومقاطع ورسائل وحروف Unicode | ميزانية وحدود واختبار segments؛ لا quota رسائل متساوية التكلفة لكل لغة |
| AI | استهلاك API | input/output tokens والنموذج وretry والسياق وstorage إن أضيف | BYOK مصرح أوسقف وledger؛ لا ربط التكلفة بعدد الردود فقط |
| الدفع | رسوم معاملات وتسوية/تحويل/استرداد حسب البوابة | معاملات/عملة/بلد وحالات chargeback | ابدأ ببوابة مؤهلة واحدة؛ COD/manual يغير التشغيل ولا يضمن انعدام كل الرسوم |
| Realtime | خطة خدمة أوتكلفة خادم | connections/events/bandwidth | Pusher اختياري؛ refresh أوpolling مدروس يقلل خدمة منفصلة ويزيد حمل DB |
| APIs اختيارية | شروط مزود وحصص | OAuth/limits/verification/خطط الحساب | اختر حدودًا ضيقة وexport بسيطًا؛ لا تحول free tier إلى وعد دائم |
| التطوير والصيانة | جهد تأسيسي ومستمر | أمن، تحديث SDK، إصلاح API ونسخ وsupport | التكلفة لا تختفي لعدم شراء addon؛ ركز على مسارات مستعملة |

**نموذج ميزانية دون أسعار مصطنعة:** تكلفة الشهر = البنية والاستضافة والتخزين والنسخ + إرسال البريد + مجموع تكلفة مقاطع SMS حسب الدولة/المزود + استهلاك AI حسب النموذج والتوكنات + رسوم بوابات الدفع + realtime/مزودين اختياريين + الصيانة والدعم. لا تجمع تكلفة البنية مرة لكل223 قدرة؛ هي تكلفة مشتركة تقاس بالحمل.

### ما المقصود بتكامل مجاني؟

يمكن لـCore استعمال SMTP وحسابات APIs يوفرها العميل وفق شروطها، وCSV لا يحتاج موصلًا تجاريًا. لكن حسابات Mailchimp/Sendinblue/المزودين ليست مجانية لمجرد أن connector داخل البرنامج. لا تُدرج خطة مجانية أوحدودها في باقة Wasla دون مراجعة حساب الخدمة وقت التسعير.

بالنسبة إلى Google Sheets الأصلي المقترح: وثائق Google تذكر استخدامًا قياسيًا بلا رسوم إضافية وحصصًا، مع إشارة إلى تغييرات فوترة لبعض التجاوزات في2026. لذلك لا نضع وعد «مجاني بلا حدود»؛ يلزم التحقق من billing/quotas والسياسة الفعلية للمشروع قبل تشغيل connector. [حدود استخدام Sheets الرسمية](https://developers.google.com/workspace/sheets/api/limits). المجاني هنا خدمة ضمن شروطها؛ ما زال T19 برمجة أصلية مطلوبة محليًا.

هذه المراجعة لا تختار خطة استضافة أومزود دفع بعرض سعر، ولا تثبت أهلية تاجر مصري أوسلامة تسوية مالية. قبل تحديد سعر باقة، يستخدم سيناريو منخفض/متوسط/مرتفع برسائل وتوكنات ومعاملات فعلية، وهوامش إنفاق وحدود إنفاذ؛ لا تعهد «AI/SMS/Email غير محدود».

## 12. مخاطر وملاحظات تنفيذية خاصة بهذه الخطة

- **API eligibility قبل أي كود أوشراء:** إتاحة OTN/RCN وأنواع الرسائل والنشر وGroups لا تنتج من استحقاق ChatPion. تعذر جلب مرجع Meta v19 مباشرة في هذه الجولة بسبب429؛ لا نعتمد وصفًا حديثًا لحالة Groups/OTN من هذا الفشل. HOLD يعني عدم الالتزام الآن، لا ادعاء إلغاء موثق.
- **مجاني لا يساوي قابلًا للتنزيل:** بعض URLs القديمة للمورد أعادت404 بينما أمكن قراءة changelog/catalog وروابط بديلة. يستند وصف المجانية إلى الصفحات الرسمية المشار إليها، لا إلى تنزيل تم. لا توزع حزمًا من مصدر غير رسمي.
- **الترخيص الأساسي معتمد وفق توضيح المستخدم:** لا نطلب شراء Extended ثانية ولاBundle. تبقى شروط claim للحزم المجانية وإجراءاتها منفصلة؛ لا يتجاوز هذا التقرير آلية الاستحقاق.
- **core bugs لا تعالج بحزمة موظفين:** يعالج owner-only support fallback والعزل في المصدر المرخص. لا تنشأ team tables شكلية لإسكات الاستعلام وكأن Team Manager مرخص.
- **مسارات التطوير ليست entitlement:** يحتوي منشئ Visual_flow_builder سلوكًا خاصًا عند تعطيل strict_ajax_call يمنح سياق تطوير مختلفًا. لا يستخدم لإثبات إتاحة عقد مدفوعة أوتجاوز auth؛ يراجع ضبط host/base_url وحماية مسارات التطوير ضمن T00 قبل الإنتاج.
- **cron reliable قبل marketing automation:** outbox/locking/backoff/consent واختبارات تكرار لا تنفذها إضافة rows إلى قاعدة البيانات. لا تغيير schema في هذه الجولة.
- **markup/compiled frontend:** لا source build كامل مثبت لمنشئ التدفق؛ تدخلات واسعة في bundles ترفع صيانة التحديث. تقترح واجهات مستقلة أصلية أولًا.
- **بيانات ومفاتيح:** token encryption/rotation وtenant ownership وprivate downloads وretention والتوقيع مطلوبة سواء كان المزود مجانيًا أومدفوعًا.
- **ما لا نعد به:** لا feature parity للحزم19، ولاجدول زمن/سعر تطوير ملزم، ولاقياس capacity أوperformance أوsecurity certification من التدقيق الساكن.

## 13. الملحق — قرار لكل قدرة من المصفوفة السابقة

كل صف يملك تصنيفًا واحدًا من الستة وتعقيدًا نسبيًا. مصدر الوجود والدالة محفوظان، والتفسير الجديد يعكس الطريق المشروع تحت ميزانية إضافات صفرية. الأكواد التشغيلية: **INFRA** بنية مشتركة؛ **META** أهلية وصلاحيات منصة؛ **CRON** تشغيل jobs؛ **EMAIL/SMS/AI/PAY** استهلاك مزود؛ **RT?** realtime اختياري؛ **HTTP/RSS/GOOGLE** خدمة مقصد وحصص. وجود الكود التشغيلي لا يقرر سعره أوأن حسابه مهيأ.

التعقيد Low/Medium/High يخص العمل الإضافي الخاص بالنطاق المقترح؛ T00 والأمان العام لا يعاد تسعيرهما لكل صف. المرجع الوظيفي لكل ID هو08؛ تصنيفات13 لا تغيّر نتيجة وجود الشيفرة القديمة.


### A — Chatbot Builder

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A01 | منشئ Flow مرئي Drag-and-Drop | **CORE_REQUIRES_SETUP** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `load_builder; flowbuilder_submit; plugins/flow_builder/js` | وظيفة مضمّنة بالنسخة رغم تخزينها كوحدة؛ راجع دليل V8.0، ثم التسجيل النظامي وصلاحيات الباقة وMeta. | INFRA + META+تسجيل مضمن نظامي؛ لا رخصة addon مشتراة | INC |
| A02 | بوت Facebook Messenger | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; send_message_bot_reply` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A03 | بوت Instagram DM وتدفقاته | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; media_type=ig; IGADD` | وظيفة مضمّنة بالنسخة رغم تخزينها كوحدة؛ راجع دليل V8.0، ثم التسجيل النظامي وصلاحيات الباقة وMeta. | INFRA + META+تسجيل مضمن نظامي؛ لا رخصة addon مشتراة | INC |
| A04 | تشغيل البوت بالكلمات المفتاحية | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; messenger_bot.keywords` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A05 | مطابقة Exact | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; trigger_matching_type=exact` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A06 | مطابقة جزئية String Match | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `webhook_callback_main; stripos` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A07 | تدفقات شرطية | **CUSTOM_DEVELOPMENT** | Medium | [Home.php](../../application/controllers/Home.php) — `process_message_condition; check_all_condition; VF load_builder` | محرك قواعد أصلي محدود وشاشة مستقلة فوق حقول Core؛ لا تفعيل project63 أواستعمال عقدة المورد المقيدة. | INFRA + META؛ لا رخصة addon مشتراة | T01 |
| A08 | رسائل نصية | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `send_message_bot_reply; create_template_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A09 | رسائل صور | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_image_only; create_template_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| A10 | رسائل صوت | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_audio_file; create_template_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| A11 | رسائل فيديو | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_live_video; create_template_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| A12 | إرفاق ملفات | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_general_file; create_template_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| A13 | GIF | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `upload_image_only; gif ضمن الامتدادات` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| A14 | Quick Replies | **CORE_REQUIRES_SETUP** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `generate_quick_replies` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A15 | Persistent Menus | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `publish_persistent_menu; create_persistent_menu_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A16 | Postback Buttons | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `create_template_action; messenger_bot_postback` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A17 | URL Buttons | **CORE_REQUIRES_SETUP** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; button_type` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A18 | Phone Buttons | **CORE_REQUIRES_SETUP** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; phone_number` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A19 | Carousel وGeneric Templates | **CORE_REQUIRES_SETUP** | Medium | [Flow_builder.php](../../application/libraries/Flow_builder.php) — `get_carousel_item_info; get_button_info` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A20 | Webview ونماذج الويب | **CORE_REQUIRES_SETUP** | Medium | [Webview_builder.php](../../application/controllers/Webview_builder.php) — `get_email; get_phone; get_location; views/webview_builder` | استخدم نماذج Webview الأساسية الموجودة وروابطها المسموحة فقط؛ لا يشمل builder عام أوفتح Connectivity المدفوعة. | INFRA + META؛ لا رخصة addon مشتراة | WEB |
| A21 | حقول المشترك المخصصة | **CUSTOM_DEVELOPMENT** | High | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `get_subscriber_customfields_data; user_input_custom_fields` | Core يجمع البريد/الهاتف بالفعل؛ حقول/أسئلة عامة متعددة الخطوات تحتاج schema وCRUD وحالة محادثة أصلية. | INFRA + META؛ لا رخصة addon مشتراة | T02 |
| A22 | جمع إجابات المستخدم متعدد الخطوات | **CUSTOM_DEVELOPMENT** | High | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `process_user_input; get_user_input_flow_next_question` | Core يجمع البريد/الهاتف بالفعل؛ حقول/أسئلة عامة متعددة الخطوات تحتاج schema وCRUD وحالة محادثة أصلية. | INFRA + META؛ لا رخصة addon مشتراة | T02 |
| A23 | جمع البريد من Quick Reply | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `is_email; email_info_send_auto_responder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+EMAIL؛ لا رخصة addon مشتراة | BASE |
| A24 | جمع الهاتف من Quick Reply | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `is_phone_number; phone_info_auto_responder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+SMS؛ لا رخصة addon مشتراة | BASE |
| A25 | تقسيم المشتركين والوسوم | **CORE_AVAILABLE** | Low | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `ajax_label_insert; bulk_group_assign` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| A26 | تصدير واستيراد إعدادات البوت | **CUSTOM_DEVELOPMENT** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `export_bot; import_bot; saved_templates` | تصدير/نسخ Flow 315 موجودان دون شراء؛ الاستيراد المراجع يفحص257، لذا الدورة الكاملة الأصلية تحتاج importer مستقلًا ولا إزالة الفحص. | INFRA + META؛ لا رخصة addon مشتراة | T04 |
| A27 | Typing Indicator | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `typing_on_settings; send_message_bot_reply` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A28 | تأخير الردود | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `send_message_bot_reply; delay_in_reply` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A29 | Icebreakers | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `get_page_details; ice_breaker_status; ig_ice_breaker_status` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A30 | Default وFallback Replies | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `get_started_welcome_message; no_match_found_reply` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| A31 | Bot Error Logs | **CORE_AVAILABLE** | Low | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `error_log_report; messenger_bot_reply_error_log` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |

### B — Facebook Automation

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B01 | الرد التلقائي على تعليق Facebook | **CORE_REQUIRES_SETUP** | Medium | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `ajax_autoreply_submit; webhook_callback_main` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| B02 | Private Reply على التعليقات | **CORE_REQUIRES_SETUP** | Medium | [Fb_rx_login.php](../../application/libraries/Fb_rx_login.php) — `send_private_reply; CA webhook_callback_main` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| B03 | تصفية التعليقات بالكلمات | **CORE_REQUIRES_SETUP** | Medium | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `webhook_callback_main; trigger_matching_type` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| B04 | تعليقات Ads أوDark Posts | **NOT_FEASIBLE_NOW** | High | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `checking_post_id; get_tableid_by_postid` | لم يحسم الدليل دعم Ads/Dark Posts؛ لا شراء أوتطوير يضمن صلاحية أحداث API دون تحقق خارجي. | INFRA + META؛ لا رخصة addon مشتراة | HOLD-META |
| B05 | الإعجاب التلقائي بالتعليق | **CORE_REQUIRES_SETUP** | Medium | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `webhook_callback_main; auto_like_comment` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| B06 | إدارة وإخفاء وحذف التعليقات | **CORE_REQUIRES_SETUP** | Medium | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `delete_single_comment; block_person_from_commenting; hide_comment_after_comment_reply` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| B07 | تعليقات مجدولة ودورية | **CORE_REQUIRES_SETUP** | Medium | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `ajax_autocomment_reply_submit; CJ auto_comment_on_post_orginal` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| B08 | قوالب الردود والتعليقات | **CORE_AVAILABLE** | Low | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `template_manager; comment_template_manager` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| B09 | تقارير حملات التعليقات | **CORE_AVAILABLE** | Low | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `all_auto_reply_report; download_get_reply_info` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |

### C — Instagram Automation

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C01 | ردود تعليقات Instagram | **CORE_REQUIRES_SETUP** | Medium | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `ajax_autoreply_submit; webhook_callback` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| C02 | Private Replies من تعليقات Instagram | **CUSTOM_DEVELOPMENT** | High | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `get_private_reply_postbacks; webhook_callback` | التعليق العام وDM موجودان؛ صمم الرد الخاص المطلوب أصليًا بعد تحقق API، دون فتح instagram_reply_enhancers. | INFRA + META؛ لا رخصة addon مشتراة | T05 |
| C03 | كلمات مفتاحية لتعليقات Instagram | **CORE_REQUIRES_SETUP** | Medium | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `webhook_callback; trigger_matching_type` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| C04 | نشر صور Instagram | **CORE_REQUIRES_SETUP** | Medium | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action` | وظيفة مضمّنة بالنسخة رغم تخزينها كوحدة؛ راجع دليل V8.0، ثم التسجيل النظامي وصلاحيات الباقة وMeta. | INFRA + META+CRON+تسجيل مضمن نظامي؛ لا رخصة addon مشتراة | INC |
| C05 | جدولة منشورات Instagram | **CORE_REQUIRES_SETUP** | Medium | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action; schedule_time` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| C06 | نشر فيديو Instagram | **CORE_REQUIRES_SETUP** | Medium | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `image_video_add_auto_post_action; image_video_upload_video` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| C07 | Instagram Analytics | **CORE_REQUIRES_SETUP** | Medium | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `media_insights_modal_data; FB instagram_user_insight` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| C08 | أنواع حسابات Instagram والصلاحيات | **CORE_REQUIRES_SETUP** | Medium | [Fb_rx_login.php](../../application/libraries/Fb_rx_login.php) — `instagram_account_check_by_id; login_for_user_access_token` | المتاح هو الحساب المرتبط بصفحة ومسار OAuth الموجود؛ لا وعد بدعم كل أنواع Instagram أوLogin مستقل. | INFRA + META؛ لا رخصة addon مشتراة | META |

### D — Live Chat

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D01 | Messenger Live Chat | **CORE_REQUIRES_SETUP** | Medium | [Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; reply_to_conversation` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+RT?؛ لا رخصة addon مشتراة | BASE |
| D02 | Instagram Live Chat | **CORE_REQUIRES_SETUP** | Medium | [Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; media_type=ig` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+RT?؛ لا رخصة addon مشتراة | BASE |
| D03 | سجل المحادثات | **CORE_AVAILABLE** | Low | [Home.php](../../application/controllers/Home.php) — `insert_livechat_data; livechat_messages` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| D04 | وسوم جهة الاتصال داخل المحادثة | **CORE_AVAILABLE** | Low | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `create_label_and_assign; LC get_subscriber_list` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| D05 | ردود محفوظة Canned Responses | **CORE_AVAILABLE** | Low | [Livechat.php](../../application/controllers/Livechat.php) — `canned_response_list; add_canned_response` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| D06 | إسناد المحادثات | **CUSTOM_DEVELOPMENT** | High | [Home.php](../../application/controllers/Home.php) — `assign_conversation_to_team_member; agent_assign_notifications` | حساب مالك واحد لكل نشاط متاح؛ إسناد وموظفون وأدوار داخل tenant تحتاج وحدة أصلية وعزلًا محكمًا. | INFRA+RT?؛ DB/actor/owner/page | T03 |
| D07 | إدارة أعضاء فريق متعددين | **CUSTOM_DEVELOPMENT** | High | [Home.php](../../application/controllers/Home.php) — `get_team_member_list; team_members; team_roles` | حساب مالك واحد لكل نشاط متاح؛ إسناد وموظفون وأدوار داخل tenant تحتاج وحدة أصلية وعزلًا محكمًا. | INFRA+RT?؛ DB/actor/owner/page | T03 |
| D08 | البحث في المحادثات | **CORE_AVAILABLE** | Low | [Livechat.php](../../application/controllers/Livechat.php) — `search_subscriber; get_conversation_list` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| D09 | تصفية وأرشفة المحادثات | **CORE_AVAILABLE** | Low | [Livechat.php](../../application/controllers/Livechat.php) — `get_conversation_list; update_mark_as_action` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| D10 | مؤشرات غير المقروء | **CORE_REQUIRES_SETUP** | Medium | [Livechat.php](../../application/controllers/Livechat.php) — `update_mark_as_action; unseen_count` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + RT?؛ لا رخصة addon مشتراة | BASE |
| D11 | صندوق قنوات موحد شامل | **NOT_FEASIBLE_NOW** | High | [Livechat.php](../../application/controllers/Livechat.php) — `load_livechat; get_bot_whatsapp_by_phone_number_id` | النطاق الكامل FB/IG/WhatsApp/SMS/Email غير موجود ويتطلب عدة مشاريع ومزودين؛ ابدأ بواجهة FB/IG المشتركة فقط. | INFRA + META؛ لا رخصة addon مشتراة | HOLD-INBOX |

### E — Social Publishing

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| E01 | نشر نصوص Facebook | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| E02 | نشر صور Facebook | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| E03 | نشر فيديو Facebook | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| E04 | Facebook Multi-image | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; image_url` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| E05 | Facebook Carousel/Slideshow | **CORE_REQUIRES_SETUP** | Medium | [Ultrapost.php](../../application/modules/ultrapost/controllers/Ultrapost.php) — `carousel_slider_post; carousel_slider_add_post_action; CJ carousel_slider_post` | Ultrapost والنشر مضمّنان محليًا؛ اختبر كل صيغة API، ولا تسوق Slideshow قديمًا دون إثبات توافق. | INFRA + META+CRON؛ لا رخصة addon مشتراة | META |
| E06 | نشر روابط Facebook | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| E07 | جدولة منشورات Facebook | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `publish_post; schedule_time; time_zone` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| E08 | منشورات متكررة | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; repeat_times; time_interval` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| E09 | RSS Auto Posting | **CORE_REQUIRES_SETUP** | Medium | [Autoposting.php](../../application/controllers/Autoposting.php) — `settings; add_feed_action; CJ rss_auto_post` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + RSS+CRON؛ لا رخصة addon مشتراة | BASE |
| E10 | النشر إلى عدة صفحات | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `text_image_link_video_post; parent_campaign_id; page_ids` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| E11 | YouTube Feed Auto Posting | **CUSTOM_DEVELOPMENT** | Medium | [Autoposting.php](../../application/controllers/Autoposting.php) — `feed_type; youtube_channel_id; CJ rss_auto_post` | مكتبة Core تقرأ RSS channel/item؛ موصل YouTube الأصلي/Atom ومكتباته غير متوفرة، فيحتاج adapter أصليًا. | INFRA+RSS/HTTP+CRON؛ مصدر/quotas | T06 |
| E12 | WordPress Feed Auto Posting | **CORE_REQUIRES_SETUP** | Medium | [Autoposting.php](../../application/controllers/Autoposting.php) — `feed_type; wordpress_blog_url; CJ rss_auto_post` | بديل WordPress عبر feed RSS 2.0 متوافق وfeed_type=rss في Core؛ لا يستخدم wordpress_post أويفتح إضافة native. | INFRA + RSS+CRON؛ لا رخصة addon مشتراة | RSS |
| E13 | تقارير النشر الاجتماعي | **CORE_AVAILABLE** | Low | [Instagram_poster.php](../../application/modules/instagram_poster/controllers/Instagram_poster.php) — `ajax_get_text_report; facebook_rx_auto_post` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| E14 | أداء المنشور التفصيلي | **CORE_REQUIRES_SETUP** | Medium | [Comment_automation.php](../../application/controllers/Comment_automation.php) — `get_post_analytics; FB insights` | عرض المقاييس التي يعيدها API في المسار الموجود فقط؛ ليست تغطية لكل صيغة منشور أوضمان أداء. | INFRA + META؛ لا رخصة addon مشتراة | META |

### F — Marketing Campaigns

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F01 | Messenger Broadcasting | **CUSTOM_DEVELOPMENT** | High | [Cron_job.php](../../application/controllers/Cron_job.php) — `subscriber_broadcaster; braodcast_message` | جزء كبير خاص بحملات Messenger/التسلسل مرتبط ببوابات Enhancers؛ ابن campaign runner أصليًا محدودًا بالموافقات ونافذة القناة بدل تفعيل الإضافة. | INFRA + META+CRON؛ لا رخصة addon مشتراة | T07 |
| F02 | One-Time Notifications | **NOT_FEASIBLE_NOW** | High | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; MB otn_subscribers` | لا تعهد OTN/RCN قبل إثبات إتاحة الخدمة والأهلية والتوكنات الحالية؛ شراء حزمة لا يحل موافقة المنصة. | INFRA + META+CRON؛ لا رخصة addon مشتراة | HOLD-META |
| F03 | Recurring Notifications | **NOT_FEASIBLE_NOW** | High | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `rcn_subscriber_bulk_broadcast_add_action; H recurring_notification_exist` | لا تعهد OTN/RCN قبل إثبات إتاحة الخدمة والأهلية والتوكنات الحالية؛ شراء حزمة لا يحل موافقة المنصة. | INFRA + META+CRON؛ لا رخصة addon مشتراة | HOLD-META |
| F04 | جدولة حملات Messenger | **CUSTOM_DEVELOPMENT** | High | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; schedule_time` | جزء كبير خاص بحملات Messenger/التسلسل مرتبط ببوابات Enhancers؛ ابن campaign runner أصليًا محدودًا بالموافقات ونافذة القناة بدل تفعيل الإضافة. | INFRA + META+CRON؛ لا رخصة addon مشتراة | T07 |
| F05 | استهداف شرائح المشتركين | **CUSTOM_DEVELOPMENT** | High | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_subscriber_bulk_broadcast_add_action; label_ids; excluded_label_ids` | جزء كبير خاص بحملات Messenger/التسلسل مرتبط ببوابات Enhancers؛ ابن campaign runner أصليًا محدودًا بالموافقات ونافذة القناة بدل تفعيل الإضافة. | INFRA + META؛ لا رخصة addon مشتراة | T07 |
| F06 | قوالب البث | **CUSTOM_DEVELOPMENT** | High | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `otn_create_template_action; rcn_template_manager` | جزء كبير خاص بحملات Messenger/التسلسل مرتبط ببوابات Enhancers؛ ابن campaign runner أصليًا محدودًا بالموافقات ونافذة القناة بدل تفعيل الإضافة. | INFRA + META؛ لا رخصة addon مشتراة | T07 |
| F07 | تقارير إرسال Messenger | **CUSTOM_DEVELOPMENT** | High | [Messenger_bot_broadcast.php](../../application/controllers/Messenger_bot_broadcast.php) — `otn_campaign_sent_status; rcn_campaign_sent_status` | جزء كبير خاص بحملات Messenger/التسلسل مرتبط ببوابات Enhancers؛ ابن campaign runner أصليًا محدودًا بالموافقات ونافذة القناة بدل تفعيل الإضافة. | INFRA؛ لا رخصة addon مشتراة | T07 |
| F08 | قيود نافذة الرسائل وMessage Tags | **CORE_REQUIRES_SETUP** | Medium | [Livechat.php](../../application/controllers/Livechat.php) — `reply_to_conversation; NON_PROMOTIONAL; HUMAN_AGENT` | افحص قيود الرسائل في المسار الحالي مقابل سياسة المنصة قبل الإرسال؛ ليست وسيلة لتجاوز نافذة القناة. | INFRA + META؛ لا رخصة addon مشتراة | META |
| F09 | موافقة OTN/RCN وإلغاء الاشتراك | **NOT_FEASIBLE_NOW** | High | [Messenger_bot.php](../../application/controllers/Messenger_bot.php) — `otn_subscribers; rcn_subscribers; permission` | لا تعهد OTN/RCN قبل إثبات إتاحة الخدمة والأهلية والتوكنات الحالية؛ شراء حزمة لا يحل موافقة المنصة. | INFRA + META؛ لا رخصة addon مشتراة | HOLD-META |
| F10 | تسلسلات Messenger Drip | **CUSTOM_DEVELOPMENT** | High | [Cron_job.php](../../application/controllers/Cron_job.php) — `sequence_message_broadcast_hourly; sequence_message_broadcast_daily` | جزء كبير خاص بحملات Messenger/التسلسل مرتبط ببوابات Enhancers؛ ابن campaign runner أصليًا محدودًا بالموافقات ونافذة القناة بدل تفعيل الإضافة. | INFRA + META+CRON؛ لا رخصة addon مشتراة | T07 |

### G — SMS Marketing

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| G01 | إنشاء حملات SMS | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_sms_campaign; create_sms_campaign_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS+CRON؛ لا رخصة addon مشتراة | BASE |
| G02 | CSV لجهات اتصال SMS والبريد | **CORE_AVAILABLE** | Low | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `ajax_import_csv_files; import_contact_action_ajax` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| G03 | تقسيم جهات اتصال SMS والبريد | **CORE_AVAILABLE** | Low | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `contact_group_list; add_contact_group_action` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| G04 | جدولة SMS | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `sms_sending_command; SE create_sms_campaign_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS+CRON؛ لا رخصة addon مشتراة | BASE |
| G05 | تقارير إرسال SMS | **CUSTOM_DEVELOPMENT** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `ajax_get_sms_campaign_report_info; sms_sending_campaign_send` | تقارير Submitted موجودة؛ Delivery Receipts فعلية تحتاج callbacks وتحققًا وخرائط حالات أصلية. | INFRA+SMS؛ بلد/Unicode/DLR | T08 |
| G06 | Twilio SMS | **CORE_REQUIRES_SETUP** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `twilio_sms_sent` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS؛ لا رخصة addon مشتراة | BASE |
| G07 | Plivo SMS | **CORE_REQUIRES_SETUP** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `plivo_sms_send` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS؛ لا رخصة addon مشتراة | BASE |
| G08 | Vonage/Nexmo SMS | **CORE_REQUIRES_SETUP** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `nexmo_send_sms` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS؛ لا رخصة addon مشتراة | BASE |
| G09 | Clickatell SMS | **CORE_REQUIRES_SETUP** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `clickatell_send_sms; clickatell_platform_send_sms` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS؛ لا رخصة addon مشتراة | BASE |
| G10 | MSG91 SMS | **CUSTOM_DEVELOPMENT** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `msg91_send_sms` | يلزم تعديل adapters المرخصة للبلد/HTTPS/Unicode بحسب المزود؛ لا ضمان SMS عربي عبر إعداد فقط. | INFRA+SMS؛ بلد/Unicode/DLR | T08 |
| G11 | Africa's Talking SMS | **CUSTOM_DEVELOPMENT** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `africastalking_send_sms` | يلزم تعديل adapters المرخصة للبلد/HTTPS/Unicode بحسب المزود؛ لا ضمان SMS عربي عبر إعداد فقط. | INFRA+SMS؛ بلد/Unicode/DLR | T08 |
| G12 | Custom HTTP SMS GET/POST | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_custom_api; create_custom_api_post_method; SMS send_sms` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS+HTTP؛ لا رخصة addon مشتراة | BASE |
| G13 | SMS عربي Unicode | **CUSTOM_DEVELOPMENT** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `clickatell_platform_send_sms unicode=1; nexmo_send_sms type=text` | يلزم تعديل adapters المرخصة للبلد/HTTPS/Unicode بحسب المزود؛ لا ضمان SMS عربي عبر إعداد فقط. | INFRA+SMS؛ بلد/Unicode/DLR | T08 |
| G14 | SMS Sequence Campaigns | **CUSTOM_DEVELOPMENT** | High | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `get_sequence_campaigns; bulk_sequence_campaign_assign; H sms_email_drip_campaigner_exist` | حملات SMS/Email العادية موجودة؛ قواعد sequences والتوقف وإلغاء الاشتراك وscheduler تحتاج تطويرًا أصليًا. | INFRA+EMAIL/SMS+CRON؛ consent | T09 |
| G15 | إعداد اتصال ومصادقة SMS | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `sms_api_lists; ajax_create_sms_api; send_test_sms` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS؛ لا رخصة addon مشتراة | BASE |
| G16 | مزودو SMS إضافيون | **CORE_REQUIRES_SETUP** | Medium | [Sms_manager.php](../../application/libraries/Sms_manager.php) — `textlocal_in; infobip_send_sms; semysms_send_sms; send_sms_route` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + SMS؛ لا رخصة addon مشتراة | BASE |

### H — Email Marketing

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H01 | إنشاء حملات Email | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `create_email_campaign; create_email_campaign_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL+CRON؛ لا رخصة addon مشتراة | BASE |
| H02 | إدارة قوالب البريد | **CORE_AVAILABLE** | Low | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_templates_list; save_template; view_template` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| H03 | Drag-and-Drop Email Editor | **CORE_AVAILABLE** | Low | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `drag_drop_email_template; plugins/email-template-builder` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| H04 | SMTP | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `smtp_config; ajax_save_smtp_api; H _email_send_function` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL؛ لا رخصة addon مشتراة | BASE |
| H05 | SendGrid | **CUSTOM_DEVELOPMENT** | Medium | [Email_manager.php](../../application/libraries/Email_manager.php) — `sendgrid_email_send; SE sendgrid_api_config` | واجهة إعداد SendGrid موجودة؛ adapter يستخدم مصادقة/مسارًا قديمًا، فخطط لتحديث أصلي واختبار بدل اعتبار إضافة مدفوعة. | INFRA+EMAIL؛ حساب إرسال/callback | T10 |
| H06 | Mailgun | **CORE_REQUIRES_SETUP** | Medium | [Email_manager.php](../../application/libraries/Email_manager.php) — `mailgun_email_send; SE mailgun_api_config` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL؛ لا رخصة addon مشتراة | BASE |
| H07 | Mandrill | **CORE_REQUIRES_SETUP** | Medium | [Email_manager.php](../../application/libraries/Email_manager.php) — `send_madrill_email; SE mandrill_api_config` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL؛ لا رخصة addon مشتراة | BASE |
| H08 | جدولة حملات Email | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `email_sending_command` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL+CRON؛ لا رخصة addon مشتراة | BASE |
| H09 | Email Sequences | **CUSTOM_DEVELOPMENT** | High | [Home.php](../../application/controllers/Home.php) — `sms_email_drip_campaigner_exist; SE get_sequence_campaigns` | حملات SMS/Email العادية موجودة؛ قواعد sequences والتوقف وإلغاء الاشتراك وscheduler تحتاج تطويرًا أصليًا. | INFRA+EMAIL/SMS+CRON؛ consent | T09 |
| H10 | Open Tracking | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `checking_open_rate; email_sending_campaign_send` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL+PUBLIC URL؛ لا رخصة addon مشتراة | BASE |
| H11 | Click Tracking | **CORE_REQUIRES_SETUP** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `checking_click_rate; email_clickrate_links_backup` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL+PUBLIC URL؛ لا رخصة addon مشتراة | BASE |
| H12 | Unsubscribe Email | **CORE_REQUIRES_SETUP** | Medium | [Home.php](../../application/controllers/Home.php) — `unsubscribe; unsubscribe_action; sms_email_contacts.unsubscribed` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL+PUBLIC URL؛ لا رخصة addon مشتراة | BASE |
| H13 | Bounce Handling | **CUSTOM_DEVELOPMENT** | Medium | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `بحث bounce/bounced في المتحكمات وEmail_manager دون معالج` | يلزم bounce receiver أصلي ومصادقة callbacks وsuppression؛ لا يتطلب حزمة ChatPion مدفوعة. | INFRA+EMAIL؛ حساب إرسال/callback | T10 |
| H14 | تقارير حملات Email | **CORE_AVAILABLE** | Low | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_campaign_reports; ajax_get_email_campaign_report_info` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| H15 | Mailchimp Autoresponder | **CORE_REQUIRES_SETUP** | Medium | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `mailchimp_list; H send_email_to_autoresponder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL/API؛ لا رخصة addon مشتراة | BASE |
| H16 | ActiveCampaign Autoresponder | **CORE_REQUIRES_SETUP** | Medium | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `activecampaign_list; H send_email_to_autoresponder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL/API؛ لا رخصة addon مشتراة | BASE |
| H17 | Brevo/Sendinblue Autoresponder | **CORE_REQUIRES_SETUP** | Medium | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `sendinblue_list; H send_email_to_autoresponder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL/API؛ لا رخصة addon مشتراة | BASE |
| H18 | Mautic Autoresponder | **CORE_REQUIRES_SETUP** | Medium | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `mautic_list; H send_email_to_autoresponder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL/API؛ لا رخصة addon مشتراة | BASE |
| H19 | Acelle Autoresponder | **CORE_REQUIRES_SETUP** | Medium | [Email_auto_responder_integration.php](../../application/controllers/Email_auto_responder_integration.php) — `acelle_list; H send_email_to_autoresponder` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL/API؛ لا رخصة addon مشتراة | BASE |

### I — E-commerce

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| I01 | إنشاء وإدارة متجر | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `add_store; add_store_action; edit_store_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I02 | متاجر متعددة للمستخدم | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `store_list; add_store_action; _check_usage(268)` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE+QUOTA؛ لا رخصة addon مشتراة | BASE |
| I03 | إدارة المنتجات | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `add_product_action; edit_product_action; delete_product` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I04 | تصنيفات المنتجات | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `ajax_create_new_category; sort_category` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I05 | خصائص واختيارات المنتج | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `ajax_create_new_attribute; ecommerce_attribute` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I06 | سعر بحسب Variation | **CUSTOM_DEVELOPMENT** | Medium | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `calculate_price_basedon_attribute; ecommerce_attribute_product_price` | الخصائص الأساسية I05 موجودة؛ سعر المخزون بحسب variant يحتاج جدول وحساب server-side أصليين. | INFRA + STORE؛ لا رخصة addon مشتراة | T11 |
| I07 | صور المنتجات والمتجر | **CORE_AVAILABLE** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `upload_product_thumb; upload_featured_image; upload_store_logo` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| I08 | كوبونات متجر | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `check_coupon; apply_coupon; add_coupon_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I09 | Shopping Cart | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `cart; add_to_cart_modal; update_cart_item` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I10 | Checkout | **CORE_REQUIRES_SETUP** | Medium | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `proceed_checkout; valid_cart_data` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE+PAY?؛ لا رخصة addon مشتراة | BASE |
| I11 | إدارة الطلبات | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `order_list; change_payment_status` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I12 | سجلات العملاء والعناوين | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `customer_list; save_address; get_buyer_profile` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I13 | Store Pickup وPickup Points | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `apply_store_pickup; pickup_point_list` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I14 | إعداد الشحن والتوصيل | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `appearance_settings_action; ecommerce_store.shipping_charge` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I15 | إشعارات الطلبات | **CORE_REQUIRES_SETUP** | Medium | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `confirmation_message_sender; notification_settings_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+EMAIL+SMS؛ لا رخصة addon مشتراة | BASE |
| I16 | Abandoned Cart لمتجر ChatPion | **CORE_REQUIRES_SETUP** | Medium | [Cron_job.php](../../application/controllers/Cron_job.php) — `ecommerce_abandoned_cart_reminder; EC reminder_settings_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+CRON؛ لا رخصة addon مشتراة | BASE |
| I17 | واجهة متجر عبر المتصفح | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `store; product; guest_login_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE+PUBLIC URL؛ لا رخصة addon مشتراة | BASE |
| I18 | ربط المتجر بـMessenger | **CORE_REQUIRES_SETUP** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `get_store_list; get_storewise_products; EC store` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META+STORE؛ لا رخصة addon مشتراة | BASE |
| I19 | QR للمتجر والطلب | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `qr_code; qr_code_action; download_qr` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I20 | قائمة مطعم وطلب طعام | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `store_type; business_hour_settings_action; pickup_point_list` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I21 | طباعة إيصال Thermal عبر المتصفح | **CORE_AVAILABLE** | Low | [bare-theme.php](../../application/views/ecommerce/bare-theme.php) — `print-options; window.frames.print; assets/css/print` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| I22 | منتجات رقمية وتنزيل | **CUSTOM_DEVELOPMENT** | High | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `download_item; digital_product_orders; ecommerce_digital_product gate` | روابط تنزيل في Core لا تمنح entitlement لإضافة Digital؛ ابن تسليمًا أصليًا بملكية وسداد وتخزين آمن. | INFRA + STORE؛ لا رخصة addon مشتراة | T12 |
| I23 | تقييم وتعليق منتج | **CUSTOM_DEVELOPMENT** | Medium | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `comment; review; ecommerce_review_comment_exist` | أعد استخدام منتجات وعملاء المتجر؛ اكتب مراجعات أصلية وجداول ومراجعة محتوى ولا تفعل project48. | INFRA + STORE؛ لا رخصة addon مشتراة | T13 |
| I24 | WooCommerce Synchronization | **CUSTOM_DEVELOPMENT** | High | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `woocommerce_product_id; woocommerce_config_id` | متجر Core مستقل وتذكير سلاله موجودان؛ مزامنة WooCommerce وreceiver recovery تحتاج connector أصليًا. | INFRA+HTTP؛ Woo/Webhooks وقناة إشعار | T14 |
| I25 | WooCommerce Cart Recovery | **CUSTOM_DEVELOPMENT** | High | [Cron_job.php](../../application/controllers/Cron_job.php) — `woocommerce_abandoned_cart_reminder; woocommerce_drip_campaign_webhook_call` | متجر Core مستقل وتذكير سلاله موجودان؛ مزامنة WooCommerce وreceiver recovery تحتاج connector أصليًا. | INFRA+HTTP؛ Woo/Webhooks وقناة إشعار | T14 |
| I26 | بوابات دفع المتجر | **CORE_REQUIRES_SETUP** | Medium | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `stripe_action; paypal_action; payment_accounts_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + PAY?+STORE؛ لا رخصة addon مشتراة | BASE |
| I27 | Cash on Delivery | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `cod_payment` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I28 | Manual/Bank Payment للمتجر | **CORE_REQUIRES_SETUP** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `manual_payment; manual_payment_upload_file` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| I29 | مبيعات وإيراد المتجر | **CORE_REQUIRES_SETUP** | Low | [Dashboard.php](../../application/controllers/Dashboard.php) — `get_ecommerce_div_content; EC order_list_data` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + STORE؛ لا رخصة addon مشتراة | BASE |
| I30 | Related/Upsell/Downsell Products | **FREE_ADDON_OPTION** | Medium | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `get_product_list; is_ecommerce_related_product_exist; related_product_ids` | Related Products مدرجة مجانية رسميًا؛ ليست مثبتة؛ لا نفترض أنها تحقق كل upsell/downsell قبل فحص الحزمة. | INFRA؛ claim/compatibility | FREE-RELATED |

### J — Analytics

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| J01 | مؤشرات Dashboard | **CORE_AVAILABLE** | Low | [Dashboard.php](../../application/controllers/Dashboard.php) — `index; get_first_div_content` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| J02 | تحليلات المشتركين والنمو | **CORE_AVAILABLE** | Low | [Dashboard.php](../../application/controllers/Dashboard.php) — `index; SM bot_subscribers_data; messenger_bot_subscriber` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| J03 | Messenger Analytics | **CORE_REQUIRES_SETUP** | Medium | [Messenger_bot_analytics.php](../../application/controllers/Messenger_bot_analytics.php) — `result` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| J04 | Facebook Page Analytics | **CORE_REQUIRES_SETUP** | Medium | [Page_analytics.php](../../application/controllers/Page_analytics.php) — `analytics; Facebook_page_insight` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + META؛ لا رخصة addon مشتراة | BASE |
| J05 | تصدير بيانات وتقارير | **CORE_AVAILABLE** | Low | [Subscriber_manager.php](../../application/controllers/Subscriber_manager.php) — `download_result; EC download_csv; CA download_get_reply_info` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| J06 | Date Filters | **CORE_AVAILABLE** | Low | [Sms_email_manager.php](../../application/controllers/Sms_email_manager.php) — `email_campaign_reports; DA index` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| J07 | Charts وGraphs | **CORE_AVAILABLE** | Low | [Dashboard.php](../../application/controllers/Dashboard.php) — `index; assets/modules; plugins/apexcharts` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| J08 | إيرادات اشتراكات المنصة | **CORE_REQUIRES_SETUP** | Medium | [Payment.php](../../application/controllers/Payment.php) — `earning_summary; transaction_log` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + PAY?؛ لا رخصة addon مشتراة | BASE |

### AI — AI

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AI01 | OpenAI API Integration | **CORE_REQUIRES_SETUP** | Medium | [Ai_reply.php](../../application/modules/ai_reply/controllers/Ai_reply.php) — `activate; INT open_ai_api_credentials; OA open_ai_completion` | AI مجانية منذ V9.1 وفق سجل المورد وموجودة محليًا؛ لا حاجة لشراء bundle؛ تكلفة API منفصلة، ويتبع تحديث AI02. | INFRA + AI+تسجيل مضمن نظامي؛ لا رخصة addon مشتراة | INC |
| AI02 | اختيار Model Identifier | **CUSTOM_DEVELOPMENT** | Medium | [Openai_api.php](../../application/libraries/Openai_api.php) — `open_ai_completion; text_completion_model; chat_completion_model` | تطوير AI أصلي محدود: adapter/تصنيف/usage/ميزانية/مزود؛ يختلف عن Agent/RAG كامل، مع تكلفة استهلاك خارجية. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI03 | توليد نص عبر API | **CUSTOM_DEVELOPMENT** | Medium | [Home.php](../../application/controllers/Home.php) — `get_ai_reply_open_ai` | الميزة المضمّنة لا تحتاج شراء إضافة، لكن تقديم رد AI إنتاجي يتطلب تحديث adapter والنماذج ومعالجة الفشل والاستهلاك أولًا. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI04 | ردود AI داخل البوت وFlows | **CUSTOM_DEVELOPMENT** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `return_single_reply_array; openaiInput; MB send_message_bot_reply` | الميزة المضمّنة لا تحتاج شراء إضافة، لكن تقديم رد AI إنتاجي يتطلب تحديث adapter والنماذج ومعالجة الفشل والاستهلاك أولًا. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI05 | سياق محادثة متعدد الأدوار | **CUSTOM_DEVELOPMENT** | High | [Openai_api.php](../../application/libraries/Openai_api.php) — `messages=[system,user]; H get_ai_reply_open_ai` | AI الأساسية مجانية وموجودة؛ تحديث adapter والسياق والعداد والتكلفة/المزود/intent أهداف تطوير أصلية، لا شراء addon. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI06 | Prompts وتعليمات قابلة للإعداد | **CORE_REQUIRES_SETUP** | Medium | [Integration.php](../../application/controllers/Integration.php) — `open_ai_api_credentials_action; instruction_to_ai; VF reply_text` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + AI؛ لا رخصة addon مشتراة | BASE |
| AI07 | Knowledge Base وDocument Retrieval/RAG | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-AI: embeddings/vector/retrieval/document ingestion` | RAG/Agents مستقلة ليست جزءًا من إطلاق يعتمد الشيفرة الحالية؛ تحتاج مشروع بيانات وتقييم وأمان وميزانية تشغيل قبل الوعد. | مستقبلي: INFRA+AI+تخزين/تقييم | HOLD-AI |
| AI08 | Intent Detection تلقائي | **CUSTOM_DEVELOPMENT** | Medium | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-AI; MB keyword matching` | تطوير AI أصلي محدود: adapter/تصنيف/usage/ميزانية/مزود؛ يختلف عن Agent/RAG كامل، مع تكلفة استهلاك خارجية. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI09 | مساعدة خدمة عملاء واعية بالمحادثة | **CUSTOM_DEVELOPMENT** | High | [Openai_api.php](../../application/libraries/Openai_api.php) — `open_ai_completion; LC canned_response` | AI الأساسية مجانية وموجودة؛ تحديث adapter والسياق والعداد والتكلفة/المزود/intent أهداف تطوير أصلية، لا شراء addon. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI10 | Token Usage Metering | **CUSTOM_DEVELOPMENT** | Medium | [Openai_api.php](../../application/libraries/Openai_api.php) — `الاستجابة لا تحفظ usage في مسار H get_ai_reply_open_ai` | تطوير AI أصلي محدود: adapter/تصنيف/usage/ميزانية/مزود؛ يختلف عن Agent/RAG كامل، مع تكلفة استهلاك خارجية. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI11 | إدارة تكلفة AI وميزانية | **CUSTOM_DEVELOPMENT** | Medium | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-AI: budget/cost/usage ledger` | تطوير AI أصلي محدود: adapter/تصنيف/usage/ميزانية/مزود؛ يختلف عن Agent/RAG كامل، مع تكلفة استهلاك خارجية. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI12 | حدود AI لكل مستخدم | **CUSTOM_DEVELOPMENT** | Medium | [Home.php](../../application/controllers/Home.php) — `ai_reply_exist; _check_usage; open_ai_config.maximum_token` | تطوير AI أصلي محدود: adapter/تصنيف/usage/ميزانية/مزود؛ يختلف عن Agent/RAG كامل، مع تكلفة استهلاك خارجية. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI13 | مزودو AI بديلون | **CUSTOM_DEVELOPMENT** | Medium | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-AI: Anthropic/Gemini/Ollama/DeepSeek` | تطوير AI أصلي محدود: adapter/تصنيف/usage/ميزانية/مزود؛ يختلف عن Agent/RAG كامل، مع تكلفة استهلاك خارجية. | INFRA+AI؛ tokens/limits/ledger | T15 |
| AI14 | AI Agents وأدوات وخطط مستقلة | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-AI: tools/function calling/agent orchestration` | RAG/Agents مستقلة ليست جزءًا من إطلاق يعتمد الشيفرة الحالية؛ تحتاج مشروع بيانات وتقييم وأمان وميزانية تشغيل قبل الوعد. | مستقبلي: INFRA+AI+تخزين/تقييم | HOLD-AI |
| AI15 | AI لردود تعليقات Facebook وInstagram | **CUSTOM_DEVELOPMENT** | Medium | [Instagram_reply.php](../../application/controllers/Instagram_reply.php) — `webhook_callback; ai_reply; CA get_ai_reply_open_ai calls` | الميزة المضمّنة لا تحتاج شراء إضافة، لكن تقديم رد AI إنتاجي يتطلب تحديث adapter والنماذج ومعالجة الفشل والاستهلاك أولًا. | INFRA+AI؛ tokens/limits/ledger | T15 |

### W — WhatsApp

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| W01 | WhatsApp Business Cloud API | **NOT_FEASIBLE_NOW** | High | [Livechat.php](../../application/controllers/Livechat.php) — `get_bot_whatsapp_by_phone_number_id returns []` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W02 | ربط WABA ورقم أعمال | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-WA: WABA/phone_number_id/messaging_product` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W03 | WhatsApp Incoming Webhook | **NOT_FEASIBLE_NOW** | High | [Home.php](../../application/controllers/Home.php) — `central_webhook_callback; بحث S-WA` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W04 | إرسال رسائل WhatsApp Business | **NOT_FEASIBLE_NOW** | High | [Livechat.php](../../application/controllers/Livechat.php) — `reply_to_conversation; get_bot يستخدم facebook_rx_fb_page_info` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W05 | WhatsApp Chatbot Flows | **NOT_FEASIBLE_NOW** | High | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `load_builder media_type=fb/ig; بحث S-WA` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W06 | WhatsApp Template Messaging | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-WA: template language components + messaging_product` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W07 | WhatsApp Bulk Messaging | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-WA ضمن الحملات وCron` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W08 | WhatsApp Contact Management | **NOT_FEASIBLE_NOW** | High | [bot_helper.php](../../application/helpers/bot_helper.php) — `formatting wa_id; LC بقايا أسماء متغيرات` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W09 | WhatsApp Conversation Inbox | **NOT_FEASIBLE_NOW** | High | [Livechat.php](../../application/controllers/Livechat.php) — `get_bot_whatsapp_by_phone_number_id; get_bot` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W10 | WhatsApp Campaign Reporting | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-WA ضمن schema والتقارير` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |
| W11 | إرسال تفاصيل طلب متجر إلى WhatsApp | **FREE_ADDON_OPTION** | Low | [Ecommerce.php](../../application/controllers/Ecommerce.php) — `appearance_settings_action; order; APP change handler` | زر تفاصيل الطلب مجاني رسميًا وغير مكتمل محليًا؛ بديل زر URL أصلي Low إن تعذر الحصول على الحزمة، وليس Cloud API. | INFRA؛ زر يدوي، لا Cloud API | FREE-WA |
| W12 | WhatsApp Payment/Ordering Workflow كامل | **NOT_FEASIBLE_NOW** | High | [05-ai-and-whatsapp-audit.md](05-ai-and-whatsapp-audit.md) — `بحث S-WA; EC proceed_checkout` | منصة WhatsApp Business كاملة غير موجودة؛ onboarding/webhooks/templates/opt-in وتقارير ومزود مستقل، خارج MVP الحالي لا استحالة تقنية دائمة. | مستقبلي: INFRA+WhatsApp API/أهلية/استهلاك | HOLD-WA |

### S — SaaS / White Label

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S01 | حسابات SaaS متعددة | **CORE_AVAILABLE** | Low | [Home.php](../../application/controllers/Home.php) — `sign_up_action; users; package_id` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| S02 | عزل Tenant/Customer | **CUSTOM_DEVELOPMENT** | High | [Livechat.php](../../application/controllers/Livechat.php) — `get_bot user_id; update_mark_as_action subscribe_id only` | تقوية عزل user_id وملكية كل سجل وPusher شرط إطلاق إلزامي، وليس شراء Team Member. | INFRA+RT?؛ DB/actor/owner/page | T00 |
| S03 | لوحة المدير وإدارة المستخدمين | **CORE_AVAILABLE** | Low | [Admin.php](../../application/controllers/Admin.php) — `settings; user management views; H user_delete_action` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S04 | تسجيل مستخدم | **CORE_REQUIRES_SETUP** | Medium | [Home.php](../../application/controllers/Home.php) — `sign_up; sign_up_action; account_activation_action` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL؛ لا رخصة addon مشتراة | BASE |
| S05 | تسجيل دخول | **CORE_AVAILABLE** | Low | [Home.php](../../application/controllers/Home.php) — `login; login_page; logout` | وظيفة أساسية موجودة؛ لا شراء إضافة، مع بوابة الأمان والبيئة العامة. | INFRA؛ سجلات/واجهة محلية | BASE |
| S06 | استرداد كلمة المرور | **CORE_REQUIRES_SETUP** | Medium | [Home.php](../../application/controllers/Home.php) — `code_genaration; recovery_check; forget_password` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + EMAIL؛ لا رخصة addon مشتراة | BASE |
| S07 | باقات اشتراك | **CORE_AVAILABLE** | Low | [Payment.php](../../application/controllers/Payment.php) — `package_manager; add_package_action; edit_package_action` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S08 | حدود ميزات بحسب الباقة | **CORE_AVAILABLE** | Low | [Home.php](../../application/controllers/Home.php) — `module_access; _check_usage; package.module_ids` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S09 | حصص استخدام خاصة بالمستخدم | **CORE_AVAILABLE** | Low | [Home.php](../../application/controllers/Home.php) — `_insert_usage_log; _delete_usage_log; _check_usage` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S10 | Trial ومدة تجربة | **CORE_REQUIRES_SETUP** | Low | [Home.php](../../application/controllers/Home.php) — `sign_up_action; package.price=Trial; expired_date` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + CRON؛ لا رخصة addon مشتراة | BASE |
| S11 | انتهاء وتجديد الاشتراك | **CORE_REQUIRES_SETUP** | Medium | [Home.php](../../application/controllers/Home.php) — `member_validity; CJ membership_alert; expired_users_disable_bot` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + CRON+PAY?؛ لا رخصة addon مشتراة | BASE |
| S12 | فوترة وشراء اشتراك | **CORE_REQUIRES_SETUP** | Medium | [Payment.php](../../application/controllers/Payment.php) — `payment_button; buy_package; transaction_log` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + PAY?؛ لا رخصة addon مشتراة | BASE |
| S13 | تفعيل باقة تلقائي بعد الدفع | **CORE_REQUIRES_SETUP** | Medium | [Stripe_action.php](../../application/controllers/Stripe_action.php) — `index; subscriber_login; IP processing` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + PAY?؛ لا رخصة addon مشتراة | BASE |
| S14 | Manual Payment وموافقة المدير للاشتراك | **CORE_REQUIRES_SETUP** | Medium | [Payment.php](../../application/controllers/Payment.php) — `manual_payment; manual_payment_approve; manual_payment_reject` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + PAY?+UPLOAD؛ لا رخصة addon مشتراة | BASE |
| S15 | فاتورة اشتراك SaaS مستقلة | **CUSTOM_DEVELOPMENT** | Medium | [06-saas-white-label-audit.md](06-saas-white-label-audit.md) — `بحث invoice في Payment/Stripe_action/Paypal_ipn` | باقات ومدفوعات Extended موجودة؛ فواتير/كوبونات SaaS تحتاج domain أصليًا منفصلًا عن إيصال وكوبون المتجر. | INFRA؛ لا رخصة addon مشتراة | T16 |
| S16 | Coupons لاشتراك SaaS | **CUSTOM_DEVELOPMENT** | Medium | [06-saas-white-label-audit.md](06-saas-white-label-audit.md) — `بحث coupon في Payment/Stripe_action/Paypal_ipn` | باقات ومدفوعات Extended موجودة؛ فواتير/كوبونات SaaS تحتاج domain أصليًا منفصلًا عن إيصال وكوبون المتجر. | INFRA؛ لا رخصة addon مشتراة | T16 |
| S17 | Roles وصلاحيات أعضاء الفريق | **CUSTOM_DEVELOPMENT** | High | [my_helper.php](../../application/helpers/my_helper.php) — `check_module_action_access; check_module_access; team_access` | حساب مالك واحد لكل نشاط متاح؛ إسناد وموظفون وأدوار داخل tenant تحتاج وحدة أصلية وعزلًا محكمًا. | INFRA+RT?؛ DB/actor/owner/page | T03 |
| S18 | Affiliate Management | **FREE_ADDON_OPTION** | Medium | [Home.php](../../application/controllers/Home.php) — `affiliate_commission; affiliate_visitors_action; affiliate_users` | المورد يعرض Affiliate مجانًا لمشتري Extended؛ مؤهل وفق قرار المستخدم لكن التنزيل والتوافق والتفعيل لم تتحقق. | INFRA؛ عمولات/سحب تشغيلية إن اعتمدت | FREE-AFFILIATE |
| S19 | تغيير Logo وFavicon عام | **CORE_AVAILABLE** | Low | [Admin.php](../../application/controllers/Admin.php) — `general_settings_action; upload logo/favicon` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S20 | تغيير اسم التطبيق والهوية | **CORE_AVAILABLE** | Low | [Admin.php](../../application/controllers/Admin.php) — `general_settings_action; my_config product_name/product_short_name` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S21 | علامة تجارية في رسائل البريد | **CORE_REQUIRES_SETUP** | Low | [Admin.php](../../application/controllers/Admin.php) — `email template settings; H _mail_sender` | إعداد القوالب الحالية لاسم وهوية البريد؛ إزالة جميع النصوص الثابتة خارج هذا النطاق ضمن S27. | INFRA + BRAND+EMAIL؛ لا رخصة addon مشتراة | BRAND |
| S22 | Brand Logo خاص بالمستخدم | **CORE_AVAILABLE** | Low | [Myprofile.php](../../application/controllers/Myprofile.php) — `edit_profile_action; users.brand_logo; brand_url` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S23 | Custom Domain/Subdomain لكل Tenant | **CUSTOM_DEVELOPMENT** | High | [06-saas-white-label-audit.md](06-saas-white-label-audit.md) — `بحث host/domain routing وtenant domain mapping` | نطاقات tenant تحتاج resolver وملكية DNS وSSL وcookie isolation؛ استخدم domain عام واحد في MVP. | INFRA؛ لا رخصة addon مشتراة | T17 |
| S24 | دعم العربية | **CORE_AVAILABLE** | Low | [Multi_language.php](../../application/controllers/Multi_language.php) — `application/language/arabic; _language_loader` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S25 | دعم الإنجليزية | **CORE_AVAILABLE** | Low | [Multi_language.php](../../application/controllers/Multi_language.php) — `application/language/english; config language` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S26 | RTL/LTR | **CORE_AVAILABLE** | Low | [Home.php](../../application/controllers/Home.php) — `is_rtl; _viewcontroller; EC store_locale` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |
| S27 | White Label كامل بلا مراجع مورد | **CUSTOM_DEVELOPMENT** | Medium | [Themes.php](../../application/controllers/Themes.php) — `theme management; AD branding; vendor links` | الاسم/logo واللغة قابلة للإعداد؛ تخصيص الهوية الشامل يحتاج مراجعة views/mail/assets مع حفظ إشعارات التراخيص. | INFRA + BRAND؛ لا رخصة addon مشتراة | T18 |
| S28 | Google/Facebook Social Login | **CORE_REQUIRES_SETUP** | Medium | [Home.php](../../application/controllers/Home.php) — `google_login_back; facebook_login_back` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + GOOGLE+META؛ لا رخصة addon مشتراة | BASE |
| S29 | PayPal Recurring Subscription | **CORE_REQUIRES_SETUP** | Medium | [Payment.php](../../application/controllers/Payment.php) — `payment_button; paypal_payment_type=recurring; IP` | وظيفة مضمّنة تحتاج إعداد القناة/الخدمة واختبارها؛ ليست تشغيلًا مثبتًا. | INFRA + PAY?؛ لا رخصة addon مشتراة | BASE |
| S30 | سجل دخول وإعلانات للمستخدمين | **CORE_AVAILABLE** | Low | [Admin.php](../../application/controllers/Admin.php) — `login log views; H user_login_info; Announcement controller` | إدارة محلية أوواجهة أساسية؛ الاستفادة لا تتطلب شراء إضافة، مع إصلاح الأمن العام والحقوق العادية. | INFRA؛ سجلات/واجهة محلية | BASE |

### L — Advanced / Modules

| ID | القدرة | التصنيف الجديد | التعقيد | دليل الوجود/الفجوة | ما يعاد استخدامه أوالمسار المقترح | التبعيات والتشغيل | المفتاح |
| --- | --- | --- | --- | --- | --- | --- | --- |
| L01 | Google Sheets Integration | **CUSTOM_DEVELOPMENT** | Medium | [03-addons-inventory.md](03-addons-inventory.md) — `لا وحدة؛ بحث google_sheet/google_sheets وSheets API usage` | ابدأ CSV أوexport أحادي الاتجاه لملف يصرح العميل بالوصول إليه؛ Google Sheets addon ليست شرطًا لبناء connector مستقل. | INFRA+GOOGLE؛ OAuth/quotas | T19 |
| L02 | HTTP API Integration عام في Flow | **CUSTOM_DEVELOPMENT** | High | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `addWebhookResponse; messenger_bot_thirdparty_webhook; ADDON31` | Custom HTTP SMS موجود لكنه ليس HTTP node عامًا؛ ابن موصلًا أصليًا مع allowlist وSSRF protection وtimeouts وevent outbox. | INFRA+HTTP؛ مقصد مصرح/SSRF | T20 |
| L03 | Google Contacts Integration | **CUSTOM_DEVELOPMENT** | High | [03-addons-inventory.md](03-addons-inventory.md) — `لا وحدة؛ بحث google_contact وPeople API usage` | CSV موجود للتبادل اليدوي؛ تكامل Sheets/Contacts متعدد العملاء يحتاج OAuth وتشفير tokens وmapping وretry أصليًا. | INFRA+GOOGLE؛ OAuth/quotas | T19 |
| L04 | ChatPion API Documentation وREST module | **FREE_ADDON_OPTION** | High | [Native_api.php](../../application/controllers/Native_api.php) — `get_api_key; get_api_action; absence Api.php` | API Documentation مجانية رسميًا وendpoints الإدارية مقيدة بـExtended؛ راجع أمانها وتوافق9.1.1 قبل نشرها. | INFRA؛ auth/rate limits/TLS | FREE-API |
| L05 | Facebook Group Posting | **NOT_FEASIBLE_NOW** | High | [my_config.php](../../application/config/my_config.php) — `facebook_poster_group_enable_disable; CJ text_image_link_video_post` | وردت Group Tools ضمن مجانيات تاريخية، لكن علمها معطل وتوافقAPI/تنزيل الحزمة غير متحقق؛ استبعدها الآن. | INFRA + META؛ لا رخصة addon مشتراة | HOLD-GROUP |
| L06 | Flow Builder Insight | **CUSTOM_DEVELOPMENT** | Medium | [Visual_flow_builder.php](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) — `message_sent_stat_addon; project_id=64` | تقارير bot العامة موجودة؛ node insight يحتاج events وجدول تجميع أصليًا دون project64. | INFRA + META؛ لا رخصة addon مشتراة | T21 |
| L07 | Blog | **CORE_AVAILABLE** | Low | [Blog.php](../../application/modules/blog/controllers/Blog.php) — `index; application/modules/blog/views; blog_posts` | ملفات وظيفة أساسية/Extended موجودة؛ محتوى وإدارة وصلاحيات عادية، دون شراء حزمة مدفوعة. | INFRA؛ سجلات/واجهة محلية | INC |
| L08 | Support Desk | **CUSTOM_DEVELOPMENT** | Low | [Simplesupport.php](../../application/modules/simplesupport/controllers/Simplesupport.php) — `tickets; open_ticket_action; reply_action` | Support Desk ضمن Extended وموجود؛ join غير مشروط إلى team_members الغائب يحتاج fallback أصليًا للمالك، لا شراء Team addon. | INFRA؛ لا رخصة addon مشتراة | T22 |
| L09 | Menu وCustom Pages | **CORE_AVAILABLE** | Low | [Menu_manager.php](../../application/modules/menu_manager/controllers/Menu_manager.php) — `create_page_action; get_menu_lists; custom_page_builder` | ملفات وظيفة أساسية/Extended موجودة؛ محتوى وإدارة وصلاحيات عادية، دون شراء حزمة مدفوعة. | INFRA؛ سجلات/واجهة محلية | INC |
| L10 | تحديثات التطبيق والإضافات | **CORE_REQUIRES_SETUP** | High | [Update_system.php](../../application/controllers/Update_system.php) — `update_list; initialize_update; addon_initialize_update` | التحديث الرسمي للاستحقاق الحالي فقط بعد backup ومراجعة files/SQL؛ لا ميزات bundle ولا تحديث إنتاج ضمن التدقيق. | INFRA + VENDOR؛ لا رخصة addon مشتراة | VENDOR |


## 14. معايير تسليم التقرير والتحقق

يوثق الملحق نفس223 ID بلا إضافة أوحذف أوعد مزدوج. أعداد القسم1 مشتقة من صفوفه، وجرد19 حزمة جدول مستقل. راجعت الروابط المحلية وصحة التنسيق واتساق المعرفات. لم تتغير تقارير01–11 أوREADME في هذه الجولة، ولم تُختبر أوتُفعل وظيفة Runtime. لا يحتوي التقرير قيم مفاتيح أوبيانات شخصية أومحتوى قاعدة تشغيل.

القرار الهندسي: ابدأ بما ثبت وجوده من Core، أصلح موانع الإطلاق، ثم اختبر كل قناة على حدة. استفد من claim رسمي مجاني عند توفره، وطوّر أضيق بديل أصلي ذي عائد واضح. لا شراء إضافات مدفوعة مطلوب في المسار المقترح، ولا تعهد بتشغيل بلا تكلفة.
