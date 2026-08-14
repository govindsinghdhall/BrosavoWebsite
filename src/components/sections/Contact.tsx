"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BlurReveal } from "@/components/animations/TextReveal";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Loader2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

const CONTACT_SUCCESS_KEY = "brosavo-contact-demo-submitted";

const CONTACT_INTERESTS = [
  "Software Development",
  "Website Development",
  "AI Solutions",
  "SaaS Development",
  "Business Automation",
  "Real Estate CRM",
  "Other",
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function isValidPhone(value: string) {
  const trimmed = value.trim();

  if (!trimmed) return false;
  if (!/^\+?[0-9\s().-]+$/.test(trimmed)) return false;

  const digits = trimmed.replace(/\D/g, "");

  return digits.length >= 7 && digits.length <= 15;
}

function getDeviceType() {
  if (typeof window === "undefined") return "";

  const width = window.innerWidth;

  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";

  return "desktop";
}

export function Contact({ showHeader = true }: { showHeader?: boolean }) {
  const searchParams = useSearchParams();
  const successRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    role: "",
    teamSize: "",
    interest: "",
    plan: "",
    intent: "",
    addon: "",
    requirement: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(CONTACT_SUCCESS_KEY) === "1") {
        setSubmitted(true);
      }
    } catch {
      // Ignore storage errors.
    }
  }, []);

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      plan: searchParams.get("plan") || prev.plan,
      intent: searchParams.get("intent") || prev.intent,
      addon: searchParams.get("addon") || prev.addon,
    }));
  }, [searchParams]);

  useEffect(() => {
    if (!submitted) return;

    successRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [submitted]);

  const markSubmitted = () => {
    setSubmitted(true);
    setSubmitError(null);
    setErrors({});

    try {
      sessionStorage.setItem(CONTACT_SUCCESS_KEY, "1");
    } catch {
      // Ignore storage errors.
    }
  };

  const resetForm = () => {
    setSubmitted(false);

    try {
      sessionStorage.removeItem(CONTACT_SUCCESS_KEY);
    } catch {
      // Ignore storage errors.
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formState.phone)) {
      newErrors.phone = "Enter a valid international phone number";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formState.city.trim()) {
      newErrors.city = "City / Location is required";
    }

    if (!formState.interest.trim()) {
      newErrors.interest = "Please select a requirement";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitError(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const payload = {
        ...formState,

        role: formState.interest,
        teamSize: formState.teamSize || undefined,

        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_term: searchParams.get("utm_term") || "",
        utm_content: searchParams.get("utm_content") || "",

        referrer:
          typeof document !== "undefined"
            ? document.referrer
            : "",

        current_page:
          typeof window !== "undefined"
            ? window.location.href
            : "",

        timestamp: new Date().toISOString(),

        browser:
          typeof navigator !== "undefined"
            ? navigator.userAgent
            : "",

        device: getDeviceType(),

        screen_resolution:
          typeof window !== "undefined"
            ? `${window.screen.width}x${window.screen.height}`
            : "",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: { error?: string } = {};

      try {
        data = (await response.json()) as {
          error?: string;
        };
      } catch {
        // Non-JSON error body.
      }

      if (!response.ok) {
        setSubmitError(
          data.error ||
            "Failed to send message. Please try again."
        );

        return;
      }

      markSubmitted();
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (id: string) =>
    cn(
      "w-full rounded-xl border bg-background/50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted/60",
      focused === id
        ? "border-accent-blue/50 bg-background shadow-[0_0_20px_rgba(59,130,246,0.08)]"
        : "border-border hover:border-glass-border",
      errors[id] && "border-red-500/50"
    );

  const fieldLabelClass =
    "mb-1.5 block text-[10px] font-mono uppercase tracking-[0.16em] text-muted";

  return (
    <section className="relative min-h-[calc(100svh-100px)] overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/5 blur-[160px]" />

      <div className="absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-accent-violet/5 blur-[130px]" />

      <div className="container-wide relative z-10 flex min-h-[calc(100svh-80px)] items-center px-4 pt-28 pb-8 sm:px-6 md:px-8 md:pt-28 md:pb-10 lg:px-10 lg:pt-32 lg:pb-12 xl:px-12">
        {submitted ? (
          <motion.div
            ref={successRef}
            role="status"
            aria-live="polite"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mx-auto w-full max-w-2xl rounded-3xl border border-green-500/30 bg-green-500/5 p-8 text-center shadow-[0_0_60px_rgba(34,197,94,0.12)] md:p-12"
          >
            <CheckCircle className="mx-auto mb-5 h-14 w-14 text-green-400" />

            <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Request Received!
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
              Thank you for contacting Brosavo.
              <br />
              <br />
              One of our product specialists will contact you
              within 2 business hours.
            </p>

            <div className="mx-auto mt-7 flex max-w-md flex-col gap-3">
              <a
                href={CONTACT.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#1ebe57]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>

                Chat on WhatsApp
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                {CONTACT.phones.map((phone) => (
                  <MagneticButton
                    key={phone.href}
                    href={phone.href}
                    variant="secondary"
                    className="w-full !rounded-xl"
                  >
                    <Phone className="h-4 w-4" />
                    Call {phone.label}
                  </MagneticButton>
                ))}
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="mt-1 text-sm font-medium text-accent-blue hover:opacity-80"
              >
                Submit another request
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">

            {/* ==================================================
                FORM — FIRST ON MOBILE
                ================================================== */}

            <div className="order-1 lg:order-2">
              <BlurReveal delay={0.15}>
                <div className="w-full rounded-2xl border border-border/80 bg-surface/55 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:p-6 lg:p-7">
                  <div className="mb-5">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-accent-cyan">
                      <Sparkles className="h-3 w-3" />
                      Start a conversation
                    </div>

                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      Tell us about your project
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 text-muted">
                      Share a few details and our team will get back to
                      you with the right next step.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {(formState.plan ||
                      formState.intent ||
                      formState.addon) && (
                      <div className="rounded-lg border border-accent-blue/20 bg-accent-blue/5 px-3 py-2 text-xs text-foreground/75">
                        <span className="font-medium">
                          Enquiry:
                        </span>{" "}
                        {[
                          formState.intent,
                          formState.plan,
                          formState.addon,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </div>
                    )}

                    {/* Name + Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className={fieldLabelClass}
                        >
                          Full Name{" "}
                          <span className="text-accent-blue">*</span>
                        </label>

                        <input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          autoComplete="name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              name: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          disabled={submitting}
                          className={inputClass("name")}
                        />

                        {errors.name && (
                          <p className="mt-1 text-[10px] text-red-400">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className={fieldLabelClass}
                        >
                          Phone Number{" "}
                          <span className="text-accent-blue">*</span>
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              phone: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          disabled={submitting}
                          className={inputClass("phone")}
                        />

                        {errors.phone && (
                          <p className="mt-1 text-[10px] text-red-400">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email + Company */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className={fieldLabelClass}
                        >
                          Email Address{" "}
                          <span className="text-accent-blue">*</span>
                        </label>

                        <input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          autoComplete="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              email: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          disabled={submitting}
                          className={inputClass("email")}
                        />

                        {errors.email && (
                          <p className="mt-1 text-[10px] text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className={fieldLabelClass}
                        >
                          Company / Business Name
                        </label>

                        <input
                          id="company"
                          type="text"
                          placeholder="Your company or business"
                          autoComplete="organization"
                          value={formState.company}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              company: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused("company")}
                          onBlur={() => setFocused(null)}
                          disabled={submitting}
                          className={inputClass("company")}
                        />
                      </div>
                    </div>

                    {/* City + Interest */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="city"
                          className={fieldLabelClass}
                        >
                          City / Location{" "}
                          <span className="text-accent-blue">*</span>
                        </label>

                        <input
                          id="city"
                          type="text"
                          placeholder="Gurugram"
                          autoComplete="address-level2"
                          value={formState.city}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              city: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused("city")}
                          onBlur={() => setFocused(null)}
                          disabled={submitting}
                          className={inputClass("city")}
                        />

                        {errors.city && (
                          <p className="mt-1 text-[10px] text-red-400">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className={fieldLabelClass}
                        >
                          What are you looking for?{" "}
                          <span className="text-accent-blue">*</span>
                        </label>

                        <select
                          id="interest"
                          value={formState.interest}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              interest: e.target.value,
                              role: e.target.value,
                            }))
                          }
                          onFocus={() => setFocused("interest")}
                          onBlur={() => setFocused(null)}
                          disabled={submitting}
                          className={cn(
                            inputClass("interest"),
                            !formState.interest && "text-muted"
                          )}
                        >
                          <option value="">
                            Select a service
                          </option>

                          {CONTACT_INTERESTS.map((interest) => (
                            <option
                              key={interest}
                              value={interest}
                            >
                              {interest}
                            </option>
                          ))}
                        </select>

                        {errors.interest && (
                          <p className="mt-1 text-[10px] text-red-400">
                            {errors.interest}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Requirement */}
                    <div>
                      <label
                        htmlFor="requirement"
                        className={fieldLabelClass}
                      >
                        Tell us about your requirement
                      </label>

                      <textarea
                        id="requirement"
                        rows={3}
                        placeholder="Briefly tell us what you want to build, improve, or automate..."
                        value={formState.requirement}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            requirement: e.target.value,
                          }))
                        }
                        onFocus={() => setFocused("requirement")}
                        onBlur={() => setFocused(null)}
                        disabled={submitting}
                        className={cn(
                          inputClass("requirement"),
                          "resize-none"
                        )}
                      />
                    </div>

                    {submitError && (
                      <p className="rounded-lg border border-red-500/30 bg-red-500/5 px-3 py-2 text-xs text-red-400">
                        {submitError}
                      </p>
                    )}

                    {/* Submit */}
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      className="group w-full !rounded-xl !py-3.5 !text-sm"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get in Touch
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </MagneticButton>

                    <p className="text-center text-[9px] leading-4 text-muted">
                      By submitting this form, you agree to be contacted
                      by Brosavo regarding your enquiry.
                    </p>
                  </form>
                </div>
              </BlurReveal>
            </div>

            {/* ==================================================
                LEFT CONTENT — SECOND ON MOBILE
                ================================================== */}

            <div className="order-2 max-w-xl lg:order-1">
              <BlurReveal>
                <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.28em] text-accent-blue">
                  Contact Brosavo
                </p>

                <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl xl:text-[4.2rem]">
                  Let&apos;s Build Something{" "}
                  <span className="text-gradient-accent">
                    Extraordinary
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base">
                  Tell us what you&apos;re building or what you want
                  to improve. Brosavo builds software, websites, AI
                  solutions, SaaS products, business automation, and
                  Real Estate CRM platforms.
                </p>
              </BlurReveal>

              {/* Contact information */}
              <BlurReveal delay={0.1}>
                <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-border/70 bg-surface/40 px-3.5 py-3 backdrop-blur-sm transition-colors hover:border-accent-blue/30"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                      <Mail className="h-3.5 w-3.5 text-accent-blue" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-wider text-muted">
                        Email
                      </p>

                      <p className="truncate text-xs font-medium">
                        {CONTACT.email}
                      </p>
                    </div>
                  </a>

                  {CONTACT.phones.slice(0, 1).map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="group flex min-w-0 items-center gap-3 rounded-xl border border-border/70 bg-surface/40 px-3.5 py-3 backdrop-blur-sm transition-colors hover:border-accent-blue/30"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                        <Phone className="h-3.5 w-3.5 text-accent-blue" />
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-muted">
                          {phone.label}
                        </p>

                        <p className="text-xs font-medium">
                          {phone.flag} {phone.number}
                        </p>
                      </div>
                    </a>
                  ))}

                  <div className="flex min-w-0 items-center gap-3 rounded-xl border border-border/70 bg-surface/40 px-3.5 py-3 backdrop-blur-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10">
                      <MapPin className="h-3.5 w-3.5 text-accent-blue" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-wider text-muted">
                        Offices
                      </p>

                      <p className="truncate text-xs font-medium">
                        {CONTACT.offices}
                      </p>
                    </div>
                  </div>

                  <div className="flex min-w-0 items-center gap-3 rounded-xl border border-border/70 bg-surface/40 px-3.5 py-3 backdrop-blur-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-muted">
                        Availability
                      </p>

                      <p className="text-xs font-medium text-green-400">
                        Response within 2h
                      </p>
                    </div>
                  </div>
                </div>
              </BlurReveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}