import Link from "next/link";

import type {
  LocationFaq,
  LocationLink,
  LocationSection,
} from "@/data/realEstateCrmLocationTypes";

export function LocationSections({
  sections,
}: {
  sections: LocationSection[];
}) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.title}
          className="border-t border-border/50 py-16 sm:py-20"
        >
          <div className="container-wide px-6 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {section.title}
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets?.length ? (
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm text-muted"
                    >
                      <span className="mr-2 text-accent-blue">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export function LocationRelatedLinks({
  links,
}: {
  links: LocationLink[];
}) {
  if (!links.length) return null;

  return (
    <section className="border-t border-border/50 py-16 sm:py-20">
      <div className="container-wide px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Related resources
          </h2>
          <ul className="mt-6 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-accent-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LocationFaqs({ faqs }: { faqs: LocationFaq[] }) {
  if (!faqs.length) return null;

  return (
    <section className="border-t border-border/50 bg-surface py-16 sm:py-20">
      <div className="container-wide px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border/70 bg-background"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-medium">
                  <span>{faq.question}</span>
                  <span className="text-xl text-muted transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function buildFaqSchema(faqs: LocationFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
