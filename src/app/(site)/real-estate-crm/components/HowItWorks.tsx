"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Capture",
    text: "Bring enquiries into your CRM through your website and connected channels.",
  },
  {
    number: "02",
    title: "Qualify",
    text: "Understand customer requirements and identify the right opportunities.",
  },
  {
    number: "03",
    title: "Follow Up",
    text: "Use tasks, reminders and communication workflows to keep deals moving.",
  },
  {
    number: "04",
    title: "Close",
    text: "Track opportunities through your pipeline and understand performance.",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[35%] h-72 w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[120px]" />
      </div>

      <div className="container-wide relative">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-500/15 bg-cyan-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-cyan">
            How It Works
          </span>

          <h2
            id="how-it-works-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            From first enquiry
            <br />
            <span className="text-gradient-accent">
              to closed deal.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            Create a repeatable real estate sales process that your entire
            team can follow, from the first enquiry through conversion.
          </p>
        </motion.div>

        {/* ============================================================
            PROCESS
        ============================================================ */}

        <div className="relative mx-auto mt-10 max-w-6xl">

          {/* Desktop connecting line */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-blue-500/20 via-violet-500/25 to-cyan-500/20 lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}

                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent-blue/25 bg-background text-sm font-semibold text-accent-blue shadow-[0_8px_25px_rgba(59,130,246,0.06)] lg:mx-0">
                  {step.number}
                </div>

                {/* Content */}

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground sm:text-xl">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2.5 max-w-[240px] text-sm leading-6 text-muted lg:mx-0">
                  {step.text}
                </p>

                {/* Mobile connector */}

                {index !== steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mx-auto mt-8 h-8 w-px bg-border sm:hidden"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* ============================================================
            BOTTOM MICRO-LINE
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-9 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.16em] text-muted/50"
        >
          <span className="h-px w-8 bg-border" />

          <span>
            One repeatable sales workflow
          </span>

          <span className="h-px w-8 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}