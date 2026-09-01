"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/* =========================================================
   TYPES
========================================================= */

type NavSection =
  | "Website Development"
  | "Search & AI Discovery"
  | "Digital Marketing"
  | "Specialized";

type NavSubItem = {
  label: string;
  href: string;
  description: string;
  featured?: boolean;
  section?: NavSection;
};

type NavItem = {
  label: string;
  href: string;
  dropdown: boolean;
  description?: string;
  items?: NavSubItem[];
};

/* =========================================================
   NAVIGATION CONFIGURATION
========================================================= */

const NAVIGATION: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    dropdown: true,
    description: "Build, grow, and get discovered online.",
    items: [
      /* -----------------------------------------------------
         WEBSITE DEVELOPMENT
      ----------------------------------------------------- */

      {
        label: "Website Development",
        href: "/website-development",
        description:
          "Conversion-focused websites for modern businesses.",
        featured: true,
        section: "Website Development",
      },
      {
        label: "Website Redesign",
        href: "/website-redesign",
        description:
          "Modernize your website and improve conversions.",
        section: "Website Development",
      },
      {
        label: "Landing Page Development",
        href: "/landing-page-development",
        description:
          "High-converting landing pages for campaigns.",
        section: "Website Development",
      },
      {
        label: "Ecommerce Website Development",
        href: "/ecommerce-website-development",
        description:
          "Scalable ecommerce websites built to sell.",
        section: "Website Development",
      },
      {
        label: "Website Maintenance",
        href: "/website-maintenance",
        description:
          "Ongoing updates, security and website support.",
        section: "Website Development",
      },

      /* -----------------------------------------------------
         SEARCH & AI DISCOVERY
      ----------------------------------------------------- */

      {
        label: "SEO",
        href: "/seo",
        description:
          "Improve rankings and organic visibility.",
        section: "Search & AI Discovery",
      },
      {
        label: "AEO",
        href: "/aeo",
        description:
          "Optimize content for AI answers and search overviews.",
        section: "Search & AI Discovery",
      },
      {
        label: "GEO",
        href: "/geo",
        description:
          "Increase visibility across generative AI platforms.",
        section: "Search & AI Discovery",
      },
      {
        label: "Local SEO",
        href: "/local-seo",
        description:
          "Improve visibility in local and map searches.",
        section: "Search & AI Discovery",
      },
      {
        label: "Technical SEO",
        href: "/technical-seo",
        description:
          "Technical optimization for crawling and indexing.",
        section: "Search & AI Discovery",
      },

      /* -----------------------------------------------------
         DIGITAL MARKETING
      ----------------------------------------------------- */

      {
        label: "Digital Marketing",
        href: "/digital-marketing",
        description:
          "A complete system for traffic, visibility and growth.",
        section: "Digital Marketing",
      },
      {
        label: "Google Ads",
        href: "/google-ads",
        description:
          "Performance-focused Google Ads campaigns.",
        section: "Digital Marketing",
      },
      {
        label: "Content Marketing",
        href: "/content-marketing",
        description:
          "Content designed to attract and convert.",
        section: "Digital Marketing",
      },
      {
        label: "Conversion Rate Optimization",
        href: "/conversion-rate-optimization",
        description:
          "Turn more visitors into qualified leads.",
        section: "Digital Marketing",
      },

      /* -----------------------------------------------------
         SPECIALIZED
      ----------------------------------------------------- */

      {
        label: "Real Estate Website Development",
        href: "/real-estate-website-development",
        description:
          "Websites for realtors, agencies, builders and developers.",
        section: "Specialized",
      },
      {
        label: "Software Development",
        href: "/services",
        description:
          "Custom software and digital products.",
        section: "Specialized",
      },
      {
        label: "AI Solutions",
        href: "/services",
        description:
          "AI-powered systems and intelligent workflows.",
        section: "Specialized",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services",
        description:
          "Scalable cloud, DevOps and infrastructure.",
        section: "Specialized",
      },
      {
        label: "Technology & Engineering",
        href: "/technology",
        description:
          "Modern engineering and technology platforms.",
        section: "Specialized",
      },
    ],
  },

  /* =======================================================
     PRODUCTS
  ======================================================= */

  {
    label: "Products",
    href: "/products",
    dropdown: true,
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
        description:
          "Intelligent products built for modern businesses.",
      },
      {
        label: "SaaS Platforms",
        href: "/products",
        description:
          "Scalable software platforms and business systems.",
      },
      {
        label: "WhatsApp Automation",
        href: "/products",
        description:
          "Communication and workflow automation.",
      },
    ],
  },

  /* =======================================================
     PRICING
  ======================================================= */

  {
    label: "Pricing",
    href: "/pricing",
    dropdown: false,
  },

  /* =======================================================
     COMPANY
  ======================================================= */

  {
    label: "Company",
    href: "/about",
    dropdown: true,
    description: "Learn more about Brosavo.",
    items: [
      {
        label: "About Brosavo",
        href: "/about",
        description:
          "Who we are and what we build.",
      },
      {
        label: "Why Brosavo",
        href: "/why-us",
        description:
          "Why businesses choose Brosavo.",
      },
      {
        label: "Our Team",
        href: "/team",
        description:
          "Meet the people behind Brosavo.",
      },
      {
        label: "Founder's Office",
        href: "/founders-office",
        description:
          "Leadership, vision and company direction.",
      },
      {
        label: "Global Presence",
        href: "/global",
        description:
          "Brosavo's global delivery network.",
      },
    ],
  },

  /* =======================================================
     BLOG
  ======================================================= */

  {
    label: "Blog",
    href: "/blog",
    dropdown: false,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export function Navigation() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const [mobileDropdown, setMobileDropdown] =
    useState<string | null>(null);

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     MOBILE BODY LOCK
  ========================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
    setIsNavigating(false);
  }, [pathname]);

  /* =========================================================
     NAVIGATION SAFETY RESET
  ========================================================= */

  useEffect(() => {
    if (!isNavigating) return;

    const timeout = window.setTimeout(() => {
      setIsNavigating(false);
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isNavigating]);

  /* =========================================================
     NORMALIZE PATH
  ========================================================= */

  const normalizePath = (value: string) => {
    const clean = value.split("?")[0].split("#")[0];

    if (!clean || clean === "/") {
      return "/";
    }

    return clean.endsWith("/")
      ? clean.slice(0, -1)
      : clean;
  };

  /* =========================================================
     START NAVIGATION
  ========================================================= */

  const startNavigation = (href: string) => {
    const current = normalizePath(pathname);
    const target = normalizePath(href);

    if (current === target) {
      return;
    }

    setIsNavigating(true);
  };

  /* =========================================================
     ACTIVE LINK
  ========================================================= */

  const isActive = (href: string) => {
    const current = normalizePath(pathname);
    const target = normalizePath(href);

    if (target === "/") {
      return current === "/";
    }

    return (
      current === target ||
      current.startsWith(`${target}/`)
    );
  };

  /* =========================================================
     CLOSE MENUS
  ========================================================= */

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  };

  /* =========================================================
     DESKTOP DROPDOWN
  ========================================================= */

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) =>
      current === label ? null : label
    );
  };

  /* =========================================================
     MOBILE DROPDOWN
  ========================================================= */

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((current) =>
      current === label ? null : label
    );
  };

  /* =========================================================
     SERVICES HELPERS
  ========================================================= */

  const getServiceItems = (
    section: NavSection
  ) => {
    const services = NAVIGATION.find(
      (item) => item.label === "Services"
    );

    return (
      services?.items?.filter(
        (item) => item.section === section
      ) ?? []
    );
  };

  const websiteServices = getServiceItems(
    "Website Development"
  );

  const searchServices = getServiceItems(
    "Search & AI Discovery"
  );

  const marketingServices = getServiceItems(
    "Digital Marketing"
  );

  const specializedServices = getServiceItems(
    "Specialized"
  );

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50",
          "px-3 py-3 sm:px-4 sm:py-4 md:px-8",
          "transition-all duration-500",
          scrolled && "py-2.5 sm:py-3"
        )}
      >
        <nav
          className={cn(
            "container-wide mx-auto",
            "relative flex items-center justify-between",
            "rounded-2xl",
            "px-3 py-2.5 sm:px-4 md:px-6 md:py-3",
            "glass-strong",
            "shadow-[0_4px_24px_var(--nav-shadow)]",
            "transition-all duration-500",
            scrolled &&
              "shadow-[0_8px_32px_var(--nav-shadow)]"
          )}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={() => {
              startNavigation("/");
              closeMenus();
            }}
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/5 shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              <img
                src="/logo.svg"
                alt="Brosavo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-base font-semibold tracking-wider sm:text-lg">
              BROS
              <span style={{ color: "#5B74F6" }}>
                Λ
              </span>
              VO
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center xl:flex">
            {NAVIGATION.map((item) => {
              const active = isActive(item.href);

              /* ---------------------------------------------
                 SIMPLE LINK
              --------------------------------------------- */

              if (!item.dropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      startNavigation(item.href);
                      setOpenDropdown(null);
                    }}
                    className={cn(
                      "group relative mx-0.5 px-3 py-2.5 text-sm transition-colors",
                      active
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.label}

                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-px -translate-x-1/2",
                        "bg-accent-blue transition-all duration-300",
                        active
                          ? "w-3/4"
                          : "w-0 group-hover:w-3/4"
                      )}
                    />
                  </Link>
                );
              }

              /* ---------------------------------------------
                 DROPDOWN
              --------------------------------------------- */

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    setOpenDropdown(null)
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleDropdown(item.label)
                    }
                    className={cn(
                      "group relative mx-0.5 flex items-center gap-1 px-3 py-2.5 text-sm transition-colors",
                      active ||
                        openDropdown === item.label
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                    aria-expanded={
                      openDropdown === item.label
                    }
                  >
                    {item.label}

                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300",
                        openDropdown === item.label &&
                          "rotate-180"
                      )}
                    />

                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-px -translate-x-1/2",
                        "bg-accent-blue transition-all duration-300",
                        active ||
                          openDropdown === item.label
                          ? "w-3/4"
                          : "w-0"
                      )}
                    />
                  </button>

                  {/* =========================================
                      DROPDOWN PANEL
                  ========================================= */}

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                          scale: 0.985,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                          scale: 0.985,
                        }}
                        transition={{
                          duration: 0.18,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={cn(
                          "absolute left-1/2 top-full z-[100] -translate-x-1/2 pt-3",
                          item.label === "Services"
                            ? "w-[880px]"
                            : ""
                        )}
                      >
                        <div
                          className={cn(
                            "overflow-hidden rounded-2xl",
                            "border border-black/10 dark:border-white/10",
                            "bg-white dark:bg-[#08080D]",
                            "shadow-[0_24px_80px_rgba(0,0,0,0.18)]",
                            "dark:shadow-[0_24px_80px_rgba(0,0,0,0.65)]",
                            item.label === "Products"
                              ? "w-[440px]"
                              : item.label === "Company"
                                ? "w-[410px]"
                                : item.label === "Services"
                                  ? "w-full"
                                  : "w-[400px]"
                          )}
                        >
                          {/* =================================
                              SERVICES MEGA MENU
                          ================================= */}

                          {item.label === "Services" ? (
                            <>
                              {/* Header */}

                              <div className="border-b border-black/10 bg-black/[0.02] px-6 py-4 dark:border-white/10 dark:bg-white/[0.025]">
                                <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue">
                                  SERVICES
                                </div>

                                <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                  Build, grow, and get discovered
                                  online.
                                </div>
                              </div>

                              {/* Main columns */}

                              <div className="grid grid-cols-3 divide-x divide-black/[0.07] p-4 dark:divide-white/[0.07]">
                                {/* =================================
                                    BUILD
                                ================================= */}

                                <div className="px-2">
                                  <div className="mb-3 flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent-blue" />

                                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                      Build
                                    </span>
                                  </div>

                                  <div className="space-y-1">
                                    {websiteServices.map(
                                      (subItem) => {
                                        const featured =
                                          subItem.featured;

                                        return (
                                          <Link
                                            key={
                                              subItem.label
                                            }
                                            href={
                                              subItem.href
                                            }
                                            onClick={() => {
                                              startNavigation(
                                                subItem.href
                                              );
                                              setOpenDropdown(
                                                null
                                              );
                                            }}
                                            className={cn(
                                              "group block rounded-xl transition-all duration-200",
                                              featured
                                                ? "border border-accent-blue/25 bg-accent-blue/[0.07] p-3.5 hover:border-accent-blue/50 hover:bg-accent-blue/[0.11]"
                                                : "px-3 py-2.5 hover:bg-zinc-100 dark:hover:bg-white/[0.06]"
                                            )}
                                          >
                                            <div className="flex items-center justify-between gap-2">
                                              <div
                                                className={cn(
                                                  "text-xs font-semibold",
                                                  featured
                                                    ? "text-zinc-950 dark:text-white"
                                                    : "text-zinc-800 dark:text-zinc-200"
                                                )}
                                              >
                                                {subItem.label}
                                              </div>

                                              <ArrowUpRight
                                                size={
                                                  featured
                                                    ? 13
                                                    : 12
                                                }
                                                className={cn(
                                                  "shrink-0 transition-all duration-200",
                                                  featured
                                                    ? "text-accent-blue opacity-70"
                                                    : "text-zinc-400 opacity-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                                )}
                                              />
                                            </div>

                                            {featured && (
                                              <p className="mt-1.5 max-w-[220px] text-[10px] font-medium leading-4 text-zinc-600 dark:text-zinc-400">
                                                {
                                                  subItem.description
                                                }
                                              </p>
                                            )}
                                          </Link>
                                        );
                                      }
                                    )}
                                  </div>

                                  <Link
                                    href="/website-development"
                                    onClick={() => {
                                      startNavigation(
                                        "/website-development"
                                      );
                                      setOpenDropdown(null);
                                    }}
                                    className="mt-3 block px-3 text-[10px] font-semibold text-accent-blue transition-colors hover:text-accent-blue/80"
                                  >
                                    Explore Website Services
                                    <span className="ml-1">
                                      →
                                    </span>
                                  </Link>
                                </div>

                                {/* =================================
                                    GET DISCOVERED
                                ================================= */}

                                <div className="px-5">
                                  <div className="mb-3 flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent-blue" />

                                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                      Get Discovered
                                    </span>
                                  </div>

                                  <div className="space-y-1">
                                    {searchServices.map(
                                      (subItem) => (
                                        <Link
                                          key={
                                            subItem.label
                                          }
                                          href={
                                            subItem.href
                                          }
                                          onClick={() => {
                                            startNavigation(
                                              subItem.href
                                            );
                                            setOpenDropdown(
                                              null
                                            );
                                          }}
                                          className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06]"
                                        >
                                          <div>
                                            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                                              {
                                                subItem.label
                                              }
                                            </div>

                                            <div className="mt-0.5 text-[9px] font-medium text-zinc-500 dark:text-zinc-500">
                                              {
                                                subItem.description
                                              }
                                            </div>
                                          </div>

                                          <ArrowUpRight
                                            size={12}
                                            className="shrink-0 text-zinc-400 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                          />
                                        </Link>
                                      )
                                    )}
                                  </div>

                                  <Link
                                    href="/seo"
                                    onClick={() => {
                                      startNavigation(
                                        "/seo"
                                      );
                                      setOpenDropdown(null);
                                    }}
                                    className="mt-3 block px-3 text-[10px] font-semibold text-accent-blue transition-colors hover:text-accent-blue/80"
                                  >
                                    Explore Search Services
                                    <span className="ml-1">
                                      →
                                    </span>
                                  </Link>
                                </div>

                                {/* =================================
                                    GROW
                                ================================= */}

                                <div className="px-5">
                                  <div className="mb-3 flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent-blue" />

                                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                      Grow
                                    </span>
                                  </div>

                                  {/* Featured marketing service */}

                                  <Link
                                    href="/digital-marketing"
                                    onClick={() => {
                                      startNavigation(
                                        "/digital-marketing"
                                      );
                                      setOpenDropdown(null);
                                    }}
                                    className="group mb-2 block rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-accent-blue/20 hover:bg-accent-blue/[0.05]"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                                        Digital Marketing
                                      </span>

                                      <ArrowUpRight
                                        size={12}
                                        className="text-zinc-400 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                      />
                                    </div>

                                    <p className="mt-0.5 text-[9px] font-medium text-zinc-500 dark:text-zinc-500">
                                      Traffic, visibility and
                                      measurable growth.
                                    </p>
                                  </Link>

                                  <div className="space-y-1">
                                    {marketingServices
                                      .filter(
                                        (service) =>
                                          service.label !==
                                          "Digital Marketing"
                                      )
                                      .map((subItem) => (
                                        <Link
                                          key={
                                            subItem.label
                                          }
                                          href={
                                            subItem.href
                                          }
                                          onClick={() => {
                                            startNavigation(
                                              subItem.href
                                            );
                                            setOpenDropdown(
                                              null
                                            );
                                          }}
                                          className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06]"
                                        >
                                          <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                                            {
                                              subItem.label
                                            }
                                          </div>

                                          <ArrowUpRight
                                            size={12}
                                            className="shrink-0 text-zinc-400 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                          />
                                        </Link>
                                      ))}
                                  </div>

                                  <Link
                                    href="/digital-marketing"
                                    onClick={() => {
                                      startNavigation(
                                        "/digital-marketing"
                                      );
                                      setOpenDropdown(null);
                                    }}
                                    className="mt-3 block px-3 text-[10px] font-semibold text-accent-blue transition-colors hover:text-accent-blue/80"
                                  >
                                    Explore Marketing
                                    <span className="ml-1">
                                      →
                                    </span>
                                  </Link>
                                </div>
                              </div>

                              {/* =================================
                                  SPECIALIZED FOOTER
                              ================================= */}

                              <div className="border-t border-black/10 bg-black/[0.018] px-5 py-3 dark:border-white/10 dark:bg-white/[0.018]">
                                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                                  <span className="mr-2 text-[9px] font-mono font-semibold uppercase tracking-[0.15em] text-zinc-400">
                                    Specialized
                                  </span>

                                  {specializedServices.map(
                                    (subItem, index) => (
                                      <span
                                        key={
                                          subItem.label
                                        }
                                        className="flex items-center"
                                      >
                                        <Link
                                          href={
                                            subItem.href
                                          }
                                          onClick={() => {
                                            startNavigation(
                                              subItem.href
                                            );
                                            setOpenDropdown(
                                              null
                                            );
                                          }}
                                          className="rounded-md px-2 py-1 text-[10px] font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                                        >
                                          {subItem.label}
                                        </Link>

                                        {index <
                                          specializedServices.length -
                                            1 && (
                                          <span className="text-zinc-300 dark:text-zinc-700">
                                            ·
                                          </span>
                                        )}
                                      </span>
                                    )
                                  )}
                                </div>
                              </div>
                            </>
                          ) : (
                            /* =================================
                               EXISTING PRODUCTS / COMPANY
                            ================================= */

                            <>
                              {/* Dropdown Header */}

                              <div className="border-b border-black/10 bg-black/[0.025] px-5 py-4 dark:border-white/10 dark:bg-white/[0.025]">
                                <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue">
                                  {item.label}
                                </div>

                                {item.description && (
                                  <div className="mt-1.5 text-xs font-medium leading-5 text-zinc-600 dark:text-zinc-400">
                                    {item.description}
                                  </div>
                                )}
                              </div>

                              {/* Items */}

                              <div className="p-2.5">
                                {item.items?.map(
                                  (subItem) => {
                                    const featured =
                                      Boolean(
                                        subItem.featured
                                      );

                                    if (featured) {
                                      return (
                                        <Link
                                          key={
                                            subItem.label
                                          }
                                          href={
                                            subItem.href
                                          }
                                          onClick={() => {
                                            startNavigation(
                                              subItem.href
                                            );
                                            setOpenDropdown(
                                              null
                                            );
                                          }}
                                          className={cn(
                                            "group relative mb-2 block overflow-hidden rounded-xl",
                                            "border border-accent-blue/25",
                                            "bg-accent-blue/[0.07]",
                                            "p-4",
                                            "transition-all duration-300",
                                            "hover:border-accent-blue/50",
                                            "hover:bg-accent-blue/[0.11]"
                                          )}
                                        >
                                          <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-blue/15 blur-2xl transition-all duration-500 group-hover:bg-accent-blue/25" />

                                          <div className="relative flex items-start justify-between gap-4">
                                            <div className="min-w-0">
                                              <div className="flex items-center gap-2">
                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-blue text-[10px] font-bold text-white shadow-sm">
                                                  ★
                                                </span>

                                                <span className="text-sm font-bold text-zinc-900 dark:text-white">
                                                  {
                                                    subItem.label
                                                  }
                                                </span>
                                              </div>

                                              <p className="mt-2 max-w-[330px] text-xs font-medium leading-5 text-zinc-600 dark:text-zinc-400">
                                                {
                                                  subItem.description
                                                }
                                              </p>

                                              <div className="mt-3 text-[11px] font-semibold text-accent-blue">
                                                Explore{" "}
                                                {
                                                  subItem.label
                                                }

                                                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                                  →
                                                </span>
                                              </div>
                                            </div>

                                            <ArrowUpRight
                                              size={15}
                                              className="shrink-0 text-accent-blue opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                            />
                                          </div>
                                        </Link>
                                      );
                                    }

                                    return (
                                      <Link
                                        key={
                                          subItem.label
                                        }
                                        href={
                                          subItem.href
                                        }
                                        onClick={() => {
                                          startNavigation(
                                            subItem.href
                                          );
                                          setOpenDropdown(
                                            null
                                          );
                                        }}
                                        className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06]"
                                      >
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-white/[0.06]">
                                          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue/60 transition-colors duration-200 group-hover:bg-accent-blue" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                          <div className="flex items-center justify-between gap-3">
                                            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                              {
                                                subItem.label
                                              }
                                            </span>

                                            <ArrowUpRight
                                              size={13}
                                              className="shrink-0 text-zinc-400 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-zinc-500"
                                            />
                                          </div>

                                          <p className="mt-1 text-[11px] font-medium leading-5 text-zinc-500 dark:text-zinc-400">
                                            {
                                              subItem.description
                                            }
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            </>
                          )}

                          {/* =================================
                              PRODUCT FOOTER
                          ================================= */}

                          {item.label === "Products" && (
                            <div className="border-t border-black/10 bg-black/[0.02] px-5 py-3 dark:border-white/10 dark:bg-white/[0.02]">
                              <Link
                                href="/products"
                                onClick={() => {
                                  startNavigation(
                                    "/products"
                                  );
                                  setOpenDropdown(null);
                                }}
                                className="group flex items-center justify-between text-[11px] font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                              >
                                View all products

                                <ArrowUpRight
                                  size={13}
                                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                              </Link>
                            </div>
                          )}

                          {/* =================================
                              LEGACY SERVICES FOOTER
                              Only used if Services is ever
                              rendered outside mega-menu.
                          ================================= */}

                          {item.label === "Services" &&
                            false && (
                              <div className="border-t border-black/10 bg-black/[0.02] px-5 py-3 dark:border-white/10 dark:bg-white/[0.02]">
                                <Link
                                  href="/services"
                                  onClick={() => {
                                    startNavigation(
                                      "/services"
                                    );
                                    setOpenDropdown(null);
                                  }}
                                  className="group flex items-center justify-between text-[11px] font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                >
                                  Explore all services

                                  <ArrowUpRight
                                    size={13}
                                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                  />
                                </Link>
                              </div>
                            )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-2 xl:flex">
            <ThemeToggle />

            <Link
              href="/authentication"
              onClick={() =>
                startNavigation("/authentication")
              }
              className={cn(
                "px-3 py-2 text-sm transition-colors",
                isActive("/authentication")
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              Login
            </Link>

            <MagneticButton
              href="/contact"
              variant="primary"
              className="!px-6 !py-2.5 !text-sm"
              onClick={() =>
                startNavigation("/contact")
              }
            >
              Contact Us
            </MagneticButton>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="flex items-center gap-1 sm:gap-1.5 xl:hidden">
            <ThemeToggle />

            {!mobileOpen && (
              <MagneticButton
                href="/contact"
                variant="primary"
                className="!hidden !px-4 !py-2.5 !text-sm sm:!inline-flex"
                onClick={() =>
                  startNavigation("/contact")
                }
              >
                Get in touch
              </MagneticButton>
            )}

            <button
              type="button"
              onClick={() =>
                setMobileOpen((open) => !open)
              }
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl transition-colors hover:bg-surface sm:h-10 sm:w-10"
            >
              <motion.div
                animate={{
                  rotate: mobileOpen ? 90 : 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                {mobileOpen ? (
                  <X size={21} />
                ) : (
                  <Menu size={21} />
                )}
              </motion.div>
            </button>
          </div>
        </nav>

        {/* =====================================================
            LOADING BAR
        ===================================================== */}

        <AnimatePresence>
          {isNavigating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            {/* Backdrop */}

            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              onClick={closeMenus}
            />

            {/* Drawer */}

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className={cn(
                "absolute bottom-0 right-0 top-0",
                "flex w-full max-w-sm flex-col",
                "overflow-y-auto",
                "border-l border-black/10",
                "bg-white dark:bg-[#08080D]",
                "p-6 pt-24",
                "shadow-[-20px_0_80px_rgba(0,0,0,0.15)]",
                "dark:border-white/10",
                "dark:shadow-[-20px_0_80px_rgba(0,0,0,0.6)]",
                "sm:p-8 sm:pt-24"
              )}
            >
              {/* Mobile heading */}

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue">
                    Navigation
                  </div>

                  <div className="mt-1 text-lg font-bold text-foreground">
                    Explore Brosavo
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMenus}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-white/[0.06] dark:text-zinc-200 dark:hover:bg-white/[0.1]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* =================================================
                  MOBILE LINKS
              ================================================= */}

              <div className="space-y-1">
                {NAVIGATION.map(
                  (item, index) => {
                    const active = isActive(
                      item.href
                    );

                    /* -----------------------------------------
                       SIMPLE LINK
                    ----------------------------------------- */

                    if (!item.dropdown) {
                      return (
                        <motion.div
                          key={item.label}
                          initial={{
                            opacity: 0,
                            x: 30,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.04,
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => {
                              startNavigation(
                                item.href
                              );
                              closeMenus();
                            }}
                            className={cn(
                              "flex items-center justify-between border-b border-black/10 py-4 text-lg font-semibold dark:border-white/10",
                              active
                                ? "text-foreground"
                                : "text-foreground/80"
                            )}
                          >
                            {item.label}

                            <ArrowUpRight
                              size={17}
                              className="text-muted"
                            />
                          </Link>
                        </motion.div>
                      );
                    }

                    const expanded =
                      mobileDropdown ===
                      item.label;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          x: 30,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className="border-b border-black/10 dark:border-white/10"
                      >
                        {/* Parent */}

                        <button
                          type="button"
                          onClick={() =>
                            toggleMobileDropdown(
                              item.label
                            )
                          }
                          className={cn(
                            "flex w-full items-center justify-between py-4 text-left text-lg font-semibold",
                            active || expanded
                              ? "text-foreground"
                              : "text-foreground/80"
                          )}
                        >
                          {item.label}

                          <motion.span
                            animate={{
                              rotate: expanded
                                ? 180
                                : 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                          >
                            <ChevronDown
                              size={20}
                              className="text-muted"
                            />
                          </motion.span>
                        </button>

                        {/* Children */}

                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 rounded-2xl bg-zinc-100 p-2 dark:bg-white/[0.05]">
                                {item.label ===
                                "Services" ? (
                                  <>
                                    {/* Mobile Build */}

                                    <div className="px-3 pb-2 pt-2">
                                      <div className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-accent-blue">
                                        Build
                                      </div>
                                    </div>

                                    {websiteServices.map(
                                      (
                                        subItem
                                      ) => (
                                        <MobileServiceLink
                                          key={
                                            subItem.label
                                          }
                                          item={
                                            subItem
                                          }
                                          featured={
                                            Boolean(
                                              subItem.featured
                                            )
                                          }
                                          startNavigation={
                                            startNavigation
                                          }
                                          closeMenus={
                                            closeMenus
                                          }
                                        />
                                      )
                                    )}

                                    {/* Mobile Search */}

                                    <div className="px-3 pb-2 pt-5">
                                      <div className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-accent-blue">
                                        Get Discovered
                                      </div>
                                    </div>

                                    {searchServices.map(
                                      (
                                        subItem
                                      ) => (
                                        <MobileServiceLink
                                          key={
                                            subItem.label
                                          }
                                          item={
                                            subItem
                                          }
                                          startNavigation={
                                            startNavigation
                                          }
                                          closeMenus={
                                            closeMenus
                                          }
                                        />
                                      )
                                    )}

                                    {/* Mobile Marketing */}

                                    <div className="px-3 pb-2 pt-5">
                                      <div className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-accent-blue">
                                        Grow
                                      </div>
                                    </div>

                                    {marketingServices.map(
                                      (
                                        subItem
                                      ) => (
                                        <MobileServiceLink
                                          key={
                                            subItem.label
                                          }
                                          item={
                                            subItem
                                          }
                                          featured={
                                            subItem.label ===
                                            "Digital Marketing"
                                          }
                                          startNavigation={
                                            startNavigation
                                          }
                                          closeMenus={
                                            closeMenus
                                          }
                                        />
                                      )
                                    )}

                                    {/* Mobile Specialized */}

                                    <div className="mt-3 border-t border-black/10 px-3 pb-1 pt-4 dark:border-white/10">
                                      <div className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-zinc-400">
                                        Specialized
                                      </div>

                                      {specializedServices.map(
                                        (
                                          subItem
                                        ) => (
                                          <Link
                                            key={
                                              subItem.label
                                            }
                                            href={
                                              subItem.href
                                            }
                                            onClick={() => {
                                              startNavigation(
                                                subItem.href
                                              );
                                              closeMenus();
                                            }}
                                            className="flex items-center justify-between rounded-lg px-2 py-2.5 text-xs font-semibold text-foreground/80 transition-colors hover:bg-white dark:hover:bg-white/[0.06]"
                                          >
                                            {
                                              subItem.label
                                            }

                                            <ArrowUpRight
                                              size={
                                                13
                                              }
                                              className="text-muted"
                                            />
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </>
                                ) : (
                                  /* Existing Product / Company mobile menu */

                                  item.items?.map(
                                    (
                                      subItem
                                    ) => {
                                      const featured =
                                        Boolean(
                                          subItem.featured
                                        );

                                      return (
                                        <Link
                                          key={
                                            subItem.label
                                          }
                                          href={
                                            subItem.href
                                          }
                                          onClick={() => {
                                            startNavigation(
                                              subItem.href
                                            );
                                            closeMenus();
                                          }}
                                          className={cn(
                                            "block rounded-xl p-3 transition-colors",
                                            featured
                                              ? "border border-accent-blue/25 bg-accent-blue/10"
                                              : "hover:bg-white dark:hover:bg-white/[0.06]"
                                          )}
                                        >
                                          <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                              {featured && (
                                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-blue text-[9px] text-white">
                                                  ★
                                                </span>
                                              )}

                                              <span className="text-sm font-semibold text-foreground">
                                                {
                                                  subItem.label
                                                }
                                              </span>
                                            </div>

                                            <ArrowUpRight
                                              size={
                                                14
                                              }
                                              className="shrink-0 text-muted"
                                            />
                                          </div>

                                          <p className="mt-1 text-[11px] font-medium leading-5 text-muted">
                                            {
                                              subItem.description
                                            }
                                          </p>
                                        </Link>
                                      );
                                    }
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }
                )}
              </div>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="mt-auto pt-8"
              >
                <div className="grid grid-cols-2 gap-3">
                  <MagneticButton
                    href="/authentication"
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      startNavigation(
                        "/authentication"
                      );
                      closeMenus();
                    }}
                  >
                    Login
                  </MagneticButton>

                  <MagneticButton
                    href="/contact"
                    variant="primary"
                    className="w-full"
                    onClick={() => {
                      startNavigation(
                        "/contact"
                      );
                      closeMenus();
                    }}
                  >
                    Send a message
                  </MagneticButton>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   MOBILE SERVICE LINK
========================================================= */

function MobileServiceLink({
  item,
  featured = false,
  startNavigation,
  closeMenus,
}: {
  item: NavSubItem;
  featured?: boolean;
  startNavigation: (href: string) => void;
  closeMenus: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={() => {
        startNavigation(item.href);
        closeMenus();
      }}
      className={cn(
        "group block rounded-xl p-3 transition-colors",
        featured
          ? "border border-accent-blue/25 bg-accent-blue/10"
          : "hover:bg-white dark:hover:bg-white/[0.06]"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {featured && (
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-blue text-[9px] text-white">
              ★
            </span>
          )}

          <span className="text-sm font-semibold text-foreground">
            {item.label}
          </span>
        </div>

        <ArrowUpRight
          size={14}
          className="shrink-0 text-muted opacity-60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </div>

      {featured && (
        <p className="mt-1 text-[11px] font-medium leading-5 text-muted">
          {item.description}
        </p>
      )}
    </Link>
  );
}