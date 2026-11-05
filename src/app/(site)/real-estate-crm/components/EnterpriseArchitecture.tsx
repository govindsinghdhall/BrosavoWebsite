"use client";

import { motion } from "framer-motion";

export default function EnterpriseArchitecture() {
  return (
    <section
      aria-labelledby="enterprise-architecture-heading"
      className="relative py-12 sm:py-14 lg:py-16"
    >
      <div className="container-wide px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-violet-500/15 bg-violet-500/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-500">
            Enterprise Architecture
          </span>

          <h2
            id="enterprise-architecture-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Enterprise-Grade Real Estate
            <br />
            <span className="text-gradient-accent">CRM & ERP Platform</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Built for large organizations with multi-tenant data architecture,
            role-based access controls, and enterprise-grade security.
          </p>
        </motion.div>
      </div>
    </section>
  );
}