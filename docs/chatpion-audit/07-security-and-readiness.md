# 07 — الأمن والجاهزية التقنية

تدقيق ساكن غير استغلالي؛ لا Requests للتطبيق ولااختبارات اختراق أوفحص CVE أواتصال خدمات. ترتيب الأولوية تقدير أثر للشيفرة، وليس CVSS أوإثبات وصول مهاجم. كل اختبار أدناه **مقترح ولم يُنفذ**، ويجرى لاحقًا على staging وبيانات اصطناعية. لا توجد توصية بإطلاق الإنتاج بالحالة الحالية.

## سجل النتائج

| ID | الأولوية | الملاحظة والدليل | الأثر المشروط وخطوة التحقق |
| --- | --- | --- | --- |
| SEC01 | P0 | [Cron_job::api_key_check](../../application/controllers/Cron_job.php) يبدأ بـreturn TRUE قبل الفحوص | HTTP endpoints التي تعتمد عليه تفقد فحص المفتاح؛ راجع كل caller وأعد مصادقة/قيود scheduler قبل إتاحتها |
| SEC02 | P0 | [Home::login/installation_action/recovery_check](../../application/controllers/Home.php) و[Change_password](../../application/controllers/Change_password.php) تستخدم MD5 | تخزين كلمات مرور ضعيف؛ خطة password_hash/password_verify وترحيل عند الدخول وإبطال جلسات واختبار reset |
| SEC03 | P0 | Home::insert_livechat_data يرسل content/preview على livechat_channel؛ [pusher-js.php](../../application/views/include/pusher-js.php) يشترك بقناة عامة | عند تفعيل Pusher قد تصل بيانات مستخدمين لمشتركين غير مخولين؛ private tenant channels + server auth؛ القيم فارغة محليًا فلا يوجد إثبات تسريب حي |
| SEC04 | P0 | [Livechat::update_mark_as_action](../../application/controllers/Livechat.php) يحدث بشرط subscribe_id فقط | خطر تغيير قراءة/أرشفة سجل خارج الملكية؛ إضافة owner/page scope ومراجعة مسارات شبيهة؛ اختبار حسابين |
| SEC05 | P0 | database.php غير موجود، وDDL الأولي يغيب عنه team_members/team_roles وجداول addons | فشل وظائف أواعتماد مخطط غير كامل؛ إثبات chain تحديثات ومخطط staging قبل إدخال عملاء |
| SEC06 | P1 | [config.php](../../application/config/config.php) مفتاح تشفير ثابت قصير، cookie_secure معطل، و[index.php](../../index.php) يفترض development | أسرار خاصة بكل بيئة وproduction/HTTPS؛ تغيير المفتاح قد يبطل بيانات/جلسات ويحتاج خطة |
| SEC07 | P1 | csrf_protection معطل في config؛ يوجد Home::csrf_token_check واستدعاءات في بعض العمليات | حماية مخصصة غير شاملة تلقائيًا؛ action inventory لكل POST/DELETE/upload؛ لا تكفي فحوص AJAX |
| SEC08 | P1 | [Home::central_webhook_callback](../../application/controllers/Home.php) يتحقق من verify token للاشتراك ثم يقرأ body؛ لا HMAC inbound ظاهر في handlers المفحوصة | ربط challenge ليس توقيع كل event؛ فحص X-Hub-Signature-256 قبل dispatch وتكرار events؛ hash_hmac المعثور عليه متعلق بدفع SenangPay وليس حماية Meta |
| SEC09 | P1 | تعطيل SSL_VERIFYPEER/VERIFYHOST في Openai_api وCron/internal callbacks والتحديث ومسارات مزودين | احتمال اعتراض/تزوير عند اتصال غير موثوق؛ تفعيل TLS والتحقق وإصلاح CA ثم اختبار الخدمات |
| SEC10 | P1 | [Messenger_bot::upload_image_only](../../application/controllers/Messenger_bot.php) يفحص الامتداد ثم move_uploaded_file؛ mkdir بأذونات واسعة | فحص نوع/حجم/محتوى ومسار وخدمة الملفات؛ لا تعمم validator منشئ التدفقات على جميع upload endpoints |
| SEC11 | P1 | [VF](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) لديه is_valid_extension/is_valid_mime_type/is_valid_file_size | دفاعات موجودة في مسار محدد؛ اختبر MIME mismatch وSVG/HTML والاسم والمسار وملكية الحذف دون exploit إنتاج |
| SEC12 | P1 | SQL مباشر بالمتحكمات إلى جانب Query Builder، ومنها Instagram_reply::ajax_autoreply_submit | وجود escapes في بعض الحقول لا يثبت غياب injection؛ مراجعة tainted inputs وبناء استعلام parameterized؛ لا يوجد PoC |
| SEC13 | P1 | مخرجات محادثة/تعليق/HTML قوالب وتحديث DOM؛ global_xss_filtering معطل | مراجعة output encoding لكل سياق وHTML sanitizer للمحررات؛ تعطيل المرشح وحده ليس إثبات XSS |
| SEC14 | P1 | [Email_manager/Sms_manager](../../application/libraries/Sms_manager.php) وإعدادات API تخزن اعتمادًا في جداول/ملفات وتضم adapters HTTP | صلاحيات بيانات واعتمادات/مفاتيح وتشفير/rotation وسياسة logs؛ لا قيم منشورة في التدقيق |
| SEC15 | P1 | Custom HTTP SMS وfeeds وwebhooks تقبل عناوين خارجية؛ Home::get_general_content وcurl_send_data | مساحة SSRF/redirect محتملة؛ allowlist، DNS/IP policy، timeouts وأحجام response؛ يلزم تدقيق المسار والتفويض |
| SEC16 | P1 | adapters دفع متعددة وحالات نجاح/فشل وIPN؛ لا اختبار مصرح | مراجعة signature وlookup وamount/currency/receiver وidempotency والاسترداد؛ لا نفترض سلامة كل بوابة |
| SEC17 | P1 | لا rate limiting تطبيقي شامل ظاهر لمسارات الدخول/استرداد/API ضمن البحث؛ يوجد CAPTCHA حسابي للتسجيل | CAPTCHA ليس throttle؛ تحديد معدلات وتسجيل محاولات دون حجب شرعي؛ قد توجد طبقة خادم خارج المستودع لم تفحص |
| SEC18 | P1 | Cron يستخدم HTTP داخليًا ومهلًا قصيرة وحالات processing/set_time_limit(0) | تكرار أوتعليق مهام عند التوازي والفشل؛ locks/idempotency/retry/backoff وdead-letter/monitoring حسب الحاجة |
| SEC19 | P1 | Openai_api يعتمد choices[0] ولا يعالج أخطاء API بواجهة موحدة | انقطاع أوإجابة فارغة وتكلفة غير مراقبة؛ timeout/HTTP validation/fallback/usage ledger قبل AI مدفوع |
| SEC20 | P1 | [Update_system](../../application/controllers/Update_system.php) يجلب تحديثات وSQL من المورد وMigration معطل | تحديث غير مراجَع قد يغير ملفات ومخطط؛ pinned reviewed artifacts وbackup/staging/rollback |
| SEC21 | P1 | .htaccess يحمي PHP وSQL بتوجيهات Apache قديمة، والمجلدات تتضمن backup_db وupload | اختبار حماية فعلية على Apache مع compat أوتهيئة Nginx/IIS مكافئة؛ لا تفترض منع SQL download أوتنفيذ ملف رفع |
| SEC22 | P2 | Composer يعلن PHP7.4 لكن قفله يفرض8.1؛ SDKs كثيرة مضمنة وGraph versions متباينة | اختبار PHP lint/runtime/deprecation ومراجعة adapters ثم تحديث مدروس؛ لا تغيير dependencies ضمن التدقيق |
| SEC23 | P2 | 118 جدولًا دون FOREIGN KEY، CSV/JSON/varchar lists وبعض joins/counts ضخمة | علاقات يتولاها التطبيق؛ قياس EXPLAIN/indexes وحذف مترابط وpagination وretention؛ لم تقاس سرعة |
| SEC24 | P2 | Home/MB/EC/SE متحكمات ضخمة متشابكة؛ قوائم الجداول للحذف وصلاحيات موزعة | احتمال regressions وعزل غير موحد؛ service boundaries واختبارات المسارات الحرجة تدريجيًا |
| SEC25 | P2 | log_threshold=1؛ تقارير API في جداول مختلفة ولا مراقبة تشغيل مركزية ظاهرة | correlation IDs وتنقيح أسرار وتنبيهات؛ لا تعتبر lack of logs دليل عدم أخطاء |
| SEC26 | P1 | initial_db.sql هو schema/seed، ولا آلية DR مثبتة من ملف backup_mode أوالمجلد | backup قاعدة ووسائط وإعدادات مشفر واختبار استعادة وRPO/RTO محددان؛ لم تنفذ استعادة |
| SEC27 | P2 | لم توجد حزمة اختبارات تطبيق أوpipeline موثقة؛ اختبارات SDK ليست tests للمنتج | regression suite: auth/tenant/flow/webhook/cron/checkout/billing وترجمة؛ لا تغطية معلنة |

## حدود الاستنتاج الأمني

لا يثبت غياب control في الملفات المفحوصة غيابه من reverse proxy/WAF أوتهيئة خادم غير موجودة هنا. كذلك لا يثبت وجود helper تطبيقه على جميع callers. `Home` يعطل strict SQL لكل جلسة؛ لا ينبغي حل أخطاء بيانات بإخفاء القيود دون فهم أثرها. توجد transactions في مسارات متعددة، لكنها ليست ضمانًا لقفل مهام HTTP أوعدم تكرار callbacks.

لا توجد مقاييس throughput أوload test أوتقدير عدد عملاء آمن. لا يصح تسويق «غير محدود» أوSLA أوأمن معتمد أوGDPR compliance من وجود صفحة سياسة وقيم status فقط. متطلبات الخصوصية والموافقة والاحتفاظ ومشاركة بيانات AI تحتاج تصميمًا ومراجعة مختصة وفق المنتج النهائي.

## خطة تحقق دون تنفيذها الآن

1. بيئة staging منفصلة بمخطط قابل لإعادة البناء وبيانات اصطناعية؛ لا callbacks لخدمات إنتاج.
2. اختبارات إيجابية وسلبية لدخول/reset/role وتجاوز المالك لكل read/write/export/download/upload.
3. fixtures لأحداث Meta وتوقيعها وتكرارها وترتيبها؛ يحاكي المزود أولًا ثم حساب sandbox مصرح.
4. مهمة cron واحدة ثم مهام متوازية وتعطل/إعادة محاولة؛ إثبات عدم تكرار الإرسال أوالتحصيل.
5. بوابة دفع واحدة في sandbox؛ تحقق server-side ومبلغ وعملة وcallback مكرر وإلغاء واسترداد.
6. اختبار SMS عربي لكل مزود ومقاطع وترميز؛ Email render/tracking/unsubscribe/bounce مع مختبر مصرح.
7. اختبار استعادة backup ومراقبة وتدوير مفاتيح وخطة rollback، ثم إعادة مراجعة نتائج P0/P1 قبل أي إعلان عام.

هذه قائمة تحقق مستقبلية فقط. لا خطوات استغلال ولاطلبات غير مصرح بها ضمن ملفات التقرير.
