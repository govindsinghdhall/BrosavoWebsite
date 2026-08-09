"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FEATURED_PRODUCT, PRODUCTS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  MessageSquare,
  Shield,
  Users,
  BarChart3,
} from "lucide-react";

const CAPABILITY_ICONS = [
  Users,
  Building2,
  Shield,
  MessageSquare,
  Calendar,
  BarChart3,
] as const;

function CrmDashboardVisual({ priority = false }: { priority?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.22),transparent_50%)] blur-2xl md:-inset-8"
      />

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="relative mx-auto w-full max-w-[768px] overflow-hidden rounded-2xl border border-border/80 bg-background shadow-[0_30px_100px_rgba(0,0,0,0.18)] md:rounded-[1.75rem]"
      >
        <div className="flex items-center gap-2 border-b border-border/70 bg-surface/40 px-4 py-3 md:px-5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="ml-3 flex flex-1 items-center justify-center">
            <div className="rounded-full bg-background/80 px-4 py-1 text-[10px] font-mono tracking-wide text-muted">
              app.brosavo.com / dashboard
            </div>
          </div>
        </div>

        <div className="relative aspect-[3/2] w-full bg-surface">
          <Image
            src={FEATURED_PRODUCT.image}
            alt={FEATURED_PRODUCT.imageAlt}
            fill
            priority={priority}
            sizes="768px"
            className="object-contain object-top"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedCrm() {
  return (
    <section id="real-estate-crm" className="relative scroll-mt-28">
      <div className="container-wide">
        <div className="mb-10 max-w-3xl md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-blue/25 bg-accent-blue/10 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-accent-blue"
          >
            <span>Featured product</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            {FEATURED_PRODUCT.name}

            <span className="mt-2 block text-2xl text-gradient-accent sm:text-3xl md:text-4xl">
              {FEATURED_PRODUCT.tagline}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {FEATURED_PRODUCT.description}
          </motion.p>
        </div>

        <div className="mb-12 md:mb-16">
          <CrmDashboardVisual priority />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm leading-relaxed text-foreground/80 md:text-base"
            >
              {FEATURED_PRODUCT.summary}
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-2">
              {FEATURED_PRODUCT.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-surface/50 px-3 py-1.5 text-xs font-mono text-foreground/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href="/contact"
                variant="primary"
                className="!px-7 !py-3.5 !text-sm"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton
                href="#more-products"
                variant="secondary"
                className="!px-7 !py-3.5 !text-sm"
              >
                More platforms
              </MagneticButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURED_PRODUCT.capabilities.map((capability, i) => {
              const Icon = CAPABILITY_ICONS[i] ?? Building2;

              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-2xl border border-border/60 bg-background/40 p-4"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="text-sm font-semibold tracking-tight">
                    {capability.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      id={product.id}
      className="group w-[85vw] flex-shrink-0 scroll-mt-28 sm:w-[70vw] md:w-[500px] lg:w-[600px]"
    >
      <div className="glass h-full overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:border-border">
        <div
          className="relative h-48 overflow-hidden md:h-64"
          style={{
            background: `linear-gradient(135deg, ${product.color}15, transparent)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-strong h-[70%] w-[80%] rounded-xl p-4 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="mb-4 flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: product.color }}
                />
                <div className="h-2 w-24 rounded-full bg-surface-hover" />
              </div>

              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-surface" />
                <div className="h-2 w-3/4 rounded-full bg-surface" />
                <div className="h-2 w-1/2 rounded-full bg-surface" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-12 rounded-lg bg-surface" />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${product.color}10, transparent 70%)`,
            }}
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="mb-1 text-2xl font-semibold tracking-tight">
                {product.name}
              </h3>

              <p
                className="text-sm font-mono"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.metrics.map((metric) => (
              <span
                key={metric}
                className="glass rounded-full px-3 py-1.5 text-xs font-mono text-foreground/60"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Products({ showHeader = true }: { showHeader?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-15%"]
  );

  const secondaryProducts = PRODUCTS.filter(
    (product) => !product.featured
  );

  return (
    <div className="relative overflow-hidden">
      <div className="section-padding !pb-8 md:!pb-12">
        {showHeader && (
          <div className="container-wide mb-16">
            <SectionHeader
              label="Products"
              title="Software built for modern businesses"
              description="Explore software products and platforms built by Brosavo for real-world business needs, from customer management and automation to AI-powered solutions."
            />
          </div>
        )}

        <FeaturedCrm />
      </div>

      <section
        id="more-products"
        className="section-padding relative !pt-10 scroll-mt-24 md:!pt-16"
      >
        <div className="container-wide mb-10 md:mb-14">
          <SectionHeader
            label="More platforms"
            title="Complementary products"
            description="Extend your technology stack with focused tools for lead conversion, messaging, intelligent assistance, and other business workflows."
            compact
          />
        </div>

        <div ref={containerRef} className="relative">
          <div className="scrollbar-hide overflow-x-auto pb-8">
            <motion.div
              style={{ x }}
              className="flex gap-6 px-4 md:px-8 lg:px-[max(2rem,calc((100vw-1400px)/2+2rem))]"
            >
              {secondaryProducts.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                />
              ))}
            </motion.div>
          </div>

          <div className="pointer-events-none absolute bottom-8 right-0 top-0 w-32 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>
    </div>
  );
}