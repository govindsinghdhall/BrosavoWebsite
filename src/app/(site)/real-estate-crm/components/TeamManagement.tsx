import Image from "next/image";

export default function TeamManagement() {
  return (
    <section className="section-padding">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <div className="">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">Team management</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Give every team member clarity and accountability.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">Manage users, permissions, assignments and responsibilities from a centralized real estate CRM.</p>

        </div>

        <div className=" mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-background p-2 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/TEAM MANAGEMENT VISUAL.png"
              alt="Brosavo real estate CRM team management"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-[22px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
