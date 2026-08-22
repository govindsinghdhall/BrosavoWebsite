"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_LINKS, CONTACT } from "@/lib/data";
import { ArrowUpRight, Mail } from "lucide-react";

type SocialIconProps = {
  className?: string;
};

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.04 1.47-4.04 4.17V10H7.5v3h2.73v8h3.27Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M5.2 3.5A1.95 1.95 0 1 1 5.2 7.4a1.95 1.95 0 0 1 0-3.9ZM3.5 8.8h3.4V20H3.5V8.8Zm5.5 0h3.3v1.53h.05c.46-.88 1.58-1.8 3.25-1.8 3.47 0 4.11 2.28 4.11 5.25V20h-3.4v-5.52c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V20H9V8.8Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
    </svg>
  );
}

function GithubIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.18c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.16 1.2a10.96 10.96 0 0 1 5.76 0c2.2-1.51 3.16-1.2 3.16-1.2.63 1.6.23 2.79.11 3.08.74.82 1.19 1.86 1.19 3.13 0 4.46-2.72 5.44-5.3 5.73.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function XIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: CONTACT.social.instagram.href,
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: CONTACT.social.facebook.href,
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: CONTACT.social.linkedin.href,
    icon: LinkedinIcon,
  },
  {
    label: "YouTube",
    href: CONTACT.social.youtube.href,
    icon: YoutubeIcon,
  },
  {
    label: "X",
    href: CONTACT.social.x.href,
    icon: XIcon,
  },
  {
    label: "GitHub",
    href: CONTACT.social.github.href,
    icon: GithubIcon,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-accent-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-accent-violet/5 blur-[100px]" />
      </div>

      <div className="container-wide relative section-padding !pt-20 !pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Company Information */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 overflow-hidden rounded-2xl bg-slate-950/5 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.12)]">
                <img
                  src="/logo.svg"
                  alt="BROSAVO logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="text-lg font-semibold">BROSAVO</span>
            </Link>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed mb-4 max-w-xs">
              Global technology company engineering mission-critical software,
              AI products, and digital infrastructure worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 mb-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{CONTACT.email}</span>
              </a>

              <a
                href={CONTACT.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" />
                <span>@{CONTACT.instagram.handle}</span>
              </a>

              {CONTACT.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  <span>{phone.flag}</span>
                  <span>{phone.number}</span>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
                Follow Brosavo
              </p>

              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Brosavo on ${social.label}`}
                      title={`Brosavo on ${social.label}`}
                      className="group flex items-center justify-center w-9 h-9 rounded-full border border-border bg-background/40 text-foreground/50 hover:text-foreground hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Locations */}
            <div className="flex items-center gap-4 text-sm">
              <span className="glass rounded-full px-3 py-1.5 text-xs font-mono">
                🇨🇦 Canada
              </span>

              <span className="glass rounded-full px-3 py-1.5 text-xs font-mono">
                🇮🇳 India
              </span>
            </div>
          </div>

          {/* Footer Link Categories */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h2 className="text-xs font-mono uppercase tracking-wider text-muted mb-4">
                {category}
              </h2>

              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}

                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} BROSAVO Technologies. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              href="/contact"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Contact Brosavo
            </Link>
          </div>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-xs font-mono text-accent-cyan"
          >
            Building technology globally
          </motion.div>
        </div>

        {/* Animated BROSAVO Background */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="text-[8vw] md:text-[6vw] font-bold text-foreground/[0.03] mx-8 select-none"
              >
                BROSAVO
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}