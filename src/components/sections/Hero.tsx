"use client";

import { useState, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ParticleScene = dynamic(
  () =>
    import("@/components/three/Particles").then(
      (m) => m.Particles
    ),
  { ssr: false }
);

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 8;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 8;

    setPointer({ x, y });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background mesh-gradient noise-overlay">
      {/* =========================================================
          HERO BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* ---------------------------------------------------------
            Desktop Background Only
            ---------------------------------------------------------
            Hidden below lg so mobile/tablet has a clean background.
        --------------------------------------------------------- */}
        <div className="absolute bottom-0 right-0 top-24 hidden w-[56%] mask-[linear-gradient(to_right,transparent,black_22%)] lg:block">
          <Image
            src="/wallpapers/hero-day.png"
            alt="Brosavo software and technology solutions"
            fill
            priority
            sizes="56vw"
            className="object-cover object-center dark:hidden"
          />

          <Image
            src="/wallpapers/hero-night.png"
            alt="Brosavo software and technology solutions"
            fill
            priority
            sizes="56vw"
            className="hidden object-cover object-center dark:block"
          />
        </div>

        {/* Desktop Gradient */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-background via-background/20 to-transparent lg:block" />

        {/* Desktop Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-linear-to-t from-background to-transparent lg:block" />
      </div>

      {/* =========================================================
          PARTICLES
      ========================================================= */}
      <ParticleScene
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          opacity-40
        "
      />

      {/* =========================================================
          VISUAL EFFECTS
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Radial gradients */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_35%)]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[34rem]
            w-[34rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-accent-cyan/10
            blur-[140px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute
            left-[8%]
            top-[18%]
            h-40
            w-40
            rounded-full
            bg-accent-blue/20
            blur-[90px]
            animate-float
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            bottom-[10%]
            right-[8%]
            h-56
            w-56
            rounded-full
            bg-accent-violet/20
            blur-[110px]
            animate-float
          "
          style={{ animationDelay: "-3.5s" }}
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:72px_72px]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_55%,transparent_100%)]
            opacity-40
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        onMouseMove={handlePointerMove}
        onMouseLeave={() =>
          setPointer({
            x: 0,
            y: 0,
          })
        }
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          items-center
          px-6
          py-24
          sm:px-8
          lg:justify-start
          lg:px-12
          xl:px-16
          lg:pt-32
        "
      >
        <motion.div
          animate={{
            x: pointer.x * 0.45,
            y: pointer.y * 0.45,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 18,
            mass: 0.2,
          }}
          className="
            flex
            w-full
            min-w-0
            flex-col
            items-center
            text-center
            lg:max-w-[860px]
            lg:items-start
            lg:text-left
            xl:max-w-[880px]
            max-lg:!translate-x-0
            max-lg:!translate-y-0
          "
        >
          {/* =====================================================
              HEADING
          ===================================================== */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.9,
            }}
            className="
              mb-7
              w-full
              min-w-0
              max-w-[880px]
              px-0
              font-black
              tracking-[-0.04em]
              text-foreground
              sm:tracking-[-0.055em]
            "
          >
            {/* -------------------------------------------------
                BRAND NAME
            ------------------------------------------------- */}
            <span
              className="
                relative
                mx-auto
                mb-4
                block
                w-fit
                text-foreground/60
                text-[clamp(1.5rem,6vw,2.5rem)]
                leading-none
                lg:mx-0
              "
            >
              BROS
              <span
                className="
                  bg-linear-to-r
                  from-accent-blue
                  via-accent-violet
                  to-accent-cyan
                  bg-clip-text
                  text-transparent
                "
              >
                A
              </span>
              VO

              {/* Brand accent line */}
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-0.75
                  w-12
                  rounded-full
                  bg-linear-to-r
                  from-accent-blue
                  via-accent-violet
                  to-accent-cyan
                  opacity-70
                "
              />
            </span>

            {/* -------------------------------------------------
                MAIN HEADLINE
            ------------------------------------------------- */}
            <span
              className="
                block
                text-[clamp(1.7rem,7.4vw,4.25rem)]
                leading-[1.12]
                text-balance
                sm:leading-[1.06]
                lg:leading-[1.02]
              "
            >
              Software &amp; Technology
            </span>

            {/* -------------------------------------------------
                GRADIENT HEADLINE
            ------------------------------------------------- */}
            <span
              className="
                mt-1
                block
                bg-[length:200%_100%]
                text-gradient-accent
                text-[clamp(1.7rem,7.4vw,4.25rem)]
                leading-[1.12]
                text-balance
                sm:mt-2
                sm:leading-[1.06]
                lg:leading-[1.02]
              "
            >
              for Modern Businesses
            </span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              mb-9
              max-w-[640px]
              text-base
              leading-7
              text-muted
              sm:text-lg
              sm:leading-8
              lg:text-[1.1rem]
              lg:leading-8
            "
          >
            Brosavo is a global software and technology company
            building custom software, AI solutions, SaaS platforms,
            and digital products for modern businesses — including{" "}
            <strong className="font-semibold text-foreground">
              Real Estate CRM
            </strong>
            , Lead Management,{" "}
            <strong className="font-semibold text-foreground">
              WhatsApp Automation
            </strong>
            , property management, and sales solutions.
          </motion.p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
            className="
              flex
              w-full
              min-w-0
              flex-col
              items-stretch
              gap-3
              sm:w-auto
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            <MagneticButton
              href="/services"
              variant="primary"
              className="
                w-full
                justify-center
                !px-6
                !py-3.5
                !text-sm
                sm:w-auto
                sm:!px-10
                sm:!py-4
              "
            >
              Explore Our Solutions
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              href="/contact"
              variant="secondary"
              className="
                w-full
                justify-center
                !px-6
                !py-3.5
                !text-sm
                sm:w-auto
                sm:!px-10
                sm:!py-4
              "
            >
              Build With Brosavo
            </MagneticButton>
          </motion.div>

          {/* =====================================================
              TRUST / VALUE CARDS
          ===================================================== */}
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
              delay: 0.6,
              duration: 0.8,
            }}
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-3
            "
          >
            {/* -------------------------------------------------
                GLOBAL REACH
            ------------------------------------------------- */}
            <div
              className="
                group
                flex
                min-h-[76px]
                items-center
                gap-3
                rounded-xl
                border
                border-border/60
                bg-background/60
                px-3
                py-3
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent-blue/30
                hover:bg-background/80
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-accent-blue/10
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Globe2 className="h-5 w-5 text-accent-blue" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">
                  Global Reach
                </p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted">
                  Serving businesses worldwide
                </p>
              </div>
            </div>

            {/* -------------------------------------------------
                BUSINESS FOCUS
            ------------------------------------------------- */}
            <div
              className="
                group
                flex
                min-h-[76px]
                items-center
                gap-3
                rounded-xl
                border
                border-border/60
                bg-background/60
                px-3
                py-3
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent-blue/30
                hover:bg-background/80
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-accent-blue/10
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Users className="h-5 w-5 text-accent-blue" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">
                  Business Focus
                </p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted">
                  Built for modern teams
                </p>
              </div>
            </div>

            {/* -------------------------------------------------
                TRUSTED TECHNOLOGY
            ------------------------------------------------- */}
            <div
              className="
                group
                flex
                min-h-[76px]
                items-center
                gap-3
                rounded-xl
                border
                border-border/60
                bg-background/60
                px-3
                py-3
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent-violet/30
                hover:bg-background/80
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-accent-violet/10
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <ShieldCheck className="h-5 w-5 text-accent-violet" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">
                  Trusted Technology
                </p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted">
                  Secure &amp; reliable
                </p>
              </div>
            </div>

            {/* -------------------------------------------------
                INNOVATIVE SOLUTIONS
            ------------------------------------------------- */}
            <div
              className="
                group
                flex
                min-h-[76px]
                items-center
                gap-3
                rounded-xl
                border
                border-border/60
                bg-background/60
                px-3
                py-3
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-accent-cyan/30
                hover:bg-background/80
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-accent-cyan/10
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Rocket className="h-5 w-5 text-accent-cyan" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">
                  Innovative Solutions
                </p>
                <p className="mt-0.5 text-[11px] leading-4 text-muted">
                  Built for growth
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 bg-white/10 p-1 backdrop-blur-sm">
          <div className="h-2.5 w-1 rounded-full bg-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
}