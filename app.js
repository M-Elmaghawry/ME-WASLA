const BASE_URL = import.meta.env.BASE_URL;
const APP_URLS = {
  login: "",
  register: "",
  dashboard: "",
  checkout: "",
  contactEndpoint: "",
};

const pageSlugs = {
  home: "",
  about: "about",
  features: "features",
  pricing: "pricing",
  tutorials: "tutorials",
  contact: "contact",
  faq: "faq",
  privacy: "privacy",
  terms: "terms",
  refund: "refund",
};

const featureCatalog = [
  { id: "chatbot", icon: "message", category: "automation", externalRequirements: [] },
  { id: "comments", icon: "comments", category: "automation", externalRequirements: ["platformAccess"] },
  { id: "instagram", icon: "instagram", category: "channels", externalRequirements: ["platformAccess"] },
  { id: "liveChat", icon: "chat", category: "channels", externalRequirements: [] },
  { id: "publishing", icon: "calendar", category: "content", externalRequirements: ["platformAccess"] },
  { id: "messenger", icon: "send", category: "channels", externalRequirements: ["platformAccess"] },
  { id: "sms", icon: "phone", category: "campaigns", externalRequirements: ["provider"] },
  { id: "email", icon: "mail", category: "campaigns", externalRequirements: ["provider"] },
  { id: "commerce", icon: "bag", category: "commerce", externalRequirements: [] },
  { id: "analytics", icon: "chart", category: "insights", externalRequirements: [] },
].map((feature) => ({
  ...feature,
  availabilityStatus: "underReview",
  marketingVisibility: "underReview",
  screenshot: null,
  detailPageSlug: `feature-${feature.id}`,
}));

const copy = {
  ar: {
    lang: "ar",
    dir: "rtl",
    brand: "وصلة",
    brandLatin: "AI",
    tagline: "وصلة ذكية بينك وبين عملائك",
    nav: { home: "الرئيسية", about: "من نحن", features: "الخدمات والمميزات", pricing: "الأسعار", tutorials: "الشروحات", contact: "اتصل بنا", faq: "الأسئلة الشائعة", login: "تسجيل الدخول", start: "ابدأ الآن", menu: "فتح القائمة", close: "إغلاق القائمة", explore: "استكشف المميزات", allFeatures: "اكتشف المميزات" },
    home: {
      eyebrow: "تواصل أوضح. نمو أذكى.",
      title: "وصلة ذكية بينك وبين عملائك",
      lead: "أتمت محادثاتك، نظّم تواصلك مع العملاء، وأدر أدواتك التسويقية من منصة واحدة.",
      concept: "تصوّر توضيحي للمنتج — ليست هذه لقطة شاشة فعلية",
      overview: "كل تواصلك، في صورة أوضح",
      overviewLead: "نعمل على جمع أدوات التواصل والتسويق في تجربة واحدة تساعدك على إدارة عملك بوضوح.",
      challenges: "تواصل يومي أكثر تنظيمًا",
      challengesLead: "حين تتوزع المحادثات والمهام، يصبح من الصعب متابعة كل شيء. وصلة تسعى لتبسيط طريقة إدارتها.",
      spotlight: "مساحة واحدة لفكرة الأتمتة",
      spotlightLead: "استكشف تصوّرًا مبسطًا لكيفية تنظيم محادثاتك، دون ادعاء قدرات لم يتم التحقق منها بعد.",
      spotlightCta: "عرض حالة المميزات",
      how: "بداية واضحة، خطوة بخطوة",
      steps: ["أنشئ حسابك عند إتاحة التسجيل", "اربط القنوات المدعومة بعد تأكيدها", "أعدّ أدواتك وفق احتياج عملك", "تابع تواصلك من مكان واحد"],
      uses: "مصممة لاحتياجات أعمال متنوعة",
      useCases: ["المتاجر الإلكترونية", "وكالات التسويق", "مقدمو الخدمات", "مراكز التدريب", "المطاعم والتجزئة"],
      pricing: "باقات تناسب مرحلة نموك",
      pricingLead: "أسماء الباقات استرشادية، والتفاصيل والأسعار قيد الإعداد.",
      tutorials: "تعلّم عندما تكون جاهزًا",
      tutorialsLead: "نبني مركزًا للتعلّم. سنضيف الشروحات عند توفر مواد موثوقة وروابطها.",
      faq: "أسئلة تتكرر",
      finalTitle: "جاهز تبدأ تنظم تواصلك مع عملائك؟",
      finalLead: "تواصل معنا لمعرفة آخر المستجدات حول وصلة.",
      supportTitle: "منصة واحدة، وتفاصيل أوضح",
      supportLead: "استكشف تصوّرًا مبدئيًا لتجربة وصلة. الخصائص النهائية ستُعلن بعد التحقق منها.",
      toolsTitle: "أدوات التواصل والتسويق",
    },
    about: {
      eyebrow: "من نحن",
      title: "نبني تجربة تواصل أقرب لاحتياجات الأعمال العربية",
      lead: "وصلة AI مشروع لمنصة تساعد الأنشطة التجارية على تنظيم التواصل والتسويق في تجربة سهلة وواضحة.",
      whatTitle: "ما هي وصلة AI؟",
      what: "وصلة منصة تسويقية قيد الإعداد، تستهدف مساعدة أصحاب الأعمال والفرق على تنظيم تواصلهم مع العملاء. تفاصيل المنتج النهائية ستتضح مع استكمال مراجعة الإمكانات.",
      problemTitle: "المشكلة التي نريد تبسيطها",
      problem: "قد تتوزع أسئلة العملاء ومهام التسويق على أدوات وقنوات متعددة. هدفنا أن نجعل إدارتها أكثر ترتيبًا ووضوحًا.",
      visionTitle: "رؤيتنا",
      vision: "أن تكون أدوات التواصل الرقمي أقرب وأسهل استخدامًا للأعمال الناطقة بالعربية.",
      missionTitle: "مهمتنا",
      mission: "تقديم تجربة عملية وواضحة تساعد الأعمال على إدارة تواصلها الرقمي بثقة.",
      valuesTitle: "قيمنا",
      values: ["الوضوح قبل الوعود", "تجربة عربية تراعي مستخدميها", "الخصوصية والمسؤولية", "التطوير بناءً على احتياج حقيقي"],
      servesTitle: "لمن نعمل؟",
      serves: "لأصحاب الأعمال الصغيرة والمتوسطة، والمتاجر، والوكالات، والفرق التي تتواصل يوميًا مع العملاء.",
      whyTitle: "لماذا وصلة؟",
      why: "لأن التواصل الفعال يبدأ من تجربة سهلة، ومعلومات واضحة، وإمكانات يتم شرحها كما هي.",
    },
    features: {
      eyebrow: "المنصة",
      title: "مساحة واحدة لأدوات التواصل والتسويق",
      lead: "تظهر هذه المجموعات كخريطة للمنتج الجاري مراجعته. لا يعني ظهورها أن الميزة متاحة أو مؤكدة.",
      notice: "مراجعة إمكانات المنتج لا تزال مستمرة. المميزات المدرجة هنا قيد المراجعة، ولن نعلن توفرها قبل التحقق.",
      categories: { all: "الكل", automation: "الأتمتة", channels: "قنوات التواصل", content: "إدارة المحتوى", campaigns: "الحملات", commerce: "التجارة", insights: "التحليلات" },
      status: "قيد المراجعة",
      statusVerified: "تم التحقق",
      detailCta: "التفاصيل بعد التحقق",
      detailUnavailable: "صفحة التفاصيل ستتوفر بعد التحقق من الإمكانات.",
      items: {
        chatbot: ["منشئ روبوت المحادثة", "تصوّر لأدوات تساعد على تنظيم تدفقات المحادثة والردود."],
        comments: ["أتمتة التعليقات", "مراجعة إمكانات تنظيم الردود والتفاعل على التعليقات."],
        instagram: ["التواصل عبر Instagram", "قناة قيد المراجعة، ويعتمد دعمها على الإمكانات والتكاملات المتاحة."],
        liveChat: ["الدردشة المباشرة", "تصوّر لمساحة لتنظيم المحادثات المباشرة مع العملاء."],
        publishing: ["نشر المحتوى", "مراجعة أدوات تنظيم وجدولة المحتوى للقنوات المدعومة."],
        messenger: ["التواصل عبر Messenger", "مراجعة إمكانات إدارة التواصل ومتطلبات المنصة الخارجية."],
        sms: ["حملات الرسائل النصية", "قد تتطلب الخدمة إعداد مزود خارجي ورسومًا إضافية."],
        email: ["حملات البريد الإلكتروني", "قد تتطلب الخدمة إعداد مزود خارجي ورسومًا إضافية."],
        commerce: ["أدوات التجارة الإلكترونية", "مراجعة أدوات المتاجر والمنتجات والطلبات قبل إعلان توفرها."],
        analytics: ["التحليلات والتقارير", "مراجعة البيانات والتقارير التي ستتوفر في النسخة النهائية."],
      },
    },
    pricing: {
      eyebrow: "الأسعار والباقات",
      title: "اختر الباقة المناسبة لعملك",
      lead: "الباقات التالية استرشادية. الأسعار والحدود وشروط الاشتراك لم تُعتمد بعد.",
      soon: "قريبًا",
      contact: "تواصل لمعرفة التفاصيل",
      plans: ["للبدايات والأعمال الصغيرة", "للأعمال التي تنمو", "للوكالات والفرق"],
      planNames: ["البداية", "الأعمال", "الوكالات"],
      recommended: "خيار مقترح",
      tableTitle: "مقارنة الباقات",
      rows: ["الحسابات والقنوات المتصلة", "حدود روبوت المحادثة", "حدود الحملات", "الرسائل النصية والبريد", "التجارة الإلكترونية", "التحليلات", "الدعم وإدارة الفريق"],
      note: "قد تُحتسب رسوم منفصلة من مزودي الخدمات الخارجية، مثل خدمات الرسائل. لم يتم تحديد الأسعار أو الحدود بعد.",
      faqTitle: "أسئلة حول الأسعار",
    },
    tutorials: {
      eyebrow: "مركز التعلّم",
      title: "تعلّم استخدام وصلة، خطوة بخطوة",
      lead: "سنضيف أدلة وشروحات عندما تصبح المواد وروابطها جاهزة.",
      search: "ابحث في الشروحات",
      categories: ["البداية", "إعداد الحساب", "ربط القنوات", "روبوت المحادثة", "أتمتة التعليقات", "الحملات", "نشر المحتوى", "التجارة الإلكترونية", "الأسئلة الشائعة"],
      empty: "لا توجد شروحات منشورة بعد",
      emptyLead: "نعمل على إعداد محتوى موثوق. عُد لاحقًا للاطلاع على التحديثات.",
      categoryLabel: "التصنيف",
      all: "كل التصنيفات",
    },
    contact: {
      eyebrow: "اتصل بنا",
      title: "يسعدنا أن نسمع منك",
      lead: "للاستفسارات حول وصلة أو لمعرفة آخر المستجدات، تواصل معنا.",
      formTitle: "أرسل استفسارك",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف (اختياري)",
      business: "اسم النشاط (اختياري)",
      type: "نوع الاستفسار",
      types: ["استفسار عام", "المبيعات والأسعار", "الدعم الفني", "شراكة", "أخرى"],
      message: "رسالتك",
      consent: "أوافق على معالجة بياناتي للرد على استفساري، وفقًا لسياسة الخصوصية.",
      submit: "إرسال الرسالة",
      disabled: "نموذج التواصل غير مفعّل حاليًا: لم يتم ربطه بخدمة بريد أو قاعدة بيانات. لن تُرسل البيانات أو تُحفظ.",
      unavailable: "لم يتم إعداد وسيلة تواصل عامة بعد.",
      faqShortcut: "قد تجد إجابتك في صفحة الأسئلة الشائعة.",
      sending: "جارٍ الإرسال…",
      success: "تم إرسال رسالتك بنجاح.",
      error: "تعذر إرسال الرسالة الآن. حاول لاحقًا.",
      validation: "يرجى التحقق من الحقول المطلوبة والموافقة على سياسة الخصوصية.",
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "إجابات واضحة لأسئلتك",
      items: [
        ["ما هي وصلة AI؟", "وصلة منصة تسويقية قيد الإعداد، وتهدف إلى مساعدة الأعمال على تنظيم التواصل مع العملاء. سيتم نشر تفاصيل الإمكانات بعد التحقق."],
        ["ما القنوات المدعومة؟", "لا تزال مراجعة القنوات والإمكانات مستمرة. لن نعلن عن قناة قبل التأكد من دعمها ومتطلبات إعدادها."],
        ["هل يمكنني إنشاء حساب الآن؟", "التسجيل غير مفعّل حاليًا. تابع التحديثات أو تواصل معنا للاستفسار."],
        ["ما أسعار الاشتراك؟", "لم تُعتمد الأسعار أو حدود الباقات بعد. ستجد التفاصيل في صفحة الأسعار عند توفرها."],
        ["هل توجد رسوم لمزودي الرسائل؟", "قد تفرض خدمات الطرف الثالث رسومًا مستقلة. تختلف حسب المزود والإعداد، وستُوضح أي متطلبات عند تأكيدها."],
        ["كيف تتعامل وصلة مع بياناتي؟", "نلتزم بالشفافية بشأن البيانات. راجع سياسة الخصوصية، وسيتم تحديثها قبل إطلاق الخدمات الفعلية."],
        ["كيف أتواصل مع الدعم؟", "استخدم صفحة التواصل. إرسال النموذج غير متاح حتى ربطه بخدمة استقبال فعلية."],
      ],
    },
    legal: {
      privacy: ["سياسة الخصوصية", "نحدّث هذه السياسة بما يتناسب مع الخدمات الفعلية قبل إطلاقها. لا يجمع هذا الموقع التسويقي بيانات النماذج حاليًا، ونموذج التواصل غير مفعّل. عند تفعيل خدمات أو جمع بيانات، سنوضح أنواع البيانات وأغراض المعالجة ومدة الاحتفاظ بها والجهات التي قد تتلقاها وحقوق أصحاب البيانات ووسيلة التواصل بشأنها."],
      terms: ["الشروط والأحكام", "هذه الصفحة معلومات تمهيدية وليست شروط اشتراك نهائية. التسجيل والدفع والخدمات غير مفعّلة عبر هذا الموقع. قبل إتاحة أي خدمة، ستُنشر شروط واضحة تحدد نطاق الخدمة والمسؤوليات والرسوم وسياسات الاستخدام والإيقاف."],
      refund: ["سياسة الإلغاء والاسترداد", "لم يتم تفعيل الاشتراكات أو الدفع عبر هذا الموقع، لذلك لا توجد حاليًا عملية شراء أو طلب استرداد من خلاله. ستُنشر سياسة الإلغاء والاسترداد المعتمدة قبل بدء البيع."],
    },
    footer: {
      tagline: "وصلة ذكية بينك وبين عملائك.",
      explore: "استكشف",
      company: "الشركة",
      legal: "معلومات قانونية",
      rights: "جميع الحقوق محفوظة.",
      disclaimer: "تفاصيل المنتج قيد المراجعة. لا تمثل الرسوم التوضيحية أو أسماء المميزات تأكيدًا على توفرها.",
    },
    misc: { contact: "تواصل معنا", learn: "اعرف المزيد", soon: "قريبًا", noResults: "لا توجد نتائج مطابقة.", all: "عرض الكل" },
    featureIcons: { message: "محادثة", comments: "تعليقات", instagram: "قنوات اجتماعية", chat: "دردشة", calendar: "تقويم", send: "رسائل", phone: "هاتف", mail: "بريد", bag: "متجر", chart: "تقارير" },
  },
  en: {
    lang: "en",
    dir: "ltr",
    brand: "Wasla",
    brandLatin: "AI",
    tagline: "Smart Connections. Smarter Growth.",
    nav: { home: "Home", about: "About", features: "Features & Services", pricing: "Pricing", tutorials: "Tutorials", contact: "Contact", faq: "Frequently asked questions", login: "Sign in", start: "Get started", menu: "Open menu", close: "Close menu", explore: "Explore features", allFeatures: "Explore features" },
    home: {
      eyebrow: "Clearer communication. Smarter growth.",
      title: "Smart Connections. Smarter Growth.",
      lead: "Automate conversations, organize customer interactions, and manage your marketing tools in one platform.",
      concept: "Conceptual product illustration — not an actual product screenshot",
      overview: "Your customer conversations, made clearer",
      overviewLead: "We’re shaping a connected experience for communication and marketing tools that helps you manage your work with clarity.",
      challenges: "A more organized way to stay in touch",
      challengesLead: "When conversations and tasks are spread out, it can be hard to keep up. Wasla aims to make them easier to manage.",
      spotlight: "A shared space for automation",
      spotlightLead: "Explore a simple concept for organizing conversations, without claims about capabilities that haven’t been verified.",
      spotlightCta: "View feature status",
      how: "A clear start, step by step",
      steps: ["Create an account when registration opens", "Connect supported channels once confirmed", "Configure tools for your business", "Keep customer communication organized"],
      uses: "Designed for different kinds of businesses",
      useCases: ["Online stores", "Marketing agencies", "Service businesses", "Training centers", "Restaurants & retail"],
      pricing: "Plans for your next stage",
      pricingLead: "Plan names are illustrative; pricing and details are being prepared.",
      tutorials: "Learn when you’re ready",
      tutorialsLead: "We’re building a learning center and will publish tutorials when verified materials are available.",
      faq: "Frequently asked questions",
      finalTitle: "Ready to organize customer communication?",
      finalLead: "Get in touch to hear the latest about Wasla.",
      supportTitle: "One platform, clearer details",
      supportLead: "Explore an early concept for Wasla. Final capabilities will be announced after verification.",
      toolsTitle: "Communication & marketing tools",
    },
    about: {
      eyebrow: "About us",
      title: "Building a communication experience for Arabic-speaking businesses",
      lead: "Wasla AI is a platform project designed to help businesses organize customer communication and marketing in a clear, approachable experience.",
      whatTitle: "What is Wasla AI?",
      what: "Wasla is a marketing platform in preparation, intended to help business owners and teams organize customer communication. Final product details will follow an ongoing capability review.",
      problemTitle: "The challenge we want to simplify",
      problem: "Customer questions and marketing tasks can be spread across multiple tools and channels. We aim to make them easier to manage and understand.",
      visionTitle: "Our vision",
      vision: "Make digital communication tools more approachable and easier to use for Arabic-speaking businesses.",
      missionTitle: "Our mission",
      mission: "Deliver a practical, clear experience that helps businesses manage digital communication with confidence.",
      valuesTitle: "Our values",
      values: ["Clarity before promises", "An experience shaped for Arabic users", "Privacy and responsibility", "Building for real needs"],
      servesTitle: "Who we serve",
      serves: "Small and medium businesses, stores, agencies, and teams that communicate with customers every day.",
      whyTitle: "Why Wasla?",
      why: "Because effective communication starts with a simple experience, clear information, and capabilities described honestly.",
    },
    features: {
      eyebrow: "The platform",
      title: "A shared space for communication and marketing tools",
      lead: "These groups map the product currently under review. Their appearance does not mean a feature is available or confirmed.",
      notice: "Product capability review is ongoing. The features below are under review and will not be announced as available before verification.",
      categories: { all: "All", automation: "Automation", channels: "Channels", content: "Content", campaigns: "Campaigns", commerce: "Commerce", insights: "Analytics" },
      status: "Under review",
      statusVerified: "Verified",
      detailCta: "Details after verification",
      detailUnavailable: "Feature details will be published after capabilities are verified.",
      items: {
        chatbot: ["Chatbot builder", "A concept for tools to organize conversation flows and replies."],
        comments: ["Comment automation", "Reviewing capabilities for organizing comment responses and engagement."],
        instagram: ["Instagram communication", "A channel under review; support depends on available capabilities and integrations."],
        liveChat: ["Live chat", "A concept for a shared space to organize live customer conversations."],
        publishing: ["Social publishing", "Reviewing tools for organizing and scheduling content on supported channels."],
        messenger: ["Messenger communication", "Reviewing communication capabilities and third-party platform requirements."],
        sms: ["SMS campaigns", "May require an external provider setup and additional charges."],
        email: ["Email campaigns", "May require an external provider setup and additional charges."],
        commerce: ["E-commerce tools", "Reviewing store, product, and order tools before announcing availability."],
        analytics: ["Analytics & reporting", "Reviewing the data and reports planned for the final product."],
      },
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Choose a plan that fits your business",
      lead: "The plans below are illustrative. Pricing, limits, and subscription terms are not yet approved.",
      soon: "Coming soon",
      contact: "Contact for details",
      plans: ["For individuals and small businesses", "For growing businesses", "For agencies and teams"],
      planNames: ["Starter", "Business", "Agency"],
      recommended: "Recommended",
      tableTitle: "Plan comparison",
      rows: ["Connected accounts & channels", "Chatbot limits", "Campaign limits", "SMS & email limits", "E-commerce", "Analytics", "Support & team management"],
      note: "Third-party providers, such as messaging services, may charge separately. Pricing and limits have not yet been set.",
      faqTitle: "Pricing questions",
    },
    tutorials: {
      eyebrow: "Learning center",
      title: "Learn Wasla, step by step",
      lead: "Guides and tutorials will be added when materials and links are ready.",
      search: "Search tutorials",
      categories: ["Getting started", "Account setup", "Connecting channels", "Chatbot builder", "Comment automation", "Campaigns", "Social publishing", "E-commerce", "FAQs"],
      empty: "No tutorials published yet",
      emptyLead: "We’re preparing helpful, verified content. Check back for updates.",
      categoryLabel: "Category",
      all: "All categories",
    },
    contact: {
      eyebrow: "Contact us",
      title: "We’d love to hear from you",
      lead: "Questions about Wasla or want to hear the latest? Get in touch.",
      formTitle: "Send an inquiry",
      name: "Full name",
      email: "Email address",
      phone: "Phone (optional)",
      business: "Business name (optional)",
      type: "Inquiry type",
      types: ["General inquiry", "Sales & pricing", "Technical support", "Partnership", "Other"],
      message: "Your message",
      consent: "I agree to the processing of my information to respond to my inquiry, as described in the Privacy Policy.",
      submit: "Send message",
      disabled: "The contact form is not active: no email service or database is connected. Your information will not be sent or stored.",
      unavailable: "A public contact method has not been configured yet.",
      faqShortcut: "You may find an answer in our FAQ.",
      sending: "Sending…",
      success: "Your message was sent.",
      error: "The message could not be sent. Please try again later.",
      validation: "Please check the required fields and accept the privacy notice.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Clear answers to common questions",
      items: [
        ["What is Wasla AI?", "Wasla is a marketing platform in preparation, intended to help businesses organize customer communication. Capabilities will be published after verification."],
        ["Which channels are supported?", "Channel and capability reviews are ongoing. We will not announce a channel until its support and setup requirements are confirmed."],
        ["Can I create an account now?", "Registration is not active yet. Follow updates or contact us with questions."],
        ["How much does a subscription cost?", "Plan prices and limits have not been approved yet. Details will be published on the pricing page when available."],
        ["Are there messaging provider fees?", "Third-party services may charge separately. Fees vary by provider and setup; requirements will be explained once confirmed."],
        ["How does Wasla handle my data?", "We aim to be transparent about data. Review the Privacy Policy, which will be updated before services launch."],
        ["How can I contact support?", "Use the contact page. Form submissions are unavailable until a real receiving service is connected."],
      ],
    },
    legal: {
      privacy: ["Privacy policy", "We are preparing this policy to reflect the services actually offered. This marketing site does not currently collect form submissions; the contact form is inactive. Before services or data collection are enabled, we will explain data types, processing purposes, retention, recipients, individual rights, and how to contact us."],
      terms: ["Terms & conditions", "This is preliminary information, not final subscription terms. Registration, payments, and services are not enabled on this site. Before a service is made available, clear terms will describe its scope, responsibilities, fees, usage rules, and suspension."],
      refund: ["Refund & cancellation policy", "Subscriptions and payments are not enabled on this site, so there are currently no purchases or refunds to process here. The approved cancellation and refund policy will be published before sales begin."],
    },
    footer: {
      tagline: "Smart Connections. Smarter Growth.",
      explore: "Explore",
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
      disclaimer: "Product details are under review. Illustrations and feature names do not confirm availability.",
    },
    misc: { contact: "Contact us", learn: "Learn more", soon: "Coming soon", noResults: "No matching results.", all: "View all" },
    featureIcons: { message: "Conversation", comments: "Comments", instagram: "Social channels", chat: "Live chat", calendar: "Calendar", send: "Messaging", phone: "Phone", mail: "Email", bag: "Store", chart: "Reports" },
  },
};

const icons = {
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  comments: '<path d="M21 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3.5-.8L4 20l1.8-5.2A7 7 0 0 1 5 11.5 7.5 7.5 0 0 1 13 4a8 8 0 0 1 8 7.5Z"/><path d="M8 11h8M8 14h5"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  chat: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 10h8M8 14h5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>',
  lock: '<rect x="4" y="11" width="16" height="11" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  play: '<path d="m8 5 12 7-12 7V5Z"/>',
};
const icon = (name, cls = "") => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
const routeInfo = () => {
  const appPath = window.location.pathname.startsWith(BASE_URL)
    ? window.location.pathname.slice(BASE_URL.length)
    : "";
  const parts = appPath.replace(/\/+$/, "").split("/").filter(Boolean);
  const isLocalized = parts[0] === "ar" || parts[0] === "en";
  const lang = parts[0] === "en" ? "en" : "ar";
  let page = isLocalized ? parts[1] || "home" : "notFound";
  const feature = page.startsWith("feature-") ? page.slice(8) : "";
  if (feature) page = featureCatalog.some((item) => item.id === feature) ? "feature" : "notFound";
  if (isLocalized && !feature && !Object.values(pageSlugs).includes(parts[1] || "")) page = "notFound";
  if (parts.length > (isLocalized ? 2 : 1)) page = "notFound";
  return { lang, page, feature };
};
const localizedPath = (lang, page = "home", feature = "") => {
  const base = `${BASE_URL}${lang}/`;
  if (feature) return `${base}feature-${feature}`;
  const slug = pageSlugs[page];
  return slug ? `${base}${slug}` : base;
};
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const a = (lang, page, label, cls = "text-link", attrs = "") => `<a class="${cls}" href="${localizedPath(lang, page)}" ${attrs}>${label}</a>`;
const getFeature = (lang, item) => copy[lang].features.items[item.id];

function header(lang, currentPage, currentFeature = "") {
  const t = copy[lang];
  const mainLinks = ["home", "about", "features", "pricing", "tutorials", "contact"];
  const link = (key) => `<a href="${localizedPath(lang, key)}" class="nav-link ${currentPage === key ? "active" : ""}" ${currentPage === key ? 'aria-current="page"' : ""}>${t.nav[key]}</a>`;
  const otherLang = lang === "ar" ? "en" : "ar";
  const otherLabel = lang === "ar" ? "EN" : "ع";
  const appLink = APP_URLS.login
    ? `<a class="nav-login" href="${APP_URLS.login}">${t.nav.login}</a>`
    : `<span class="nav-login" aria-disabled="true" title="${lang === "ar" ? "تسجيل الدخول غير متاح حاليًا" : "Sign in is not available yet"}">${t.nav.login}</span>`;
  return `<header class="site-header" id="site-header">
    <div class="container header-inner">
      <a class="brand" href="${localizedPath(lang)}" aria-label="${t.brand} ${t.brandLatin} — ${t.nav.home}">
        <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="brand-name">${t.brand}<b>${t.brandLatin}</b></span>
      </a>
      <button class="mobile-menu-toggle" type="button" aria-label="${t.nav.menu}" aria-expanded="false" aria-controls="primary-nav">${icon("menu")}</button>
      <nav class="primary-nav" id="primary-nav" aria-label="${lang === "ar" ? "التنقل الرئيسي" : "Main navigation"}">
        <div class="nav-links">${mainLinks.map(link).join("")}</div>
        <div class="nav-actions">
          <a class="language-switch" href="${localizedPath(otherLang, currentPage === "feature" ? "features" : currentPage, currentFeature)}" lang="${otherLang}" aria-label="${otherLabel}">${icon("globe")}<span>${otherLabel}</span></a>
          ${appLink}
          <a class="button button-small button-primary nav-cta" href="${localizedPath(lang, "contact")}">${t.nav.start}${icon("arrow")}</a>
        </div>
      </nav>
    </div>
  </header>`;
}

function footer(lang) {
  const t = copy[lang];
  const links = (pages) => pages.map(([key, text]) => a(lang, key, text, "footer-link")).join("");
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand brand-light" href="${localizedPath(lang)}"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span class="brand-name">${t.brand}<b>${t.brandLatin}</b></span></a>
          <p>${t.footer.tagline}</p>
        </div>
        <div class="footer-column"><h3>${t.footer.explore}</h3>${links([["features", t.nav.features], ["pricing", t.nav.pricing], ["tutorials", t.nav.tutorials]])}</div>
        <div class="footer-column"><h3>${t.footer.company}</h3>${links([["about", t.nav.about], ["contact", t.nav.contact], ["faq", t.nav.faq]])}</div>
        <div class="footer-column"><h3>${t.footer.legal}</h3>${links([["privacy", lang === "ar" ? "الخصوصية" : "Privacy"], ["terms", lang === "ar" ? "الشروط" : "Terms"], ["refund", lang === "ar" ? "الاسترداد" : "Refunds"]])}</div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Wasla AI. ${t.footer.rights}</p>
        <p>${t.footer.disclaimer}</p>
        <a class="footer-language" href="${localizedPath(lang === "ar" ? "en" : "ar")}">${icon("globe")} ${lang === "ar" ? "English" : "العربية"}</a>
      </div>
    </div>
  </footer>`;
}

function heroVisual(lang) {
  const t = copy[lang];
  const ar = lang === "ar";
  return `<div class="hero-visual">
    <div class="visual-glow"></div>
    <div class="dashboard-window">
      <div class="dash-top"><div class="dash-brand"><span class="dash-dot"></span> ${t.brand} <span class="dash-demo">${ar ? "نموذج توضيحي" : "Concept"}</span></div><div class="dash-controls"><i></i><i></i><i></i></div></div>
      <div class="dash-body">
        <aside class="dash-side">${icon("chart")}<span class="selected">${icon("message")}</span>${icon("calendar")}${icon("send")}</aside>
        <div class="dash-content">
          <div class="dash-heading"><span>${ar ? "نظرة عامة" : "Overview"}</span><small>${ar ? "تصوّر مبدئي" : "Concept only"}</small></div>
          <div class="dash-cards"><div class="dash-stat"><span>${ar ? "المحادثات" : "Conversations"}</span><b>—</b><i class="stat-line purple"></i></div><div class="dash-stat"><span>${ar ? "الحملات" : "Campaigns"}</span><b>—</b><i class="stat-line cyan"></i></div><div class="dash-stat"><span>${ar ? "التفاعل" : "Engagement"}</span><b>—</b><i class="stat-line lilac"></i></div></div>
          <div class="dash-lower"><div class="dash-chart-card"><span>${ar ? "تدفق محادثة — رسم توضيحي" : "Conversation flow — illustration"}</span><div class="flow-canvas"><div class="flow-node">${icon("message")}<small>${ar ? "رسالة العميل" : "Customer message"}</small></div><div class="flow-connector"></div><div class="flow-node flow-node-highlight">${icon("spark")}<small>${ar ? "خطوة توضيحية" : "Example step"}</small></div><div class="flow-connector"></div><div class="flow-node">${icon("send")}<small>${ar ? "ردّ مقترح" : "Suggested reply"}</small></div></div></div><div class="dash-chat-card"><span>${ar ? "رسائل نموذجية" : "Sample messages"}</span><div class="fake-message">${ar ? "مرحبًا، أريد معرفة المزيد." : "Hi, I’d like to learn more."}</div><div class="fake-message reply">${ar ? "أهلًا بك! يسعدنا مساعدتك." : "Welcome! We’d be happy to help."}</div></div></div>
        </div>
      </div>
    </div>
    <div class="floating-note note-top">${icon("spark")}<span>${ar ? "تواصل أكثر تنظيمًا" : "More organized conversations"}</span></div>
    <div class="floating-note note-bottom">${icon("check")}<span>${ar ? "مخطط توضيحي فقط" : "Illustrative only"}</span></div>
    <p class="visual-disclaimer">${t.home.concept}</p>
  </div>`;
}

function featureCard(lang, item, compact = false) {
  const t = copy[lang];
  const [title, description] = getFeature(lang, item);
  const link = item.detailPageSlug ? `<span class="card-arrow">${t.features.detailCta}${icon("arrow")}</span>` : "";
  const status = item.availabilityStatus === "verified" ? t.features.statusVerified : t.features.status;
  return `<article class="feature-card ${compact ? "feature-card-compact" : ""}">
    <div class="card-icon">${icon(item.icon)}</div>
    <div class="feature-card-heading"><h3>${title}</h3><span class="status-pill">${status}</span></div>
    <p>${description}</p>${link}
  </article>`;
}

function homePage(lang) {
  const t = copy[lang];
  const faqs = t.faq.items.slice(0, 4);
  return `<main>
    <section class="hero-section"><div class="container hero-grid"><div class="hero-copy"><span class="eyebrow"><span class="eyebrow-dot"></span>${t.home.eyebrow}</span><h1>${t.home.title}</h1><p class="hero-lead">${t.home.lead}</p><div class="hero-actions"><a class="button button-primary" href="${localizedPath(lang, "contact")}">${t.nav.start}${icon("arrow")}</a><a class="button button-secondary" href="${localizedPath(lang, "features")}">${t.nav.explore}${icon("arrow")}</a></div><div class="hero-proof">${icon("lock")}<span>${lang === "ar" ? "تفاصيل المميزات قيد التحقق — دون وعود غير مؤكدة" : "Capabilities are under review — no unverified promises"}</span></div></div>${heroVisual(lang)}</div></section>
    <section class="section section-overview"><div class="container"><div class="section-heading centered"><span class="eyebrow">${lang === "ar" ? "وصلة AI" : "WASLA AI"}</span><h2>${t.home.overview}</h2><p>${t.home.overviewLead}</p></div><div class="overview-grid">${featureCatalog.slice(0, 6).map((item) => featureCard(lang, item, true)).join("")}</div><div class="center-action">${a(lang, "features", `${t.nav.allFeatures}${icon("arrow")}`, "text-link link-arrow")}</div></div></section>
    <section class="section section-soft"><div class="container split-section"><div class="section-copy"><span class="eyebrow">${lang === "ar" ? "تجربة أكثر ترتيبًا" : "A more organized experience"}</span><h2>${t.home.challenges}</h2><p>${t.home.challengesLead}</p><ul class="check-list">${(lang === "ar" ? ["أسئلة متكررة ومحادثات تحتاج متابعة", "مهام تسويقية موزعة بين أدوات مختلفة", "صعوبة الحفاظ على نظرة واضحة للتواصل"] : ["Recurring questions and conversations to follow up", "Marketing tasks spread across different tools", "Hard to maintain a clear view of customer communication"]).map((text) => `<li>${icon("check")}<span>${text}</span></li>`).join("")}</ul><a class="button button-secondary" href="${localizedPath(lang, "about")}">${t.misc.learn}${icon("arrow")}</a></div><div class="challenge-art"><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-card art-card-main">${icon("message")}<span>${lang === "ar" ? "محادثات العملاء" : "Customer conversations"}</span><small>${lang === "ar" ? "تصوّر توضيحي" : "Concept illustration"}</small></div><div class="art-card art-card-top">${icon("calendar")}<span>${lang === "ar" ? "مهام التسويق" : "Marketing tasks"}</span></div><div class="art-card art-card-bottom">${icon("chart")}<span>${lang === "ar" ? "نظرة موحدة" : "One clear view"}</span></div></div></div></section>
    <section class="section"><div class="container"><div class="feature-spotlight"><div class="spotlight-copy"><span class="eyebrow">${lang === "ar" ? "فكرة الأتمتة" : "AUTOMATION CONCEPT"}</span><h2>${t.home.spotlight}</h2><p>${t.home.spotlightLead}</p><a class="button button-white" href="${localizedPath(lang, "features")}">${t.home.spotlightCta}${icon("arrow")}</a></div><div class="spotlight-flow"><div class="spotlight-node">${icon("message")}<span>${lang === "ar" ? "رسالة واردة" : "Incoming message"}</span></div><div class="spotlight-line"></div><div class="spotlight-node spotlight-node-active">${icon("spark")}<span>${lang === "ar" ? "قاعدة (تصوّر)" : "Rule (concept)"}</span></div><div class="spotlight-line"></div><div class="spotlight-node">${icon("send")}<span>${lang === "ar" ? "ردّ توضيحي" : "Example reply"}</span></div></div></div></div></section>
    <section class="section section-soft"><div class="container"><div class="section-heading centered"><span class="eyebrow">${lang === "ar" ? "كيف تبدأ" : "GETTING STARTED"}</span><h2>${t.home.how}</h2></div><div class="steps-grid">${t.home.steps.map((step, index) => `<article class="step-item"><span class="step-number">0${index + 1}</span><span class="step-line"></span><p>${step}</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="section-heading centered"><span class="eyebrow">${lang === "ar" ? "لمن وصلة؟" : "WHO IT’S FOR"}</span><h2>${t.home.uses}</h2></div><div class="usecase-grid">${t.home.useCases.map((item, index) => `<div class="usecase-card"><span class="usecase-number">0${index + 1}</span><span>${item}</span>${icon("arrow")}</div>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container"><div class="section-heading centered"><span class="eyebrow">${t.pricing.eyebrow}</span><h2>${t.home.pricing}</h2><p>${t.home.pricingLead}</p></div><div class="pricing-grid">${planCards(lang, true)}</div><div class="center-action">${a(lang, "pricing", `${t.misc.learn}${icon("arrow")}`, "text-link link-arrow")}</div></div></section>
    <section class="section"><div class="container learning-preview"><div><span class="eyebrow">${t.tutorials.eyebrow}</span><h2>${t.home.tutorials}</h2><p>${t.home.tutorialsLead}</p></div><div class="empty-tutorial">${icon("play")}<div><b>${t.tutorials.empty}</b><span>${t.tutorials.emptyLead}</span></div><a href="${localizedPath(lang, "tutorials")}" aria-label="${t.nav.tutorials}">${icon("arrow")}</a></div></div></section>
    ${faqSection(lang, faqs, true)}
    <section class="section section-final"><div class="container final-cta"><div><span class="eyebrow">${lang === "ar" ? "خطوتك القادمة" : "YOUR NEXT STEP"}</span><h2>${t.home.finalTitle}</h2><p>${t.home.finalLead}</p></div><a class="button button-white" href="${localizedPath(lang, "contact")}">${t.misc.contact}${icon("arrow")}</a><div class="final-glow"></div></div></section>
  </main>`;
}

function pageHero(lang, eyebrow, title, lead) {
  return `<section class="page-hero"><div class="container page-hero-inner"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${lead}</p></div><div class="page-hero-glow"></div></section>`;
}

function aboutPage(lang) {
  const t = copy[lang].about;
  const values = t.values.map((text, i) => `<article class="value-card"><span>0${i + 1}</span>${icon("spark")}<p>${text}</p></article>`).join("");
  return `<main>${pageHero(lang, t.eyebrow, t.title, t.lead)}
    <section class="section"><div class="container about-intro"><div class="about-mark"><span class="about-mark-inner">${icon("spark")}</span><i></i><i></i></div><div><span class="eyebrow">${lang === "ar" ? "تعريف وصلة" : "ABOUT WASLA"}</span><h2>${t.whatTitle}</h2><p>${t.what}</p></div></div></section>
    <section class="section section-soft"><div class="container"><div class="section-heading"><span class="eyebrow">${lang === "ar" ? "ما نطمح إليه" : "OUR PURPOSE"}</span><h2>${t.problemTitle}</h2><p>${t.problem}</p></div><div class="purpose-grid"><article><div class="card-icon">${icon("spark")}</div><h3>${t.visionTitle}</h3><p>${t.vision}</p></article><article><div class="card-icon">${icon("message")}</div><h3>${t.missionTitle}</h3><p>${t.mission}</p></article></div></div></section>
    <section class="section"><div class="container"><div class="section-heading centered"><span class="eyebrow">${lang === "ar" ? "ما نؤمن به" : "WHAT WE VALUE"}</span><h2>${t.valuesTitle}</h2></div><div class="values-grid">${values}</div></div></section>
    <section class="section section-soft"><div class="container audience-grid"><article><span class="eyebrow">${lang === "ar" ? "مجتمعنا" : "OUR COMMUNITY"}</span><h2>${t.servesTitle}</h2><p>${t.serves}</p></article><article><span class="eyebrow">${lang === "ar" ? "نهجنا" : "OUR APPROACH"}</span><h2>${t.whyTitle}</h2><p>${t.why}</p></article></div></section>
    ${finalCta(lang)}</main>`;
}

function featuresPage(lang) {
  const t = copy[lang];
  const cards = featureCatalog.map((item) => featureCard(lang, item)).join("");
  return `<main>${pageHero(lang, t.features.eyebrow, t.features.title, t.features.lead)}
    <section class="section"><div class="container"><div class="notice-banner">${icon("lock")}<p>${t.features.notice}</p></div><div class="filter-row" role="group" aria-label="${lang === "ar" ? "تصفية حسب التصنيف" : "Filter by category"}">${Object.entries(t.features.categories).map(([key, label], index) => `<button class="filter-chip ${index === 0 ? "active" : ""}" type="button" data-filter="${key}" aria-pressed="${index === 0}">${label}</button>`).join("")}</div><div class="features-grid" id="features-grid">${featureCatalog.map((item) => `<div data-feature-category="${item.category}">${featureCard(lang, item)}</div>`).join("")}</div><p class="filter-empty" hidden>${t.misc.noResults}</p></div></section>
    <section class="section section-soft"><div class="container external-note"><div class="card-icon">${icon("lock")}</div><div><h2>${lang === "ar" ? "متطلبات الخدمات الخارجية" : "External service requirements"}</h2><p>${lang === "ar" ? "قد تتطلب بعض أدوات التواصل إعداد حسابات أو مزودي خدمات خارجيين ورسومًا مستقلة. سنوضح المتطلبات عند تأكيدها." : "Some communication tools may require external accounts or service providers and separate charges. Requirements will be explained once confirmed."}</p></div></div></section>
    ${finalCta(lang)}</main>`;
}

function planCards(lang, compact = false) {
  const t = copy[lang].pricing;
  return t.planNames.map((name, i) => `<article class="pricing-card ${i === 1 ? "pricing-featured" : ""} ${compact ? "pricing-compact" : ""}">
    ${i === 1 ? `<span class="recommended-badge">${t.recommended}</span>` : ""}
    <div class="plan-icon">${icon(i === 0 ? "spark" : i === 1 ? "chart" : "message")}</div>
    <h3>${name}</h3><p class="plan-description">${t.plans[i]}</p>
    <div class="plan-price">${t.soon}</div><p class="plan-period">${lang === "ar" ? "الأسعار قيد الإعداد" : "Pricing is being prepared"}</p>
    <a class="button ${i === 1 ? "button-primary" : "button-secondary"} plan-button" href="${localizedPath(lang, "contact")}">${t.contact}${icon("arrow")}</a>
    ${compact ? "" : `<ul class="plan-features">${t.rows.slice(0, 4).map((row) => `<li>${icon("check")}<span>${row} <small>— ${t.soon}</small></span></li>`).join("")}</ul>`}
  </article>`).join("");
}

function pricingPage(lang) {
  const t = copy[lang].pricing;
  return `<main>${pageHero(lang, t.eyebrow, t.title, t.lead)}
    <section class="section"><div class="container"><div class="pricing-grid">${planCards(lang)}</div><p class="pricing-disclaimer">${icon("lock")}<span>${t.note}</span></p></div></section>
    <section class="section section-soft"><div class="container comparison-wrap"><div class="section-heading centered"><span class="eyebrow">${lang === "ar" ? "قارن الباقات" : "COMPARE PLANS"}</span><h2>${t.tableTitle}</h2></div><div class="comparison-table-scroll"><table class="comparison-table"><thead><tr><th>${lang === "ar" ? "الميزة" : "Feature"}</th>${t.planNames.map((name) => `<th>${name}</th>`).join("")}</tr></thead><tbody>${t.rows.map((row) => `<tr><th>${row}</th>${t.planNames.map(() => `<td><span class="table-soon">${t.soon}</span></td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="pricing-disclaimer">${icon("lock")}<span>${t.note}</span></p></div></section>
    ${faqSection(lang, copy[lang].faq.items.slice(3, 6), false)}
    ${finalCta(lang)}</main>`;
}

function tutorialsPage(lang) {
  const t = copy[lang].tutorials;
  return `<main>${pageHero(lang, t.eyebrow, t.title, t.lead)}
    <section class="section"><div class="container"><div class="tutorial-controls"><label class="search-field">${icon("message")}<input type="search" id="tutorial-search" placeholder="${t.search}" aria-label="${t.search}"></label><label class="select-field"><span>${t.categoryLabel}</span><select id="tutorial-category" aria-label="${t.categoryLabel}"><option value="all">${t.all}</option>${t.categories.map((cat) => `<option value="${escapeHTML(cat)}">${cat}</option>`).join("")}</select>${icon("chevron")}</label></div><div class="tutorial-empty" id="tutorial-empty">${icon("play")}<h2>${t.empty}</h2><p>${t.emptyLead}</p></div><div class="tutorial-no-results" id="tutorial-no-results" hidden>${copy[lang].misc.noResults}</div><div class="tutorial-category-list"><h2>${lang === "ar" ? "استكشف حسب الموضوع" : "Browse by topic"}</h2><div class="category-pills">${t.categories.map((cat) => `<button type="button" class="category-pill" data-tutorial-category="${escapeHTML(cat)}">${cat}</button>`).join("")}</div></div></div></section>
  </main>`;
}

function contactPage(lang) {
  const t = copy[lang].contact;
  return `<main>${pageHero(lang, t.eyebrow, t.title, t.lead)}
    <section class="section"><div class="container contact-layout"><div class="contact-aside"><span class="eyebrow">${lang === "ar" ? "تواصل مباشر" : "GET IN TOUCH"}</span><h2>${lang === "ar" ? "فريق وصلة هنا لمساعدتك" : "The Wasla team is here to help"}</h2><p>${t.unavailable}</p><div class="contact-info-card">${icon("message")}<div><b>${lang === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}</b><span>${t.faqShortcut}</span>${a(lang, "faq", lang === "ar" ? "عرض الأسئلة" : "Browse FAQs", "text-link")}</div></div><div class="contact-info-card">${icon("lock")}<div><b>${lang === "ar" ? "بياناتك مهمة" : "Your information matters"}</b><span>${lang === "ar" ? "لن نطلب منك مشاركة أي بيانات حساسة عبر هذا النموذج." : "Please don’t share sensitive information through this form."}${a(lang, "privacy", lang === "ar" ? "سياسة الخصوصية" : "Privacy policy", "text-link")}</span></div></div></div>
    <form class="contact-form" id="contact-form" novalidate><h2>${t.formTitle}</h2><div class="form-grid"><label>${t.name}<span class="required-mark">*</span><input name="name" autocomplete="name" required minlength="2"></label><label>${t.email}<span class="required-mark">*</span><input type="email" name="email" autocomplete="email" required></label><label>${t.phone}<input type="tel" name="phone" autocomplete="tel"></label><label>${t.business}<input name="business" autocomplete="organization"></label><label class="form-wide">${t.type}<select name="inquiry">${t.types.map((type) => `<option>${type}</option>`).join("")}</select></label><label class="form-wide">${t.message}<span class="required-mark">*</span><textarea name="message" rows="5" required minlength="10"></textarea></label><label class="consent-label form-wide"><input type="checkbox" name="consent" required><span>${t.consent}</span></label></div><div class="form-status" id="form-status" role="status" aria-live="polite"></div><button class="button button-primary form-submit" type="submit" ${APP_URLS.contactEndpoint ? "" : "disabled"}>${t.submit}${icon("arrow")}</button><p class="form-disabled-note">${icon("lock")}<span>${t.disabled}</span></p></form></div></section></main>`;
}

function faqSection(lang, items, compact) {
  const t = copy[lang];
  return `<section class="section ${compact ? "section-soft" : ""}"><div class="container faq-layout"><div class="section-heading"><span class="eyebrow">${t.faq.eyebrow}</span><h2>${compact ? t.home.faq : t.faq.title}</h2><p>${lang === "ar" ? "إجابات دقيقة، دون وعود غير مؤكدة." : "Straight answers, without unverified promises."}</p>${compact ? a(lang, "faq", `${t.misc.all}${icon("arrow")}`, "text-link link-arrow") : ""}</div><div class="accordion">${items.map(([question, answer]) => `<details class="faq-item"><summary>${question}<span class="faq-toggle">${icon("chevron")}</span></summary><p>${answer}</p></details>`).join("")}</div></div></section>`;
}

function finalCta(lang) {
  const t = copy[lang];
  return `<section class="section section-final"><div class="container final-cta"><div><span class="eyebrow">${lang === "ar" ? "تواصل معنا" : "GET IN TOUCH"}</span><h2>${t.home.finalTitle}</h2><p>${t.home.finalLead}</p></div><a class="button button-white" href="${localizedPath(lang, "contact")}">${t.misc.contact}${icon("arrow")}</a><div class="final-glow"></div></div></section>`;
}

function legalPage(lang, page) {
  const [title, text] = copy[lang].legal[page];
  return `<main>${pageHero(lang, lang === "ar" ? "معلومات مهمة" : "IMPORTANT INFORMATION", title, lang === "ar" ? "معلومات واضحة حول موقع وصلة وخدماتها." : "Clear information about the Wasla website and services.")}
    <section class="section"><div class="container legal-content"><div class="legal-updated">${icon("lock")}<span>${lang === "ar" ? "آخر تحديث" : "Last updated"}: ${lang === "ar" ? "قبل الإطلاق" : "Pre-launch"}</span></div><p>${text}</p><h2>${lang === "ar" ? "هل لديك سؤال؟" : "Have a question?"}</h2><p>${lang === "ar" ? "إذا كان لديك سؤال حول هذه المعلومات، تواصل معنا." : "If you have questions about this information, please contact us."}</p>${a(lang, "contact", `${copy[lang].misc.contact}${icon("arrow")}`, "button button-primary")}</div></section></main>`;
}

function featureDetailPage(lang, id) {
  const item = featureCatalog.find((feature) => feature.id === id);
  const t = copy[lang];
  if (!item) return notFoundPage(lang);
  const [title] = getFeature(lang, item);
  return `<main>${pageHero(lang, t.features.eyebrow, title, t.features.detailUnavailable)}<section class="section"><div class="container detail-placeholder"><div class="card-icon">${icon(item.icon)}</div><span class="status-pill">${t.features.status}</span><p>${t.features.notice}</p>${a(lang, "features", `${t.nav.features}${icon("arrow")}`, "button button-primary")}</div></section></main>`;
}

function notFoundPage(lang) {
  const title = lang === "ar" ? "عذرًا، لم نعثر على هذه الصفحة" : "Sorry, we couldn’t find that page";
  const lead = lang === "ar" ? "قد يكون الرابط غير صحيح أو أن الصفحة لم تعد متاحة." : "The link may be incorrect or the page may no longer be available.";
  return `<main class="not-found"><div class="not-found-orbit">${icon("spark")}<b>404</b></div><span class="eyebrow">WASLA AI</span><h1>${title}</h1><p>${lead}</p><a class="button button-primary" href="${localizedPath(lang)}">${copy[lang].nav.home}${icon("arrow")}</a></main>`;
}

function render() {
  const { lang, page, feature } = routeInfo();
  const t = copy[lang];
  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;
  const pageTitles = {
    home: t.home.title, about: t.about.title, features: t.features.title, pricing: t.pricing.title,
    tutorials: t.tutorials.title, contact: t.contact.title, faq: t.faq.title,
    privacy: t.legal.privacy[0], terms: t.legal.terms[0], refund: t.legal.refund[0],
  };
  const pageDescriptions = {
    home: t.home.lead, about: t.about.lead, features: t.features.lead, pricing: t.pricing.lead,
    tutorials: t.tutorials.lead, contact: t.contact.lead, faq: t.faq.title,
    privacy: t.legal.privacy[1], terms: t.legal.terms[1], refund: t.legal.refund[1],
  };
  const title = page === "feature" ? getFeature(lang, featureCatalog.find((item) => item.id === feature))[0] : pageTitles[page] || (lang === "ar" ? "الصفحة غير موجودة" : "Page not found");
  document.title = `${title} | ${t.brand} ${t.brandLatin}`;
  document.querySelector('meta[name="description"]').content = pageDescriptions[page] || t.features.detailUnavailable;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = pageDescriptions[page] || t.features.detailUnavailable;
  const setLink = (rel, href, hreflang = "") => {
    let element = document.head.querySelector(`link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ""}`);
    if (!element) {
      element = document.createElement("link");
      element.rel = rel;
      if (hreflang) element.hreflang = hreflang;
      document.head.append(element);
    }
    element.href = href;
  };
  const canonicalPath = page === "notFound" ? window.location.pathname : localizedPath(lang, page === "feature" ? "features" : page, feature);
  setLink("canonical", `${window.location.origin}${canonicalPath}`);
  setLink("alternate", `${window.location.origin}${localizedPath("ar", page === "feature" ? "features" : page, feature)}`, "ar");
  setLink("alternate", `${window.location.origin}${localizedPath("en", page === "feature" ? "features" : page, feature)}`, "en");
  setLink("alternate", `${window.location.origin}${localizedPath("ar", page === "feature" ? "features" : page, feature)}`, "x-default");
  let content = "";
  switch (page) {
    case "home": content = homePage(lang); break;
    case "about": content = aboutPage(lang); break;
    case "features": content = featuresPage(lang); break;
    case "pricing": content = pricingPage(lang); break;
    case "tutorials": content = tutorialsPage(lang); break;
    case "contact": content = contactPage(lang); break;
    case "faq": content = `<main>${pageHero(lang, t.faq.eyebrow, t.faq.title, lang === "ar" ? "معلومات عملية حول وصلة وخدماتها." : "Practical information about Wasla and its services.")}${faqSection(lang, t.faq.items, false)}</main>`; break;
    case "privacy":
    case "terms":
    case "refund": content = legalPage(lang, page); break;
    case "feature": content = featureDetailPage(lang, feature); break;
    default: content = notFoundPage(lang);
  }
  document.getElementById("app").innerHTML = `${header(lang, page, feature)}${content}${footer(lang)}`;
  bindInteractions(lang);
}

function bindInteractions(lang) {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.getElementById("primary-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? copy[lang].nav.close : copy[lang].nav.menu);
    toggle.innerHTML = icon(open ? "close" : "menu");
    nav.classList.toggle("nav-open", open);
    document.body.classList.toggle("menu-open", open);
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) {
      toggle.innerHTML = icon("menu");
      toggle.setAttribute("aria-label", copy[lang].nav.menu);
    }
    nav.classList.remove("nav-open");
    document.body.classList.remove("menu-open");
  }));
  document.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
    const category = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-feature-category]").forEach((card) => {
      card.hidden = category !== "all" && card.dataset.featureCategory !== category;
    });
    const visible = [...document.querySelectorAll("[data-feature-category]")].some((card) => !card.hidden);
    const empty = document.querySelector(".filter-empty");
    if (empty) empty.hidden = visible;
  }));
  const tutorialSearch = document.getElementById("tutorial-search");
  const tutorialCategory = document.getElementById("tutorial-category");
  const categoryButtons = [...document.querySelectorAll("[data-tutorial-category]")];
  const updateTutorialEmpty = () => {
    if (!tutorialSearch) return;
    const query = tutorialSearch.value.trim();
    const selected = tutorialCategory.value;
    const matchingCategory = selected === "all" || categoryButtons.some((button) => button.dataset.tutorialCategory === selected);
    const matchingQuery = !query || categoryButtons.some((button) => button.textContent.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    document.getElementById("tutorial-empty").hidden = !(matchingCategory && matchingQuery);
    document.getElementById("tutorial-no-results").hidden = matchingCategory && matchingQuery;
  };
  tutorialSearch?.addEventListener("input", updateTutorialEmpty);
  tutorialCategory?.addEventListener("change", updateTutorialEmpty);
  categoryButtons.forEach((button) => button.addEventListener("click", () => {
    tutorialCategory.value = button.dataset.tutorialCategory;
    updateTutorialEmpty();
    tutorialSearch.focus();
  }));
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || !form.elements.consent.checked) {
      document.getElementById("form-status").textContent = copy[lang].contact.validation;
      return;
    }
    if (!APP_URLS.contactEndpoint) {
      document.getElementById("form-status").textContent = copy[lang].contact.disabled;
      return;
    }
    const button = form.querySelector('[type="submit"]');
    const status = document.getElementById("form-status");
    button.disabled = true;
    status.textContent = copy[lang].contact.sending;
    try {
      const response = await fetch(APP_URLS.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(`Contact request failed: ${response.status}`);
      status.textContent = copy[lang].contact.success;
      form.reset();
    } catch (error) {
      console.error(error);
      status.textContent = copy[lang].contact.error;
    } finally {
      button.disabled = false;
    }
  });
}

if (window.location.pathname === "/" || window.location.pathname === BASE_URL) {
  window.history.replaceState({}, "", localizedPath("ar"));
}
document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  const appPath = anchor?.pathname.startsWith(BASE_URL) ? anchor.pathname.slice(BASE_URL.length) : "";
  if (!anchor || anchor.target || anchor.origin !== window.location.origin || !/^(ar|en)(\/|$)/.test(appPath)) return;
  event.preventDefault();
  window.history.pushState({}, "", anchor.href);
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
});
window.addEventListener("popstate", render);
render();
