"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navigation() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     ROUTE CHANGED
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
    setIsNavigating(false);
  }, [pathname]);

  /* =========================================================
     SAFETY TIMEOUT
  ========================================================= */

  useEffect(() => {
    if (!isNavigating) return;

    const timeout = window.setTimeout(() => {
      setIsNavigating(false);
    }, 15000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isNavigating]);

  /* =========================================================
     NAVIGATION LOADING HANDLER
  ========================================================= */

  const startNavigation = () => {
    setIsNavigating(true);
  };

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* =======================================================
          NAVIGATION
      ======================================================= */}

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-4 sm:py-4 md:px-8",
          "transition-all duration-500",
          scrolled && "py-2.5 sm:py-3"
        )}
      >
        <nav
          className={cn(
            "container-wide mx-auto flex items-center justify-between",
            "rounded-2xl px-3 py-2.5 sm:px-4 md:px-6 md:py-3",
            "transition-all duration-500",
            "glass-strong shadow-[0_4px_24px_var(--nav-shadow)]",
            scrolled && "shadow-[0_8px_32px_var(--nav-shadow)]"
          )}
        >
          {/* ===================================================
              LOGO
          =================================================== */}

          <Link
            href="/"
            onClick={startNavigation}
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/5 shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              <img
                src="/logo.svg"
                alt="BROSAVO logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-base sm:text-lg font-semibold tracking-wider">
              BROS
              <span style={{ color: "#5B74F6" }}>Λ</span>
              VO
            </span>
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <div className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={startNavigation}
                className={cn(
                  "group relative px-3 py-2 text-sm transition-colors",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.label}

                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-px -translate-x-1/2",
                    "bg-accent-blue transition-all duration-300",
                    isActive(link.href)
                      ? "w-3/4"
                      : "w-0 group-hover:w-3/4"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* ===================================================
              DESKTOP ACTIONS
          =================================================== */}

          <div className="hidden items-center gap-2 xl:flex">
            <ThemeToggle />

            <Link
              href="/authentication"
              onClick={startNavigation}
              className={cn(
                "px-3 py-2 text-sm transition-colors",
                isActive("/authentication")
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              Login
            </Link>

            <MagneticButton
              href="/contact"
              variant="primary"
              className="!px-6 !py-2.5 !text-sm"
              onClick={startNavigation}
            >
              Contact Us
            </MagneticButton>
          </div>

          {/* ===================================================
              TABLET / MOBILE ACTIONS
              
              Contact Us is intentionally always visible.
          =================================================== */}

          <div className="flex items-center gap-1.5 xl:hidden">
            <ThemeToggle />

            {/* Compact Contact Us */}
            <MagneticButton
              href="/contact"
              variant="primary"
              className="!px-3 !py-2 !text-xs sm:!px-4 sm:!py-2.5 sm:!text-sm"
              onClick={startNavigation}
            >
              Contact Us
            </MagneticButton>

            {/* Menu */}
            <button
              type="button"
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={mobileOpen}
            >
              <motion.div
                animate={{
                  rotate: mobileOpen ? 90 : 0,
                }}
                transition={{
                  duration: 0.3,
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
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              exit={{
                opacity: 0,
                scaleX: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left overflow-hidden"
            >
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan shadow-[0_0_12px_rgba(59,130,246,0.7)]"
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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            {/* Background overlay */}

            <motion.div
              className="absolute inset-0 bg-overlay backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile drawer */}

            <motion.nav
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="absolute bottom-0 right-0 top-0 flex w-full max-w-sm flex-col gap-1 overflow-y-auto glass-strong p-8 pt-24"
            >
              {/* Mobile navigation links */}

              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      startNavigation();
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "block border-b border-border py-3 text-xl font-medium transition-colors",
                      isActive(link.href)
                        ? "text-foreground"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile actions */}

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
                className="mt-8 flex flex-col gap-3"
              >
                <MagneticButton
                  href="/authentication"
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    startNavigation();
                    setMobileOpen(false);
                  }}
                >
                  Login
                </MagneticButton>

                <AnimatePresence initial={false}>
                  {!mobileOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, width: 0 }}
                      animate={{ opacity: 1, scale: 1, width: "auto" }}
                      exit={{ opacity: 0, scale: 0.9, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <MagneticButton
                        href="/contact"
                        variant="primary"
                        className="!px-3 !py-2 !text-xs sm:!px-4 sm:!py-2.5 sm:!text-sm"
                        onClick={startNavigation}
                      >
                        Contact Us
                      </MagneticButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}