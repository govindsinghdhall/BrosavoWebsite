"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/data";
import { BlurReveal } from "@/components/animations/TextReveal";
import {
  Globe,
  Shield,
  Brain,
  Layers,
  Handshake,
  BarChart3,
} from "lucide-react";

const ICON_MAP = {
  globe: Globe,
  shield: Shield,
  brain: Brain,
  layers: Layers,
  handshake: Handshake,
  chart: BarChart3,
} as const;

export function WhyUsContent() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];

            return (
              <BlurReveal key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass h-full rounded-2xl border border-border p-8 transition-all duration-500 hover:border-border"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-violet/10">
                    <Icon className="h-6 w-6 text-accent-violet" />
                  </div>

                  <h2 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.div>
              </BlurReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}