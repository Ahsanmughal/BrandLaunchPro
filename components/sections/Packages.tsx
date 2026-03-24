"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Award, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const packages = [
  {
    name: "Starter",
    tagline: "Market Validation",
    price: "PKR 99,000",
    moq: "100 units",
    best: "Ideal for first-time brand owners",
    popular: false,
    message: "Hi, I'm interested in the Starter Manufacturing Package for PKR 99,000",
    specs: [
      "1 Product (Serum / Facewash / Shampoo)",
      "MOQ: 100 Units",
      "Ready-made formula",
      "Bottle + basic label design",
      "Logo placement",
      "Basic packaging",
    ],
    ctaLabel: "Request Quote",
    accentColor: "border-l-slate-500",
    btnClass: "bg-slate-700 hover:bg-slate-600 text-white",
  },
  {
    name: "Growth",
    tagline: "Full Brand Build",
    price: "PKR 299,000",
    moq: "200–300 units / SKU",
    best: "Most popular for scaling brands",
    popular: true,
    message: "Hi, I'm interested in the Growth Manufacturing Package for PKR 299,000",
    specs: [
      "2–3 Products",
      "MOQ: 200–300 Units each",
      "Premium packaging design",
      "Custom branding (logo + labels)",
      "Product naming",
      "Shopify / Daraz store setup",
      "Pricing & launch guidance",
    ],
    ctaLabel: "Start Production",
    accentColor: "border-l-amber-500",
    btnClass: "bg-amber-500 hover:bg-amber-400 text-slate-950",
  },
  {
    name: "Premium",
    tagline: "Turnkey Manufacturing",
    price: "PKR 650,000",
    moq: "300–500 units / SKU",
    best: "Complete done-for-you solution",
    popular: false,
    message: "Hi, I'm interested in the Premium Turnkey Manufacturing Package for PKR 650,000",
    specs: [
      "3–5 Products",
      "MOQ: 300–500 Units each",
      "Custom formulation development",
      "Premium packaging + boxes",
      "Full brand identity system",
      "Complete Shopify store",
      "Product photography",
      "Launch strategy included",
    ],
    ctaLabel: "Book Consultation",
    accentColor: "border-l-sky-500",
    btnClass: "bg-slate-700 hover:bg-slate-600 text-white",
  },
];

export default function Packages() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 hex-bg opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Production Packages</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Manufacturing <span className="accent-text">Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Choose the production tier that matches your volume requirements and brand goals.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -4 }}
                className={`relative rounded-sm border border-slate-700 bg-slate-900 border-l-4 ${pkg.accentColor} ${
                  pkg.popular ? "ring-1 ring-amber-500/50" : ""
                } h-full flex flex-col transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-6 flex items-center gap-1 px-3 py-1 rounded-sm bg-amber-500 text-slate-950 text-xs font-mono font-bold shadow-lg">
                    <Award className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 border-b border-slate-700">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xl font-black text-white tracking-wide">{pkg.name}</h3>
                    <span className="font-mono text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-sm border border-slate-700">
                      MOQ: {pkg.moq}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{pkg.tagline}</p>
                  <p className="text-xs text-slate-500 mt-1">{pkg.best}</p>
                </div>

                <div className="p-6 border-b border-slate-700">
                  <p className="text-3xl font-black text-white font-mono">
                    {pkg.price}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">starting from · excl. shipping</p>
                </div>

                <div className="p-6 flex-1">
                  <p className="tech-label mb-3">Specifications</p>
                  <ul className="space-y-2.5">
                    {pkg.specs.map((spec, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-sm font-bold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${pkg.btnClass}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {pkg.ctaLabel}
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
