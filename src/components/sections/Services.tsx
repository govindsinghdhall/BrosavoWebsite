"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Brain,
  Code,
  Cloud,
  Building2,
  CreditCard,
  Server,
  Smartphone,
  Zap,
  RefreshCw,
  Database,
  Layers,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  brain: Brain,
  code: Code,
  cloud: Cloud,
  building: Building2,
  "credit-card": CreditCard,
  server: Server,
  smartphone: Smartphone,
  zap: Zap,
  refresh: RefreshCw,
  database: Database,
  layers: Layers,
} as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const Icon =
    ICON_MAP[service.icon as keyof typeof ICON_MAP];

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    x.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    y.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-40px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "glass border border-border/70",
        "p-5 md:p-6",
        "transition-colors duration-500",
        "hover:border-border",
        "cursor-default",
        service.span
      )}
    >
      {/* Hover gradient */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-gradient-to-br",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-700",
          service.gradient
        )}
      />

      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700"
        style={{
          backgroundColor: service.accent,
        }}
        animate={
          hovered
            ? {
                scale: [1, 1.15, 1],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundColor: `${service.accent}15`,
            color: service.accent,
          }}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Title */}
        <h3 className="mb-2.5 text-lg font-semibold tracking-tight md:text-xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {/* Learn more */}
        <motion.div
          className="mt-5 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            color: service.accent,
          }}
        >
          <span>Explore service</span>

          <motion.span
            animate={
              hovered
                ? {
                    x: [0, 4, 0],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Services({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  return (
    <section className="relative section-padding !pt-8 md:!pt-10 !pb-16 md:!pb-24">
      <div className="container-wide">
        {showHeader && (
          <SectionHeader
            label="Software & Technology"
            title="Technology Solutions Built Around Your Business"
            description="Brosavo designs and builds custom software, AI solutions, SaaS platforms, automation systems, cloud infrastructure, and industry-specific technology that helps businesses operate, automate, and scale."
          />
        )}

        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-sm leading-relaxed text-muted">
            Explore our technology capabilities across software
            development, artificial intelligence, SaaS, cloud,
            automation, enterprise systems, and real estate
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)]">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}