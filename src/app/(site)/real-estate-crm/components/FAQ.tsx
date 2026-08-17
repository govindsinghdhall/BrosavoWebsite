const faqs = [
  ["What is a real estate CRM?", "A real estate CRM is software that helps agents, brokers and agencies manage leads, customers, properties, follow-ups and sales opportunities from one centralized platform."],
  ["Who is Brosavo Real Estate CRM for?", "Brosavo is designed for individual agents, brokers, real estate agencies, sales teams and developers."],
  ["Does Brosavo include a real estate website?", "Yes. The Starter plan includes a professional website with property listings and lead capture. Professional adds advanced website capabilities, blog, SEO tools and property portal integration."],
  ["Does Brosavo support WhatsApp?", "Yes. Starter includes WhatsApp notifications while Professional includes WhatsApp API integration."],
  ["Does Brosavo integrate with 99acres?", "Yes. 99acres integration is available as part of the Professional website and property portal capabilities."],
  ["Does Brosavo have AI features?", "Yes. Brosavo includes AI capabilities designed to help real estate teams improve workflows and productivity."],
  ["Does Brosavo have a free trial?", "Yes. Starter and Professional include a 14-day free trial."],
  ["How much does Brosavo Real Estate CRM cost?", "Starter costs ₹999 per month, Professional costs ₹2,499 per month and Enterprise pricing is customized."],
  ["Is a mobile app available?", "Yes. The Brosavo mobile app is available as an add-on."],
  ["Does Brosavo provide calling?", "Calling is not currently included as a Brosavo CRM feature."],
] as const;

export default function FAQ() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">FAQ</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-border/70 bg-background">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-medium">
                  <span>{question}</span>
                  <span className="text-xl text-muted transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
