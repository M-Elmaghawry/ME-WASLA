# 06 — SaaS وWhite Label وصلاحية الإطلاق

توجد بنية حسابات وباقات وفوترة وتخصيص هوية في المصدر. لا يوجد إثبات جاهزية استضافة تجارية آمنة، ولا يمكن استنتاج نوع ترخيص الشراء أوحقوق إعادة البيع من Source Code. لم تُقرأ قيم الترخيص ولم تُغير العلامة إلى Wasla أثناء التدقيق.

## SaaS والصلاحيات

| القدرة | الدليل | الحكم والحد |
| --- | --- | --- |
| حسابات متعددة وتسجيل وتنشيط | [Home](../../application/controllers/Home.php)::sign_up_action/account_activation_action | IMPLEMENTED_IN_SOURCE؛ CAPTCHA حسابي وبريد؛ لا اختبارات تشغيل |
| الدخول والخروج والاسترداد | Home::login/logout/code_genaration/recovery_check | IMPLEMENTED_IN_SOURCE مع blocker MD5؛ فحص rate limits وعمر رمز الاسترداد مطلوب |
| Admin/Member | Home وسياق الجلسة، [Admin](../../application/controllers/Admin.php) | فحوص منتشرة؛ يجب التحقق لكل action |
| صلاحيات الميزات والإجراءات | [my_helper](../../application/helpers/my_helper.php)::check_module_access/check_module_action_access | module_ids من الباقة وteam_access؛ حماية menu لا تكفي |
| حدود المستخدم | Home::_check_usage/_insert_usage_log؛ package.monthly_limit/bulk_limit | عدادات استخدام عامة؛ لا AI token accounting |
| عزل العملاء | user_id في Basic/Query Builder عبر المتحكمات | PARTIALLY_IMPLEMENTED؛ لا tenant DB مستقل ولا إثبات عزل شامل |
| Team Roles/Members | Home::get_team_member_list/assign_conversation_to_team_member، references team_* | إضافة الإدارة غير موجودة وجداولها غير معرفة في SQL؛ لا تعلن team management مكتملًا |
| سجلات الدخول والإعلانات | user_login_info وAnnouncement | موجودة؛ لا immutable audit log شامل |

مثال على حدود العزل: [Livechat::get_bot](../../application/controllers/Livechat.php) يضيف user_id، لكن `update_mark_as_action()` يحدث messenger_bot_subscriber بشرط subscribe_id فقط دون قيد user_id/page/tenant ظاهر في العملية. توجد فحوص module access، لكنها لا تعوض ملكية السجل. هذا خطر يحتاج اختبارًا سلبيًا بحسابين على بيئة معزولة، وليس إثبات استغلال قام به التدقيق.

## الباقات والفوترة

[Payment](../../application/controllers/Payment.php)::package_manager/add_package_action/edit_package_action يحرر الباقات؛ [Home](../../application/controllers/Home.php)::member_validity و[Cron_job](../../application/controllers/Cron_job.php)::membership_alert/expired_users_disable_bot يطبقان انتهاء الاشتراك. `Trial`, `is_default`, `validity`, `expired_date` موجودة؛ يجب اختبار بدء التجربة وانتهائها ومنع إعادة الاستفادة منها.

شراء الباقة يستخدم Payment::payment_button وStripe_action ومكتبات الدفع وPaypal_ipn، مع transaction_history وcycle dates. Manual payments لها pending/approve/reject. يوجد اختيار PayPal recurring، ولا دليل يجيز تعميم الاشتراك المتكرر على كل بوابة. خطة التحقق: amount/currency/receiver، server-side verification، callback signature، idempotency، فشل/إعادة محاولة/استرداد، ثم فصل صلاحيات المشرف والعضو.

**ترخيص:** توجد فحوص `license_type == 'double'` في وظائف Payment. تعرض [صفحة المورد](https://xeroneit.net/portfolio/chatpion-best-multichannel-marketing-application-white-label) قيودًا تختلف بين regular وextended للاستخدام المدفوع. هذه ملاحظة مورد وليست حكمًا قانونيًا على شراء المستخدم؛ يلزم مطابقة الاستحقاق الفعلي قبل التحصيل التجاري. لا يتم تجاوز أي فحص في هذا التدقيق.

## ما لم يثبت في فوترة SaaS

- **فواتير اشتراك مستقلة:** لم يوجد مولد/سجل invoice اشتراك مخصص في Payment/Stripe_action/Paypal_ipn. إيصال `Ecommerce::order()` و`InvoiceStatus` لدى MyFatoorah ليسا الدليل المطلوب. لا تدّعِ e-invoicing مصريًا أونظام ضرائب.
- **كوبونات الباقات:** بحث `coupon` في مسارات الاشتراك لم يجد نظام خصومات باقات؛ ecommerce_coupon خاص بالمتجر.
- **Affiliate كامل:** Home::affiliate_commission وref hooks موجودة، لكن إدارة affiliate وحزمته وجداول affiliate_* ليست ضمن الأساس.
- **Billing platform كامل:** لا يوجد إثبات معالجة dunning/tax/proration/credits متعدد المزودين؛ لا توسع ادعاء الدفع إلى هذه المجالات.

## الهوية واللغات

| العنصر | الدليل | الحكم |
| --- | --- | --- |
| الاسم والسطر التعريفي | Admin::general_settings_action و[my_config](../../application/config/my_config.php) | قابل للإعداد في المصدر |
| Logo/Favicon عام | Admin::general_settings_action وassets/img | رفع وتخصيص موجودان؛ اختبر جميع الشاشات والأحجام |
| Brand Logo للمستخدم | [Myprofile::edit_profile_action](../../application/controllers/Myprofile.php)، users.brand_logo | موجود؛ لا يعادل tenant white label كاملًا |
| قوالب الواجهة | [Themes](../../application/controllers/Themes.php)، Custom_theme_manager، views/brand_theme وsite/modern | تخصيص موجود؛ لا build source كامل لمنشئ التدفق |
| Email branding | Admin وإعدادات القوالب، Home::_mail_sender | جزئي؛ قوالب ومتغيرات وروابط ثابتة تتطلب جردًا |
| العربية/الإنجليزية | application/language/arabic وenglish، [Multi_language](../../application/controllers/Multi_language.php) | موجودتان، لا شهادة جودة ترجمة |
| RTL/LTR | Home::is_rtl/_viewcontroller، إعدادات المتجر وCSS | موجود؛ اختبر Flow Builder، التقويم، المخططات، أرقام الهاتف، الطباعة والمحررات |
| نطاقات فرعية وخاصة بالعميل | لا domain→tenant resolver مثبت؛ base_url عام | NOT_FOUND؛ domain_whitelist للبوت ليس tenant custom domain |

توجد Xerone/XeroChat/ChatPion URLs ونصوص داخل قوالب ومكتبات وتعليقات وتراخيص وتوثيق. قد يلزم تغيير مراجع الواجهة والبريد المسموح بها، والحفاظ على إشعارات تراخيص الطرف الثالث. لا تتعهد «إزالة جميع آثار المورد» دون جرد rendering وترخيص. لم تُنسخ بيانات الشركة أوالمستخدم الخاصة من الإعداد الحالي إلى التقارير.

## بوابات ما قبل التحصيل التجاري

1. إثبات الاستحقاق المناسب ونسخ الإضافات والتحديثات دون تجاوز checks.
2. مواءمة PHP/DB والمخطط على بيئة staging؛ النسخة بلا database.php ولا إثبات migrations مكتملة.
3. إصلاح MD5 وCron auth وPusher والـtenant ownership المبين في [07](07-security-and-readiness.md).
4. اختبارات حسابين + موظف + مدير، تشمل القراءة والكتابة والتنزيل والتصدير والمرفقات والدفع والإلغاء.
5. إعداد البريد وسياسة احتفاظ/حذف ونسخ احتياطي واستعادة وتجربة انتهاء/تجديد اشتراك.
6. اختيار مزود دفع واتصالات مناسب للسوق المستهدف والتحقق من الإتاحة والتكلفة دون وعود تسويقية مسبقة.

اختبارات الدومينات الخاصة والفواتير المحلية والتكاملات المصرية وTeams وAffiliate أعمال تطوير/تفعيل منفصلة، وليست نتائج مؤكدة لهذا المستودع.
