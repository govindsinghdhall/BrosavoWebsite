"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { ContactFormSubmitError } from "@/components/ui/ContactFormSubmitError";
import { BlurReveal } from "@/components/animations/TextReveal";
import { CONTACT } from "@/lib/data";
import { CONTACT_ROLES } from "@/lib/contact";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  role: string;
  plan: string;
  intent: string;
  addon: string;
};

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formState, setFormState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    city: "",
    role: "",
    plan: "",
    intent: "",
    addon: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      plan: searchParams.get("plan") || prev.plan,
      intent: searchParams.get("intent") || prev.intent,
      addon: searchParams.get("addon") || prev.addon,
    }));
  }, [searchParams]);

  function updateField(field: keyof FormState, value: string) {
    setFormState((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[field];
        return next;
      });
    }
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!formState.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formState.phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }

    if (!formState.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      nextErrors.email = "Invalid email";
    }

    if (!formState.city.trim()) {
      nextErrors.city = "City / Location is required";
    }

    if (!formState.role.trim()) {
      nextErrors.role = "Please select who you are";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    setSubmitFailed(false);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const payload = {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        city: formState.city,
        role: formState.role,

        teamSize: undefined,
        interest: undefined,
        plan: formState.plan || "",
        intent: formState.intent || "",
        addon: formState.addon || "",

        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_term: searchParams.get("utm_term") || "",
        utm_content: searchParams.get("utm_content") || "",

        referrer:
          typeof document !== "undefined" ? document.referrer : "",

        current_page:
          typeof window !== "undefined" ? window.location.href : "",

        timestamp: new Date().toISOString(),

        browser:
          typeof navigator !== "undefined" ? navigator.userAgent : "",

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

      if (!response.ok) {
        setSubmitFailed(true);
        return;
      }

      router.push("/thank-you");
    } catch {
      setSubmitFailed(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = (id: string) =>
    cn(
      "min-h-11 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-sm outline-none transition sm:min-h-12 sm:px-4 sm:py-3",
      focused === id
        ? "border-accent-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
        : "border-border hover:border-glass-border",
      errors[id] && "border-red-500/50"
    );

  const fieldLabelClass =
    "mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-2 sm:text-xs";

  return (
    <section className="relative min-h-[calc(100svh-100px)] overflow-hidden bg-background">
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/5 blur-[160px]" />

      <div className="absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-accent-violet/5 blur-[130px]" />

      <div className="container-wide relative z-10 flex min-h-[calc(100svh-80px)] items-center px-4 pt-28 pb-8 sm:px-6 md:px-8 md:pt-28 md:pb-10 lg:px-10 lg:pt-32 lg:pb-12 xl:px-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* Form — first on mobile */}
          <div className="order-1 lg:order-2">
            <BlurReveal delay={0.15}>
              <div className="w-full rounded-2xl border border-border/80 bg-surface/55 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:p-6 lg:p-7">
                <div className="mb-5">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-accent-cyan">
                    <Sparkles className="h-3 w-3" />
                    Request a Demo
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    See how Brosavo can help
                  </h2>

                  <p className="mt-1.5 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                    Share a few details and our product specialists will get
                    back to you about leads, properties, communication, and
                    sales.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {(formState.plan ||
                    formState.intent ||
                    formState.addon) && (
                    <div className="rounded-lg border border-accent-blue/20 bg-accent-blue/5 px-3 py-2 text-xs text-foreground/75">
                      <span className="font-medium">Enquiry:</span>{" "}
                      {[formState.intent, formState.plan, formState.addon]
                        .filter(Boolean)
                        .join(" · ")}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={fieldLabelClass}>
                        Full Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        autoComplete="name"
                        value={formState.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        disabled={submitting}
                        className={inputClass("name")}
                      />

                      {errors.name ? (
                        <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="phone" className={fieldLabelClass}>
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        disabled={submitting}
                        className={inputClass("phone")}
                      />

                      {errors.phone ? (
                        <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={fieldLabelClass}>
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        disabled={submitting}
                        className={inputClass("email")}
                      />

                      {errors.email ? (
                        <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="city" className={fieldLabelClass}>
                        City / Location
                      </label>

                      <input
                        id="city"
                        type="text"
                        placeholder="Gurugram"
                        autoComplete="address-level2"
                        value={formState.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        onFocus={() => setFocused("city")}
                        onBlur={() => setFocused(null)}
                        disabled={submitting}
                        className={inputClass("city")}
                      />

                      {errors.city ? (
                        <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                          {errors.city}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <p className={fieldLabelClass}>I am a</p>

                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                      {CONTACT_ROLES.map((role) => {
                        const selected = formState.role === role;

                        return (
                          <button
                            key={role}
                            type="button"
                            disabled={submitting}
                            onClick={() => updateField("role", role)}
                            className={cn(
                              "min-h-11 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition sm:min-h-12 sm:px-4 sm:py-3 sm:text-sm",
                              selected
                                ? "border-accent-blue/50 bg-accent-blue/10 text-foreground"
                                : "border-border bg-surface text-foreground/80 hover:border-glass-border hover:bg-surface-hover",
                              errors.role &&
                                !formState.role &&
                                "border-red-500/50"
                            )}
                          >
                            {role}
                          </button>
                        );
                      })}
                    </div>

                    {errors.role ? (
                      <p className="mt-1.5 text-[11px] text-red-400 sm:mt-2 sm:text-xs">
                        {errors.role}
                      </p>
                    ) : null}
                  </div>

                  {submitFailed ? (
                    <ContactFormSubmitError className="rounded-xl border border-red-500/30 bg-red-500/5 px-3.5 py-3 text-xs leading-5 text-red-400 sm:px-4 sm:text-sm" />
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan px-5 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Request a Demo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[9px] leading-4 text-muted">
                    By submitting this form, you agree to be contacted by
                    Brosavo regarding your enquiry.
                  </p>
                </form>
              </div>
            </BlurReveal>
          </div>

          {/* Left content — second on mobile */}
          <div className="order-2 max-w-xl lg:order-1">
            {showHeader ? (
              <BlurReveal>
                <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.28em] text-accent-blue">
                  Contact Brosavo
                </p>

                <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl xl:text-[4.2rem]">
                  Let&apos;s Build Something{" "}
                  <span className="text-gradient-accent">Extraordinary</span>
                </h1>

                <p className="mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base">
                  Tell us what you&apos;re building or what you want to
                  improve. Brosavo builds software, websites, AI solutions,
                  SaaS products, business automation, and Real Estate CRM
                  platforms.
                </p>
              </BlurReveal>
            ) : null}

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

                {CONTACT.phones.map((phone) => (
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

                
              </div>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
