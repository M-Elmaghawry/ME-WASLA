import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../dist/", import.meta.url));
const siteUrl = process.env.SITE_URL?.replace(/\/+$/, "");
const basePath = process.env.SITE_BASE_PATH || "/";

if (!basePath.startsWith("/") || !basePath.endsWith("/") || basePath.includes("..")) {
  throw new Error("SITE_BASE_PATH must be an absolute site path ending in '/'.");
}

let siteOrigin = "";
if (siteUrl) {
  let parsedUrl;
  try {
    parsedUrl = new URL(siteUrl);
  } catch (error) {
    throw new Error("SITE_URL must be a valid absolute URL.", { cause: error });
  }

  if ((parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") || parsedUrl.origin !== siteUrl) {
    throw new Error("SITE_URL must be an HTTP(S) origin without a path.");
  }
  siteOrigin = parsedUrl.origin;
}

const pages = [
  {
    slug: "",
    title: { ar: "وصلة ذكية بينك وبين عملائك", en: "Smart Connections. Smarter Growth." },
    description: {
      ar: "استكشف أدوات قيد التحقق لتنظيم محادثات العملاء والردود والتعليقات وأنشطة التسويق.",
      en: "Explore capabilities under review for organizing customer conversations, replies, comments, and marketing activities.",
    },
  },
  {
    slug: "about",
    title: { ar: "نبني تجربة تواصل أقرب لاحتياجات الأعمال العربية", en: "Building a communication experience for Arabic-speaking businesses" },
    description: {
      ar: "وصلة AI مشروع لمنصة تساعد الأنشطة التجارية على تنظيم التواصل والتسويق في تجربة سهلة وواضحة.",
      en: "Wasla AI is a platform project designed to help businesses organize customer communication and marketing in a clear, approachable experience.",
    },
  },
  {
    slug: "features",
    title: { ar: "مساحة واحدة لأدوات التواصل والتسويق", en: "A shared space for communication and marketing tools" },
    description: {
      ar: "تظهر هذه المجموعات كخريطة للمنتج الجاري مراجعته. لا يعني ظهورها أن الميزة متاحة أو مؤكدة.",
      en: "These groups map the product currently under review. Their appearance does not mean a feature is available or confirmed.",
    },
  },
  {
    slug: "pricing",
    title: { ar: "الأسعار والباقات قيد التجهيز", en: "Plans and Pricing Coming Soon" },
    description: {
      ar: "أسماء الباقات استرشادية فقط؛ الأسعار والمزايا وحدود الاستخدام وشروط الاشتراك غير معتمدة بعد.",
      en: "Plan names are provisional concepts only. Prices, features, usage limits, and subscription terms are not approved.",
    },
  },
  {
    slug: "tutorials",
    title: { ar: "تعلّم استخدام وصلة، خطوة بخطوة", en: "Learn Wasla, step by step" },
    description: {
      ar: "سنضيف أدلة وشروحات عندما تصبح المواد وروابطها جاهزة.",
      en: "Guides and tutorials will be added when materials and links are ready.",
    },
  },
  {
    slug: "contact",
    title: { ar: "يسعدنا أن نسمع منك", en: "We’d love to hear from you" },
    description: {
      ar: "للاستفسارات حول وصلة أو لمعرفة آخر المستجدات، تواصل معنا.",
      en: "Questions about Wasla or want to hear the latest? Get in touch.",
    },
  },
  {
    slug: "faq",
    title: { ar: "إجابات واضحة لأسئلتك", en: "Clear answers to common questions" },
    description: {
      ar: "معلومات عملية حول وصلة وخدماتها.",
      en: "Practical information about Wasla and its services.",
    },
  },
  {
    slug: "privacy",
    title: { ar: "سياسة الخصوصية", en: "Privacy policy" },
    description: {
      ar: "معلومات تمهيدية حول الخصوصية قبل إطلاق الخدمات الفعلية.",
      en: "Preliminary privacy information before the actual services launch.",
    },
  },
  {
    slug: "terms",
    title: { ar: "الشروط والأحكام", en: "Terms & conditions" },
    description: {
      ar: "معلومات تمهيدية حول شروط استخدام خدمات وصلة.",
      en: "Preliminary information about the terms for using Wasla services.",
    },
  },
  {
    slug: "refund",
    title: { ar: "سياسة الإلغاء والاسترداد", en: "Refund & cancellation policy" },
    description: {
      ar: "معلومات تمهيدية حول الإلغاء والاسترداد قبل بدء البيع.",
      en: "Preliminary cancellation and refund information before sales begin.",
    },
  },
];

const publicFeatureTitles = {
  chatbot: { ar: "روبوت Messenger والردود الآلية", en: "Messenger Chatbot & Automated Replies" },
  flowBuilder: { ar: "منشئ تدفقات المحادثة", en: "Visual Flow Builder" },
  comments: { ar: "أتمتة التعليقات", en: "Comment Automation" },
  instagram: { ar: "التواصل عبر Instagram", en: "Instagram Communication" },
  liveChat: { ar: "محادثات Messenger وInstagram", en: "Messenger & Instagram Conversations" },
  publishing: { ar: "نشر وجدولة المحتوى", en: "Social Publishing & Scheduling" },
  sms: { ar: "حملات الرسائل النصية", en: "SMS Marketing" },
  email: { ar: "حملات البريد الإلكتروني", en: "Email Marketing" },
  commerce: { ar: "أدوات المتجر الإلكتروني", en: "E-commerce Tools" },
  analytics: { ar: "التقارير ومؤشرات النشاط", en: "Reports & Activity Metrics" },
};

const featurePages = Object.entries(publicFeatureTitles).map(([id, title]) => ({
  slug: `feature-${id}`,
  title,
  description: {
    ar: "تفاصيل هذه الميزة قيد التحقق، ولا يؤكد وجودها في المصدر أنها تعمل أو متاحة.",
    en: "This capability is under review; its presence in source does not confirm that it is operational or available.",
  },
}));

const localizedRoutes = ["ar", "en"].flatMap((lang) => [...pages, ...featurePages].map((page) => {
  const suffix = page.slug ? `/${page.slug}` : "";
  const relativePath = `${lang}${suffix}`;
  const canonicalPath = `${basePath}${relativePath}${page.slug ? "" : "/"}`;
  const alternateUrl = (alternateLang) => `${siteOrigin}${basePath}${alternateLang}${suffix}${page.slug ? "" : "/"}`;
  return {
    ...page,
    lang,
    relativePath,
    canonicalUrl: siteOrigin ? `${siteOrigin}${canonicalPath}` : "",
    alternateAr: siteOrigin ? alternateUrl("ar") : "",
    alternateEn: siteOrigin ? alternateUrl("en") : "",
    alternateDefault: siteOrigin ? alternateUrl("ar") : "",
  };
}));

const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const escapeAttribute = (value) => value.replace(/[&"<>]/g, (character) => ({
  "&": "&amp;",
  '"': "&quot;",
  "<": "&lt;",
  ">": "&gt;",
})[character]);

for (const route of localizedRoutes) {
  const routeDirectory = path.join(outputDirectory, route.relativePath);
  await mkdir(routeDirectory, { recursive: true });

  const lang = route.lang;
  const direction = lang === "ar" ? "rtl" : "ltr";
  const pageTitle = `${route.title[lang]} | ${lang === "ar" ? "وصلة AI" : "Wasla AI"}`;
  const description = route.description[lang];
  const canonicalLinks = siteOrigin
    ? `    <link rel="canonical" href="${escapeAttribute(route.canonicalUrl)}" />\n` +
      `    <link rel="alternate" hreflang="ar" href="${escapeAttribute(route.alternateAr)}" />\n` +
      `    <link rel="alternate" hreflang="en" href="${escapeAttribute(route.alternateEn)}" />\n` +
      `    <link rel="alternate" hreflang="x-default" href="${escapeAttribute(route.alternateDefault)}" />\n`
    : "";
  const html = template
    .replace(/<html\b[^>]*>/, `<html lang="${lang}" dir="${direction}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(pageTitle)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeAttribute(pageTitle)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeAttribute(description)}" />`)
    .replace("</head>", `${canonicalLinks}  </head>`);

  await writeFile(path.join(routeDirectory, "index.html"), html, "utf8");
}

await copyFile(path.join(outputDirectory, "index.html"), path.join(outputDirectory, "404.html"));

if (!siteOrigin) {
  console.warn("Skipping sitemap generation: set SITE_URL to the production site origin.");
} else {
  const urls = localizedRoutes.map((route) => {
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="ar" href="${escapeAttribute(route.alternateAr)}" />`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${escapeAttribute(route.alternateEn)}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeAttribute(route.alternateDefault)}" />`,
    ].join("\n");
    return `  <url>\n    <loc>${escapeAttribute(route.canonicalUrl)}</loc>\n${alternates}\n  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;

  await writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(outputDirectory, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}${basePath}sitemap.xml\n`, "utf8");
}

for (const route of localizedRoutes) {
  const entryPoint = path.join(outputDirectory, route.relativePath, "index.html");
  const generatedHtml = await readFile(entryPoint, "utf8");
  const assetPrefix = basePath === "/" ? "/assets/" : `${basePath}assets/`;
  if (!generatedHtml.includes(`lang="${route.lang}"`) || !generatedHtml.includes(assetPrefix)) {
    throw new Error(`Generated route is missing localized document metadata or base-prefixed assets: ${route.relativePath}`);
  }
  if (siteOrigin && (!generatedHtml.includes(`rel="canonical" href="${route.canonicalUrl}"`) ||
    !generatedHtml.includes(`hreflang="ar"`) || !generatedHtml.includes(`hreflang="en"`))) {
    throw new Error(`Generated route is missing canonical or hreflang metadata: ${route.relativePath}`);
  }
}
