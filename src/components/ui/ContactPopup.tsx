"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Loader2,
  Send,
  X,
} from "lucide-react";

import { CONTACT } from "@/lib/data";
import { ContactFormSubmitError } from "@/components/ui/ContactFormSubmitError";
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
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [formState, setFormState] =
    useState<FormState>({
      name: "",
      phone: "",
      email: "",
      company: "",
      city: "",
    });

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [submitting, setSubmitting] =
    useState(false);

  const [submitFailed, setSubmitFailed] =
    useState(false);

  /*
   * =========================================================
   * AUTOMATIC POPUP
   * Show popup after 10 seconds,
   * subject to cooldown rules.
   * =========================================================
   */
  useEffect(() => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    /*
     * Don't show the automatic popup
     * on the dedicated contact page.
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
   * =========================================================
   * BODY SCROLL LOCK
   * =========================================================
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

  function openContactPopup() {
    setSubmitFailed(false);
    setOpen(true);
  }

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

    // City / Location is intentionally optional.
    // Company / Organization is also optional.

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

    setSubmitFailed(false);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const searchParams =
        new URLSearchParams(
          window.location.search
        );

      const payload = {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        company: formState.company,
        city: formState.city,

        // Preserve compatibility with the existing API.
        role: "",
        teamSize: undefined,
        interest: undefined,
        plan: "",
        intent: "",
        addon: "",

        // UTM attribution
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

        // Tracking
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

      if (!response.ok) {
        setSubmitFailed(true);
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

      router.push("/thank-you");
    } catch {
      setSubmitFailed(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* =====================================================
          FLOATING ACTION BUTTONS
      ====================================================== */}

      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
              fixed
              bottom-4
              right-3
              z-[9990]
              flex
              flex-col
              items-center
              gap-2.5
              sm:bottom-6
              sm:right-6
              sm:gap-3
              lg:bottom-7
              lg:right-7
            "
          >
            {/* CONTACT */}
            <motion.button
              type="button"
              onClick={openContactPopup}
              whileHover={{
                y: -2,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-gradient-to-br
                from-accent-blue
                to-accent-violet
                text-white
                shadow-[0_10px_30px_rgba(59,130,246,0.30)]
                transition-all
                duration-300
                hover:shadow-[0_14px_40px_rgba(59,130,246,0.45)]
                sm:h-15
                sm:w-15
              "
              aria-label="Open Contact Us form"
              title="Contact Us"
            >
              <Send className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>

            {/* WHATSAPP */}
            <motion.a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#25D366]
                text-white
                shadow-[0_10px_30px_rgba(37,211,102,0.30)]
                transition-all
                duration-300
                hover:bg-[#20bd5a]
                hover:shadow-[0_14px_40px_rgba(37,211,102,0.45)]
                sm:h-15
                sm:w-15
              "
              aria-label="Chat with Brosavo on WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =======================================================
          CONTACT MODAL
      ======================================================== */}

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/60
              p-3
              backdrop-blur-md
              sm:p-4
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
                max-h-[calc(100dvh-1.5rem)]
                max-w-[min(100%,24rem)]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-background
                shadow-2xl
                sm:max-h-none
                sm:max-w-2xl
                sm:rounded-[2rem]
                lg:max-w-3xl
              "
            >
              {/* =================================================
                  HEADER
              ================================================== */}

              <div className="relative shrink-0 border-b border-border px-4 py-3 sm:px-8 sm:py-6">
                <button
                  type="button"
                  onClick={closePopup}
                  aria-label="Close contact form"
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-8
                    w-8
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
                    sm:h-9
                    sm:w-9
                  "
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>

                <div className="pr-10 sm:pr-12">
                  <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-accent-blue sm:text-xs">
                    BROSAVO
                  </p>

                  <h2 className="mt-1 text-lg font-bold tracking-tight text-foreground sm:mt-1.5 sm:text-3xl">
                    Let&apos;s Talk
                  </h2>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
                    Have a question, an idea, or a
                    business requirement? Get in
                    touch with our team.
                  </p>
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}

              <div className="shrink-0 overflow-hidden">
                <form
                  onSubmit={handleSubmit}
                  className="
                    grid
                    grid-cols-2
                    gap-x-2.5
                    gap-y-2.5
                    px-4
                    py-3.5
                    sm:gap-5
                    sm:px-8
                    sm:py-7
                    lg:gap-x-5
                    lg:gap-y-4
                  "
                >

                  {/* =================================================
                      FULL NAME
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="popup-name"
                      className="
                        mb-1
                        block
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-muted
                        sm:mb-2
                        sm:text-xs
                      "
                    >
                      Full Name
                    </label>

                    <input
                      id="popup-name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      value={formState.name}
                      disabled={submitting}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target.value
                        )
                      }
                      className={cn(
                        "min-h-9 w-full rounded-lg border bg-surface px-2.5 py-2 text-sm outline-none transition sm:min-h-12 sm:rounded-xl sm:px-4 sm:py-3",
                        errors.name
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.name ? (
                      <p className="mt-0.5 text-[10px] text-red-400 sm:mt-1 sm:text-xs">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  {/* =================================================
                      PHONE
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="popup-phone"
                      className="
                        mb-1
                        block
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-muted
                        sm:mb-2
                        sm:text-xs
                      "
                    >
                      Phone / WhatsApp
                    </label>

                    <input
                      id="popup-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      disabled={submitting}
                      onChange={(event) =>
                        updateField(
                          "phone",
                          event.target.value
                        )
                      }
                      className={cn(
                        "min-h-9 w-full rounded-lg border bg-surface px-2.5 py-2 text-sm outline-none transition sm:min-h-12 sm:rounded-xl sm:px-4 sm:py-3",
                        errors.phone
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.phone ? (
                      <p className="mt-0.5 text-[10px] text-red-400 sm:mt-1 sm:text-xs">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="popup-email"
                      className="
                        mb-1
                        block
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-muted
                        sm:mb-2
                        sm:text-xs
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="popup-email"
                      type="email"
                      autoComplete="email"
                      placeholder="john@company.com"
                      value={formState.email}
                      disabled={submitting}
                      onChange={(event) =>
                        updateField(
                          "email",
                          event.target.value
                        )
                      }
                      className={cn(
                        "min-h-9 w-full rounded-lg border bg-surface px-2.5 py-2 text-sm outline-none transition sm:min-h-12 sm:rounded-xl sm:px-4 sm:py-3",
                        errors.email
                          ? "border-red-500/50"
                          : "border-border focus:border-accent-blue/50"
                      )}
                    />

                    {errors.email ? (
                      <p className="mt-0.5 text-[10px] text-red-400 sm:mt-1 sm:text-xs">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  {/* =================================================
                      COMPANY
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="popup-company"
                      className="
                        mb-1
                        block
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-muted
                        sm:mb-2
                        sm:text-xs
                      "
                    >
                      Company / Organization
                    </label>

                    <input
                      id="popup-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name"
                      value={formState.company}
                      disabled={submitting}
                      onChange={(event) =>
                        updateField(
                          "company",
                          event.target.value
                        )
                      }
                      className="
                        min-h-9
                        w-full
                        rounded-lg
                        border
                        border-border
                        bg-surface
                        px-2.5
                        py-2
                        text-sm
                        outline-none
                        transition
                        focus:border-accent-blue/50
                        sm:min-h-12
                        sm:rounded-xl
                        sm:px-4
                        sm:py-3
                      "
                    />
                  </div>

                  {/* =================================================
                      CITY / LOCATION
                  ================================================== */}

                  <div className="col-span-2">
                    <label
                      htmlFor="popup-city"
                      className="
                        mb-1
                        block
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-muted
                        sm:mb-2
                        sm:text-xs
                      "
                    >
                      City / Location
                    </label>

                    <input
                      id="popup-city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Gurugram"
                      value={formState.city}
                      disabled={submitting}
                      onChange={(event) =>
                        updateField(
                          "city",
                          event.target.value
                        )
                      }
                      className="
                        min-h-9
                        w-full
                        rounded-lg
                        border
                        border-border
                        bg-surface
                        px-2.5
                        py-2
                        text-sm
                        outline-none
                        transition
                        focus:border-accent-blue/50
                        sm:min-h-12
                        sm:rounded-xl
                        sm:px-4
                        sm:py-3
                      "
                    />
                  </div>

                  {/* =================================================
                      ERROR
                  ================================================== */}

                  {submitFailed ? (
                    <ContactFormSubmitError
                      className="
                        col-span-2
                        rounded-lg
                        border
                        border-red-500/30
                        bg-red-500/5
                        px-2.5
                        py-2
                        text-[10px]
                        leading-4
                        text-red-400
                        sm:rounded-xl
                        sm:px-4
                        sm:py-3
                        sm:text-sm
                        sm:leading-6
                      "
                    />
                  ) : null}

                  {/* =================================================
                      SUBMIT
                  ================================================== */}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      col-span-2
                      flex
                      min-h-10
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-accent-blue
                      via-accent-violet
                      to-accent-cyan
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-opacity
                      hover:opacity-90
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:min-h-13
                      sm:rounded-xl
                      sm:px-5
                      sm:py-3
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
                        Send Enquiry
                      </>
                    )}
                  </button>

                  {/* =================================================
                      DISCLAIMER
                  ================================================== */}

                  <p className="
                    col-span-2
                    pb-0.5
                    text-center
                    text-[9px]
                    leading-3.5
                    text-muted
                    sm:text-xs
                    sm:leading-4
                  ">
                    By submitting, you agree to be contacted by BROSAVO.
                  </p>

                </form>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}