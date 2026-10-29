# 10 — تحليل الفجوات وخطة ما قبل الإطلاق

الغاية خطة عمل مبنية على الأدلة، دون تطوير ضمن التدقيق. ترتيب الأولوية لا يتضمن تقدير زمن أوتكلفة أوسعر باقة. مرجع IDs هو [08](08-master-feature-matrix.md)، وتفاصيل المخاطر [07](07-security-and-readiness.md).

## P0 — بوابة أمان وتشغيل قبل أي عميل مدفوع

| العمل | دليل الفجوة | مخرج قبول قابل للمراجعة |
| --- | --- | --- |
| إثبات runtime/schema reproducibility | PHP7.4 معلن مقابل8.1 في القفل؛ database.php غائب؛ 118 جدولًا أوليًا لا تشمل كل المراجع | سجل تثبيت staging مع نسخ محددة ومخطط موثق وlint/functional smoke مصرح؛ دون استيراد على إنتاج |
| إعادة ضبط مصادقة Cron | Cron_job::api_key_check يعيد true مبكرًا، SEC01 | رفض غير المصادق وقبول scheduler فقط، وجدولة واحدة ومراقبة |
| ترحيل كلمات المرور | Home/Change_password MD5، SEC02 | password_hash/verify + ترحيل الحسابات + reset tests وتحديد معدلات |
| عزل بيانات ومحادثات العملاء | قناة Pusher عامة وupdate_mark_as_action غير مقيد بالمالك، SEC03/04 وS02 | رفض قراءات/كتابات وتنزيلات حساب آخر، private tenant channels واختبارات roles |
| hardening الإنتاج | development/TLS/CSRF/secret management/upload/webhook، SEC06–15 | env خاص وTLS وتوقيع أحداث ومراجعة action scope وملفات بدون تعريض أسرار |
| إثبات الاستحقاق | gates license_type وaddon registration؛ لا بيانات ترخيص مدققة | مطابقة رخصة الشراء والاستعمال التجاري والحزم دون تجاوز checks |

## P1 — MVP مقترح بعد البوابة

المرشح: Messenger/Instagram bot أساسي، Flow Builder بعد تسجيله، جهات اتصال وlabels، Live Chat للقناتين، نشر مجدول، متجر browser/QR وCOD/manual، ولوحة تقارير محدودة. هذه **قدرات مرشحة للاختبار** وليست قائمة إطلاق مؤكدة. تفعيل APIs وتوافق الحسابات واللغة والدفع شروط لكل مجال.

| المجال | العمل التالي | دليل القبول |
| --- | --- | --- |
| FB/IG | تطبيق تجريبي، permissions وWebhook وتوكنات وAPI versions متوافقة | event→subscriber→reply→report مع فشل وretry؛ صفحة ليست ملك المستخدم تُرفض |
| Flow | تفعيل الحزمة الموجودة ومراجعة حفظ/تنفيذ وعقد غير مسموحة | round-trip JSON→execution واختبار Arabic keywords وfallback |
| Livechat | ownership وPusher ثم UI | تاريخ/بحث/labels/unread/refetch بلا اختلاط حسابات |
| النشر | Cron idempotent ومراقبة وسائط | نشر مجدول ومتكرر على صفحتين، نتيجة مستقلة وفشل صفحة لا يكرر الأخرى |
| المتجر | صحة السعر/كوبون/stock ودفع وorder notifications | checkout كامل وcallback مكرر وسداد يدوي وthermal عربي |
| SMS/Email | اختيار مزود مناسب للسوق، encoding/receipts/bounces | إرسال محدود مصرح، unsubscribe، suppression، وفرق Submitted/Delivered واضح |
| Brand/Languages | قاموس Wasla ومراجعة هوية وقوالب | قائمة screens بلا مراجع واجهة غير مقصودة، مع حفظ إشعارات التراخيص وRTL مقبول |
| Operations | backup/restore، monitoring، retention | تجربة استعادة موثقة وتنبيه فشل مهمة ومزود وخطة rollback |

## P2 — حزم إضافية قبل وعود موسعة

راجع [03](03-addons-inventory.md). لا يفترض أن وضع flag يجعل حزمة مفقودة متاحة. الأولوية يحددها المنتج بعد تأكيد التوافق والاستحقاق:

- Team Member Manager للإسناد والأدوار D06/D07/S17؛ لا تعد agent seats قبل توافره واختبار عزل الصفحة.
- Conditional Reply/Connectivity/User Input لسيناريوهات A07/A20–A22/A26 وL02؛ توجد أجزاء core لكن بوابات وDDL ناقصة.
- Recurring Notifications/Enhancers/Email SMS Sequence لحملات F01/F03/F10/G14/H09؛ أهلية خدمات المنصة مستقلة عن امتلاك الحزمة.
- Digital/Variation/Review/Related/WooCommerce للمتجر I06/I22–I25/I30؛ افصل متجر ChatPion recovery من WooCommerce recovery.
- Sheets/Contacts/API Docs/Affiliate لا توجد حزمها؛ يلزم توفيرها أوتطوير بديل بتصميم مستقل واختبار.

## P3 — تطوير جديد أوإعادة تصميم قبل التسويق

| الفجوة | IDs | اتجاه التطوير ومعيار القبول |
| --- | --- | --- |
| WhatsApp Business منصة كاملة | W01–W10/W12 | account onboarding، Cloud adapter، توقيع webhook، approved templates/opt-in، إرسال وحالات وتخزين وinbox؛ لا إعادة تسمية متغيرات FB |
| WhatsApp order button | W11 | استكمال رابط/زر واضح بتجربة checkout، أوحزمة متوافقة؛ لا تلقائية دون Cloud API |
| AI حديث وسياق | AI02/AI05/AI09 | adapter حديث قابل للتوسعة، memory محدودة موثقة، fallback وسلامة إجابات |
| AI cost/quota | AI10/AI11/AI12 | usage ledger لكل tenant، budget وسقف وتنبيهات وحالات retry/idempotency |
| RAG/Agents/intent/providers | AI07/AI08/AI13/AI14 | متطلبات وتقييمات منفصلة؛ لا تسويق «مدرب على ملفاتك» قبل بناء retrieval وأذونات ومصادر |
| Bounce وSMS Unicode موحد | H13/G13 | signed provider callbacks وsuppression وترميز ومقاطع لكل مزود |
| فواتير وكوبونات SaaS | S15/S16 | billing domain مستقل عن ecommerce_coupon، وأرقام فواتير وحالات وتحقق متطلبات السوق قبل إعلان امتثال |
| نطاقات خاصة وعزل كامل | S23/S02 | domain resolver/ownership/SSL/cookie isolation وnegative tenant tests |
| White Label كامل | S21/S27 | جرد UI/email/bundles وروابط وأيقونات وإشعارات ترخيص؛ review مرئي عربي/إنجليزي |

## قرارات تسويقية ينبغي تعليقها

لا «WhatsApp Business»، ولا«AI Agent مستقل»، ولا«RAG»، ولا«CRM موحد لكل القنوات»، ولا«Teams غير محدودة»، ولا«تكامل Sheets/Contacts جاهز»، ولا«كل بوابات الدفع تعمل في مصر»، ولا«Unlimited broadcasting»، ولا«توافق أوامتثال أمني/ضريبي معتمد» قبل أدلة التحقق المعنية. Dark Posts يظل UNDETERMINED B04، وليس وعدًا أونفيًا نهائيًا.

## اختبارات وتسليمات مطلوبة من التطوير لاحقًا

لأي capability تتحول من مرشح إلى إطلاق: test environment/version، prerequisites/permissions، بيانات اختبار اصطناعية، خطوات إيجابية وسلبية، expected/actual result، فشل/إعادة محاولة، أثر tenant، screenshot منقح، owner وتاريخ. تحفظ أدلة التشغيل في مراجعة لاحقة؛ لا تغير Code Status الساكن لإخفاء فشل runtime.

المصفوفة تسجل «قابل للاختبار» ولا تصادق على التصميم التجاري. اعتماد سعر أوباقة يسبقُه اختيار features نجحت فعليًا، وتكاليف مزود معروفة، واستحقاق قانوني مناسب، وقيود معلنة للمستخدم.
