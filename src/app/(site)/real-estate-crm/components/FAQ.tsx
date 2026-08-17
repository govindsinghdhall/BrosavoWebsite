"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is a real estate CRM?",
    answer:
      "A real estate CRM is software that helps agents, brokers, agencies and sales teams manage leads, customers, property inventory, follow-ups and sales opportunities from one centralized platform. Instead of managing information across spreadsheets and disconnected tools, a CRM brings the sales workflow together in one place.",
  },

  {
    question: "Who is Brosavo Real Estate CRM for?",
    answer:
      "Brosavo Real Estate CRM is designed for individual real estate agents, brokers, real estate agencies, sales teams and property developers. It helps teams manage leads, properties, customer requirements, follow-ups, sales pipelines and team activity from one platform.",
  },

  {
    question: "What features are included in Brosavo Real Estate CRM?",
    answer:
      "Brosavo combines lead management, customer management, property inventory, property matching, sales pipeline management, follow-ups and tasks, WhatsApp workflows, website lead capture, analytics, team management and mobile CRM capabilities.",
  },

  {
    question: "Does Brosavo include a real estate website?",
    answer:
      "Yes. The Starter plan includes a professional website with property listings and lead capture. The Professional plan adds advanced website capabilities, including blog, SEO tools and property portal capabilities.",
  },

  {
    question: "Does Brosavo support WhatsApp for real estate sales?",
    answer:
      "Yes. Starter includes WhatsApp notifications, while the Professional plan includes WhatsApp API integration. This allows real estate teams to keep customer communication closer to their CRM sales workflow.",
  },

  {
    question: "Does Brosavo integrate with 99acres?",
    answer:
      "99acres integration is available as part of the Professional website and property portal capabilities. The specific integration capabilities depend on the supported workflow and configuration.",
  },

  {
    question: "Does Brosavo integrate with Magicbricks and Housing.com?",
    answer:
      "Brosavo is designed to bring property channels, listings, enquiries and customer requirements closer to the same CRM workflow. Specific portal integrations and supported capabilities depend on the available integration and configuration.",
  },

  {
    question: "Does Brosavo have AI features?",
    answer:
      "Yes. Brosavo includes AI capabilities designed to help real estate teams work more efficiently, surface customer insights and support recommendations and next-best actions within the sales workflow.",
  },

  {
    question: "Can Brosavo capture leads from a real estate website?",
    answer:
      "Yes. Brosavo can capture property enquiries from a professional real estate website and bring those enquiries into the CRM workflow so your team can qualify, assign and follow up with prospects.",
  },

  {
    question: "Can Brosavo manage property inventory?",
    answer:
      "Yes. Brosavo includes property inventory management for listings, availability, pricing and property information. Teams can keep property information closer to customer requirements and sales opportunities.",
  },

  {
    question: "Does Brosavo have a sales pipeline?",
    answer:
      "Yes. Brosavo provides a structured sales pipeline where teams can move opportunities through different stages, assign ownership and understand which opportunities are progressing or need attention.",
  },

  {
    question: "Can Brosavo manage real estate team members?",
    answer:
      "Yes. Team management capabilities allow businesses to manage users, permissions, assignments and responsibilities from a centralized real estate CRM.",
  },

  {
    question: "Does Brosavo have a mobile CRM app?",
    answer:
      "Yes. The Brosavo mobile app is available as an add-on. It is designed to keep sales teams connected to leads, customers and property information when they are away from their desks.",
  },

  {
    question: "Does Brosavo provide calling?",
    answer:
      "Calling is not currently included as a standard Brosavo CRM feature.",
  },

  {
    question: "Does Brosavo offer a free trial?",
    answer:
      "Yes. Starter and Professional plans include a 14-day free trial, allowing teams to evaluate the platform before choosing a paid plan.",
  },

  {
    question: "How much does Brosavo Real Estate CRM cost?",
    answer:
      "Brosavo Starter costs ₹999 per month, Professional costs ₹2,499 per month and Enterprise pricing is customized based on the organization's requirements. Starter and Professional include a 14-day free trial.",
  },

  {
    question: "Is Brosavo suitable for real estate agencies and developers?",
    answer:
      "Yes. Brosavo is designed for individual agents as well as brokers, agencies, sales teams and property developers. Enterprise capabilities include multiple users, websites and branches, custom integrations, API access, advanced permissions and data migration.",
  },

  {
    question: "Can Brosavo replace spreadsheets for real estate sales?",
    answer:
      "Brosavo is designed to centralize the information that real estate teams commonly manage across spreadsheets and disconnected tools, including leads, customers, properties, follow-ups, sales opportunities and team activity.",
  },
] as const;

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[760px] -translate-x-1/2 rounded-full bg-violet-500/[0.025] blur-[120px]"
      />

      <div className="container-wide relative">
        <div className="mx-auto max-w-4xl">

          {/* ========================================================
              HEADER
          ======================================================== */}

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
          >
            <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-violet">
              Real Estate CRM FAQ
            </span>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl"
            >
              Frequently asked
              <br />
              <span className="text-gradient-accent">
                questions.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Answers to common questions about Brosavo Real Estate CRM,
              features, pricing, integrations and how it fits into a real
              estate sales workflow.
            </p>
          </motion.div>

          {/* ========================================================
              FAQ LIST
          ======================================================== */}

          <div className="mt-8 space-y-2.5">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.025, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group overflow-hidden rounded-2xl border border-border/70 bg-background transition-colors duration-300 hover:border-violet-500/15"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4.5 text-sm font-medium text-foreground sm:px-6 sm:py-5">
                  <span className="pr-4">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 text-base font-normal text-muted transition-all duration-300 group-open:rotate-45 group-open:border-violet-500/20 group-open:text-accent-violet"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-border/60">
                  <div className="px-5 py-4 text-sm leading-7 text-muted sm:px-6 sm:py-5">
                    {faq.answer}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>

          {/* ========================================================
              BOTTOM NOTE
          ======================================================== */}

          <div className="mt-8 flex items-center justify-center gap-3 text-center text-[9px] uppercase tracking-[0.16em] text-muted/45">
            <span className="h-px w-8 bg-border" />

            <span>
              Real estate CRM · Sales · Properties · Customers
            </span>

            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}