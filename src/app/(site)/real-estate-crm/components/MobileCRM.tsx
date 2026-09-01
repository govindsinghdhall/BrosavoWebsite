"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const mobileCapabilities = [
  {
    number: "01",
    title: "Stay Connected",
    description:
      "Access leads, customers and property information wherever your team is working.",
  },
  {
    number: "02",
    title: "Respond Faster",
    description:
      "Keep important customer activity within reach when you're away from the desk.",
  },
  {
    number: "03",
    title: "Keep Moving",
    description:
      "Give your sales team the information they need to keep opportunities moving.",
  },
];

export default function MobileCRM() {
  return (
    <section
      aria-labelledby="mobile-crm-heading"
      className="section-padding"
    >
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* ============================================================
            PRODUCT VISUAL
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-2xl lg:order-1"
        >
          {/* Visual glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[90px]"
          />

          {/* Product frame */}

          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src="/images/MOBILE CRM APP VISUAL.png"
                alt="Brosavo Real Estate CRM mobile application for managing leads, customers and property information"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-xl lg:order-2"
        >
          {/* Eyebrow */}

          <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
            Mobile CRM
          </span>

          {/* Heading */}

          <p
            id="mobile-crm-heading"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl"
          >
            Take your real estate sales
            <br />
            <span className="text-gradient-accent">
              operation with you.
            </span>
          </p>

          {/* Description */}

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Access leads, customers and property information from your mobile
            device while meeting prospects or visiting properties. BROSAVO
            Real Estate CRM keeps field teams connected to follow-ups,
            pipeline updates and customer context without waiting to get back
            to the office.
          </p>

          {/* ==========================================================
              MOBILE CAPABILITIES
          ========================================================== */}

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {mobileCapabilities.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-border/70 bg-background/60 p-3.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-accent-blue/70">
                    {item.number}
                  </span>

                  <p className="text-xs font-semibold text-foreground">
                    {item.title}
                  </p>
                </div>

                <p className="mt-1.5 text-[11px] leading-5 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ==========================================================
              ADD-ON NOTE
          ========================================================== */}

          <div className="mt-5 inline-flex items-center rounded-full border border-accent-blue/20 bg-accent-blue/[0.05] px-4 py-2 text-xs font-medium text-accent-blue">
            Mobile app available as an add-on
          </div>
        </motion.div>
      </div>
    </section>
  );
}