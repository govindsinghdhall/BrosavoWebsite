import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/10 blur-[120px]"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* BROSAVO */}
        <Link
          href="/"
          aria-label="BROSAVO Home"
          className="mb-12 text-2xl font-bold tracking-tight"
        >
          BROS<span className="text-accent-blue">A</span>VO
        </Link>

        {/* 404 */}
        <div
          className="
            bg-gradient-to-r
            from-accent-blue
            via-purple-500
            to-accent-blue
            bg-clip-text
            text-[140px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-transparent
            sm:text-[180px]
            md:text-[220px]
          "
        >
          404
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
          Looks like this page flew away. The link you followed may be broken,
          or the page may have been moved.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-foreground
            px-7
            py-3.5
            text-sm
            font-semibold
            text-background
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-xl
          "
        >
          Go Back Home

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}