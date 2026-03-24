"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Droplets, Sun, Wind, FlaskConical, Beaker, TestTube } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const products = [
  {
    icon: FlaskConical,
    name: "Vitamin C Serum",
    formula: "L-Ascorbic Acid 20%",
    desc: "Brightening · Antioxidant · Anti-aging",
    tag: "HIGH DEMAND",
  },
  {
    icon: Droplets,
    name: "Niacinamide Serum",
    formula: "Nicotinamide 10% + Zinc 1%",
    desc: "Pore minimizing · Oil control · Barrier repair",
    tag: "BESTSELLER",
  },
  {
    icon: Wind,
    name: "Hair Growth Shampoo",
    formula: "Biotin + Keratin Complex",
    desc: "DHT blocking · Nourishing · Scalp treatment",
    tag: "",
  },
  {
    icon: Beaker,
    name: "Gentle Facewash",
    formula: "Amino Acid Surfactant Base",
    desc: "Deep cleansing · pH balanced · Skin-safe",
    tag: "",
  },
  {
    icon: Sun,
    name: "Sunscreen SPF 50+",
    formula: "Zinc Oxide + Avobenzone",
    desc: "Broad spectrum UV · Matte finish · Daily use",
    tag: "NEW",
  },
  {
    icon: TestTube,
    name: "Custom Formulation",
    formula: "R&D on request",
    desc: "Bespoke formula development for Growth & Premium tiers",
    tag: "CUSTOM",
  },
];

export default function Products() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Hex bg */}
      <div className="absolute inset-0 hex-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Product Catalog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Formulations Ready for <span className="accent-text">Production</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Clinically developed formulas with proven market demand — ready to be manufactured under your brand.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={shouldReduce ? {} : { x: 4 }}
                className="industrial-card industrial-card-hover rounded-sm p-5 group border-l-2 border-l-slate-600 hover:border-l-amber-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-slate-800 border border-slate-600 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/40 transition-colors">
                    <product.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-sm">{product.name}</h3>
                      {product.tag && (
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-sm">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-sky-400 mb-1.5">{product.formula}</p>
                    <p className="text-slate-500 text-xs">{product.desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
