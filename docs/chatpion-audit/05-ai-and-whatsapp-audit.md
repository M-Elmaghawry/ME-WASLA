# 05 — تدقيق AI وWhatsApp

النتيجة: توجد **وصلة OpenAI لتوليد ردود نصية مع Flow وComment Automation**، مرتبطة بإضافة AI موجودة؛ لا يوجد دليل على RAG أوAgents مستقلة أوإدارة تكلفة. ولا يوجد دليل على منصة WhatsApp Business Automation مكتملة. لا تشغيل أوطلبات API في هذا التدقيق.

## مسار AI الموجود

1. [Ai_reply::activate](../../application/modules/ai_reply/controllers/Ai_reply.php) يسجل project67/module340.
2. [Integration::open_ai_api_credentials_action](../../application/controllers/Integration.php) يحفظ أسماء حقول `models`, `instruction_to_ai`, `maximum_token` وبيانات اعتماد خاصة بالمستخدم في `open_ai_config`. لا تعرض القيم هنا.
3. [Visual_flow_builder::return_single_reply_array](../../application/modules/visual_flow_builder/controllers/Visual_flow_builder.php) يعالج نوع `openaiInput` عندما يسمح `ai_reply_exist()`؛ توجد تعليمات/وصف ضمن التدفق.
4. [Home::get_ai_reply_open_ai](../../application/controllers/Home.php) يقرأ إعداد المستخدم ويبني prompt ويستدعي [Openai_api::open_ai_completion](../../application/libraries/Openai_api.php).
5. توجد calls لهذا المسار في [Messenger_bot](../../application/controllers/Messenger_bot.php)::send_message_bot_reply، و[Comment_automation](../../application/controllers/Comment_automation.php)، و[Instagram_reply](../../application/controllers/Instagram_reply.php)::webhook_callback، ومنها `ai_training_data` و`ai_reply`.

`ai_training_data` وصف نصي يمر إلى prompt؛ لم يوجد pipeline تدريب نموذج أوفهرسة مستندات. عبارة AI Agent في default instruction مجرد نص، وليست تنفيذ agent.

## النماذج والتوجيه

المكتبة تحوي قائمة Text: `text-davinci-003`, `text-davinci-002`, `text-curie-001`, `text-babbage-001`, `text-ada-001`, `davinci`, `curie`, `babbage`, `ada`. وقائمة Chat: `gpt-4`, `gpt-4-0314`, `gpt-4-32k`, `gpt-4-32k-0314`, `gpt-3.5-turbo`, `gpt-3.5-turbo-0301`.

تختار المكتبة `/v1/completions` أو`/v1/chat/completions` وفق هذه القائمة. الاسم غير المدرج يبقى على فرع text؛ لذلك تغيير الاسم بقاعدة البيانات لا يثبت توافق نموذج حديث. لم يُتحقق من دورة حياة هذه النماذج أوإتاحتها الحالية، ولا يقال إنها صالحة الآن. المطلوب لاحقًا مراجعة الوثائق الرسمية للخدمة وتعديل adapter واختبار كل اختيار مصرح.

فرع Chat يرسل رسالتي system وuser فقط. لا يظهر تحميل تاريخ المحادثة من livechat_messages أوتجميع سلسلة أدوار أوتلخيص سياق. prompt النصي يدمج instruction والوصف والسؤال. قيمة maximum_token حد خرج للطلب؛ ليست عداد استهلاك ولاحصة شهرية ولاسقف تكلفة. لا journal يربط usage أوتكلفة بالـtenant في المسار المفحوص.

## الحكم التفصيلي

| القدرة | الحالة | الحد أوالاختبار المتبقي |
| --- | --- | --- |
| OpenAI connector وواجهة إعداد | ADDON_PRESENT | تسجيل الإضافة والباقة والحساب والنموذج |
| توليد نص ورد AI لبوت/تعليق | IMPLEMENTED_IN_SOURCE | دقة العربية والمحتوى، حالات API والفشل والرجوع لرد آمن |
| اختيار نموذج | PARTIALLY_IMPLEMENTED | adapter لقوائم ثابتة وتوجيه غير عام |
| prompts ووصف نشاط | IMPLEMENTED_IN_SOURCE | لا prompt library/versioning موثق؛ اختبار حقن التعليمات |
| context كامل بين الرسائل | PARTIALLY_IMPLEMENTED | current-turn فقط، لا memory متكاملة |
| خدمة عملاء AI شاملة | PARTIALLY_IMPLEMENTED | ردود نصية، لا copilot agent desktop مثبت |
| RAG/معرفة ومستندات | NOT_FOUND | ingestion/chunking/index/retrieval/citations غير معثور |
| intent classifier مستقل | NOT_FOUND | keyword/condition ≠ intent model |
| قياس tokens والتكلفة | NOT_FOUND | لا ledger/settlement/alerts |
| AI quota لكل مستخدم | PARTIALLY_IMPLEMENTED | module gating وحد طلب؛ لا token budget شامل |
| مزود AI بديل | NOT_FOUND | URL مقيد بـOpenAI في adapter |
| Agents/tools/workflows مستقلة | NOT_FOUND | لا tool registry/function calling/orchestration مثبت |

أخطاء مهمة: تعطيل TLS verification، واعتماد مباشر على `choices[0]` وقراءة صف إعداد دون معالجة شاملة للغياب، وعدم تحويل أخطاء HTTP/timeout/rate limits إلى عقدة فشل واضحة. يراجع ذلك قبل تقديم AI مدفوع. لا يوجد إثبات حماية من إفشاء بيانات العميل عبر prompt أوسياسة احتفاظ خارجية؛ يلزم تحديد البيانات المرسلة والإفصاح عنها لاحقًا.

## نتائج WhatsApp

[Livechat::get_bot_whatsapp_by_phone_number_id](../../application/controllers/Livechat.php) يبني شروطًا على `whatsapp_bots` لكن نداء البيانات معلق ثم **يعيد `[]`**. بالمقابل `get_bot()` يقرأ facebook_rx_fb_page_info، والإرسال يستخدم page_access_token ومسار Messenger. توجد متغيرات `whatsapp_bot_id`, `whatsapp_business_id`, `wa_id` وCSS legacy؛ ليست اتصال WABA.

لم توجد وحدة WhatsApp ولاSchema حقيقي لجداول حسابات وأرقام وقوالب ورسائل WhatsApp، ولا handler لـ`messaging_product=whatsapp`، ولاreceiver Cloud API أوadapter `/phone_number_id/messages` متكامل. لذلك W01/W08/W09 تصنف INTEGRATION_STUB_ONLY، وبقية قدرات WhatsApp الأساسية NOT_FOUND. لا تستنتج دعمًا من SDK Twilio للـSMS؛ لا يوجد مسار WhatsApp مستخدم منه في التطبيق المفحوص.

### زر تفاصيل طلب المتجر

[Ecommerce::appearance_settings_action](../../application/controllers/Ecommerce.php) يحفظ `whatsapp_send_order_button`, `whatsapp_phone_number`, `whatsapp_send_order_text`، وتقرأ `order()` هذه القيم. [appearance_settings.php](../../application/views/ecommerce/appearance_settings.php) يحتوي handler إظهار/إخفاء إعدادات. توجد الأعمدة في SQL.

لكن البحث عن `wa.me`, `api.whatsapp.com`, `whatsapp://` ومستهلكات هذه القيم في controller/views/assets/plugins لم يثبت رابط إخراج أوزر إرسال طلب مكتمل. المتغيرات تُقرأ دون مسار إرسال نهائي ظاهر، وحزمة الإضافة غير موجودة. لذلك حتى الزر نفسه **PARTIALLY_IMPLEMENTED**، ويحتاج استكمالًا أوحزمة متوافقة وتجربة checkout. [وصف المورد للزر](https://xeroneit.net/portfolio/whatsapp-e-commerce-order-send-button-chatpion-add-on) يقتصر على إرسال تفاصيل الطلب بعد checkout؛ لا يثبت Cloud API ولايغير الحكم المحلي.

| القدرة المطلوبة | الحكم |
| --- | --- |
| حساب أعمال وربط رقم وWABA | NOT_FOUND |
| Incoming Webhooks ورسائل Cloud API | NOT_FOUND |
| WhatsApp Flows chatbot | NOT_FOUND |
| Approved Templates ولغاتها | NOT_FOUND |
| Bulk Campaigns وتقاريرها | NOT_FOUND |
| Contacts وInbox | بقايا أسماء/دالة stub؛ ليس تنفيذًا متكاملًا |
| Order notification button | PARTIALLY_IMPLEMENTED؛ لا وعد بإرسال آلي |
| WhatsApp payment/order workflow كامل | NOT_FOUND؛ متجر المتصفح مستقل |

## سجل البحث وحدود النفي

**S-AI:** فُحصت controllers/helpers/libraries المباشرة والوحدات والقوالب وDDL والحزم ذات الصلة؛ بحث عن OpenAI/model/prompt/context/history/usage/token/cost/budget/embedding/vector/retrieval/knowledge/document ingestion/intent/tool calling/agent/provider names. وجود كلمات عامة في مكتبات أوmaps لا يعد مسار منتج ما لم يتصل بإعداد ونداء وحفظ نتيجة.

**S-WA:** بحث كامل المسارات النصية ذات الصلة عن WhatsApp/WABA/wa_id/phone_number_id/messaging_product/wa.me/api.whatsapp.com/whatsapp://، ثم تتبع الإيجابيات إلى Livechat وbot_helper وEcommerce والقوالب وDDL. لا يؤخذ تعليق كود أوأيقونة أواسم متغير كميزة. النفي مقيد بالنسخة المحلية؛ لم تُفحص إضافة غير موجودة أوحسابات إنتاج.

التسويق المقترح الآن داخليًا فقط: «ردود AI قابلة للإعداد ضمن سيناريوهات Messenger وInstagram، بعد التفعيل والاختبار». يمنع حتى الاختبار وصف «وكيل AI مستقل»، «مدرب على ملفاتك»، «ذاكرة شاملة»، «ميزانية AI مضمونة»، «WhatsApp Business Automation» أو«صندوق WhatsApp موحد».
