"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our Starter Package has a minimum order of 100 units per SKU — one of the lowest MOQs available from a GMP-compliant manufacturer in Pakistan. Growth and Premium tiers start at 200–300 units per SKU.",
  },
  {
    q: "Do I need skincare formulation experience?",
    a: "No prior formulation experience is required. Our R&D team selects and tests formulas on your behalf. You define the product category, target benefits, and price point — we handle the technical formulation.",
  },
  {
    q: "What is the production turnaround time?",
    a: "Standard production is 30 days from confirmed order and design approval. Complex custom formulations may require an additional 5–10 days for stability and efficacy testing.",
  },
  {
    q: "Can I request a custom formulation?",
    a: "Yes. Custom formulation development is available with our Growth and Premium packages. We conduct R&D, stability testing, and provide a full technical data sheet for your product.",
  },
  {
    q: "Is the facility GMP-compliant?",
    a: "Yes. All production runs take place in our GMP-compliant manufacturing facility with documented quality control at each production stage. Batch records are maintained for traceability.",
  },
  {
    q: "What happens after I confirm my order?",
    a: "We schedule a technical brief call to finalize product specifications, packaging, and labeling. Once design is approved, production begins immediately with regular progress updates throughout the 30-day cycle.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="industrial-card rounded-sm overflow-hidden border-l-2 border-l-slate-700 hover:border-l-amber-500 transition-colors">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-800/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
          aria-expanded={open}
        >
          <span className="font-semibold text-white pr-4 text-sm">{q}</span>
          <div className="flex-shrink-0 w-6 h-6 rounded-sm bg-slate-700 border border-slate-600 flex items-center justify-center">
            {open ? (
              <Minus className="w-3 h-3 text-amber-400" />
            ) : (
              <Plus className="w-3 h-3 text-slate-400" />
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
              <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-4">
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
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 hex-bg opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Technical FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Frequently Asked <span className="accent-text">Questions</span>
          </h2>
          <p className="text-slate-400">Common questions about our manufacturing process and production specifications.</p>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
