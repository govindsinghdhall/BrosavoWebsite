import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers at Brosavo | Join Our Team",
  description:
    "Explore career opportunities at Brosavo. We're hiring a Sales Executive to drive growth for our software, AI, and SaaS products.",
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  openGraph: {
    title: "Careers at Brosavo | Join Our Team",
    description:
      "Join Brosavo and help shape the future of software, AI, and business automation. Apply for our Sales Executive role today.",
    url: `${SITE_URL}/careers`,
    siteName: "Brosavo",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Careers Hero / Main Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#12CFE8]/20 via-[#1769E8]/20 to-[#6C3FF5]/20 px-4 py-1.5 text-xs font-medium text-[#1769E8] backdrop-blur-sm">
                Join the team
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Build the future with{" "}
                <span className="bg-gradient-to-r from-[#12CFE8] via-[#1769E8] to-[#6C3FF5] bg-clip-text text-transparent">
  BROSAVO
</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                We&apos;re looking for passionate people to help us deliver
                world-class software, AI, and automation solutions.
              </p>
            </div>

            {/* Premium Job Posting Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface/60 to-surface/30 p-8 backdrop-blur-sm md:p-10">
              {/* Decorative gradient orb */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#12CFE8]/10 via-[#1769E8]/10 to-[#6C3FF5]/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-[#6C3FF5]/10 via-[#1769E8]/10 to-[#12CFE8]/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500 backdrop-blur-sm">
                        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        Open position
                      </span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                        High-impact role
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                      Sales Executive
                      <span className="ml-2 text-lg font-medium text-muted">
                        (Performance-Led)
                      </span>
                    </h2>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Full-time
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Remote / Hybrid
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-0.5 text-amber-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Uncapped earning potential
                      </span>
                    </div>
                    {/* Location Section */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Location:
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-0.5 text-xs text-blue-400">
                        🇨🇦 Canada (Preferred: Vancouver)
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-0.5 text-xs text-orange-400">
                        🇮🇳 India (Preferred: Gurugram)
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-border/60" />

                <div className="prose prose-invert max-w-none">
                  <div className="grid gap-8 md:grid-cols-5">
                    <div className="md:col-span-3">
                      <h3 className="text-lg font-semibold">About the role</h3>
                      <p className="text-sm leading-relaxed text-muted">
                        As a Sales Executive at Brosavo, you will be responsible
                        for driving revenue growth by selling our portfolio of
                        products — including software development services, AI
                        solutions, SaaS platforms, business automation tools,
                        and our flagship Real Estate CRM — over calls with leads
                        generated by our marketing team. This is a high-energy,
                        target-driven role with performance-based rewards that
                        recognize and celebrate your contributions.
                      </p>

                      <h3 className="mt-6 text-lg font-semibold">
                        Key responsibilities
                      </h3>
                      <ul className="space-y-2 text-sm text-muted">
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">▹</span>
                          Proactively reach out to warm leads via phone calls to
                          understand their business needs and technology goals.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">▹</span>
                          Present and demonstrate Brosavo&apos;s products
                          (software, AI, SaaS, automation, Real Estate CRM) in a
                          compelling and consultative manner.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">▹</span>
                          Build and manage a sales pipeline, track activities in
                          CRM, and provide regular forecasts.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">▹</span>
                          Negotiate pricing, overcome objections, and close
                          deals while maintaining high customer satisfaction.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">▹</span>
                          Collaborate with the marketing team to refine lead
                          qualification and feedback loops.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">▹</span>
                          Achieve and exceed monthly/quarterly sales targets to
                          maximize your earning potential.
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-2">
                      <div className="rounded-2xl border border-border/50 bg-surface/30 p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                          What we offer
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                          <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-primary">✦</span>
                            <div>
                              <p className="font-medium">
                                Performance-Led Rewards
                              </p>
                              <p className="text-xs text-muted">
                                Industry-leading structure that directly rewards
                                your success
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-primary">✦</span>
                            <div>
                              <p className="font-medium">
                                Flexible Work Environment
                              </p>
                              <p className="text-xs text-muted">
                                Remote-first culture with hybrid options
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-primary">✦</span>
                            <div>
                              <p className="font-medium">
                                Premium Product Portfolio
                              </p>
                              <p className="text-xs text-muted">
                                Sell innovative solutions in AI, SaaS, and
                                automation
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-0.5 text-primary">✦</span>
                            <div>
                              <p className="font-medium">
                                Continuous Growth
                              </p>
                              <p className="text-xs text-muted">
                                Ongoing training and product knowledge sessions
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 rounded-2xl border border-border/50 bg-surface/30 p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                          Who you are
                        </h4>
                        <ul className="mt-4 space-y-2 text-xs text-muted">
                          <li>• Proven B2B sales experience in tech/SaaS</li>
                          <li>• Excellent communication &amp; persuasion skills</li>
                          <li>• Self-motivated and results-oriented</li>
                          <li>• Ability to translate technical features to value</li>
                          <li>• CRM proficiency is a plus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mail to HR Section - Moved inside the card */}
                <hr className="my-8 border-border/60" />
                <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-purple-500/5 p-6">
                  <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Apply Now
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        Send your resume directly to our HR team at:
                      </p>
                    </div>
                    <a
                      href="mailto:hr@brosavo.com"
                      className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-primary transition hover:scale-105 hover:text-primary/80 md:mt-0"
                    >
                      hr@brosavo.com
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-4 py-2 text-xs text-green-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                We respond within 48 hours
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-4 py-2 text-xs text-blue-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Confidential application
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-4 py-2 text-xs text-purple-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Open to diverse backgrounds
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="container-wide section-padding pt-0">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
              Visit Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Find <span className="text-primary">BROSAVO</span>
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Visit our office in Gurugram. Find us at 101 R, New Colony, Sector
              7, Gurugram, Haryana 122001.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-3xl border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.736857087527!2d77.014152!3d28.468449200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d5c8a9c373%3A0x688f90bc1560a5a0!2sBrisavo%20Technologies!5e0!3m2!1sen!2sin!4v1786336353361!5m2!1sen!2sin"
              width="600"
              height="400"
              style={{
                border: 0,
                width: "100%",
                height: "400px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="BROSAVO Technologies office location"
            />
          </div>
        </div>
      </section>
    </>
  );
}