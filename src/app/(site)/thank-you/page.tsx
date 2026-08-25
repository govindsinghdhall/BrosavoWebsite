import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | BROSAVO",
  description:
    "Thank you for contacting BROSAVO. Our team will get back to you shortly.",
  alternates: {
    canonical: `${SITE_URL}/thank-you`,
  },
  openGraph: {
    title: "Thank You | BROSAVO",
    description:
      "Thank you for contacting BROSAVO. Our team will get back to you shortly.",
    url: `${SITE_URL}/thank-you`,
    siteName: "BROSAVO",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M5 12.5 9.5 17 19 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="9"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M14 4c2.5-2.5 6-2.5 6-2.5S20 5 17.5 7.5L13 12l-1-4 2-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m13 12-3 3-1-1-3 3 1 1-3 3 3-3 1 1 3-3-1-1 3-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16.5"
        cy="5.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[120px]" />

        <div className="absolute -left-40 top-[450px] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />

        <div className="absolute -right-40 top-[600px] h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[120px]" />
      </div>

      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-full max-w-[1500px] -translate-x-1/2 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_60%)]" />
      </div>

      {/* Hero */}
      <section className="px-6 pb-10 pt-20 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-6xl text-center">
          {/* Success badge */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-[0_15px_45px_rgba(79,70,229,0.28)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <CheckIcon />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Message Received
          </p>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-[-0.045em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.98]">
            Thank{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              You!
            </span>
          </h1>

          <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Your message has been received.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We appreciate you reaching out to BROSAVO. Our team will review
            your requirements and get back to you shortly.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(79,70,229,0.32)]"
            >
              Back to Home
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              Contact Us Again
            </Link>
          </div>
        </div>
      </section>

      {/* Product visual */}
      <section className="px-6 pb-14 pt-8">
        <div className="relative mx-auto max-w-5xl">
          {/* Glow behind dashboard */}
          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-2 shadow-[0_30px_100px_rgba(15,23,42,0.12)] sm:p-3">
            {/* Browser bar */}
            <div className="flex h-10 items-center gap-2 border-b border-slate-100 px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

              <div className="mx-auto hidden h-6 w-1/2 rounded-md bg-slate-50 sm:block" />
            </div>

            {/* Dashboard */}
            <div className="grid min-h-[300px] grid-cols-1 bg-slate-50 sm:grid-cols-[180px_1fr]">
              {/* Sidebar */}
              <div className="hidden border-r border-slate-100 bg-[#101a3a] p-5 sm:block">
                <div className="mb-8 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold text-white">
                    B
                  </div>

                  <span className="text-sm font-bold text-white">
                    BROSAVO
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    "Dashboard",
                    "Leads",
                    "Properties",
                    "Messages",
                    "Analytics",
                    "Team",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs ${
                        index === 0
                          ? "bg-blue-600 text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main dashboard */}
              <div className="p-5 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      BROSAVO CRM
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      Welcome back 👋
                    </h3>
                  </div>

                  <div className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 sm:block">
                    This Month
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {[
                    ["Total Leads", "1,250", "+24%"],
                    ["Properties", "842", "+18%"],
                    ["Messages", "2,146", "+32%"],
                    ["Deals Closed", "156", "+15%"],
                  ].map(([label, value, change]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <p className="text-[10px] font-medium text-slate-400">
                        {label}
                      </p>

                      <p className="mt-1 text-xl font-bold text-slate-900">
                        {value}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-emerald-500">
                        {change} this month
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
                  {/* Chart */}
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-800">
                        Leads Overview
                      </p>

                      <span className="text-[10px] text-slate-400">
                        Last 30 days
                      </span>
                    </div>

                    <div className="relative h-28">
                      <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-slate-100" />
                      <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-100" />
                      <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-slate-100" />

                      <svg
                        viewBox="0 0 500 130"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full"
                      >
                        <defs>
                          <linearGradient
                            id="leadGradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 105 C45 100 55 78 90 85 C125 92 130 48 170 62 C205 75 220 36 255 49 C290 62 300 20 340 38 C380 55 395 25 425 30 C455 35 470 10 500 18"
                          fill="none"
                          stroke="url(#leadGradient)"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Sources */}
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold text-slate-800">
                      Lead Sources
                    </p>

                    <div className="mt-5 flex items-center gap-5">
                      <div className="relative h-20 w-20 shrink-0 rounded-full bg-[conic-gradient(#2563eb_0_45%,#7c3aed_45%_75%,#60a5fa_75%_90%,#e2e8f0_90%_100%)]">
                        <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white">
                          <span className="text-xs font-bold text-slate-900">
                            100%
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-[10px]">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-blue-600" />
                          Website
                          <span className="font-semibold">45%</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-violet-600" />
                          WhatsApp
                          <span className="font-semibold">30%</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-blue-300" />
                          Referral
                          <span className="font-semibold">15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mascot */}
          <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
            <div className="relative flex h-32 w-32 items-end justify-center">
              <div className="absolute bottom-0 h-24 w-24 rounded-full bg-gradient-to-br from-slate-700 to-slate-950 shadow-xl" />

              <div className="absolute bottom-14 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-4xl shadow-lg">
                🦅
              </div>

              <div className="absolute bottom-0 z-20 h-16 w-28 rounded-t-[40px] bg-white shadow-lg">
                <div className="absolute left-1/2 top-4 h-6 w-6 -translate-x-1/2 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 text-center text-xs font-bold leading-6 text-white">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="px-6 pb-24 pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: <MailIcon />,
                title: "Check Your Email",
                description:
                  "You will receive a confirmation email shortly with the details of your enquiry.",
              },
              {
                icon: <UsersIcon />,
                title: "Our Team Will Connect",
                description:
                  "One of our experts will review your requirements and reach out to you soon.",
              },
              {
                icon: <RocketIcon />,
                title: "Let's Build Together",
                description:
                  "We're excited to help you simplify, automate and grow your business with BROSAVO.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/80 bg-white p-7 text-center shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#101a3a] via-[#17255a] to-[#3b1d76] px-7 py-14 text-center shadow-[0_25px_80px_rgba(30,41,100,0.25)] sm:px-12">
          <div
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              BROSAVO
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Smarter software for businesses ready to grow.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              From CRM and AI to automation and digital solutions, BROSAVO
              helps modern businesses work smarter.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore BROSAVO
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}