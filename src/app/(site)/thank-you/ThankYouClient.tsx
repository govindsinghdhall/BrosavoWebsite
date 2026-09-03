"use client";

import Link from "next/link";
import {
  Check,
  ChevronDown,
  Moon,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  MessageCircle,
  Headphones,
} from "lucide-react";

export function ThankYouClient() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#0b1025]">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-[35%] h-96 w-96 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-[-150px] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-100/30 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[15%] h-[500px] w-[700px] rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[calc(100vh-102px)] max-w-[1550px] items-center px-8 py-10">
        {/* Decorative dots */}
        <div className="absolute left-0 top-[18%] hidden opacity-50 lg:block">
          <DotPattern />
        </div>

        <div className="absolute right-0 top-[12%] hidden opacity-50 lg:block">
          <DotPattern />
        </div>

        {/* Main horizontal layout */}
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col items-center text-center lg:items-start lg:pl-12 lg:text-left">
            {/* Check icon */}
            <div className="relative mb-6 flex h-[108px] w-[108px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_20px_45px_rgba(79,70,229,0.28)]">
              <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/30 bg-white/10">
                <Check size={42} strokeWidth={2.5} className="text-white" />
              </div>

              {/* sparkle dots */}
              <span className="absolute -right-7 top-2 h-2 w-2 rounded-full bg-blue-400" />
              <span className="absolute -left-8 top-8 h-2 w-2 rounded-full bg-purple-400" />
              <span className="absolute -right-12 bottom-5 h-2 w-2 rounded-full bg-indigo-300" />
            </div>

            {/* Eyebrow */}
            <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.3em] text-blue-600">
              Message Received
            </p>

            {/* Heading */}
            <h1 className="text-[64px] font-black leading-[0.95] tracking-[-0.045em] sm:text-[76px] xl:text-[88px]">
              Thank{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                You!
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="mt-6 text-[25px] font-bold tracking-tight text-[#17213a] sm:text-[29px]">
              Your message has been received.
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[650px] text-[18px] leading-8 text-slate-500 sm:text-[20px]">
              We appreciate you reaching out to BROSAVO.
              <br className="hidden sm:block" />
              Our team will review your requirements and get back to you
              shortly.
            </p>

            {/* Small trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-7 lg:justify-start">
              <TrustItem
                icon={<ShieldCheck size={20} />}
                title="Secure"
                text="Trusted"
              />

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              <TrustItem
                icon={<Zap size={20} />}
                title="Quick"
                text="Response"
              />

              <div className="hidden h-10 w-px bg-slate-200 sm:block" />

              <TrustItem
                icon={<Users size={20} />}
                title="Expert"
                text="Support"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">
            {/* Paper airplane */}
            <div className="absolute -right-2 -top-8 hidden rotate-[8deg] lg:block">
              <Send
                size={68}
                strokeWidth={1}
                className="fill-blue-300 text-blue-500"
              />
            </div>

            <div className="flex w-full max-w-[650px] items-center gap-8">
              {/* Support Card */}
              <div className="relative z-10 w-full rounded-[30px] border border-slate-200/80 bg-white/95 p-8 shadow-[0_25px_70px_rgba(30,41,59,0.10)] backdrop-blur-xl">
                {/* Card heading */}
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_10px_25px_rgba(79,70,229,0.2)]">
                    <Headphones
                      size={30}
                      strokeWidth={1.8}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-bold tracking-tight">
                      Need help right away?
                    </h3>

                    <p className="mt-1 max-w-[350px] text-[16px] leading-6 text-slate-500">
                      Our team is available to help with your requirements.
                    </p>
                  </div>
                </div>

                {/* Phone number */}
                <div className="mt-7 flex h-[66px] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 px-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Phone
                      size={21}
                      strokeWidth={2}
                      className="text-blue-600"
                    />
                  </div>

                  <a
                    href="tel:+919999107733"
                    className="text-[19px] font-bold tracking-tight text-slate-800"
                  >
                    +91 9999 107733
                  </a>
                </div>

                {/* Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <a
                    href="tel:+919999107733"
                    className="flex h-[58px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-[16px] font-bold text-white shadow-[0_10px_25px_rgba(16,185,129,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,185,129,0.3)]"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919999107733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[58px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-[16px] font-bold text-white shadow-[0_10px_25px_rgba(34,197,94,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(34,197,94,0.3)]"
                  >
                    <MessageCircle size={21} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Envelope illustration */}
              <div className="relative hidden h-[280px] w-[210px] shrink-0 xl:block">
                <div className="absolute inset-x-0 bottom-0 h-[220px] rounded-[24px] bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 shadow-[0_25px_45px_rgba(79,70,229,0.15)]">
                  {/* envelope flap */}
                  <div className="absolute left-0 right-0 top-0 h-[130px] origin-top overflow-hidden">
                    <div className="absolute left-[16px] top-[-58px] h-[170px] w-[170px] rotate-45 rounded-[20px] bg-gradient-to-br from-indigo-100 to-blue-200" />
                  </div>

                  {/* envelope bottom flap */}
                  <div className="absolute bottom-0 left-0 right-0 h-[120px] overflow-hidden rounded-b-[24px]">
                    <div className="absolute -bottom-[105px] left-[20px] h-[170px] w-[170px] rotate-45 rounded-[18px] bg-gradient-to-br from-blue-200 to-indigo-300" />
                  </div>

                  {/* check */}
                  <div className="absolute left-1/2 top-[88px] z-20 flex h-[70px] w-[70px] -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_12px_30px_rgba(79,70,229,0.3)]">
                    <Check size={35} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------- */
/* Components                    */
/* ----------------------------- */

function NavItem({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1.5 text-[16px] font-medium text-slate-600 transition hover:text-blue-600">
      {label}
      <ChevronDown size={15} />
    </button>
  );
}

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div className="text-left text-sm leading-5">
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-slate-500">{text}</div>
      </div>
    </div>
  );
}

function DotPattern() {
  return (
    <div className="grid grid-cols-5 gap-2">
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-blue-200"
        />
      ))}
    </div>
  );
}