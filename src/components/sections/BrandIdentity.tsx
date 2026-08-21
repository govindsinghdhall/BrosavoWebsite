import { BRAND_FAQS } from "@/lib/brand-faqs";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export function BrandIdentity() {
  return (
    <section
      aria-labelledby="brosavo-brand-heading"
      className="section-padding"
    >
      <div className="container-wide">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-cyan">
            Official brand
          </span>

          <h2
            id="brosavo-brand-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {SITE_NAME} is {LEGAL_NAME}
          </h2>

          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            {SITE_NAME} is spelled B-R-O-S-A-V-O. This is the official website
            of {LEGAL_NAME} at {SITE_URL.replace(/^https:\/\//, "")}. We build
            real estate CRM software, AI products, SaaS platforms, and custom
            technology for businesses worldwide.
          </p>

          <div className="mt-10 space-y-3">
            {BRAND_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border/70 bg-surface/40 px-5 py-4"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-0.5 text-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-foreground/75">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
