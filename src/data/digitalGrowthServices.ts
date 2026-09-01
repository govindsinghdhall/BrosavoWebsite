export type DigitalFaq = {
  question: string;
  answer: string;
};

export type DigitalFeature = {
  title: string;
  description: string;
};

export type DigitalPackage = {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
  description: string;
  items: string[];
  cta: string;
};

export type DigitalGrowthService = {
  slug: string;
  name: string;
  shortName: string;
  serviceType: string;
  intent: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  h1Line1: string;
  h1Line2: string;
  intro: string;
  contactCta: string;
  secondaryHref: string;
  secondaryCta: string;
  features: DigitalFeature[];
  audiences: DigitalFeature[];
  process: Array<{ number: string; title: string; description: string }>;
  included: string[];
  discovery: DigitalFeature[];
  packages?: DigitalPackage[];
  faqs: DigitalFaq[];
  hasLocations: boolean;
};

export const DIGITAL_GROWTH_SERVICES: DigitalGrowthService[] = [
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "websites",
    serviceType: "Website Development",
    intent: "website",
    title: "Website Development Company | SEO, AEO & GEO | Brosavo",
    description:
      "Brosavo designs and builds conversion-focused websites with SEO, AEO and GEO so businesses get found in Google, AI answers and local search — then turn traffic into enquiries.",
    keywords: [
      "website development company",
      "website development services",
      "custom website development",
      "SEO website development",
      "AEO website",
      "GEO generative engine optimization",
      "digital marketing agency",
      "website development Gurgaon",
      "Brosavo website development",
    ],
    eyebrow: "Website + search + growth",
    h1Line1: "Websites Built to Win",
    h1Line2: "Google, AI Answers and Enquiries.",
    intro:
      "Brosavo is a software, technology and digital marketing agency. We build fast, conversion-focused websites and pair them with SEO, AEO and GEO so your business is discoverable in search, answer engines and generative results — then we connect every enquiry to follow-up.",
    contactCta: "Get My Website Quote",
    secondaryHref: "/seo",
    secondaryCta: "See SEO, AEO & GEO",
    features: [
      {
        title: "Custom website development",
        description:
          "Brand-led, mobile-first sites for services, products, real estate and SaaS — not a generic template with your logo dropped in.",
      },
      {
        title: "SEO architecture",
        description:
          "Technical SEO, metadata, internal linking, schema and location pages so Google can understand and rank what you offer.",
      },
      {
        title: "AEO — answer engines",
        description:
          "FAQ, entity, and snippet-ready content so ChatGPT, Gemini, Perplexity and Google AI Overviews can cite you as the answer.",
      },
      {
        title: "GEO — generative search",
        description:
          "Structured, source-worthy pages designed to appear in AI-generated summaries, not only classic blue-link results.",
      },
      {
        title: "Conversion and lead capture",
        description:
          "Clear journeys, forms, WhatsApp and CRM-ready enquiries so paid and organic traffic does not leak.",
      },
      {
        title: "Analytics and iteration",
        description:
          "Measurement, landing-page variants and performance work so Google Ads and organic traffic keep improving after launch.",
      },
    ],
    audiences: [
      {
        title: "Local and service businesses",
        description:
          "Clinics, consultants, agencies and operators who need a credible site plus local SEO that actually generates calls.",
      },
      {
        title: "Product and SaaS companies",
        description:
          "Product marketing sites, documentation-ready architecture and conversion paths from demo to pipeline.",
      },
      {
        title: "Real estate and property brands",
        description:
          "Listing-ready websites that connect to Brosavo CRM, WhatsApp and location search demand.",
      },
      {
        title: "Growing companies running ads",
        description:
          "Landing pages and site speed built for Google Ads Quality Score, message match and measurable cost per lead.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discover",
        description:
          "We map offer, audience, keywords, competitors, and whether traffic will come from ads, search, AI answers or all three.",
      },
      {
        number: "02",
        title: "Architect",
        description:
          "Information architecture, SEO/AEO/GEO page plan, conversion paths and schema before pixels are pushed.",
      },
      {
        number: "03",
        title: "Design & build",
        description:
          "UI, development, Core Web Vitals, CMS and integrations — production-ready, not a slideshow.",
      },
      {
        number: "04",
        title: "Launch & measure",
        description:
          "Indexing, analytics, ads landing QA, Search Console and a 90-day visibility plan.",
      },
    ],
    included: [
      "Strategy and information architecture",
      "UI/UX design",
      "Custom website development",
      "Mobile-first responsive build",
      "Technical SEO setup",
      "Schema / structured data",
      "AEO FAQ and entity content",
      "GEO-ready page structure",
      "Lead forms and WhatsApp",
      "Analytics and conversion tracking",
      "Performance and Core Web Vitals",
      "Launch, sitemap and Search Console",
    ],
    discovery: [
      {
        title: "SEO",
        description:
          "Search engine optimization: crawlability, intent mapping, on-page, local and content that ranks in classic Google results.",
      },
      {
        title: "AEO",
        description:
          "Answer engine optimization: concise, cited, FAQ and entity content for AI Overviews, voice and chat-based answers.",
      },
      {
        title: "GEO",
        description:
          "Generative engine optimization: source-quality pages models prefer when they synthesize answers from the web.",
      },
    ],
    packages: [
      {
        name: "Professional",
        price: "₹45,000+",
        description: "For businesses that need a conversion-ready website with a solid search foundation.",
        items: [
          "Custom multi-page website",
          "Mobile responsive",
          "Basic SEO + schema",
          "Contact and WhatsApp capture",
          "Analytics setup",
          "Performance pass",
        ],
        cta: "Start Professional",
      },
      {
        name: "Growth",
        price: "₹95,000+",
        popular: true,
        description: "For companies using Google Ads and organic search together.",
        items: [
          "Everything in Professional",
          "SEO + AEO content architecture",
          "Location or service page set",
          "Ads landing-page QA",
          "CRM / enquiry routing",
          "90-day visibility plan",
        ],
        cta: "Build Growth Site",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For multi-market brands, large catalogues and international SEO.",
        items: [
          "Unlimited page architecture",
          "International SEO / hreflang",
          "Advanced AEO + GEO programme",
          "Integrations and automation",
          "Ongoing retainers",
          "Dedicated delivery",
        ],
        cta: "Request a Quote",
      },
    ],
    faqs: [
      {
        question: "What does Brosavo include in website development?",
        answer:
          "Design, development, technical SEO, conversion paths, analytics and the option to add AEO, GEO, location pages and Google Ads landing pages. We are a technology company, not only a design studio.",
      },
      {
        question: "Will the website be ready for Google Ads?",
        answer:
          "Yes. We build message-matched landing experiences, fast load times, clear CTAs and conversion tracking so ad traffic can be measured and improved.",
      },
      {
        question: "What is the difference between SEO, AEO and GEO?",
        answer:
          "SEO helps you rank in traditional search results. AEO helps answer engines and AI overviews use your content as the direct answer. GEO helps generative systems cite and summarise your pages when they compose responses.",
      },
      {
        question: "Do you build websites for cities like Gurgaon, Delhi and Toronto?",
        answer:
          "Yes. We maintain country and city pages for website development, SEO, AEO, GEO and digital marketing across India, Canada, the United States, the United Kingdom and Australia.",
      },
      {
        question: "Can you connect the website to a CRM?",
        answer:
          "Yes. Enquiries can route into Brosavo Real Estate CRM or your existing CRM, plus WhatsApp and email notifications.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "Most professional sites launch in 3–6 weeks depending on content, integrations and page count. Growth and enterprise programmes include staged SEO and ads work after launch.",
      },
    ],
    hasLocations: true,
  },
  {
    slug: "seo",
    name: "SEO",
    shortName: "SEO",
    serviceType: "Search Engine Optimization",
    intent: "seo",
    title: "SEO Services | Technical, On-Page & Local SEO | Brosavo",
    description:
      "Brosavo SEO services cover technical SEO, content architecture, local SEO and measurement so your website ranks for the searches that create customers.",
    keywords: [
      "SEO services",
      "SEO company",
      "technical SEO",
      "local SEO",
      "SEO agency Gurgaon",
      "search engine optimization",
    ],
    eyebrow: "Search engine optimization",
    h1Line1: "SEO That Maps Intent",
    h1Line2: "To Pages That Convert.",
    intro:
      "We treat SEO as an engineering and content system: crawl health, intent-matched pages, internal links, local presence and reporting — not a monthly keyword report with no site changes.",
    contactCta: "Get an SEO Plan",
    secondaryHref: "/website-development",
    secondaryCta: "Website Development",
    features: [
      {
        title: "Technical SEO",
        description:
          "Indexation, Core Web Vitals, canonicals, sitemaps, robots and structured data.",
      },
      {
        title: "On-page and IA",
        description:
          "Service, location and supporting pages built around how people actually search.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile alignment, city pages and NAP consistency for multi-location brands.",
      },
      {
        title: "Content that ranks",
        description:
          "Briefs and pages designed to win commercial and informational queries without thin duplicates.",
      },
      {
        title: "Measurement",
        description:
          "Search Console, analytics and lead attribution so SEO is judged on enquiries, not vanity traffic.",
      },
      {
        title: "AEO & GEO overlay",
        description:
          "The same programme prepares pages for AI Overviews and generative citations.",
      },
    ],
    audiences: [
      {
        title: "Companies with a site that does not rank",
        description:
          "Fix architecture, speed and content gaps before spending more on ads.",
      },
      {
        title: "Multi-city service businesses",
        description:
          "Location SEO without doorway-page spam.",
      },
      {
        title: "Product companies",
        description:
          "Category, comparison and documentation SEO that supports the funnel.",
      },
      {
        title: "In-house teams",
        description:
          "Brosavo as the technical SEO and IA partner next to your marketers.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Audit",
        description: "Technical, content, competitors and conversion gaps.",
      },
      {
        number: "02",
        title: "Roadmap",
        description: "Prioritised page and fix list tied to commercial keywords.",
      },
      {
        number: "03",
        title: "Build",
        description: "Ship pages, schema, internal links and performance work.",
      },
      {
        number: "04",
        title: "Compound",
        description: "Monthly iteration from Search Console and lead data.",
      },
    ],
    included: [
      "Technical SEO audit",
      "Keyword and intent map",
      "On-page implementation",
      "Schema markup",
      "Local / location architecture",
      "Internal linking",
      "Content briefs or production",
      "Search Console reporting",
    ],
    discovery: [
      {
        title: "Classic SEO",
        description: "Rank and earn clicks in Google search results.",
      },
      {
        title: "AEO companion",
        description: "Answer-shaped FAQs and entities for AI Overviews.",
      },
      {
        title: "GEO companion",
        description: "Cite-worthy sources for generative engines.",
      },
    ],
    faqs: [
      {
        question: "How is Brosavo SEO different from a typical agency?",
        answer:
          "We are a software and website engineering company. We can change the site, schema and IA ourselves instead of sending a PDF of recommendations.",
      },
      {
        question: "Do you offer local SEO?",
        answer:
          "Yes. City and country pages, Google Business Profile guidance and local landing pages are part of the programme.",
      },
      {
        question: "How long until SEO results?",
        answer:
          "Technical wins can appear in weeks. Competitive commercial terms usually need 3–6 months of consistent shipping.",
      },
    ],
    hasLocations: true,
  },
  {
    slug: "aeo",
    name: "AEO",
    shortName: "AEO",
    serviceType: "Answer Engine Optimization",
    intent: "aeo",
    title: "AEO Services | Answer Engine Optimization | Brosavo",
    description:
      "Answer Engine Optimization from Brosavo: structure your website so Google AI Overviews, ChatGPT, Gemini, Perplexity and voice assistants can use you as the answer.",
    keywords: [
      "AEO",
      "answer engine optimization",
      "AI Overviews SEO",
      "ChatGPT optimization",
      "AEO agency",
    ],
    eyebrow: "Answer engine optimization",
    h1Line1: "Become the Answer,",
    h1Line2: "Not Only a Blue Link.",
    intro:
      "AEO prepares your content for how people now ask questions: AI Overviews, chat assistants and voice. We build entity-clear, FAQ-rich, citeable pages on top of a technically sound website.",
    contactCta: "Plan AEO for My Site",
    secondaryHref: "/geo",
    secondaryCta: "Explore GEO",
    features: [
      {
        title: "Question architecture",
        description:
          "Map People Also Ask, voice queries and sales questions to dedicated, extractable answers.",
      },
      {
        title: "Entity clarity",
        description:
          "Organization, product, service and place markup so models know who you are.",
      },
      {
        title: "FAQ and HowTo schema",
        description:
          "Structured answers that machines can lift without guessing.",
      },
      {
        title: "Citation hygiene",
        description:
          "Original, specific, well-sourced copy that assistants prefer over thin affiliate text.",
      },
      {
        title: "Website + AEO together",
        description:
          "We implement on the live site — headings, snippets, internal links — not a disconnected content doc.",
      },
      {
        title: "Measurement",
        description:
          "Track branded queries, AI-referred traffic and assisted conversions as reporting matures.",
      },
    ],
    audiences: [
      {
        title: "Brands losing clicks to AI Overviews",
        description:
          "Keep visibility when Google answers on the results page.",
      },
      {
        title: "Expert businesses",
        description:
          "Law, health-adjacent education, B2B, real estate — topics models need trustworthy sources for.",
      },
      {
        title: "Product companies",
        description:
          "Make pricing, comparisons and definitions the default assistant answer.",
      },
      {
        title: "Agencies partnering with Brosavo",
        description:
          "We handle the engineering layer of AEO.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Question inventory",
        description: "Collect real customer and search questions.",
      },
      {
        number: "02",
        title: "Answer design",
        description: "Write extractable answers with schema and sources.",
      },
      {
        number: "03",
        title: "Implement",
        description: "Ship on-site modules, FAQs and entity pages.",
      },
      {
        number: "04",
        title: "Refresh",
        description: "Update answers as products and SERPs change.",
      },
    ],
    included: [
      "AEO audit",
      "Question map",
      "FAQ / answer modules",
      "Entity schema",
      "On-page implementation",
      "Internal answer linking",
    ],
    discovery: [
      {
        title: "AEO",
        description: "Win the answer box and assistant citation.",
      },
      {
        title: "SEO",
        description: "Still required for crawl and authority.",
      },
      {
        title: "GEO",
        description: "Win inclusion in generated summaries.",
      },
    ],
    faqs: [
      {
        question: "Is AEO different from SEO?",
        answer:
          "AEO sits on SEO. You still need a crawlable, authoritative site. AEO adds answer-shaped content, entities and schema so AI systems can quote you.",
      },
      {
        question: "Which engines does AEO target?",
        answer:
          "Google AI Overviews, Bing Copilot, ChatGPT browsing, Gemini, Perplexity and voice assistants — they all prefer clear, structured, attributable text.",
      },
    ],
    hasLocations: true,
  },
  {
    slug: "geo",
    name: "GEO",
    shortName: "GEO",
    serviceType: "Generative Engine Optimization",
    intent: "geo",
    title: "GEO Services | Generative Engine Optimization | Brosavo",
    description:
      "Generative Engine Optimization from Brosavo: make your website a preferred source when AI systems generate answers, shopping advice and local recommendations.",
    keywords: [
      "GEO",
      "generative engine optimization",
      "generative SEO",
      "AI search optimization",
      "GEO agency",
    ],
    eyebrow: "Generative engine optimization",
    h1Line1: "Be the Source AI",
    h1Line2: "Uses When It Writes the Answer.",
    intro:
      "GEO is how you stay visible when search is generated, not listed. We strengthen originality, structure, corroboration and freshness so models have a reason to include Brosavo-built pages in synthesised answers.",
    contactCta: "Start a GEO Programme",
    secondaryHref: "/aeo",
    secondaryCta: "See AEO",
    features: [
      {
        title: "Source quality",
        description:
          "Original research, specifics, and first-party proof — not spun blog content.",
      },
      {
        title: "Machine-readable structure",
        description:
          "Clean headings, tables, FAQs, schema and consistent entities.",
      },
      {
        title: "Corroboration",
        description:
          "Internal links, citations and brand mentions that help models trust the page.",
      },
      {
        title: "Freshness loops",
        description:
          "Update cadences for pricing, inventory and definitions generative systems cache.",
      },
      {
        title: "Multi-engine coverage",
        description:
          "Google AI, ChatGPT, Gemini, Perplexity and vertical copilots.",
      },
      {
        title: "Website engineering",
        description:
          "GEO fails on slow, blocked or JavaScript-only content. We fix the site.",
      },
    ],
    audiences: [
      {
        title: "Category leaders",
        description:
          "Protect share of answer as generative search grows.",
      },
      {
        title: "Publishers and educators",
        description:
          "Make explainers the default training-adjacent source.",
      },
      {
        title: "Local brands",
        description:
          "Appear when models recommend a provider in a city.",
      },
      {
        title: "Ecommerce and catalogues",
        description:
          "Structured product data generative shopping can use.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Source audit",
        description: "See if models can parse, trust and quote you today.",
      },
      {
        number: "02",
        title: "Corpus plan",
        description: "Pages and proof assets generative systems need.",
      },
      {
        number: "03",
        title: "Ship structure",
        description: "Implement GEO patterns on the production site.",
      },
      {
        number: "04",
        title: "Monitor inclusion",
        description: "Sample prompts and refine the corpus.",
      },
    ],
    included: [
      "GEO audit",
      "Source-quality guidelines",
      "Structured page templates",
      "Schema and entity graph",
      "Prompt sampling reviews",
      "Refresh calendar",
    ],
    discovery: [
      {
        title: "GEO",
        description: "Inclusion in generated answers.",
      },
      {
        title: "AEO",
        description: "Direct Q&A extraction.",
      },
      {
        title: "SEO",
        description: "Classic ranking and crawl foundation.",
      },
    ],
    faqs: [
      {
        question: "Is GEO just another name for SEO?",
        answer:
          "No. SEO optimises for ranked lists. GEO optimises for being used as a source inside generated text. You need both.",
      },
      {
        question: "Can you guarantee ChatGPT will mention us?",
        answer:
          "No ethical provider can. We improve the odds by making your site the clearest, most current, most structured source in your category.",
      },
    ],
    hasLocations: true,
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "digital marketing",
    serviceType: "Digital Marketing",
    intent: "digital-marketing",
    title: "Digital Marketing Agency | Web, SEO, AEO, GEO & Ads | Brosavo",
    description:
      "Brosavo digital marketing combines website development, SEO, AEO, GEO, content and Google Ads landing pages so software and service businesses generate qualified demand.",
    keywords: [
      "digital marketing agency",
      "digital marketing services",
      "digital marketing Gurgaon",
      "B2B digital marketing",
    ],
    eyebrow: "Software × marketing",
    h1Line1: "Digital Marketing Built",
    h1Line2: "On a Website That Can Rank.",
    intro:
      "Most agencies rent you traffic. Brosavo builds the website, search architecture and measurement so SEO, AEO, GEO and ads share one conversion system.",
    contactCta: "Plan My Growth Stack",
    secondaryHref: "/website-development",
    secondaryCta: "Website Development",
    features: [
      {
        title: "Website as the hub",
        description: "Every campaign lands on a page we can improve weekly.",
      },
      {
        title: "SEO + AEO + GEO",
        description: "Organic, answers and generative visibility in one roadmap.",
      },
      {
        title: "Google Ads landing pages",
        description: "Message match, speed and conversion tracking for paid search.",
      },
      {
        title: "Content engine",
        description: "Guides and comparison pages that support sales, not vanity traffic.",
      },
      {
        title: "Local presence",
        description: "City pages and GBP-aligned local campaigns.",
      },
      {
        title: "CRM and follow-up",
        description: "Leads into Brosavo CRM, WhatsApp or your stack.",
      },
    ],
    audiences: [
      {
        title: "Founders tired of disconnected vendors",
        description: "One technology partner for site, search and ads landing QA.",
      },
      {
        title: "B2B and SaaS",
        description: "Demand gen that respects a longer sales cycle.",
      },
      {
        title: "Local multi-city brands",
        description: "Consistent local SEO plus ads.",
      },
      {
        title: "Real estate operators",
        description: "Property sites plus Brosavo CRM.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Stack audit",
        description: "Site, tracking, ads, search and CRM gaps.",
      },
      {
        number: "02",
        title: "Channel plan",
        description: "Where website, SEO, AEO, GEO and ads should share budget.",
      },
      {
        number: "03",
        title: "Build",
        description: "Pages, tracking and campaigns on a working site.",
      },
      {
        number: "04",
        title: "Operate",
        description: "Weekly creative and monthly compounding SEO.",
      },
    ],
    included: [
      "Channel strategy",
      "Website and landing QA",
      "SEO / AEO / GEO roadmap",
      "Content calendar",
      "Ads landing support",
      "Analytics and CRM routing",
    ],
    discovery: [
      {
        title: "Paid",
        description: "Google Ads on high-intent landing pages.",
      },
      {
        title: "Organic",
        description: "SEO that the site can actually rank.",
      },
      {
        title: "AI search",
        description: "AEO and GEO for answer and generative engines.",
      },
    ],
    faqs: [
      {
        question: "Does Brosavo run Google Ads accounts?",
        answer:
          "We build and optimize the website and landing pages ads need, and can support campaign structure. Media buying can be in-house or with a media partner on our stack.",
      },
      {
        question: "Is digital marketing separate from website development?",
        answer:
          "No. At Brosavo they are one system. Marketing without a fast, structured website wastes spend.",
      },
    ],
    hasLocations: true,
  },
];

export const DIGITAL_GROWTH_PILLARS: DigitalGrowthService[] = [
  {
    slug: "website-redesign",
    name: "Website Redesign",
    shortName: "redesign",
    serviceType: "Website Redesign",
    intent: "website-redesign",
    title: "Website Redesign | Conversion & SEO Rebuild | Brosavo",
    description:
      "Rebuild an outdated website into a fast, SEO, AEO and GEO-ready experience without losing the rankings and content that already work.",
    keywords: ["website redesign", "website revamp", "website rebuild"],
    eyebrow: "Rebuild without losing equity",
    h1Line1: "Redesign the Site.",
    h1Line2: "Keep the Demand You Already Earned.",
    intro:
      "We migrate IA, URLs, schema and content with redirects and Core Web Vitals so a redesign is a growth event, not a ranking crash.",
    contactCta: "Plan a Redesign",
    secondaryHref: "/website-development",
    secondaryCta: "New Website",
    features: [
      { title: "UX and conversion rebuild", description: "New journeys, CTAs and proof without random visual restyling." },
      { title: "SEO-safe migration", description: "URL map, 301s, canonicals and index monitoring." },
      { title: "Performance", description: "Modern stack and Core Web Vitals." },
      { title: "AEO/GEO upgrade", description: "Add answer and generative structure while you redesign." },
      { title: "CMS", description: "Editable content your team can ship." },
      { title: "Tracking", description: "Clean analytics after the cutover." },
    ],
    audiences: [
      { title: "Brands on outdated WordPress or builders", description: "Move to a maintainable, fast stack." },
      { title: "Sites that look premium but do not convert", description: "Fix UX and message match." },
      { title: "Companies after a rebrand", description: "Carry SEO equity into the new identity." },
      { title: "Ads accounts with poor landing experience", description: "Raise Quality Score with a real rebuild." },
    ],
    process: [
      { number: "01", title: "Inventory", description: "URLs, rankings, conversions, tech debt." },
      { number: "02", title: "IA", description: "Keep winners, cut thin pages, add missing intent." },
      { number: "03", title: "Rebuild", description: "Design, develop, redirect, schema." },
      { number: "04", title: "Cutover", description: "Launch, monitor, fix crawl issues fast." },
    ],
    included: ["Content inventory", "Redirect map", "New design system", "Development", "SEO QA", "Launch support"],
    discovery: [
      { title: "Preserve", description: "Rankings and backlinks." },
      { title: "Improve", description: "Speed and conversion." },
      { title: "Expand", description: "SEO, AEO and GEO coverage." },
    ],
    faqs: [
      {
        question: "Will a redesign hurt SEO?",
        answer:
          "It can if URLs and content disappear. We plan redirects, parity and monitoring so equity is protected.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    shortName: "landing pages",
    serviceType: "Landing Page Development",
    intent: "landing-page",
    title: "Landing Page Development for Google Ads | Brosavo",
    description:
      "High-converting landing pages for Google Ads and paid social: message match, speed, proof, forms and tracking.",
    keywords: ["landing page development", "Google Ads landing page", "PPC landing page"],
    eyebrow: "Built for paid traffic",
    h1Line1: "Landing Pages That",
    h1Line2: "Pay Back Your Ad Spend.",
    intro:
      "Ad clicks are expensive. We build focused pages with one job: convert the query you paid for — then feed the rest of the site for SEO.",
    contactCta: "Build Ads Landing Pages",
    secondaryHref: "/website-development",
    secondaryCta: "Full Website",
    features: [
      { title: "Message match", description: "Headline and offer match the ad and keyword." },
      { title: "Speed", description: "Lightweight pages for Quality Score." },
      { title: "Proof", description: "Trust, process and FAQs above the fold where needed." },
      { title: "Forms and WhatsApp", description: "Short forms, validation, CRM routing." },
      { title: "Variants", description: "Structure ready for A/B tests." },
      { title: "Tracking", description: "Conversion events you can actually trust." },
    ],
    audiences: [
      { title: "Google Ads advertisers", description: "Stop sending paid traffic to a slow homepage." },
      { title: "Multi-offer businesses", description: "One landing page per campaign." },
      { title: "Real estate teams", description: "Project and locality landing pages." },
      { title: "SaaS", description: "Trial and demo pages with clean events." },
    ],
    process: [
      { number: "01", title: "Offer", description: "Keyword, audience, proof." },
      { number: "02", title: "Wire", description: "Sections that sell without clutter." },
      { number: "03", title: "Build", description: "Fast page, tracking, CRM." },
      { number: "04", title: "Iterate", description: "Creative tests after launch." },
    ],
    included: ["Copy structure", "Design", "Development", "Tracking", "CRM hookup", "QA"],
    discovery: [
      { title: "Paid", description: "Immediate conversion." },
      { title: "SEO", description: "Indexable when it should rank." },
      { title: "Learn", description: "Insights feed the main website." },
    ],
    faqs: [
      {
        question: "Should Google Ads go to the homepage?",
        answer:
          "Almost never. Dedicated landing pages convert better and make bidding decisions clearer.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "ecommerce-website-development",
    name: "Ecommerce Website Development",
    shortName: "ecommerce",
    serviceType: "Ecommerce Website Development",
    intent: "ecommerce",
    title: "Ecommerce Website Development | Brosavo",
    description:
      "Ecommerce websites with product schema, performance, SEO and conversion paths for growing catalogues.",
    keywords: ["ecommerce website development", "online store development"],
    eyebrow: "Commerce that can rank",
    h1Line1: "Stores Built for",
    h1Line2: "Search, Speed and Checkout.",
    intro:
      "We build ecommerce experiences with product data, category SEO, AEO-ready FAQs and tracking — not just a theme.",
    contactCta: "Plan an Ecommerce Site",
    secondaryHref: "/seo",
    secondaryCta: "Ecommerce SEO",
    features: [
      { title: "Catalogue architecture", description: "Categories, filters and indexable product URLs." },
      { title: "Product schema", description: "Rich results and generative shopping readiness." },
      { title: "Checkout UX", description: "Fewer drops, clearer trust." },
      { title: "Performance", description: "Image and script discipline on listing pages." },
      { title: "SEO / AEO", description: "Guides and FAQs that support SKUs." },
      { title: "Integrations", description: "Payments, ERP, CRM as needed." },
    ],
    audiences: [
      { title: "DTC brands", description: "Own the storefront and the search story." },
      { title: "B2B catalogues", description: "Account and quote flows plus SEO." },
      { title: "Multi-warehouse", description: "Structured availability content." },
      { title: "Marketplaces moving owned-site", description: "Bring demand in-house." },
    ],
    process: [
      { number: "01", title: "Catalogue", description: "IA and data model." },
      { number: "02", title: "UX", description: "Browse, PDP, checkout." },
      { number: "03", title: "Build", description: "Store, schema, speed." },
      { number: "04", title: "Grow", description: "SEO and ads on PDPs." },
    ],
    included: ["Storefront UX", "Development", "Schema", "Speed", "Analytics", "SEO IA"],
    discovery: [
      { title: "Find", description: "Category and product SEO." },
      { title: "Choose", description: "PDP content and proof." },
      { title: "Buy", description: "Checkout and tracking." },
    ],
    faqs: [
      {
        question: "Which ecommerce stack do you use?",
        answer:
          "We choose based on catalogue size and ops — headless, Shopify, or custom — with SEO as a hard requirement.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    shortName: "local SEO",
    serviceType: "Local SEO",
    intent: "local-seo",
    title: "Local SEO Services | City & Map Pack | Brosavo",
    description:
      "Local SEO for multi-city businesses: Google Business Profile, city pages, citations and conversion-ready location landing pages.",
    keywords: ["local SEO", "Google Business Profile SEO", "city SEO"],
    eyebrow: "Be found nearby",
    h1Line1: "Local SEO for",
    h1Line2: "The Cities You Actually Serve.",
    intro:
      "We build unique city pages, GBP alignment and on-site proof so map and local pack visibility turns into calls — without doorway spam.",
    contactCta: "Get Local SEO",
    secondaryHref: "/seo",
    secondaryCta: "National SEO",
    features: [
      { title: "GBP", description: "Categories, photos, Q&A and review strategy." },
      { title: "City pages", description: "Unique content and service proof per market." },
      { title: "NAP consistency", description: "Citations that match the site." },
      { title: "Location schema", description: "LocalBusiness markup that is honest." },
      { title: "Reviews", description: "Operational process, not fake stars." },
      { title: "Ads synergy", description: "Local landing pages for paid search too." },
    ],
    audiences: [
      { title: "Clinics and professionals", description: "High-intent local queries." },
      { title: "Agencies and contractors", description: "Service-area pages done properly." },
      { title: "Real estate", description: "Locality and city demand." },
      { title: "Multi-office brands", description: "One system, many locations." },
    ],
    process: [
      { number: "01", title: "Markets", description: "Where you can actually serve." },
      { number: "02", title: "Pages", description: "Unique city IA." },
      { number: "03", title: "Profiles", description: "GBP and citations." },
      { number: "04", title: "Reviews", description: "Reputation loop." },
    ],
    included: ["Location IA", "City pages", "GBP guidance", "Schema", "Citation plan", "Reporting"],
    discovery: [
      { title: "Maps", description: "Local pack." },
      { title: "Pages", description: "City SEO." },
      { title: "Ads", description: "Local LP quality." },
    ],
    faqs: [
      {
        question: "Do you create a page for every city?",
        answer:
          "Only where you genuinely operate. Thin city pages hurt more than they help.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "google-ads",
    name: "Google Ads Landing Systems",
    shortName: "Google Ads",
    serviceType: "Google Ads",
    intent: "google-ads",
    title: "Google Ads Website & Landing Systems | Brosavo",
    description:
      "Website and landing-page systems for Google Ads: Quality Score, conversion tracking, message match and post-click CRM.",
    keywords: ["Google Ads landing pages", "PPC website", "Google Ads agency"],
    eyebrow: "Paid search, engineered",
    h1Line1: "Make Google Ads",
    h1Line2: "Land on Pages That Convert.",
    intro:
      "Brosavo builds the on-site half of paid search: fast LPs, tracking, CRM and SEO pages that reduce dependency on ads over time.",
    contactCta: "Fix My Ads Landing",
    secondaryHref: "/landing-page-development",
    secondaryCta: "Landing Pages",
    features: [
      { title: "Account-aware pages", description: "One LP family per campaign theme." },
      { title: "Tracking", description: "Primary conversions you can bid on." },
      { title: "Speed", description: "CWV for Quality Score." },
      { title: "Negative-intent handling", description: "FAQs that reduce junk leads." },
      { title: "CRM", description: "Leads do not die in the inbox." },
      { title: "Organic follow-through", description: "Winning ads inform SEO pages." },
    ],
    audiences: [
      { title: "Advertisers with high CPC", description: "Improve conversion rate before raising bids." },
      { title: "Lead-gen businesses", description: "Qualified form and call tracking." },
      { title: "Ecommerce", description: "Product-level LPs." },
      { title: "Agencies needing a build partner", description: "We ship the pages." },
    ],
    process: [
      { number: "01", title: "Account read", description: "Queries, QS, LPs." },
      { number: "02", title: "Page map", description: "One page per intent cluster." },
      { number: "03", title: "Ship", description: "Build, track, QA." },
      { number: "04", title: "Learn", description: "Feed winners into SEO." },
    ],
    included: ["LP map", "Build", "Tracking", "CRM", "QA", "Iteration plan"],
    discovery: [
      { title: "Click", description: "Ad." },
      { title: "Convert", description: "Landing page." },
      { title: "Compound", description: "SEO from winners." },
    ],
    faqs: [
      {
        question: "Do you manage bids?",
        answer:
          "We specialise in the website and conversion layer. Bid management can be combined or kept with your media buyer.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    shortName: "content",
    serviceType: "Content Marketing",
    intent: "content",
    title: "Content Marketing for SEO, AEO & GEO | Brosavo",
    description:
      "Content systems for rankings, answer engines and generative citations — connected to service pages and CRM, not orphaned blogs.",
    keywords: ["content marketing", "SEO content", "AEO content"],
    eyebrow: "Content that works as infrastructure",
    h1Line1: "Publish Pages That",
    h1Line2: "Rank, Answer and Convert.",
    intro:
      "We plan and produce guides, comparisons and FAQs that internal-link into commercial pages and stay structured for AEO and GEO.",
    contactCta: "Build a Content Engine",
    secondaryHref: "/blog",
    secondaryCta: "Read the Blog",
    features: [
      { title: "Topic clusters", description: "Pillars and supporting posts mapped to money pages." },
      { title: "AEO modules", description: "Extractable answers in every guide." },
      { title: "GEO sources", description: "Original specifics models can cite." },
      { title: "Distribution", description: "On-site first; social is optional." },
      { title: "Refresh", description: "Update winners instead of infinite new URLs." },
      { title: "CMS workflow", description: "Your team can ship after we set the system." },
    ],
    audiences: [
      { title: "B2B", description: "Long-cycle education." },
      { title: "Local experts", description: "City + service content." },
      { title: "SaaS", description: "Comparisons and docs." },
      { title: "Agencies", description: "White-label production with our IA." },
    ],
    process: [
      { number: "01", title: "Cluster", description: "Map to commercial URLs." },
      { number: "02", title: "Brief", description: "Search + answer + generative." },
      { number: "03", title: "Produce", description: "Write, schema, interlink." },
      { number: "04", title: "Refresh", description: "Quarterly winners." },
    ],
    included: ["Cluster map", "Briefs", "Production", "On-page SEO", "Internal links", "Refresh list"],
    discovery: [
      { title: "SEO", description: "Rank." },
      { title: "AEO", description: "Answer." },
      { title: "GEO", description: "Be sourced." },
    ],
    faqs: [
      {
        question: "Do you only write blogs?",
        answer:
          "Blogs are one format. Service pages, FAQs, comparisons and location pages often convert better.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "conversion-rate-optimization",
    name: "Conversion Rate Optimization",
    shortName: "CRO",
    serviceType: "Conversion Rate Optimization",
    intent: "cro",
    title: "CRO for Websites & Ads Landing Pages | Brosavo",
    description:
      "Conversion rate optimization for websites and Google Ads landing pages: research, UX, testing and tracking.",
    keywords: ["CRO", "conversion rate optimization", "landing page CRO"],
    eyebrow: "More leads from the traffic you already have",
    h1Line1: "Improve Conversion",
    h1Line2: "Before You Buy More Clicks.",
    intro:
      "We diagnose friction, rewrite journeys and instrument events so SEO and ads spend produce more qualified enquiries.",
    contactCta: "Start CRO",
    secondaryHref: "/landing-page-development",
    secondaryCta: "Landing Pages",
    features: [
      { title: "Research", description: "Heat, session, form and query data." },
      { title: "UX", description: "Clarity, proof, mobile thumbs." },
      { title: "Testing", description: "Structured experiments when traffic allows." },
      { title: "Forms", description: "Fewer fields, better validation, better routing." },
      { title: "Speed", description: "Slow pages do not convert." },
      { title: "Message match", description: "Ads and SEO snippets must keep the promise." },
    ],
    audiences: [
      { title: "Paid search accounts", description: "Lower CPA via on-site work." },
      { title: "High-traffic SEO sites", description: "Turn rankings into pipeline." },
      { title: "SaaS", description: "Demo and trial funnels." },
      { title: "Lead gen", description: "Call and form quality." },
    ],
    process: [
      { number: "01", title: "Baseline", description: "Funnel and tracking truth." },
      { number: "02", title: "Hypotheses", description: "Ranked by impact." },
      { number: "03", title: "Ship", description: "UX and copy changes." },
      { number: "04", title: "Prove", description: "Holdouts or sequential tests." },
    ],
    included: ["Audit", "UX fixes", "Copy", "Tracking", "Test plan", "Reporting"],
    discovery: [
      { title: "Find leaks", description: "Where users drop." },
      { title: "Fix", description: "UX and speed." },
      { title: "Prove", description: "Measurement." },
    ],
    faqs: [
      {
        question: "Is CRO only A/B testing?",
        answer:
          "No. Many sites need research and obvious UX fixes before they have enough traffic to test.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    shortName: "technical SEO",
    serviceType: "Technical SEO",
    intent: "technical-seo",
    title: "Technical SEO Services | Brosavo",
    description:
      "Technical SEO engineering: indexation, Core Web Vitals, JavaScript SEO, canonicals, sitemaps and structured data.",
    keywords: ["technical SEO", "Core Web Vitals SEO", "JavaScript SEO"],
    eyebrow: "Engineering for search",
    h1Line1: "Fix the Site",
    h1Line2: "Google and AI Have to Crawl.",
    intro:
      "Brosavo engineers implement technical SEO on the production website — not a slide deck your developer never ships.",
    contactCta: "Book a Technical SEO Audit",
    secondaryHref: "/seo",
    secondaryCta: "Full SEO",
    features: [
      { title: "Indexation", description: "Coverage, canonicals, pagination, parameters." },
      { title: "CWV", description: "LCP, INP, CLS as product work." },
      { title: "JS SEO", description: "What the crawler actually sees." },
      { title: "Schema", description: "Valid, honest structured data." },
      { title: "International", description: "hreflang when you truly need it." },
      { title: "Logs & GSC", description: "Debug with evidence." },
    ],
    audiences: [
      { title: "JS-heavy sites", description: "Next.js and SPAs that under-index." },
      { title: "Migrations", description: "Platform moves." },
      { title: "Enterprises", description: "Large URL sets." },
      { title: "Agencies", description: "Implementation partner." },
    ],
    process: [
      { number: "01", title: "Crawl", description: "Evidence first." },
      { number: "02", title: "Prioritise", description: "Index and speed first." },
      { number: "03", title: "Implement", description: "We ship in the repo." },
      { number: "04", title: "Verify", description: "GSC and crawls." },
    ],
    included: ["Audit", "Fix list", "Implementation", "Schema", "CWV", "Verification"],
    discovery: [
      { title: "Crawl", description: "Access." },
      { title: "Render", description: "What bots see." },
      { title: "Rank", description: "Then content can work." },
    ],
    faqs: [
      {
        question: "Can technical SEO alone rank me?",
        answer:
          "It removes blockers. Rankings still need useful, intent-matched pages.",
      },
    ],
    hasLocations: false,
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    shortName: "maintenance",
    serviceType: "Website Maintenance",
    intent: "maintenance",
    title: "Website Maintenance & Growth Retainers | Brosavo",
    description:
      "Website maintenance, SEO iteration, AEO/GEO refreshes and conversion improvements on a monthly retainer.",
    keywords: ["website maintenance", "website retainer", "SEO retainer"],
    eyebrow: "After launch",
    h1Line1: "Keep the Website",
    h1Line2: "Fast, Indexed and Converting.",
    intro:
      "Launch is the start. Retainers cover security, CWV, content refreshes, Search Console and landing-page iteration.",
    contactCta: "Discuss a Retainer",
    secondaryHref: "/website-development",
    secondaryCta: "New Website",
    features: [
      { title: "Uptime and patches", description: "Keep the production site healthy." },
      { title: "SEO hygiene", description: "Index issues, broken links, schema drift." },
      { title: "Content refreshes", description: "AEO/GEO pages stay current." },
      { title: "CRO", description: "Small conversion wins monthly." },
      { title: "Reporting", description: "Leads and search, not vanity." },
      { title: "Backlog", description: "Prioritised engineering tickets." },
    ],
    audiences: [
      { title: "Teams without in-house web eng", description: "We are the web team." },
      { title: "Ads-heavy brands", description: "LP iteration never stops." },
      { title: "Multi-location", description: "City pages stay unique and true." },
      { title: "Regulated copy", description: "Careful, tracked updates." },
    ],
    process: [
      { number: "01", title: "Baseline", description: "Health and KPI snapshot." },
      { number: "02", title: "Cadence", description: "Monthly ship list." },
      { number: "03", title: "Operate", description: "Fixes + growth tasks." },
      { number: "04", title: "Review", description: "Quarterly strategy." },
    ],
    included: ["Monitoring", "Patches", "GSC review", "Content slots", "CRO slots", "Reporting"],
    discovery: [
      { title: "Protect", description: "Uptime and index." },
      { title: "Improve", description: "SEO and CRO." },
      { title: "Expand", description: "New pages when warranted." },
    ],
    faqs: [
      {
        question: "Is maintenance only bug fixes?",
        answer:
          "No. The useful retainers mix reliability with SEO, AEO, GEO and conversion work.",
      },
    ],
    hasLocations: false,
  },
];

const ALL_SERVICES = [...DIGITAL_GROWTH_SERVICES, ...DIGITAL_GROWTH_PILLARS];

export function getDigitalService(slug: string) {
  return ALL_SERVICES.find((service) => service.slug === slug);
}

export function getLocationServices() {
  return DIGITAL_GROWTH_SERVICES.filter((service) => service.hasLocations);
}

export const DIGITAL_GROWTH_ROADMAP = {
  pagesToAddNext: [
    { path: "/web-application-development", purpose: "Capture custom web app / SaaS build intent." },
    { path: "/mobile-app-development", purpose: "Adjacent high-CPC ads intent." },
    { path: "/ui-ux-design", purpose: "Design-only commercial queries." },
    { path: "/branding", purpose: "Brand system + site packages." },
    { path: "/schema-markup-services", purpose: "Specialist AEO/GEO commercial page." },
    { path: "/ai-search-optimization", purpose: "Umbrella for AEO+GEO paid search." },
    { path: "/seo-for-saas", purpose: "Vertical SEO ads." },
    { path: "/seo-for-real-estate", purpose: "Bridge to existing RE pages." },
    { path: "/website-development-for-startups", purpose: "Audience page for ads." },
    { path: "/b2b-website-development", purpose: "Audience page for ads." },
  ],
  blogsToPublish: [
    { slug: "seo-vs-aeo-vs-geo", status: "shipped", purpose: "Define the three discovery layers; internal link hub." },
    { slug: "website-development-cost-india", status: "next", purpose: "Commercial cost query for India ads." },
    { slug: "how-to-build-a-google-ads-landing-page", status: "next", purpose: "Support /landing-page-development." },
    { slug: "technical-seo-checklist-nextjs", status: "next", purpose: "Engineering SEO demand." },
    { slug: "what-is-answer-engine-optimization", status: "next", purpose: "AEO definitional query." },
    { slug: "what-is-generative-engine-optimization", status: "next", purpose: "GEO definitional query." },
    { slug: "local-seo-for-multi-city-businesses", status: "next", purpose: "Support /local-seo." },
    { slug: "website-redesign-seo-migration-checklist", status: "next", purpose: "Support /website-redesign." },
    { slug: "core-web-vitals-for-lead-gen-websites", status: "next", purpose: "CWV + ads Quality Score." },
    { slug: "how-ai-overviews-change-seo-strategy", status: "next", purpose: "Thought leadership for AEO." },
    { slug: "best-website-structure-for-service-businesses", status: "next", purpose: "IA guide linking to hubs." },
    { slug: "ecommerce-seo-vs-service-seo", status: "next", purpose: "Split intent for ecommerce vs services." },
  ],
} as const;
