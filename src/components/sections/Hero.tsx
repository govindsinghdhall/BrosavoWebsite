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
          flex-col
          justify-between
          px-6
          py-8
          sm:px-8
          lg:px-12
          xl:px-16
          lg:py-10
          pt-20
          sm:pt-24
          lg:pt-28
        "
      >
        {/* Main content wrapper - centered vertically */}
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
            flex-1
            flex-col
            items-center
            justify-center
            text-center
            lg:items-start
            lg:text-left
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
              mb-6
              w-full
              max-w-[880px]
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
                mb-3
                block
                w-fit
                text-foreground/60
                text-[clamp(1.2rem,4vw,2rem)]
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
                  w-10
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
                text-[clamp(1.5rem,6vw,3.5rem)]
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
                text-[clamp(1.5rem,6vw,3.5rem)]
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
              mb-8
              max-w-[640px]
              text-sm
              leading-7
              text-muted
              sm:text-base
              sm:leading-8
              lg:text-[1rem]
              lg:leading-8
            "
          >
            Brosavo is a global software and technology company
            building custom software, AI solutions, SaaS platforms,
            and digital products for modern businesses — including{" "}
            <br />
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
              CTA BUTTONS - FIXED VERSION
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
                whitespace-nowrap
                !px-4
                !py-3.5
                !text-xs
                sm:w-auto
                sm:!px-8
                sm:!py-4
                sm:!text-sm
                lg:!px-10
              "
            >
              Explore Our Solutions
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </MagneticButton>

            <MagneticButton
              href="/contact"
              variant="secondary"
              className="
                w-full
                justify-center
                whitespace-nowrap
                !px-4
                !py-3.5
                !text-xs
                sm:w-auto
                sm:!px-8
                sm:!py-4
                sm:!text-sm
                lg:!px-10
              "
            >
              Build With Brosavo
            </MagneticButton>
          </motion.div>
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
            mt-8
            grid
            w-full
            grid-cols-2
            gap-2
            sm:grid-cols-4
            sm:gap-3
            lg:mt-6
          "
        >
          {/* -------------------------------------------------
              GLOBAL REACH
          ------------------------------------------------- */}
          <div
            className="
              group
              flex
              min-h-[60px]
              items-center
              gap-2.5
              rounded-xl
              border
              border-border/60
              bg-background/60
              px-3
              py-2.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent-blue/30
              hover:bg-background/80
              sm:min-h-[76px]
              sm:gap-3
              sm:px-4
              sm:py-3.5
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-accent-blue/10
                transition-transform
                duration-300
                group-hover:scale-105
                sm:h-10
                sm:w-10
              "
            >
              <Globe2 className="h-4 w-4 text-accent-blue sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs">
                Global Reach
              </p>
              <p className="mt-0.5 truncate text-[10px] leading-3 text-muted sm:text-[11px] sm:leading-4">
                Serving worldwide
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
              min-h-[60px]
              items-center
              gap-2.5
              rounded-xl
              border
              border-border/60
              bg-background/60
              px-3
              py-2.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent-blue/30
              hover:bg-background/80
              sm:min-h-[76px]
              sm:gap-3
              sm:px-4
              sm:py-3.5
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-accent-blue/10
                transition-transform
                duration-300
                group-hover:scale-105
                sm:h-10
                sm:w-10
              "
            >
              <Users className="h-4 w-4 text-accent-blue sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs">
                Business Focus
              </p>
              <p className="mt-0.5 truncate text-[10px] leading-3 text-muted sm:text-[11px] sm:leading-4">
                For modern teams
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
              min-h-[60px]
              items-center
              gap-2.5
              rounded-xl
              border
              border-border/60
              bg-background/60
              px-3
              py-2.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent-violet/30
              hover:bg-background/80
              sm:min-h-[76px]
              sm:gap-3
              sm:px-4
              sm:py-3.5
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-accent-violet/10
                transition-transform
                duration-300
                group-hover:scale-105
                sm:h-10
                sm:w-10
              "
            >
              <ShieldCheck className="h-4 w-4 text-accent-violet sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs">
                Trusted Technology
              </p>
              <p className="mt-0.5 truncate text-[10px] leading-3 text-muted sm:text-[11px] sm:leading-4">
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
              min-h-[60px]
              items-center
              gap-2.5
              rounded-xl
              border
              border-border/60
              bg-background/60
              px-3
              py-2.5
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent-cyan/30
              hover:bg-background/80
              sm:min-h-[76px]
              sm:gap-3
              sm:px-4
              sm:py-3.5
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-accent-cyan/10
                transition-transform
                duration-300
                group-hover:scale-105
                sm:h-10
                sm:w-10
              "
            >
              <Rocket className="h-4 w-4 text-accent-cyan sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs">
                Innovative Solutions
              </p>
              <p className="mt-0.5 truncate text-[10px] leading-3 text-muted sm:text-[11px] sm:leading-4">
                Built for growth
              </p>
            </div>
          </div>
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