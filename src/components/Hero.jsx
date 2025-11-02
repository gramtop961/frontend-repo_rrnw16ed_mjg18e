import { Rocket, ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/60 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Rocket className="h-3.5 w-3.5" />
            Launch your store in minutes
          </div>

          <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900">
            Build and grow your ecommerce brand, without limits
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Everything you need to launch a beautiful online store, accept payments worldwide, and scale with powerful marketing and AI tools — all in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm hover:bg-indigo-700 transition"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50 transition"
            >
              <PlayCircle className="h-5 w-5" />
              Book a demo
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PromoCard title="Beautiful themes" description="Choose from curated, high-converting themes designed to sell."/>
          <PromoCard title="Global payments" description="Accept cards, wallets, and BNPL in 135+ currencies."/>
          <PromoCard title="Built-in SEO" description="Rank higher with lightning-fast performance and SEO best practices."/>
        </div>
      </div>
    </section>
  );
}

function PromoCard({ title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
