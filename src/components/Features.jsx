import { Store, Shield, CreditCard, Truck, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Storefront builder",
    desc: "Drag-and-drop editor with pixel-perfect control and responsive defaults.",
  },
  {
    icon: CreditCard,
    title: "Payments + checkout",
    desc: "Optimized checkout, subscriptions, and abandoned cart recovery.",
  },
  { icon: Shield, title: "Security by default", desc: "Enterprise-grade security, SSO, and fraud protection baked in." },
  { icon: Truck, title: "Fulfillment", desc: "Real-time shipping rates, labels, and inventory sync across channels." },
  { icon: Zap, title: "AI assistant", desc: "Generate product copy, images, and campaigns in a click." },
  { icon: BarChart3, title: "Analytics", desc: "Understand your customers with real-time dashboards and cohorts." },
];

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to sell</h2>
          <p className="mt-3 text-slate-600">From idea to first sale to global expansion — we’ve got you covered at every stage.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
