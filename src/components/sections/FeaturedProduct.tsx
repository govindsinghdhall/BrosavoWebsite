"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FEATURED_PRODUCT } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  ArrowRight,
  Building2,
  MessageSquare,
  Users,
  BarChart3,
  CalendarCheck,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Users,
    label: "Lead management",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp automation",
  },
  {
    icon: Building2,
    label: "Property management",
  },
  {
    icon: BarChart3,
    label: "Sales pipeline",
  },
  {
    icon: CalendarCheck,
    label: "Site visits & follow-ups",
  },
] as const;

export function FeaturedProduct() {
  return (
    <section
      id="real-estate-solutions"
      aria-labelledby="real-estate-solutions-heading"
      className="relative section-padding !py-16 md:!py-24 overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[10%] h-64 w-64 rounded-full bg-accent-violet/10 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div>
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan"
            >
              <span className="h-px w-8 bg-accent-cyan/50" />
              Real Estate Technology · Brosavo
            </motion.span>

            {/* Heading */}
            <motion.h2
              id="real-estate-solutions-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl leading-[1.08]"
            >
              Real Estate CRM and Automation for Modern Teams
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-xl text-base text-muted leading-relaxed"
            >
              Brosavo&apos;s Real Estate CRM brings lead management,
              property management, WhatsApp automation, sales pipelines,
              site visits, and follow-ups together in one platform. Give your
              real estate team the tools to capture leads, manage
              relationships, automate communication, and move more
              opportunities from enquiry to closing.
            </motion.p>

            {/* =====================================================
                HIGHLIGHTS
            ===================================================== */}
            <div className="mt-6 flex flex-wrap gap-2">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-foreground/75"
                >
                  <Icon className="h-3.5 w-3.5 text-accent-blue" />
                  {label}
                </span>
              ))}
            </div>

            {/* =====================================================
                CTA
            ===================================================== */}
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href="/real-estate-crm"
                variant="primary"
                className="!px-7 !py-3.5 !text-sm"
              >
                See Brosavo Real Estate CRM
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors px-2"
              >
                Book a demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* =====================================================
                SUPPORTING SEO / AEO COPY
            ===================================================== */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-xl text-xs leading-6 text-muted/80"
            >
              Built for realtors, brokers, agencies, builders, and real
              estate developers looking to centralize sales and automate
              everyday workflows.
            </motion.p>
          </div>

          {/* =====================================================
              PRODUCT PREVIEW
          ===================================================== */}
          <Link
            href="/real-estate-crm"
            className="group block"
            aria-label="Open the Brosavo Real Estate CRM product page"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_40%_30%,rgba(59,130,246,0.22),transparent_55%)] blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Browser Frame */}
              <div className="relative mx-auto w-full max-w-[768px] overflow-hidden rounded-[1.5rem] border border-border/80 bg-background shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-border/60 bg-surface/40 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>

                  <span className="ml-2 text-[10px] font-mono text-muted tracking-wide">
                    Brosavo · Real Estate CRM
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={FEATURED_PRODUCT.image}
                    alt={
                      FEATURED_PRODUCT.imageAlt ||
                      "Brosavo Real Estate CRM dashboard showing lead management, property management, sales pipeline, and business analytics"
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}