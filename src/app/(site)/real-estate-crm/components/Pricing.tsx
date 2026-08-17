import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    oldPrice: "₹1,499",
    save: "Save 33%",
    description: "Everything you need to start selling.",
    note: "Perfect for individual agents getting started with professional real estate tools.",
    features: [
      "Professional Website",
      "Smart CRM",
      "Unlimited Lead Management",
      "WhatsApp Notifications",
      "Email Support",
    ],
    href: "https://crm.brosavo.com",
    primary: false,
  },
  {
    name: "Professional",
    price: "₹2,499",
    oldPrice: "₹3,499",
    save: "Save 28%",
    description: "Scale your real estate business.",
    note: "Built for growing brokerages and teams who want to dominate their market.",
    features: [
      "Everything in Starter",
      "Advanced Website Suite",
      "Team Collaboration",
      "WhatsApp API Integration",
      "Marketing Automation",
      "Advanced Analytics",
      "Call Tracking",
      "Priority Support",
    ],
    href: "https://crm.brosavo.com",
    primary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    oldPrice: "",
    save: "",
    description: "Unlimited power for large organizations.",
    note: "For multi-branch agencies and developers building at scale.",
    features: [
      "Unlimited Users",
      "Unlimited Websites",
      "Unlimited Branches",
      "Custom Integrations",
      "API Access",
      "White Label Solutions",
      "Dedicated Account Manager",
      "Advanced Security",
      "SSO",
      "Advanced Permissions",
      "Data Migration",
    ],
    href: "/contact?plan=enterprise",
    primary: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative flex min-h-[100svh] w-full items-center bg-surface py-16 lg:py-20"
    >
      <div className="container-wide w-full">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent-violet">
            Real estate CRM pricing
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Start small. Scale when you&apos;re ready.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Start with a 14-day free trial and upgrade as your business grows.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 lg:mt-12 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                plan.primary
                  ? "border-accent-blue/30 bg-background shadow-xl"
                  : "border-border/70 bg-background"
              }`}
            >
              {/* Popular Badge */}
              {plan.primary && (
                <div className="absolute right-5 top-5 rounded-full bg-accent-blue px-3 py-1 text-[10px] font-medium text-white">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <div className="text-sm font-semibold">{plan.name}</div>

              {/* Description */}
              <div className="mt-2 max-w-[85%] text-sm text-muted">
                {plan.description}
              </div>

              {/* Price */}
              <div className="mt-6 text-4xl font-semibold tracking-tight">
                {plan.price}

                {plan.price !== "Custom" && (
                  <span className="text-sm font-normal text-muted">
                    {" "}
                    / month
                  </span>
                )}
              </div>

              {/* Old Price */}
              {plan.oldPrice && (
                <div className="mt-2 text-xs text-muted">
                  <span className="line-through">{plan.oldPrice}</span>{" "}
                  <span className="text-green-500">{plan.save}</span>
                </div>
              )}

              {/* Note */}
              <p className="mt-4 text-sm leading-6 text-muted">
                {plan.note}
              </p>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 ${
                  plan.primary
                    ? "bg-foreground text-background"
                    : "border border-border/70 bg-surface"
                }`}
              >
                {plan.name === "Enterprise"
                  ? "Book Live Demo"
                  : "Start Free 14-Day Trial"}
              </Link>

              {/* Divider */}
              <div className="my-6 h-px bg-border/70" />

              {/* Features */}
              <ul className="space-y-3 text-sm text-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="shrink-0 text-accent-blue">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Add-on */}
        <p className="mt-7 text-center text-sm text-muted">
          Mobile App available as an add-on.
        </p>
      </div>
    </section>
  );
}