"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "Can I start with low investment?",
    a: "Yes — our Starter Package at PKR 99,000 is specifically designed for beginners who want to test the market before scaling up. You get 100 units of a premium product with your own branding.",
  },
  {
    q: "Do I need experience in skincare?",
    a: "No experience needed. We guide you step by step through product selection, branding, and selling. Our team has done this before — you just need the drive to build your brand.",
  },
  {
    q: "How long does the whole process take?",
    a: "Around 3–4 weeks depending on the product and customization level. We'll give you a detailed timeline after your consultation call.",
  },
  {
    q: "Can I choose my own formula or ingredients?",
    a: "Yes, with our Growth and Premium packages you can request custom formulations. Starter uses our proven ready-made formulas that are already market-tested.",
  },
  {
    q: "Do you help with marketing and selling?",
    a: "The Growth and Premium packages include store setup (Shopify / Daraz). We also provide pricing guidance and a launch strategy to help you get your first sales.",
  },
  {
    q: "What happens after I place an order?",
    a: "We schedule a consultation call to understand your goals, finalize the product and branding, then begin production. You'll receive progress updates throughout the 30-day period.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="glass rounded-2xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500"
          aria-expanded={open}
        >
          <span className="font-semibold text-white pr-4">{q}</span>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            {open ? (
              <Minus className="w-3 h-3 text-emerald-400" />
            ) : (
              <Plus className="w-3 h-3 text-emerald-400" />
            )}
          </div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={shouldReduce ? {} : { height: 0, opacity: 0 }}
              animate={shouldReduce ? {} : { height: "auto", opacity: 1 }}
              exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                {a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
