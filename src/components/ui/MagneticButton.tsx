"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function LoadingSpinner() {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
      aria-hidden="true"
    />
  );
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [loading, setLoading] = useState(false);

  const isDisabled = disabled || loading;

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    if (isDisabled) return;

    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    setPosition({
      x: x * 0.3,
      y: y * 0.3,
    });
  };

  const reset = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]",

    secondary:
      "glass text-foreground hover:bg-surface-hover hover:border-glass-border",

    ghost:
      "text-foreground/70 hover:text-foreground hover:bg-surface",
  };

  const baseClassName = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300",
    "cursor-pointer",
    variants[variant],
    isDisabled && "cursor-not-allowed opacity-60",
    className
  );

  /*
   * Keep the original content in the layout at all times.
   * The spinner is positioned absolutely on top of it.
   *
   * This guarantees that loading does NOT change the
   * button width or height.
   */
  const buttonContent = (
    <>
      <span
        className={cn(
          "relative z-10 inline-flex items-center justify-center gap-2 [&_svg]:shrink-0",
          loading && "opacity-0"
        )}
      >
        {children}
      </span>

      {loading && (
        <span className="absolute inset-0 z-20 flex items-center justify-center">
          <LoadingSpinner />
        </span>
      )}

      {variant === "primary" && !loading && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10 opacity-0"
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      )}
    </>
  );

  /*
   * External links
   */
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <motion.a
          ref={ref}
          href={isDisabled ? undefined : href}
          target={
            href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          aria-disabled={isDisabled}
          aria-busy={loading}
          onClick={(event) => {
            if (isDisabled) {
              event.preventDefault();
              return;
            }

            setLoading(true);
            onClick?.();
          }}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{
            x: position.x,
            y: position.y,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
          className={baseClassName}
        >
          {buttonContent}
        </motion.a>
      );
    }

    /*
     * Internal Next.js links
     */
    return (
      <Link
        href={href}
        prefetch
        aria-disabled={isDisabled}
        aria-busy={loading}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={(event) => {
          if (isDisabled) {
            event.preventDefault();
            return;
          }

          setLoading(true);
          onClick?.();
        }}
        className={cn(
          "inline-block",
          className?.includes("w-full") && "block w-full"
        )}
      >
        <motion.span
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{
            x: position.x,
            y: position.y,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
          className={baseClassName}
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  /*
   * Normal buttons / form buttons
   */
  return (
    <motion.button
      type={type}
      ref={ref}
      disabled={isDisabled}
      aria-busy={loading}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={baseClassName}
      onClick={onClick}
    >
      {buttonContent}
    </motion.button>
  );
}