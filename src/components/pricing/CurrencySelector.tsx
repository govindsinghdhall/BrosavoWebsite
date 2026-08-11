"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { CURRENCIES, type CurrencyCode } from "@/lib/currency";
import { cn } from "@/lib/utils";

interface CurrencySelectorProps {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  className?: string;
}

export function CurrencySelector({
  currency,
  setCurrency,
  className,
}: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current =
    CURRENCIES.find((item) => item.code === currency) ??
    CURRENCIES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative z-40", className)}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-full",
          "border border-border/80 bg-surface/90",
          "px-4 text-sm font-semibold text-foreground",
          "shadow-sm backdrop-blur-md",
          "transition-all duration-200",
          "hover:border-accent-blue/40 hover:shadow-md",
          "focus:outline-none focus:ring-2",
          "focus:ring-accent-blue/20"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span
          className="text-base leading-none"
          aria-hidden
        >
          {current.flag}
        </span>

        <span>{current.code}</span>

        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{
              opacity: 0,
              y: -6,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.98,
            }}
            transition={{
              duration: 0.16,
              ease: "easeOut",
            }}
            className={cn(
              "absolute right-0 mt-2",
              "w-[210px]",
              "overflow-hidden",
              "rounded-2xl",
              "border border-border/80",
              "bg-surface/95",
              "shadow-2xl",
              "backdrop-blur-xl"
            )}
            role="listbox"
            aria-label="Select currency"
          >
            <div className="p-1.5">
              {CURRENCIES.map((item) => {
                const selected = item.code === currency;

                return (
                  <button
                    key={item.code}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setCurrency(item.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3",
                      "rounded-xl px-3 py-2",
                      "text-left",
                      "transition-all duration-150",
                      selected
                        ? "bg-accent-blue/10"
                        : "hover:bg-foreground/[0.04]"
                    )}
                  >
                    {/* Flag */}
                    <span
                      className="w-6 shrink-0 text-base leading-none"
                      aria-hidden
                    >
                      {item.flag}
                    </span>

                    {/* Currency */}
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block text-sm font-semibold leading-5",
                          selected
                            ? "text-accent-blue"
                            : "text-foreground"
                        )}
                      >
                        {item.code}
                      </span>

                      <span className="block truncate text-[11px] leading-4 text-muted">
                        {item.label}
                      </span>
                    </span>

                    {/* Selected */}
                    {selected ? (
                      <Check
                        className="h-4 w-4 shrink-0 text-accent-blue"
                        strokeWidth={2.5}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}