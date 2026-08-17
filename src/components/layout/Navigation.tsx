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
   NAVIGATION CONFIGURATION
========================================================= */

const NAVIGATION = [
  {
    label: "Services",
    href: "/services",
    dropdown: true,
    description: "Technology services for modern businesses.",
    items: [
      {
        label: "Software Development",
        href: "/services",
        description:
          "Custom software and digital products for modern businesses.",
      },
      {
        label: "AI Solutions",
        href: "/services",
        description:
          "AI-powered systems, automation and intelligent workflows.",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services",
        description:
          "Scalable cloud, DevOps and technology infrastructure.",
      },
      {
        label: "Technology & Engineering",
        href: "/technology",
        description:
          "Modern engineering, architecture and technology platforms.",
      },
    ],
  },

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

  {
    label: "Pricing",
    href: "/pricing",
    dropdown: false,
  },

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(
    null
  );
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(
    null
  );

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
                          y: 10,
                          scale: 0.97,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          scale: 0.97,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute left-1/2 top-full z-[100] -translate-x-1/2 pt-3"
                      >
                        <div
                          className={cn(
                            "overflow-hidden rounded-2xl",
                            "border border-black/10 dark:border-white/10",

                            /*
                             * IMPORTANT:
                             * Dropdown is intentionally opaque.
                             */
                            "bg-white dark:bg-[#08080D]",

                            "shadow-[0_24px_80px_rgba(0,0,0,0.18)]",
                            "dark:shadow-[0_24px_80px_rgba(0,0,0,0.65)]",

                            item.label ===
                              "Products"
                              ? "w-[440px]"
                              : item.label ===
                                "Company"
                                ? "w-[410px]"
                                : "w-[400px]"
                          )}
                        >
                          {/* =================================
                              DROPDOWN HEADER
                          ================================= */}

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

                          {/* =================================
                              DROPDOWN ITEMS
                          ================================= */}

                          <div className="p-2.5">
                            {item.items?.map(
                              (subItem) => {
                                const featured =
                                  "featured" in
                                  subItem &&
                                  subItem.featured;

                                /* ---------------------------
                                   FEATURED ITEM
                                --------------------------- */

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
                                      {/* Glow */}
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
                                            Explore Real Estate CRM
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

                                /* ---------------------------
                                   NORMAL ITEM
                                --------------------------- */

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

                          {/* =================================
                              FOOTER LINK
                          ================================= */}

                          {item.label ===
                            "Products" && (
                              <div className="border-t border-black/10 bg-black/[0.02] px-5 py-3 dark:border-white/10 dark:bg-white/[0.02]">
                                <Link
                                  href="/products"
                                  onClick={() => {
                                    startNavigation(
                                      "/products"
                                    );
                                    setOpenDropdown(
                                      null
                                    );
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

                          {item.label ===
                            "Services" && (
                              <div className="border-t border-black/10 bg-black/[0.02] px-5 py-3 dark:border-white/10 dark:bg-white/[0.02]">
                                <Link
                                  href="/services"
                                  onClick={() => {
                                    startNavigation(
                                      "/services"
                                    );
                                    setOpenDropdown(
                                      null
                                    );
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
                startNavigation(
                  "/authentication"
                )
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

          <div className="flex items-center gap-1.5 xl:hidden">
            <ThemeToggle />

            {!mobileOpen && (
              <MagneticButton
                href="/contact"
                variant="primary"
                className="!px-3 !py-2 !text-xs sm:!px-4 sm:!py-2.5 sm:!text-sm"
                onClick={() =>
                  startNavigation("/contact")
                }
              >
                Contact Us
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

                    /* SIMPLE LINK */
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
                            delay:
                              index * 0.04,
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
                          delay:
                            index * 0.04,
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
                            active ||
                              expanded
                              ? "text-foreground"
                              : "text-foreground/80"
                          )}
                        >
                          {item.label}

                          <motion.span
                            animate={{
                              rotate:
                                expanded
                                  ? 180
                                  : 0,
                            }}
                            transition={{
                              duration:
                                0.25,
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
                                duration:
                                  0.25,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 space-y-1 rounded-2xl bg-zinc-100 p-2 dark:bg-white/[0.05]">
                                {item.items?.map(
                                  (
                                    subItem
                                  ) => {
                                    const featured =
                                      "featured" in
                                      subItem &&
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
                    Contact Us
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