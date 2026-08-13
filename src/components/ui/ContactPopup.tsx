"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Loader2,
  Phone,
  Send,
  X,
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

const POPUP_DELAY =
  10 * 1000; // 10 seconds

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

  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";

  return "desktop";
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
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [submitError, setSubmitError] =
    useState<string | null>(null);

  /*
   * Show popup after 10 seconds,
   * subject to cooldown rules.
   */
  useEffect(() => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    /*
     * Don't show a popup on the
     * dedicated contact page.
     */
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
      // Ignore storage errors.
    }

    const timer = window.setTimeout(() => {
      setOpen(true);

      try {
        localStorage.setItem(
          POPUP_LAST_SHOWN_KEY,
          Date.now().toString()
        );
      } catch {
        // Ignore storage errors.
      }
    }, POPUP_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * Lock page scroll while popup is open.
   */
  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  function closePopup() {
    setOpen(false);
  }

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
        "Enter a valid phone number";
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

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) return;

    setSubmitError(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const searchParams =
        new URLSearchParams(
          window.location.search
        );

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

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

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

      try {
        localStorage.setItem(
          POPUP_LAST_SUBMITTED_KEY,
          Date.now().toString()
        );
      } catch {
        // Ignore storage errors.
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-end
            justify-center
            bg-black/60
            backdrop-blur-md
            sm:items-center
            sm:px-4
            sm:py-6
          "
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
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              w-full
              max-w-2xl
              flex-col
              overflow-hidden
              rounded-t-[1.75rem]
              border
              border-border
              bg-background
              shadow-2xl
              sm:max-h-[92vh]
              sm:rounded-[2rem]
            "
          >
            {/* Sticky header */}
            <div className="relative shrink-0 border-b border-border px-5 py-5 sm:px-8 sm:py-6">
              <button
                type="button"
                onClick={closePopup}
                aria-label="Close contact form"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-surface
                  text-muted
                  transition
                  hover:bg-surface-hover
                  hover:text-foreground
                  sm:right-6
                  sm:top-6
                "
              >
                <X className="h-4 w-4" />
              </button>

              {!submitted ? (
                <div className="pr-12">
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-blue sm:text-xs">
                    BROSAVO
                  </p>

                  <h2 className="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Let&apos;s Talk About Your Business
                  </h2>

                  <p className="mt-2 max-w-xl text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                    Tell us about your business and
                    our team will get in touch with
                    you.
                  </p>
                </div>
              ) : null}
            </div>

            {/* Scrollable content */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              {submitted ? (
                /*
                 * ======================================================
                 * SUCCESS STATE
                 * ======================================================
                 */
                <div className="flex min-h-[430px] flex-col items-center justify-center px-5 py-10 text-center sm:px-8 sm:py-12">
                  <CheckCircle className="h-14 w-14 text-green-400 sm:h-16 sm:w-16" />

                  <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
                    Request Received!
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:mt-4 sm:leading-7">
                    Thank you for contacting
                    Brosavo. One of our product
                    specialists will contact you
                    shortly to understand your
                    requirements.
                  </p>

                  <div className="mt-7 grid w-full max-w-md grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">
                    <a
                      href={
                        CONTACT.whatsapp.href
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#25D366]
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_10px_25px_rgba(37,211,102,0.25)]
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-[#1ebe57]
                      "
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      WhatsApp Us
                    </a>

                    {CONTACT.phones[0] ? (
                      <a
                        href={
                          CONTACT.phones[0]
                            .href
                        }
                        className="
                          inline-flex
                          min-h-12
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-linear-to-r
                          from-accent-blue
                          to-accent-violet
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-white
                          shadow-[0_10px_25px_rgba(59,130,246,0.25)]
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:opacity-90
                        "
                      >
                        <Phone className="h-5 w-5" />
                        Call Us
                      </a>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={
                      closePopup
                    }
                    className="mt-5 min-h-10 px-3 text-sm font-medium text-accent-blue transition-opacity hover:opacity-80"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                /*
                 * ======================================================
                 * FORM
                 * ======================================================
                 */
                <form
                  onSubmit={
                    handleSubmit
                  }
                  className="space-y-4 px-5 py-5 sm:space-y-5 sm:px-8 sm:py-7"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-2 sm:text-xs"
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
                      disabled={
                        submitting
                      }
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target
                            .value
                        )
                      }
                      className={cn(
                        "min-h-11 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-sm outline-none transition sm:min-h-12 sm:px-4 sm:py-3",
                        errors.name
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.name ? (
                      <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="popup-phone"
                      className="mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-2 sm:text-xs"
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
                        "min-h-11 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-sm outline-none transition sm:min-h-12 sm:px-4 sm:py-3",
                        errors.phone
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.phone ? (
                      <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="popup-email"
                      className="mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-2 sm:text-xs"
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
                        "min-h-11 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-sm outline-none transition sm:min-h-12 sm:px-4 sm:py-3",
                        errors.email
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.email ? (
                      <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="popup-company"
                      className="mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-2 sm:text-xs"
                    >
                      Agency / Builder / Brokerage
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
                      className="min-h-11 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm outline-none transition focus:border-accent-blue/50 sm:min-h-12 sm:px-4 sm:py-3"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label
                      htmlFor="popup-city"
                      className="mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-2 sm:text-xs"
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
                        "min-h-11 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-sm outline-none transition sm:min-h-12 sm:px-4 sm:py-3",
                        errors.city
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.city ? (
                      <p className="mt-1 text-[11px] text-red-400 sm:text-xs">
                        {errors.city}
                      </p>
                    ) : null}
                  </div>

                  {/* Role */}
                  <div>
                    <p className="mb-2 block text-[10px] font-mono uppercase tracking-wider text-muted sm:mb-3 sm:text-xs">
                      I am a
                    </p>

                    <div className="grid grid-cols-2 gap-2">
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
                        }
                      )}
                    </div>

                    {errors.role ? (
                      <p className="mt-1.5 text-[11px] text-red-400 sm:mt-2 sm:text-xs">
                        {errors.role}
                      </p>
                    ) : null}
                  </div>

                  {/* Submit error */}
                  {submitError ? (
                    <p className="rounded-xl border border-red-500/30 bg-red-500/5 px-3.5 py-3 text-xs leading-5 text-red-400 sm:px-4 sm:text-sm sm:leading-6">
                      {submitError}
                    </p>
                  ) : null}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={
                      submitting
                    }
                    className="
                      flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-linear-to-r
                      from-accent-blue
                      to-accent-violet
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-opacity
                      hover:opacity-90
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:min-h-13
                    "
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

                  <p className="pb-1 text-center text-[10px] leading-4 text-muted sm:text-xs">
                    By submitting this form,
                    you agree to be contacted
                    by the Brosavo team.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}