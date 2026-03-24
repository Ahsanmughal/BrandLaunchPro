"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Droplets, Sun, Wind, Sparkles, Zap, FlaskConical } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const products = [
  { icon: Sparkles, name: "Vitamin C Serum", desc: "Brightening & antioxidant-rich", color: "from-yellow-500 to-orange-500" },
  { icon: Droplets, name: "Niacinamide Serum", desc: "Pore minimizing & oil control", color: "from-blue-500 to-cyan-500" },
  { icon: Wind, name: "Hair Growth Shampoo", desc: "DHT blocking & nourishing", color: "from-emerald-500 to-teal-500" },
  { icon: FlaskConical, name: "Facewash", desc: "Gentle deep cleansing", color: "from-purple-500 to-violet-500" },
  { icon: Sun, name: "Sunscreen SPF 50+", desc: "Broad spectrum UV protection", color: "from-rose-500 to-pink-500" },
  { icon: Zap, name: "Coming Soon…", desc: "More products being formulated", color: "from-slate-600 to-slate-500" },
];

export default function Products() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Product Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Products You Can <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Proven formulas with high market demand — ready to be branded and sold.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                <p className="text-slate-400 text-sm">{product.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
