import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We migrated in a weekend and saw a 28% lift in conversion. The checkout is blazing fast and the editor is a joy to use.",
    author: "Ava Johnson",
    role: "Founder, Lumina Skincare",
  },
  {
    quote:
      "From product imports to fulfillment, everything just works. The AI tools saved our team countless hours.",
    author: "Daniel Park",
    role: "COO, Ridge & Co.",
  },
  {
    quote:
      "We launched our DTC channel globally without engineers. Payments, taxes, and analytics are all built in.",
    author: "Maya Patel",
    role: "Head of Ecommerce, Northwind",
  },
];

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Loved by modern brands</h2>
          <p className="mt-3 text-slate-600">Thousands of founders and teams build on our platform every day.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-indigo-600" />
              <blockquote className="mt-4 text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold text-slate-900">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
                <div className="mt-2 flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i2) => (
                    <Star key={i2} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
