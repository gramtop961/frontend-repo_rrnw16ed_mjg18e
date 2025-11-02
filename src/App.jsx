import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import { ShoppingBag } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="font-semibold">CommerceCraft</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#customers" className="hover:text-slate-900">Customers</a>
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <a href="#login" className="text-sm text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#get-started" className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <div id="how"><HowItWorks /></div>
        <div id="customers"><Testimonials /></div>

        <section id="get-started" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-1 gap-6 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 sm:grid-cols-3 sm:items-center">
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-semibold text-slate-900">Start free today</h3>
                <p className="mt-2 text-slate-700">Try all features free for 14 days. No credit card required.</p>
              </div>
              <div className="flex sm:justify-end">
                <a href="#signup" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 transition">
                  Create your store
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-slate-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <ShoppingBag className="h-4 w-4" />
              </div>
              CommerceCraft
            </div>
            <p>© {new Date().getFullYear()} CommerceCraft, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
