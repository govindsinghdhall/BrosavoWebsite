"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Loader2,
  Send,
  X,
  Phone,
} from "lucide-react";

import { CONTACT } from "@/lib/data";
import { CONTACT_ROLES } from "@/lib/contact";
import { cn } from "@/lib/utils";

const POPUP_LAST_SHOWN_KEY =
  "brosavo-contact-popup-last-shown";

const POPUP_LAST_SUBMITTED_KEY =
  "brosavo-contact-popup-last-submitted";

const POPUP_COOLDOWN =
  60 * 60 * 1000; // 1 hour

const SUBMITTED_COOLDOWN =
  24 * 60 * 60 * 1000; // 24 hours

const POPUP_DELAY = 10 * 1000; // 10 seconds

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  role: string;
};

function isValidPhone(value: string) {
  const trimmed = value.trim();

  if (!trimmed) return false;

  if (!/^\+?[0-9\s().-]+$/.test(trimmed)) {
    return false;
  }

  const digits = trimmed.replace(/\D/g, "");

  return digits.length >= 7 && digits.length <= 15;
}

function getDeviceType() {
  if (typeof window === "undefined") {
    return "";
  }

  const width = window.innerWidth;

  if (width < 768) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
}

function getSearchParams() {
  if (typeof window === "undefined") {
    return new URLSearchParams();
  }

  return new URLSearchParams(
    window.location.search
  );
}

function WhatsAppIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.371.298-.52.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactPopup() {
  const [open, setOpen] = useState(false);

  const [formState, setFormState] =
    useState<FormState>({
      name: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      role: "",
    });

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [submitError, setSubmitError] =
    useState<string | null>(null);

  /*
   * ============================================================
   * OPEN POPUP
   * ============================================================
   *
   * Rules:
   *
   * - Never show on /contact
   * - Wait 10 seconds
   * - Don't show again within 1 hour of last appearance
   * - Don't show again within 24 hours of successful submission
   */
  useEffect(() => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    if (
      window.location.pathname ===
      "/contact"
    ) {
      return;
    }

    try {
      const now = Date.now();

      const lastSubmitted =
        Number(
          localStorage.getItem(
            POPUP_LAST_SUBMITTED_KEY
          ) || 0
        );

      if (
        lastSubmitted &&
        now - lastSubmitted <
          SUBMITTED_COOLDOWN
      ) {
        return;
      }

      const lastShown =
        Number(
          localStorage.getItem(
            POPUP_LAST_SHOWN_KEY
          ) || 0
        );

      if (
        lastShown &&
        now - lastShown <
          POPUP_COOLDOWN
      ) {
        return;
      }
    } catch {
      // Ignore localStorage errors.
    }

    const timer =
      window.setTimeout(() => {
        setOpen(true);

        try {
          localStorage.setItem(
            POPUP_LAST_SHOWN_KEY,
            Date.now().toString()
          );
        } catch {
          // Ignore localStorage errors.
        }
      }, POPUP_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * ============================================================
   * PREVENT BACKGROUND SCROLLING
   * ============================================================
   */
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  /*
   * ============================================================
   * CLOSE POPUP
   * ============================================================
   */
  function closePopup() {
    setOpen(false);
  }

  /*
   * ============================================================
   * VALIDATION
   * ============================================================
   */
  function validate() {
    const nextErrors: Record<
      string,
      string
    > = {};

    if (!formState.name.trim()) {
      nextErrors.name =
        "Name is required";
    }

    if (!formState.phone.trim()) {
      nextErrors.phone =
        "Phone number is required";
    } else if (
      !isValidPhone(formState.phone)
    ) {
      nextErrors.phone =
        "Enter a valid international phone number";
    }

    if (!formState.email.trim()) {
      nextErrors.email =
        "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(
        formState.email
      )
    ) {
      nextErrors.email =
        "Invalid email";
    }

    if (!formState.city.trim()) {
      nextErrors.city =
        "City / Location is required";
    }

    if (!formState.role.trim()) {
      nextErrors.role =
        "Please select who you are";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length ===
      0
    );
  }

  /*
   * ============================================================
   * UPDATE FIELD
   * ============================================================
   */
  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setFormState((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => {
        const next = {
          ...previous,
        };

        delete next[field];

        return next;
      });
    }
  }

  /*
   * ============================================================
   * SUBMIT
   * ============================================================
   */
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      const searchParams =
        getSearchParams();

      const payload = {
        ...formState,

        teamSize: undefined,

        interest: undefined,

        plan: "",

        intent: "",

        addon: "",

        utm_source:
          searchParams.get(
            "utm_source"
          ) || "",

        utm_medium:
          searchParams.get(
            "utm_medium"
          ) || "",

        utm_campaign:
          searchParams.get(
            "utm_campaign"
          ) || "",

        utm_term:
          searchParams.get(
            "utm_term"
          ) || "",

        utm_content:
          searchParams.get(
            "utm_content"
          ) || "",

        referrer:
          document.referrer || "",

        current_page:
          window.location.href,

        timestamp:
          new Date().toISOString(),

        browser:
          navigator.userAgent,

        device:
          getDeviceType(),

        screen_resolution:
          `${window.screen.width}x${window.screen.height}`,
      };

      const response =
        await fetch("/api/contact", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        });

      let data: {
        error?: string;
      } = {};

      try {
        data =
          (await response.json()) as {
            error?: string;
          };
      } catch {
        // Ignore non-JSON responses.
      }

      if (!response.ok) {
        setSubmitError(
          data.error ||
            "Failed to send message. Please try again."
        );

        return;
      }

      /*
       * Successful submission:
       * hide popup for 24 hours.
       */
      try {
        localStorage.setItem(
          POPUP_LAST_SUBMITTED_KEY,
          Date.now().toString()
        );
      } catch {
        // Ignore localStorage errors.
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closePopup();
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-border bg-background p-6 shadow-2xl sm:p-8"
          >
            {/* Close */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close contact form"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:bg-surface-hover hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              /*
               * ========================================================
               * SUCCESS STATE
               * ========================================================
               */
              <div className="flex min-h-[430px] flex-col items-center justify-center px-4 text-center">
                <CheckCircle className="mb-6 h-16 w-16 text-green-400" />

                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Request Received!
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                  Thank you for contacting
                  Brosavo. One of our product
                  specialists will contact you
                  shortly to understand your
                  requirements.
                </p>

                {/* Direct Contact Buttons */}
                <div className="mt-8 grid w-full max-w-md gap-3 sm:grid-cols-2">
                  {/* WhatsApp */}
                  <a
                    href={
                      CONTACT.whatsapp
                        .href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe57]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />

                    WhatsApp Us
                  </a>

                  {/* Call */}
                  {CONTACT.phones[0] ? (
                    <a
                      href={
                        CONTACT.phones[0]
                          .href
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent-blue to-accent-violet px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(59,130,246,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                    >
                      <Phone className="h-5 w-5" />

                      Call Us
                    </a>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-5 text-sm font-medium text-accent-blue transition-opacity hover:opacity-80"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              /*
               * ========================================================
               * FORM
               * ========================================================
               */
              <>
                <div className="pr-12">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
                    Brosavo
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Let&apos;s Talk About Your Business
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    Tell us a little about your
                    requirements and our team
                    will get in touch with you.
                  </p>
                </div>

                <form
                  onSubmit={
                    handleSubmit
                  }
                  className="mt-7 space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted"
                    >
                      Full Name
                    </label>

                    <input
                      id="popup-name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      value={
                        formState.name
                      }
                      disabled={submitting}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target
                            .value
                        )
                      }
                      className={cn(
                        "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition",
                        errors.name
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.name ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  {/* Phone + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="popup-phone"
                        className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted"
                      >
                        Phone Number
                      </label>

                      <input
                        id="popup-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        value={
                          formState.phone
                        }
                        disabled={
                          submitting
                        }
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target
                              .value
                          )
                        }
                        className={cn(
                          "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition",
                          errors.phone
                            ? "border-red-500/50"
                            : "border-border focus:border-accent-blue/50"
                        )}
                      />

                      {errors.phone ? (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="popup-email"
                        className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted"
                      >
                        Email Address
                      </label>

                      <input
                        id="popup-email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@company.com"
                        value={
                          formState.email
                        }
                        disabled={
                          submitting
                        }
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target
                              .value
                          )
                        }
                        className={cn(
                          "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition",
                          errors.email
                            ? "border-red-500/50"
                            : "border-border focus:border-accent-blue/50"
                        )}
                      />

                      {errors.email ? (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Company + City */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="popup-company"
                        className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted"
                      >
                        Agency / Builder / Brokerage Name
                      </label>

                      <input
                        id="popup-company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Your agency or brokerage"
                        value={
                          formState.company
                        }
                        disabled={
                          submitting
                        }
                        onChange={(event) =>
                          updateField(
                            "company",
                            event.target
                              .value
                          )
                        }
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent-blue/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="popup-city"
                        className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted"
                      >
                        City / Location
                      </label>

                      <input
                        id="popup-city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="Gurugram"
                        value={
                          formState.city
                        }
                        disabled={
                          submitting
                        }
                        onChange={(event) =>
                          updateField(
                            "city",
                            event.target
                              .value
                          )
                        }
                        className={cn(
                          "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition",
                          errors.city
                            ? "border-red-500/50"
                            : "border-border focus:border-accent-blue/50"
                        )}
                      />

                      {errors.city ? (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.city}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <p className="mb-3 block text-xs font-mono uppercase tracking-wider text-muted">
                      I am a
                    </p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {CONTACT_ROLES.map(
                        (role) => {
                          const selected =
                            formState.role ===
                            role;

                          return (
                            <button
                              key={role}
                              type="button"
                              disabled={
                                submitting
                              }
                              onClick={() =>
                                updateField(
                                  "role",
                                  role
                                )
                              }
                              className={cn(
                                "rounded-xl border px-4 py-3 text-left text-sm font-medium transition",
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
                        }
                      )}
                    </div>

                    {errors.role ? (
                      <p className="mt-2 text-xs text-red-400">
                        {errors.role}
                      </p>
                    ) : null}
                  </div>

                  {/* Error */}
                  {submitError ? (
                    <p className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                      {submitError}
                    </p>
                  ) : null}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={
                      submitting
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent-blue to-accent-violet px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Request Free Demo
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted">
                    By submitting this form,
                    you agree to be contacted
                    by the Brosavo team.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}