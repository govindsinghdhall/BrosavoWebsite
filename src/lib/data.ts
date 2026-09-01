export const CONTACT = {
  email: "hello@brosavo.com",

  instagram: {
    handle: "brosavo",
    href: "https://www.instagram.com/brosavo/",
  },

  social: {
    instagram: {
      label: "Instagram",
      handle: "@brosavo",
      href: "https://www.instagram.com/brosavo/",
    },
    facebook: {
      label: "Facebook",
      handle: "@brosavo",
      href: "https://www.facebook.com/brosavo/",
    },
    linkedin: {
      label: "LinkedIn",
      handle: "Brosavo",
      href: "https://www.linkedin.com/company/brosavo/",
    },
    youtube: {
      label: "YouTube",
      handle: "@brosavo",
      href: "https://www.youtube.com/@brosavo",
    },
    x: {
      label: "X",
      handle: "@brosavo",
      href: "https://x.com/hellobrosavo",
    },
    github: {
      label: "GitHub",
      handle: "brosavo",
      href: "https://github.com/brosavotechnologies",
    },
    pinterest: {
      label: "Pinterest",
      handle: "brosavo",
      href: "https://in.pinterest.com/brosavo/",
    },
    vimeo: {
      label: "Vimeo",
      handle: "brosavo",
      href: "https://vimeo.com/brosavo",
    },
    sortlist: {
      label: "Sortlist",
      handle: "brosavo",
      href: "https://app.sortlist.com/brosavo/",
    },
  },

  phones: [
    {
      label: "Canada",
      number: "+1 236 818 4654",
      href: "tel:+12368184654",
      flag: "🇨🇦",
    },
    {
      label: "India",
      number: "+91 99991 07733",
      href: "tel:+919999107733",
      flag: "🇮🇳",
    },
  ],

  whatsapp: {
    label: "WhatsApp",
    number: "+91 99991 07733",
    href: "https://wa.me/919999107733?text=Hi%20Brosavo%2C%20I%20just%20submitted%20the%20contact%20form%20and%20would%20like%20to%20connect.",
  },

  offices: "Vancouver 🇨🇦 · Gurugram 🇮🇳",
} as const;

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    description: "Technology services for modern businesses.",
    items: [
      {
        label: "Website Development",
        href: "/website-development",
        description: "SEO, AEO, GEO and conversion-focused websites.",
        featured: true,
      },
      {
        label: "Software Development",
        href: "/services",
        description: "Custom software and digital products.",
      },
      {
        label: "AI Solutions",
        href: "/services",
        description: "AI-powered systems and automation.",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services",
        description: "Scalable cloud and DevOps infrastructure.",
      },
      {
        label: "Technology & Engineering",
        href: "/technology",
        description: "Modern engineering and technology architecture.",
      },
    ],
  },

  {
    label: "Products",
    href: "/products",
    description: "Products built by Brosavo.",
    items: [
      {
        label: "Real Estate CRM",
        href: "/real-estate-crm",
        description:
          "Leads, properties, pipeline, WhatsApp and sales management.",
        featured: true,
      },
      {
        label: "AI Products",
        href: "/products",
        description: "Intelligent products for modern businesses.",
      },
      {
        label: "SaaS Platforms",
        href: "/products",
        description: "Scalable software platforms and business systems.",
      },
      {
        label: "WhatsApp Automation",
        href: "/whatsapp-crm-for-real-estate",
        description: "Communication and workflow automation.",
      },
    ],
  },

  {
    label: "Pricing",
    href: "/pricing",
  },

  {
    label: "Company",
    href: "/about",
    description: "Learn more about Brosavo.",
    items: [
      {
        label: "About Brosavo",
        href: "/about",
        description: "Who we are and what we build.",
      },
      {
        label: "Why Brosavo",
        href: "/why-us",
        description: "Why businesses choose Brosavo.",
      },
      {
        label: "Our Team",
        href: "/team",
        description: "Meet the people behind Brosavo.",
      },
      {
        label: "Founder's Office",
        href: "/founders-office",
        description: "Leadership, vision and company direction.",
      },
      {
        label: "Global Presence",
        href: "/global",
        description: "Brosavo's global delivery network.",
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },
] as const;

export const FOOTER_LINKS = {
  Company: [
    { label: "About Brosavo", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Meet the Team", href: "/team" },
    { label: "Founders Office", href: "/founders-office" },
    { label: "Blog", href: "/blog" },
    { label: "Global Presence", href: "/global" },
  ],

  Services: [
    { label: "Website Development", href: "/website-development" },
    { label: "SEO", href: "/seo" },
    { label: "AEO", href: "/aeo" },
    { label: "GEO", href: "/geo" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Software Development", href: "/services" },
  ],

  Products: [
    { label: "Brosavo Real Estate CRM", href: "/real-estate-crm" },
    { label: "Lead management software", href: "/real-estate-lead-management" },
    { label: "WhatsApp CRM for real estate", href: "/whatsapp-crm-for-real-estate" },
    { label: "AI software platforms", href: "/products" },
    { label: "Product pricing", href: "/pricing" },
  ],

  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const WHY_US = [
  {
    title: "Global Delivery Model",
    description:
      "Canada × India engineering network delivering 24/7 development velocity with local expertise in every timezone.",
    icon: "globe",
  },
  {
    title: "Enterprise-Grade Engineering",
    description:
      "Mission-critical systems built with security-first architecture, 99.9% uptime SLAs, and production-proven patterns.",
    icon: "shield",
  },
  {
    title: "AI-Native Thinking",
    description:
      "Every solution is designed with intelligence at its core — from LLM integrations to autonomous automation pipelines.",
    icon: "brain",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From discovery to deployment to scale — one partner accountable for your entire technology lifecycle.",
    icon: "layers",
  },
  {
    title: "Transparent Partnership",
    description:
      "Direct access to engineering leadership, clear roadmaps, and collaborative delivery without agency overhead.",
    icon: "handshake",
  },
  {
    title: "Proven at Scale",
    description:
      "150+ enterprise clients across 30 countries trust BROSAVO for platforms handling millions of daily transactions.",
    icon: "chart",
  },
] as const;

export const TEAM = [
  {
    name: "Engineering Leadership",
    role: "Global Engineering",
    department: "Technology",
    bio: "Architecting scalable systems and leading cross-continental engineering teams across Canada and India.",
    avatar: "EL",
    location: "Vancouver · Gurugram",
  },
  {
    name: "Product Strategy",
    role: "Head of Product",
    department: "Product",
    bio: "Driving product vision from concept to market — aligning business goals with world-class user experiences.",
    avatar: "PS",
    location: "Vancouver",
  },
  {
    name: "AI Research",
    role: "AI Engineering Lead",
    department: "Artificial Intelligence",
    bio: "Building production ML systems, LLM integrations, and intelligent automation for enterprise clients worldwide.",
    avatar: "AR",
    location: "Gurugram",
  },
  {
    name: "Client Success",
    role: "Director of Delivery",
    department: "Operations",
    bio: "Ensuring every engagement exceeds expectations with transparent communication and on-time delivery.",
    avatar: "CS",
    location: "Vancouver · Gurugram",
  },
  {
    name: "Cloud Architecture",
    role: "Principal Architect",
    department: "Infrastructure",
    bio: "Designing resilient cloud-native architectures on AWS, GCP, and Azure for global-scale deployments.",
    avatar: "CA",
    location: "Gurugram",
  },
  {
    name: "Design Systems",
    role: "Lead Designer",
    department: "Design",
    bio: "Crafting premium digital experiences and design systems that define how enterprise software should feel.",
    avatar: "DS",
    location: "Vancouver",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Founder & CEO",
    title: "Chief Executive Officer",
    bio: "Visionary leader driving BROSAVO's global expansion and strategic partnerships. Passionate about building technology that transforms how businesses operate at international scale.",
    focus: ["Global Strategy", "Enterprise Partnerships", "Company Vision"],
    avatar: "CEO",
    location: "Vancouver, Canada",
  },
  {
    name: "Co-Founder & CTO",
    title: "Chief Technology Officer",
    bio: "Technical architect behind BROSAVO's engineering excellence. Leads AI research, platform architecture, and the Canada-India delivery network that powers 24/7 development.",
    focus: [
      "AI & Platform Architecture",
      "Engineering Culture",
      "Technical Strategy",
    ],
    avatar: "CTO",
    location: "Gurugram, India",
  },
] as const;

export const SERVICES = [
  {
    id: "software",
    title: "Custom Software Development",
    description:
      "Business software engineered around your workflows, requirements, integrations, and long-term growth.",
    icon: "code",
    span: "col-span-2 row-span-2",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accent: "#3b82f6",
  },
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "AI-powered applications, intelligent automation, LLM integrations, and custom AI workflows.",
    icon: "brain",
    span: "col-span-1 row-span-1",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accent: "#8b5cf6",
  },
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms with multi-tenant architecture, subscriptions, analytics, integrations, and secure access.",
    icon: "cloud",
    span: "col-span-1 row-span-1",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accent: "#06b6d4",
  },
  {
    id: "real-estate",
    title: "Real Estate Technology",
    description:
      "Technology for real estate businesses including CRM, lead management, WhatsApp automation, property management, and sales workflows.",
    icon: "building",
    span: "col-span-1 row-span-2",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accent: "#6366f1",
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    description:
      "Scalable business systems, workflow platforms, and distributed applications built for complex operations.",
    icon: "layers",
    span: "col-span-1 row-span-1",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accent: "#ec4899",
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Workflow automation and intelligent systems that reduce repetitive work and improve operational efficiency.",
    icon: "zap",
    span: "col-span-1 row-span-1",
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    accent: "#eab308",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description:
      "Cloud-native architecture, deployment, scaling, monitoring, and infrastructure across modern platforms.",
    icon: "server",
    span: "col-span-1 row-span-1",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    accent: "#0ea5e9",
  },
  {
    id: "mobile",
    title: "Web & Mobile Applications",
    description:
      "Responsive web applications and mobile experiences designed for performance, usability, and scale.",
    icon: "smartphone",
    span: "col-span-1 row-span-1",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accent: "#f59e0b",
  },
  {
    id: "fintech",
    title: "FinTech Solutions",
    description:
      "Software for financial workflows, payments, lending, compliance, and data-driven financial operations.",
    icon: "credit-card",
    span: "col-span-1 row-span-1",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    accent: "#10b981",
  },
  {
    id: "data",
    title: "Data Engineering",
    description:
      "Data pipelines, integrations, analytics infrastructure, and systems for turning business data into useful insights.",
    icon: "database",
    span: "col-span-1 row-span-1",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    accent: "#14b8a6",
  },
  {
    id: "transformation",
    title: "Digital Transformation",
    description:
      "Modernize legacy processes and systems with cloud-native software, automation, integrations, and digital workflows.",
    icon: "refresh",
    span: "col-span-1 row-span-1",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    accent: "#d946ef",
  },
  {
    id: "product",
    title: "Product Engineering",
    description:
      "From product strategy and architecture to development, deployment, and continuous improvement.",
    icon: "layers",
    span: "col-span-2 row-span-1",
    gradient: "from-violet-500/20 via-indigo-500/10 to-transparent",
    accent: "#7c3aed",
  },
] as const;

export const FEATURED_PRODUCT = {
  id: "real-estate-crm",
  name: "BROSAVO Real Estate CRM",
  tagline: "Industry-Specific Business Software",
  headline: "The operating system for real estate teams",
  description:
    "One of BROSAVO's industry-specific software platforms, this multi-tenant real estate CRM unifies contacts, leads, properties, bookings, site visits, organizations, users, roles, reporting, marketing automation, and WhatsApp outreach in one dashboard.",
  summary:
    "Built with a modern React + TypeScript frontend and a Node.js + Express + MongoDB backend, this platform combines operational CRM workflows with marketing tools so real estate businesses can manage relationships and outreach from a single system.",
  color: "#3b82f6",
  image: "/products/real-estate-crm-dashboard.png",
  imageAlt:
    "BROSAVO Real Estate CRM dashboard showing properties, revenue, occupancy, and maintenance",
  stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
  metrics: ["Multi-tenant", "JWT auth", "WhatsApp API", "Role-based access"],
  capabilities: [
    {
      title: "Contacts & Leads",
      description:
        "Manual contact creation, organization-level data, and lead pipelines in one place.",
    },
    {
      title: "Properties & Bookings",
      description:
        "Property workflows, site visit scheduling, and lead–property associations.",
    },
    {
      title: "Roles & Security",
      description:
        "JWT authentication with role-based permissions for secure team access.",
    },
    {
      title: "WhatsApp Marketing",
      description:
        "Send template or custom messages via WhatsApp Business API from stored campaigns.",
    },
    {
      title: "Org Settings",
      description:
        "Company and organization settings separated from marketing configuration.",
    },
    {
      title: "Unified Reporting",
      description:
        "Dashboards and reporting across contacts, properties, bookings, and outreach.",
    },
  ],
} as const;

export const PRODUCTS = [
  {
    id: "real-estate-crm",
    name: "Real Estate CRM",
    tagline: "Property management software CRM",
    description:
      "Multi-tenant CRM for contacts, leads, properties, bookings, site visits, roles, reporting, and WhatsApp marketing — in one dashboard.",
    color: "#3b82f6",
    metrics: ["Multi-tenant", "Site visits", "WhatsApp API"],
    featured: true,
  },
  {
    id: "leads",
    name: "Lead Management",
    tagline: "Convert faster, scale smarter",
    description:
      "AI-driven lead scoring, multi-channel capture, and automated nurture sequences that close deals.",
    color: "#06b6d4",
    metrics: ["3x conversion", "Multi-channel", "Smart routing"],
    featured: false,
  },
  {
    id: "whatsapp",
    name: "WhatsApp Automation",
    tagline: "Conversations at scale",
    description:
      "Enterprise WhatsApp Business API with templates, broadcast campaigns, and CRM-connected outreach.",
    color: "#10b981",
    metrics: ["Templates", "Graph API", "CRM sync"],
    featured: false,
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    tagline: "Your intelligent co-pilot",
    description:
      "Custom AI agents trained on your data — support, sales, operations, and internal knowledge.",
    color: "#ec4899",
    metrics: ["Custom training", "Multi-modal", "Enterprise secure"],
    featured: false,
  },
] as const;

export const OFFICES = [
  {
    country: "Canada",
    flag: "🇨🇦",
    city: "Vancouver",
    role: "North American Headquarters",
    phone: "+1 236 818 4654",
    phoneHref: "tel:+12368184654",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    timezone: "EST",
  },
  {
    country: "India",
    flag: "🇮🇳",
    city: "Gurugram",
    role: "Engineering & Delivery Center",
    phone: "+91 99991 07733",
    phoneHref: "tel:+919999107733",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    timezone: "IST",
  },
] as const;

export const METRICS = [
  {
    value: 150,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Across 30+ countries",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "Mission-critical systems",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "System Uptime",
    description: "Enterprise SLA guaranteed",
  },
  {
    value: 2,
    suffix: "",
    label: "Global Offices",
    description: "Canada × India network",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "BROSAVO transformed our entire digital infrastructure. Their engineering team delivered a platform that handles millions of transactions daily with zero downtime.",
    author: "Sarah Chen",
    role: "CTO, FinScale Global",
    company: "FinScale",
    avatar: "SC",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The AI automation platform they built reduced our operational costs by 60% while improving customer satisfaction scores across all channels.",
    author: "Rajesh Patel",
    role: "VP Engineering, NovaTech",
    company: "NovaTech",
    avatar: "RP",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Working with BROSAVO feels like having an elite in-house engineering team. Their Canada-India delivery model gives us 24/7 development velocity.",
    author: "Michael Torres",
    role: "CEO, CloudBridge Systems",
    company: "CloudBridge",
    avatar: "MT",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "From concept to production in 8 weeks. The BROSAVO CRM platform now powers our entire sales organization across 15 countries.",
    author: "Emily Watson",
    role: "Director of Sales Ops, Meridian",
    company: "Meridian",
    avatar: "EW",
    rating: 5,
  },
] as const;

export const TIMELINE = [
  {
    year: "2018",
    title: "Founded",
    description:
      "BROSAVO established with a vision for global technology excellence",
  },
  {
    year: "2020",
    title: "India Expansion",
    description: "Engineering center launched in Gurugram",
  },
  {
    year: "2022",
    title: "AI Division",
    description: "Dedicated AI research and product engineering team",
  },
  {
    year: "2024",
    title: "Enterprise Scale",
    description: "150+ enterprise clients across 30 countries",
  },
  {
    year: "2026",
    title: "Global Leader",
    description: "Recognized as a premier global technology partner",
  },
] as const;

export const HOME_LINKS = [
  {
    label: "Services",
    href: "/services",
    description: "12 engineering disciplines",
    icon: "layers",
  },
  {
    label: "Technology",
    href: "/technology",
    description: "65+ production technologies",
    icon: "cpu",
  },
  {
    label: "Products",
    href: "/products",
    description: "Business software & platforms",
    icon: "box",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "Flexible plans & solutions",
    icon: "star",
  },
  {
    label: "Global",
    href: "/global",
    description: "Canada × India network",
    icon: "globe",
  },
  {
    label: "Why Us",
    href: "/why-us",
    description: "What sets us apart",
    icon: "star",
  },
  {
    label: "Team",
    href: "/team",
    description: "Meet our leaders",
    icon: "users",
  },
] as const;
