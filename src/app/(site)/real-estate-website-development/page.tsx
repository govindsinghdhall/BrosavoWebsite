
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Globe2,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Search,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "blue" | "violet" | "cyan";
}[] = [
  {
    icon: LayoutDashboard,
    title: "Property Listings",
    description:
      "Present properties and projects with beautiful galleries, pricing, specifications, amenities and clear enquiry actions.",
    accent: "blue",
  },
  {
    icon: Search,
    title: "Property Search",
    description:
      "Help buyers find the right property with intuitive filters for location, property type, price and other criteria.",
    accent: "violet",
  },
  {
    icon: MousePointerClick,
    title: "Lead Capture",
    description:
      "Turn property interest into structured enquiries with strategically placed forms and conversion-focused CTAs.",
    accent: "cyan",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Give potential buyers a direct way to start conversations with your sales team from your website.",
    accent: "blue",
  },
  {
    icon: Workflow,
    title: "CRM Integration",
    description:
      "Connect website enquiries with your CRM so leads can be assigned, tracked and followed up.",
    accent: "violet",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Understand traffic, enquiries and conversion activity so you can make better marketing decisions.",
    accent: "cyan",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Realtors",
    description:
      "Build your personal brand, showcase properties and create a steady stream of buyer enquiries.",
  },
  {
    icon: Target,
    title: "Real Estate Agencies",
    description:
      "Create a professional digital presence for your agents, listings, services and local markets.",
  },
  {
    icon: Sparkles,
    title: "Builders",
    description:
      "Present residential and commercial projects with galleries, floor plans, amenities and enquiry journeys.",
  },
  {
    icon: Globe2,
    title: "Property Developers",
    description:
      "Build premium project experiences designed for high-value properties and investment opportunities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, properties, target buyers and sales objectives.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a premium interface and information architecture around your brand.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the approved design into a fast, responsive and production-ready website.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "CRM, WhatsApp, forms, analytics and other business integrations are connected.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, optimize, deploy and prepare the website for ongoing growth.",
  },
];

const faqs = [
  {
    question: "What should a real estate website include?",
    answer:
      "A modern real estate website should make properties easy to discover, present listings clearly, provide strong enquiry paths, work beautifully on mobile devices and support the business's sales process.",
  },
  {
    question: "Can you build property listing pages?",
    answer:
      "Yes. We can build property and project pages with images, pricing, locations, specifications, amenities, galleries, enquiry forms and conversion-focused calls to action.",
  },
  {
    question: "Can the website connect with a CRM?",
    answer:
      "Yes. Brosavo websites can connect website enquiries with Brosavo CRM workflows so leads can be organized, assigned, tracked and followed up by your sales team.",
  },
  {
    question: "Can you integrate WhatsApp?",
    answer:
      "Yes. WhatsApp can be integrated into property pages and enquiry flows so potential buyers can contact your team quickly.",
  },
  {
    question: "Will the website be SEO-ready?",
    answer:
      "Yes. We can build the website with SEO-friendly architecture, metadata, internal linking, structured content, location pages, property pages and performance-focused implementation.",
  },
  {
    question: "Can you redesign my existing real estate website?",
    answer:
      "Yes. We can redesign an existing website to create a faster, more modern and conversion-focused experience while preserving useful content and improving its structure.",
  },
  {
    question: "How much does a real estate website cost?",
    answer:
      "Brosavo offers professional and premium website packages, with custom pricing available for larger real estate businesses, builders and developers with more advanced requirements.",
  },
];

function AccentIcon({
  icon: Icon,
  accent,
}: {
  icon: LucideIcon;
  accent: "blue" | "violet" | "cyan";
}) {
  const classes = {
    blue: "bg-accent-blue/10 text-accent-blue",
    violet: "bg-accent-violet/10 text-accent-violet",
    cyan: "bg-accent-cyan/10 text-accent-cyan",
  };

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${classes[accent]}`}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-1 text-center">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default function RealEstateWebsiteDevelopmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-background mesh-gradient noise-overlay">
        {/* Background glow system */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_82%_45%,rgba(139,92,246,0.17),transparent_30%),radial-gradient(circle_at_45%_90%,rgba(6,182,212,0.11),transparent_30%)]" />

          <div className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-accent-blue/20 blur-[100px] animate-float" />

          <div
            className="absolute bottom-[10%] right-[8%] h-64 w-64 rounded-full bg-accent-violet/20 blur-[120px] animate-float"
            style={{ animationDelay: "-3s" }}
          />

          <div className="absolute left-1/2 top-[42%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-[150px]" />

          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_65%_45%,black_30%,transparent_85%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32 xl:px-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-blue backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
                Real Estate Website Development
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-balance text-[clamp(2.15rem,7.2vw,4.75rem)] font-black leading-[1.05] tracking-[-0.05em]"
              >
                Websites Built to Turn
                <span className="block bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                  Property Searches Into Sales.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:mx-0"
              >
                High-performance websites for Realtors, agencies, builders
                and property developers — designed to showcase properties,
                capture enquiries and connect your website with your sales
                operation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(59,130,246,0.32)]"
                >
                  Get My Website Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/real-estate-crm"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-glass px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-surface"
                >
                  Explore Real Estate CRM
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.8 }}
                className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-muted lg:justify-start"
              >
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent-blue" />
                  Mobile-first
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent-violet" />
                  SEO-ready
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent-cyan" />
                  CRM-ready
                </span>
              </motion.div>
            </motion.div>

            {/* Website preview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 blur-[80px] sm:h-72 sm:w-72" />

              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-glass shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:rounded-3xl">
                <div className="flex items-center gap-2 border-b border-border/60 bg-background/80 px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70 sm:h-2.5 sm:w-2.5" />
                  <div className="ml-2 min-w-0 flex-1 truncate rounded-lg bg-surface px-2.5 py-1 text-[9px] text-muted sm:px-3 sm:py-1.5">
                    yourrealestate.com/properties
                  </div>
                </div>

                <div className="bg-background p-3 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-bold sm:text-sm">
                      <span className="text-foreground">NOVA</span>
                      <span className="text-accent-blue">REALTY</span>
                    </div>
                    <div className="hidden gap-4 text-[9px] text-muted sm:flex">
                      <span>Properties</span>
                      <span>Projects</span>
                      <span>About</span>
                    </div>
                    <div className="rounded-full bg-foreground px-2.5 py-1 text-[8px] text-background sm:px-3 sm:py-1.5">
                      Enquire
                    </div>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-xl">
                    <Image
                      src="/images/WEBSITE LEAD CAPTURE VISUAL.png"
                      alt="Real estate website capturing property enquiries"
                      width={960}
                      height={540}
                      priority
                      className="h-36 w-full object-cover sm:h-48 lg:h-52"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-accent-blue">
                        Premium listings
                      </span>
                      <p className="mt-1 text-base font-bold leading-tight sm:text-xl">
                        Find a place you&apos;ll love.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                    {[
                      ["/images/3 BHK APARTMENT.png", "3 BHK", "₹2.45 Cr"],
                      ["/images/LUXURY VILLA.png", "Villa", "₹8.90 Cr"],
                      ["/images/COMMERCIAL SPACE.png", "Office", "₹4.20 Cr"],
                    ].map(([src, label, price]) => (
                      <div
                        key={label}
                        className="overflow-hidden rounded-lg border border-border bg-surface sm:rounded-xl"
                      >
                        <div className="relative h-14 sm:h-20">
                          <Image
                            src={src}
                            alt={`${label} listing preview`}
                            fill
                            sizes="160px"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-1.5 sm:p-2.5">
                          <div className="truncate text-[8px] font-medium text-muted sm:text-[10px]">
                            {label}
                          </div>
                          <div className="text-[8px] font-semibold text-accent-blue sm:text-[10px]">
                            {price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-glass px-3 py-2 backdrop-blur-xl">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10">
                    <Users className="h-3.5 w-3.5 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold">New enquiry</div>
                    <div className="text-[9px] text-muted">Lead captured</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-glass px-3 py-2 backdrop-blur-xl">
                  <Zap className="h-4 w-4 text-accent-cyan" />
                  <span className="text-[10px] font-semibold">SEO-ready</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4"
          >
            {[
              {
                icon: Zap,
                title: "Fast performance",
                subtitle: "Built for speed",
              },
              {
                icon: Smartphone,
                title: "Mobile-first",
                subtitle: "Every screen",
              },
              {
                icon: Search,
                title: "SEO-ready",
                subtitle: "Built to be found",
              },
              {
                icon: Target,
                title: "Lead-focused",
                subtitle: "Designed to convert",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/60 bg-glass px-3 py-3 backdrop-blur-xl sm:px-4"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <item.icon className="h-4 w-4 shrink-0 text-accent-blue" />
                  <div className="min-w-0">
                    <div className="truncate text-[11px] font-semibold sm:text-xs">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-[9px] text-muted sm:text-[10px]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROBLEM / SOLUTION
      ========================================================= */}

      <section className="relative border-y border-border/50 bg-surface py-20 sm:py-24">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Your website should work harder"
            title="Your website is more than a digital brochure."
            description="Real estate buyers expect to search, compare, explore and enquire without friction. Your website should support that journey."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Look Professional",
                description:
                  "Create a digital presence that makes your properties and brand feel credible from the first interaction.",
                icon: Sparkles,
              },
              {
                number: "02",
                title: "Generate Enquiries",
                description:
                  "Turn property views and website traffic into structured buyer and seller enquiries.",
                icon: MousePointerClick,
              },
              {
                number: "03",
                title: "Move Leads Forward",
                description:
                  "Connect your website with your CRM and sales workflows instead of letting leads disappear.",
                icon: Workflow,
              },
            ].map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group rounded-3xl border border-border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <span className="font-mono text-xs text-muted">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WEBSITE SHOWCASE
      ========================================================= */}

      <section className="relative py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="The website experience"
            title="Give buyers a reason to explore."
            description="Every part of the experience can be designed around how people actually discover and evaluate property."
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto mt-14 max-w-6xl"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-accent-blue/10 via-accent-violet/10 to-accent-cyan/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-glass shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-border bg-background/70 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />

                <div className="ml-4 flex-1 rounded-lg bg-surface px-4 py-2 text-[10px] text-muted">
                  www.yourrealestatebrand.com
                </div>
              </div>

              <div className="grid bg-background lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-gradient-to-br from-accent-blue/20 via-accent-violet/15 to-accent-cyan/15 p-8 sm:p-12">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-blue/20 blur-3xl" />

                  <div className="relative z-10">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                      Luxury living
                    </div>

                    <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                      Find your
                      <br />
                      next address.
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                      A premium property experience designed to help buyers
                      discover the right home, project or investment.
                    </p>

                    <div className="mt-8 flex gap-2">
                      <div className="rounded-xl border border-border bg-background/70 px-4 py-3 text-xs">
                        <MapPin className="mr-1.5 inline h-3.5 w-3.5 text-accent-blue" />
                        Gurgaon
                      </div>

                      <div className="rounded-xl border border-border bg-background/70 px-4 py-3 text-xs">
                        Apartments
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">
                        Featured Properties
                      </div>
                      <div className="mt-1 text-xs text-muted">
                        Explore available properties
                      </div>
                    </div>

                    <div className="rounded-full bg-accent-blue/10 px-3 py-1.5 text-[10px] font-semibold text-accent-blue">
                      124 listings
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1"
                      >
                        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-accent-blue/20 via-accent-violet/15 to-accent-cyan/15">
                          <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[8px] font-semibold backdrop-blur">
                            FOR SALE
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="text-sm font-semibold">
                            Modern Residence
                          </div>

                          <div className="mt-1 flex items-center gap-1 text-[9px] text-muted">
                            <MapPin className="h-3 w-3" />
                            Golf Course Road, Gurgaon
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-xs font-bold text-accent-blue">
                              ₹2.45 Cr
                            </span>

                            <span className="text-[9px] text-muted">
                              3 BHK
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="border-y border-border/50 bg-surface py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Everything you need"
            title="Built around the way real estate businesses sell."
            description="From property discovery to lead capture, every part of your website can be designed around your sales process."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: (index % 3) * 0.08,
                  duration: 0.6,
                }}
                className="group rounded-3xl border border-border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30"
              >
                <AccentIcon
                  icon={feature.icon}
                  accent={feature.accent}
                />

                <h3 className="mt-6 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-10 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan opacity-60 transition-all duration-300 group-hover:w-20" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE BUILD FOR
      ========================================================= */}

      <section className="py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Built for real estate"
            title="A website for the business you are building."
            description="Whether you are a solo Realtor or a property developer, the website can be designed around your brand, inventory and growth goals."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
            {audiences.map((audience, index) => (
              <motion.article
                key={audience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-glass p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent-blue/30 sm:p-9"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-blue/10 blur-3xl transition group-hover:bg-accent-blue/20" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                    <audience.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold">
                    {audience.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                    {audience.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-accent-blue">
                    Build my website
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WEBSITE + CRM
      ========================================================= */}

      <section className="relative overflow-hidden border-y border-border/50 bg-surface py-20 sm:py-28">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/10 blur-[140px]" />

        <div className="container-wide relative z-10 mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Website + CRM"
            title="Your website and CRM should work as one."
            description="Don't let website enquiries become another spreadsheet. Connect your website with a structured real estate sales workflow."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-14 max-w-6xl rounded-3xl border border-border bg-background/70 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {[
                ["01", "Visitor"],
                ["02", "Property"],
                ["03", "Enquiry"],
                ["04", "CRM"],
                ["05", "Follow-up"],
                ["06", "Sale"],
              ].map(([number, title], index) => (
                <div
                  key={title}
                  className="relative flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 md:block md:text-center"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 font-mono text-[9px] font-bold text-accent-blue md:mx-auto">
                    {number}
                  </div>

                  <div className="mt-0 text-sm font-semibold md:mt-3">
                    {title}
                  </div>

                  {index < 5 && (
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted xl:absolute xl:-right-3 xl:top-1/2 xl:z-10 xl:-translate-y-1/2 max-xl:hidden" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-5 text-center text-sm leading-7 text-muted">
              Every enquiry can become an opportunity your sales team can
              actually manage.
            </div>
          </motion.div>

          <div className="mx-auto mt-8 flex justify-center">
            <Link
              href="/real-estate-crm"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:border-accent-blue/30"
            >
              Explore Brosavo Real Estate CRM
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEO
      ========================================================= */}

      <section className="py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
                Built for discovery
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Your website should not just exist.
                <span className="block bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                  It should get discovered.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Build a website structure that gives search engines useful,
                descriptive pages while giving visitors a better experience.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Technical SEO",
                  "Location Pages",
                  "Property Pages",
                  "Schema Markup",
                  "Fast Performance",
                  "Internal Linking",
                  "Metadata",
                  "Content Architecture",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-xs font-medium"
                  >
                    <Check className="h-3.5 w-3.5 text-accent-blue" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-accent-violet/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-glass p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3 border-b border-border pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10">
                    <Search className="h-5 w-5 text-accent-blue" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      Google Search
                    </div>
                    <div className="mt-1 text-[10px] text-muted">
                      Real Estate Website
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-background p-5">
                  <div className="text-[10px] text-muted">
                    Search result
                  </div>

                  <div className="mt-2 text-lg font-semibold text-accent-blue">
                    Luxury Properties in Gurgaon
                  </div>

                  <div className="mt-2 text-xs leading-6 text-muted">
                    Explore premium residential properties, apartments and
                    real estate projects in Gurgaon...
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent-blue/10 px-2.5 py-1 text-[9px] text-accent-blue">
                      Properties
                    </span>
                    <span className="rounded-full bg-accent-violet/10 px-2.5 py-1 text-[9px] text-accent-violet">
                      Gurgaon
                    </span>
                    <span className="rounded-full bg-accent-cyan/10 px-2.5 py-1 text-[9px] text-accent-cyan">
                      Apartments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING
      ========================================================= */}

      <section className="border-y border-border/50 bg-surface py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Website packages"
            title="Choose the website that fits your business."
            description="Start with a professional website and scale into a more advanced digital sales platform as your business grows."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
            {/* Starter */}
            <article className="rounded-3xl border border-border bg-background p-7 sm:p-8">
              <div className="text-sm font-semibold">Professional</div>

              <div className="mt-4 text-4xl font-black tracking-tight">
                ₹15,000+
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">
                For individual Realtors and smaller real estate businesses.
              </p>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-3 text-sm text-muted">
                {[
                  "Custom website design",
                  "Mobile responsive",
                  "Property pages",
                  "Contact forms",
                  "Basic SEO setup",
                  "SSL",
                  "Performance optimization",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-center rounded-full border border-border px-5 py-3.5 text-sm font-semibold transition hover:bg-surface"
              >
                Get Started
              </Link>
            </article>

            {/* Premium */}
            <article className="relative rounded-3xl border border-accent-blue/40 bg-background p-7 shadow-[0_20px_70px_rgba(59,130,246,0.12)] sm:p-8">
              <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                Most Popular
              </div>

              <div className="text-sm font-semibold">
                Premium
              </div>

              <div className="mt-4 text-4xl font-black tracking-tight">
                ₹35,000
                <span className="text-sm font-normal text-muted">
                  +
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">
                For agencies, builders and growing real estate brands.
              </p>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-3 text-sm text-muted">
                {[
                  "Everything in Professional",
                  "Premium UI/UX",
                  "Advanced animations",
                  "Advanced SEO",
                  "Interactive maps",
                  "CRM integration",
                  "WhatsApp integration",
                  "Analytics",
                  "Lead-focused workflows",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Build My Website
              </Link>
            </article>

            {/* Enterprise */}
            <article className="rounded-3xl border border-border bg-background p-7 sm:p-8">
              <div className="text-sm font-semibold">
                Enterprise
              </div>

              <div className="mt-4 text-4xl font-black tracking-tight">
                Custom
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">
                For developers and organizations with advanced requirements.
              </p>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-3 text-sm text-muted">
                {[
                  "Unlimited pages",
                  "Multiple projects",
                  "Advanced integrations",
                  "Custom CRM workflows",
                  "Multi-language",
                  "International SEO",
                  "Custom functionality",
                  "Dedicated development",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 flex items-center justify-center rounded-full border border-border px-5 py-3.5 text-sm font-semibold transition hover:bg-surface"
              >
                Request a Quote
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT'S INCLUDED
      ========================================================= */}

      <section className="py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
                Everything included
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                From idea to launch.
                <span className="block text-muted">
                  We handle the technology.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted">
                We can take your website from initial strategy and design
                through development, integrations, optimization and launch.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:-translate-y-1"
              >
                Talk to Brosavo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Strategy & discovery",
                "UI/UX design",
                "Website development",
                "Property listing system",
                "CMS / admin panel",
                "SEO setup",
                "Analytics",
                "CRM integration",
                "WhatsApp integration",
                "Domain & hosting setup",
                "SSL",
                "Performance optimization",
                "Testing",
                "Launch & support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-sm"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                    <Check className="h-3.5 w-3.5 text-accent-blue" />
                  </div>

                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="border-y border-border/50 bg-surface py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Our process"
            title="From concept to live website."
            description="A straightforward process designed to keep your project moving without unnecessary complexity."
          />

          <div className="mx-auto mt-14 max-w-5xl">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="group relative flex gap-5 border-b border-border py-7 first:border-t sm:gap-8"
              >
                <div className="font-mono text-xs font-semibold text-accent-blue">
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="hidden h-5 w-5 text-muted transition-transform group-hover:translate-x-1 sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO PLACEHOLDER
      ========================================================= */}

      <section className="py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Websites that make properties look worth buying."
            description="Showcase your strongest real estate website work here. This section is intentionally designed around large visual previews rather than small service cards."
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
            {[
              {
                title: "Luxury Realtor",
                category: "Realtor Website",
              },
              {
                title: "Residential Project",
                category: "Builder Website",
              },
              {
                title: "Property Developer",
                category: "Developer Website",
              },
              {
                title: "Real Estate Agency",
                category: "Agency Website",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group overflow-hidden rounded-3xl border border-border bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent-blue/15 via-accent-violet/15 to-accent-cyan/15">
                  <div className="absolute inset-5 overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
                    <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
                    </div>

                    <div className="p-4">
                      <div className="h-20 rounded-xl bg-gradient-to-br from-accent-blue/20 via-accent-violet/15 to-accent-cyan/15" />

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-14 rounded-lg bg-surface" />
                        <div className="h-14 rounded-lg bg-surface" />
                        <div className="h-14 rounded-lg bg-surface" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6">
                  <div>
                    <div className="text-lg font-semibold">
                      {project.title}
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {project.category}
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="border-y border-border/50 bg-surface py-20 sm:py-28">
        <div className="container-wide mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-blue">
                FAQ
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Questions before you build?
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted">
                Here are some of the questions real estate businesses ask
                before starting a website project with Brosavo.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-border bg-background"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(open ? null : index)
                      }
                      className="flex min-h-12 w-full items-start justify-between gap-4 px-4 py-4 text-left text-sm font-semibold sm:min-h-0 sm:items-center sm:gap-5 sm:px-6 sm:py-5"
                      aria-expanded={open}
                    >
                      <span className="pr-1">{faq.question}</span>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-6 py-5 text-sm leading-7 text-muted">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(139,92,246,0.12),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.12),transparent_25%)]" />

        <div className="container-wide relative z-10 mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-glass p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-12 lg:p-16"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-blue/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-violet/15 blur-3xl" />

            <div className="relative">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                Ready to build?
              </span>

              <h2 className="mx-auto mt-5 max-w-3xl text-[1.75rem] font-black leading-[1.12] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Turn your website into a
                <span className="block bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                  real estate growth engine.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Tell us what you are selling, where you operate and what you
                want your website to achieve. We&apos;ll help you plan the
                right digital experience.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(59,130,246,0.22)] transition hover:-translate-y-1"
                >
                  Get My Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:bg-surface"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] text-muted">
                <span>✓ No commitment</span>
                <span>✓ Free consultation</span>
                <span>✓ Custom proposal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}