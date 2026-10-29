# WASLA AI — POST-AUDIT MASTER PROMPT UPDATE
## Incremental Website Development — October 29, 2026

**Project:** Wasla AI | وصلة  
**Development Environment:** VS Code / AI Coding Assistant  
**Task Type:** Update and refine an existing multi-page SaaS marketing website  
**Priority:** High  
**Implementation Strategy:** Incremental Development — Preserve Existing Work

---

# 1. CRITICAL: DO NOT RESTART THE PROJECT

The website development has already started.

The original design and development brief is available in:

`READ-ME.txt`

You MUST read this file first and understand the established design specifications.

Do not recreate the project from scratch.

Do not replace the current website with a generic template.

Do not delete existing working pages, components, styles, animation systems, routes, or content without a clear technical justification.

Your primary task is to **update and refine the existing Wasla AI website based on the completed ChatPion source-code audit**.

Preserve all approved visual design decisions.

First inspect the current implementation, identify which requirements are already satisfied, and implement only the necessary changes.

---

# 2. OFFICIAL PROJECT DECISIONS

## Product

Wasla AI is a marketing automation and customer communication SaaS platform.

The underlying application is:

**ChatPion 9.1.1 — Extended License, purchased from Xerone IT.**

The owner has purchased the Extended License only.

No paid ChatPion add-ons have been purchased.

No purchases of paid ChatPion add-ons are planned at this stage.

The commercial platform will rely on:

- Existing licensed ChatPion functionality.
- Included modules.
- Compatible and legitimately available free modules.
- External APIs configured when needed.
- Original custom development where justified.

Do not assume paid add-on functionality is available.

## Markets

Primary: Egypt.

Secondary: Saudi Arabia and other Arabic-speaking markets.

## Languages

Arabic is the default language.

English is fully supported.

Use proper RTL and LTR layouts across all pages.

---

# 3. PRESERVE THE APPROVED DESIGN DIRECTION

The existing visual direction must remain:

**Hostinger-inspired premium SaaS design.**

Reference:
https://www.hostinger.com/

Preserve the proposed Wasla visual tokens:

- Primary Purple: `#673DE6`
- Deep Purple: `#2F1C6A`
- Dark Text: `#1F1346`
- Lavender: `#EDE9FE`
- Light Background: `#F8F8FF`
- White: `#FFFFFF`
- Accent Cyan: `#6FD3FF`

These are Wasla design choices inspired by Hostinger, not an instruction to copy Hostinger's protected assets or exact UI.

Maintain:

- Modern SaaS layouts.
- Rounded cards.
- Large typography.
- Professional whitespace.
- Subtle gradients and ambient glows.
- Scroll reveal animations.
- Staggered card entrances.
- Hover micro-interactions.
- Responsive mobile layouts.
- Premium pricing cards.
- Smooth navigation and page transitions.

Avoid unnecessary redesign.

Use the current component and animation architecture whenever possible.

## Typography

Arabic: Cairo.

English: Inter.

Ensure proper responsive typography.

---

# 4. PRESERVE THE APPROVED MULTI-PAGE STRUCTURE

ChatTarget is the reference for website organization, not for copying its code or visual assets.

Reference:
https://chattarget.com/

The existing website must continue to include:

1. Home — الرئيسية.
2. About Us — من نحن.
3. Features & Services — الخدمات والمميزات.
4. Pricing — الأسعار والباقات.
5. Tutorials — الشروحات.
6. Contact Us — اتصل بنا.

Supporting pages:

- FAQ.
- Privacy Policy.
- Terms & Conditions.
- Refund & Cancellation Policy.
- 404 Page.

Preserve the existing working routes, language switcher, shared header, footer, and navigation.

Do not convert the website into a single-page landing page.

---

# 5. CHATPION AUDIT — AUTHORITATIVE FACTS

The local ChatPion source-code audit identified:

- ChatPion version: 9.1.1.
- Framework: CodeIgniter 3.1.5.
- 223 audited canonical capabilities.
- 150 implemented in source code.
- 34 partially implemented.
- 8 capabilities represented by physically present modules.
- 9 capabilities classified as ADDON_NOT_FOUND.
- 3 integration stubs only.
- 18 capabilities not found.
- 1 undetermined capability.

The separate zero-paid-add-ons strategy classified:

- 37 CORE_AVAILABLE.
- 114 CORE_REQUIRES_SETUP.
- 4 FREE_ADDON_OPTION.
- 49 CUSTOM_DEVELOPMENT.
- 0 PAID_ADDON_ONLY in the feature-path classification.
- 19 NOT_FEASIBLE_NOW.

These numbers are internal engineering findings, NOT marketing statistics.

**Do not publish these counts on the public website.**

Most importantly:

**No feature has been verified operational through runtime testing yet.**

Source-code presence must not be interpreted as production readiness.

---

# 6. USE THE AUDIT REPORTS

If the following documents are available in the website workspace, read them before changing product content:

`docs/chatpion-audit/01-project-architecture.md`

`docs/chatpion-audit/02-core-features.md`

`docs/chatpion-audit/03-addons-inventory.md`

`docs/chatpion-audit/04-integrations-and-apis.md`

`docs/chatpion-audit/05-ai-and-whatsapp-audit.md`

`docs/chatpion-audit/06-saas-white-label-audit.md`

`docs/chatpion-audit/07-security-and-readiness.md`

`docs/chatpion-audit/08-master-feature-matrix.md`

`docs/chatpion-audit/09-wasla-marketing-features.md`

`docs/chatpion-audit/10-development-gap-analysis.md`

`docs/chatpion-audit/11-executive-summary.md`

`docs/chatpion-audit/13-zero-paid-addons-strategy.md`

If any report is missing, do not invent its contents.

Use the existing verified audit summaries available in this prompt, and explicitly flag missing evidence.

The source-code audit takes precedence over the vendor's general product marketing claims when describing the locally purchased version.

---

# 7. PRODUCT FEATURES — UPDATED CONTENT STRATEGY

Organize the website around the following product groups.

These are implementation candidates, NOT automatically verified live features.

## Group A — Messenger Chatbot

Source-code capabilities include:

- Facebook Messenger chatbot.
- Keyword-based replies.
- Exact and partial matching.
- Text responses.
- Image, audio, and video responses.
- File attachments.
- Quick replies.
- Postback buttons.
- Persistent menus.
- Conversation templates.
- Subscriber information handling.

Marketing positioning after runtime verification:

Arabic:

**أتمت محادثات Messenger بسهولة**

English:

**Automate Your Messenger Conversations**

Explain how businesses can configure replies and conversation workflows.

Do not claim autonomous AI-driven decision-making.

## Group B — Visual Flow Builder

A Visual Flow Builder module exists in the local source.

Module version: 1.6.9.

The source contains flow creation, editing, and execution-related functions.

However, module registration, activation, permissions, and runtime behavior require verification.

Prepare a visually attractive feature section with:

- Workflow diagram.
- Connected message nodes.
- Trigger examples.
- Buttons and branching illustrations.

Do not claim every advanced flow capability is included.

Conditional Reply, advanced Custom Fields, and other paid add-on functionality must remain separate.

## Group C — Instagram Automation

Modules and integration code exist for:

- Instagram DM bot.
- Instagram comment-related automation.
- Instagram publishing.
- Scheduled Instagram content.

The actual functionality depends on supported Meta APIs, account types, permissions, module activation, and successful testing.

Do not claim support for every Instagram account type or every post format.

## Group D — Comment Automation

The application includes code for:

- Automatic comment replies.
- Private reply workflows.
- Keyword filtering.
- Reply templates.
- Comment-related campaign functionality.

Dark Posts and advertising-specific automation remain unverified.

Avoid advertising unsupported ad comment scenarios.

## Group E — Live Chat

Code supports Messenger and Instagram-related live chat functionality.

Potential interface features include:

- Conversation history.
- Subscriber details.
- Labels.
- Conversation management.
- Unread messages.

Do not claim a unified omnichannel inbox.

Do not display WhatsApp as part of the supported live chat channels.

## Group F — Social Publishing

Code includes functionality for:

- Facebook publishing.
- Instagram publishing.
- Content scheduling.
- RSS-related automated publishing.
- Multiple publishing formats.
- Publishing reports.

External platform availability and Cron execution remain unverified.

## Group G — SMS Marketing

Source contains SMS campaign and provider integration logic.

Actual SMS delivery requires external provider configuration.

Do not suggest SMS messages are free or included without limits.

Avoid claims about guaranteed delivery or unlimited sending.

## Group H — Email Marketing

Source contains:

- Email sending and campaign management.
- SMTP-related configuration.
- Third-party email service integrations.
- Scheduling and reporting logic.

External provider compatibility, deliverability, and consent handling require verification.

## Group I — E-commerce

Source contains implementations for:

- Store management.
- Product catalog.
- Shopping cart and order management.
- Browser-based stores.
- QR-based ordering scenarios.
- Cash on Delivery and manual payment options.
- Various payment integration paths.

Do not claim every payment gateway works in Egypt or Saudi Arabia.

Do not claim WooCommerce advanced integration, digital-product delivery, or product variation functionality is fully available without verification.

## Group J — Analytics

Prepare content around:

- Subscriber statistics.
- Engagement indicators.
- Campaign status.
- Publishing reports.
- Store and order metrics.

Do not use fabricated performance numbers.

Do not claim real-time AI analytics or cross-channel revenue attribution without evidence.

---

# 8. AI INTEGRATION — IMPORTANT UPDATE

The source-code audit confirmed an AI Reply module:

`application/modules/ai_reply/`

The code includes an OpenAI adapter and AI-related hooks in conversation and comment automation flows.

However, the implementation uses legacy model identifiers and API routing logic.

The audit also identified:

- Limited conversational context.
- No complete conversation memory.
- No demonstrated RAG document retrieval.
- No independent AI Agents.
- No complete per-tenant token accounting.
- No proven AI cost management system.
- No demonstrated advanced knowledge-base training.

## Website Instruction

Keep the Wasla AI brand name.

The website may explain the long-term AI direction at a product-strategy level.

However:

- Do not advertise AI Agents as an available feature.
- Do not advertise AI knowledge-base training as available.
- Do not advertise intelligent omnichannel autonomous customer support.
- Do not imply the existing OpenAI integration is production-ready.

Create an optional AI feature data entry with a status of UNDER_REVIEW or PLANNED.

Do not show it as available in pricing tiers.

Keep the AI feature section hidden from public-facing capability claims until approved.

---

# 9. WHATSAPP — NOT AVAILABLE AS A COMPLETE PLATFORM

The audit did NOT find a complete WhatsApp Business Cloud API implementation.

The local application does not currently demonstrate:

- WhatsApp chatbot.
- WhatsApp Business account onboarding.
- WhatsApp message inbox.
- WhatsApp bulk campaigns.
- WhatsApp template management.
- WhatsApp automation workflows.

Some legacy references and order-related WhatsApp functionality do not establish complete WhatsApp platform integration.

Therefore:

**Do not present WhatsApp as an available communication channel in Wasla AI.**

Remove or hide WhatsApp feature badges, integrations, pricing inclusions, and chatbot examples unless they are explicitly marked as conceptual future functionality in a non-sales internal roadmap.

Do not remove the possibility of integrating WhatsApp in a future release.

---

# 10. PAID ADD-ONS — NOT OWNED

Do not claim the platform currently includes the following advanced functionality merely because the base source contains hooks:

- Complete advanced Team Member Manager.
- Advanced WooCommerce integration.
- WooCommerce abandoned cart recovery.
- Advanced Conditional Reply add-on.
- Advanced User Input and Custom Fields add-on.
- Google Sheets integration.
- Google Contacts integration.
- HTTP API Integration add-on.
- Email/SMS Sequence add-on.
- Advanced affiliate management.
- Advanced Flow Builder Insights.

Some related core functions may be present.

Only advertise individually proven capabilities, not the full add-on package.

Do not recommend purchasing additional commercial modules in the website implementation.

---

# 11. HOMEPAGE CONTENT UPDATE

Preserve the existing homepage design.

Refine the messaging to focus on the actual strongest ChatPion capabilities.

## Updated Arabic Hero

**وصلة ذكية بينك وبين عملائك**

**نظّم محادثات العملاء، وأتمت الردود والتعليقات، وأدر أدواتك التسويقية من مكان واحد.**

Primary CTA:

**اكتشف المميزات**

Secondary CTA:

**تواصل معنا**

## Updated English Hero

**Smart Connections. Smarter Growth.**

**Organize customer conversations, automate replies and comments, and manage your marketing tools from one place.**

Primary CTA:

**Explore Features**

Secondary CTA:

**Contact Us**

The primary CTA should navigate to the Features page.

Do not route users to a non-functional registration system.

Once a secure, tested application is available, the primary CTA can be updated to Get Started.

## Homepage Feature Groups

Use these categories:

1. Chatbots & Automated Replies.
2. Comment Automation.
3. Messenger & Instagram Conversations.
4. Social Publishing.
5. SMS & Email Marketing.
6. E-commerce Tools.
7. Reports & Analytics.

Show carefully written descriptions of what each category is designed to do.

Until runtime verification, do not make unsupported claims about active availability.

Use an internal feature-status data model, and only publicly display definitive availability claims after approval.

---

# 12. FEATURES PAGE UPDATE

Make the Features page the main product discovery experience.

Include:

- Introductory hero.
- Product category navigation.
- Feature cards.
- Detailed feature spotlight sections.
- How it works illustrations.
- Use-case examples.
- Related tutorials.
- Contact CTA.

Each feature must have structured fields:

- id.
- category.
- title_ar.
- title_en.
- description_ar.
- description_en.
- customer_benefit_ar.
- customer_benefit_en.
- icon.
- image.
- availability_status.
- source_evidence.
- runtime_verified.
- external_dependencies.
- requires_paid_addon.
- public_visibility.

Availability values:

- SOURCE_CONFIRMED.
- REQUIRES_SETUP.
- REQUIRES_RUNTIME_TEST.
- PLANNED.
- UNAVAILABLE.

The public UI should never convert SOURCE_CONFIRMED into a claim of VERIFIED_OPERATIONAL.

For unverified features, use cautious descriptions and avoid purchase promises.

---

# 13. PRICING PAGE UPDATE

Keep the existing premium Hostinger-inspired pricing design.

Maintain provisional plans:

- Starter.
- Business.
- Agency.

Do not assign invented:

- Prices.
- Message limits.
- Account limits.
- Bot limits.
- AI credits.
- Team seats.
- External integration allowances.
- Free trials.
- Annual discounts.

Until pricing is approved, show:

Arabic: **الأسعار والباقات قيد التجهيز**

English: **Plans and Pricing Coming Soon**

Offer a working Contact Sales action.

Pricing must eventually come from a centralized configuration.

Any interactive monthly/yearly switch must be driven by real pricing data; otherwise hide or disable it rather than creating misleading simulated pricing.

Do not include AI Agents, WhatsApp automation, advanced team management, or paid add-ons in any package.

---

# 14. TUTORIALS PAGE UPDATE

The tutorials page should be ready to become Wasla's main educational resource.

Prepare categories for:

- Getting Started.
- Connecting Facebook.
- Connecting Instagram.
- Messenger Chatbot.
- Visual Flow Builder.
- Comment Automation.
- Social Publishing.
- Live Chat.
- Email and SMS Marketing.
- E-commerce.
- Account and Subscription Management.

The design should support:

- Search.
- Category filtering.
- Video cards.
- Tutorial details.
- Related lessons.
- Arabic and English text.
- Embedded videos when genuine URLs exist.

Do not invent tutorial videos or their duration.

Use empty states or unpublished content records until real lessons are provided.

---

# 15. ABOUT AND CONTACT PAGES

Keep the original design.

## About Us

Position Wasla as a developing SaaS platform designed to help Arabic-speaking businesses organize marketing and customer communications.

Do not invent:

- Years of operation.
- Customer counts.
- Company headquarters.
- Employees.
- Awards.
- Partnerships.
- Market share.

## Contact Us

Create a real frontend form.

Use a secure integration when a supported backend or email service is configured.

If no submission backend exists, do not fake successful form submissions.

Provide functional validation and explicit setup requirements.

Do not display invented addresses, phone numbers, or email addresses.

---

# 16. SECURITY AND PRODUCT READINESS

The code audit identified critical concerns in the ChatPion application, including:

- Weak MD5 password hashing.
- Cron API authentication bypass in the inspected code path.
- Potential tenant data isolation problems.
- Potential public real-time messaging channel exposure.
- Incomplete or unverified database installation.
- TLS, CSRF, webhook verification, and production hardening issues.

These findings concern the ChatPion backend.

Do not attempt to repair the ChatPion PHP application from within the marketing website project.

Do not integrate customer accounts or paid subscriptions with the ChatPion application before the backend remediation and runtime testing are completed.

Do not claim the platform has passed security audits, compliance certifications, or penetration tests.

The marketing website must implement its own appropriate security and accessibility best practices.

---

# 17. SCREENSHOTS AND VISUAL ASSETS

The actual ChatPion interface has not yet been verified through runtime testing.

Until screenshots are provided, use high-quality original conceptual illustrations of:

- Chatbot flow builder.
- Conversation inbox.
- Comment automation workflow.
- Publishing calendar.
- Marketing campaign manager.
- E-commerce dashboard.
- Analytics charts.

Do not present invented UI as an exact screenshot from the live product.

Avoid fabricated customer statistics.

Keep illustrations independent from protected Hostinger or ChatTarget assets.

When actual Wasla screenshots become available, allow replacing conceptual illustrations without restructuring the page.

---

# 18. IMPLEMENTATION METHOD

Perform the work incrementally.

## Step 1 — Inspect Existing Website

Read the original `READ-ME.txt`.

Inspect current routes, pages, components, CSS, localization, assets, and animation implementation.

Identify completed and incomplete requirements.

## Step 2 — Create a Gap Report

Create:

`docs/website-audit-update.md`

Document:

- Existing pages.
- Missing pages.
- Existing reusable components.
- Features or integrations with inaccurate claims.
- Fake pricing or statistics requiring removal.
- Broken navigation.
- Missing Arabic/English translations.
- Responsive issues.
- Features needing content updates.

## Step 3 — Update Centralized Content

Create or update the existing feature/content data source.

Do not duplicate feature descriptions across multiple pages.

Update hero copy, feature sections, navigation, FAQ, pricing, and tutorials where required.

## Step 4 — Preserve and Refine Design

Reuse existing colors, components, and motion patterns.

Do not make a wholesale design change unless required to fix a real issue.

## Step 5 — Validate Website

Verify:

- All primary pages.
- All supporting pages.
- Arabic RTL.
- English LTR.
- Navigation.
- Mobile menu.
- Language switching.
- CTA navigation.
- Pricing placeholders.
- Feature visibility.
- Responsive behavior.
- Forms.
- Accessibility.
- SEO metadata.
- Console and build errors.

If tests or browser tooling are not available, report that limitation instead of claiming successful validation.

---

# 19. DOCUMENTATION

Create:

`docs/wasla-website-implementation-status.md`

Include:

- What existed before this update.
- What was changed.
- What remains incomplete.
- Pages implemented.
- Components created or updated.
- Feature claims corrected.
- Tests performed and actual outcomes.
- Files changed.
- Next recommended tasks.

Keep this document current as development progresses.

---

# 20. FINAL INSTRUCTIONS

This is an UPDATE to the existing Wasla AI project, not a new project.

The original prompt remains the design foundation.

The ChatPion audit provides the updated product facts.

Preserve the Hostinger-inspired visual design.

Preserve the ChatTarget-inspired multi-page architecture.

Preserve Arabic-first bilingual support.

Do not invent product capabilities.

Do not purchase paid add-ons.

Do not build unsupported WhatsApp or AI Agent functionality into the marketing claims.

Do not expose customer data or connect to an unverified production backend.

First examine the current implementation, then make only the necessary incremental changes.

**Continue the existing website development and apply these new audit-based requirements without restarting or replacing completed work.**