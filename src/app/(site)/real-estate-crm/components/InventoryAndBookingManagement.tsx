"use client";

import { motion } from "framer-motion";

export default function InventoryAndBookingManagement() {
  return (
    <section
      aria-labelledby="inventory-booking-heading"
      className="relative py-12 sm:py-14 lg:py-16"
    >
      <div className="container-wide px-6 lg:px-10">
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

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
            Inventory & Booking
          </span>

          <h2
            id="inventory-booking-heading"
            className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            Property Inventory & Booking
            <br />
            <span className="text-gradient-accent">Management System</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Comprehensive property hierarchy, pricing management and booking
            lifecycle tracking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}