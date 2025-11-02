import { CheckCircle2, LayoutDashboard, Package, Megaphone } from "lucide-react";

const steps = [
  {
    icon: LayoutDashboard,
    title: "Customize your storefront",
    desc: "Pick a theme, drag-and-drop sections, and match your brand in minutes.",
  },
  { icon: Package, title: "Add products", desc: "Import from CSV or your supplier, set variants, and manage inventory." },
  { icon: Megaphone, title: "Launch and grow", desc: "Connect channels, run campaigns, and track performance in real time." },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Launch in three simple steps</h2>
          <p className="mt-3 text-slate-600">No code required. We handle the infrastructure so you can focus on your brand.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <div className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold">
                {idx + 1}
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                No coding needed
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
