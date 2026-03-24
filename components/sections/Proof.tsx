"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Package, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

function ProductPlaceholder({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 border border-white/10`}>
      <Package className="w-10 h-10 text-white/60" />
      <span className="text-white/60 text-sm font-medium px-4 text-center">{label}</span>
    </div>
  );
}

const proofImages = [
  { label: "ModistCare Vitamin C Serum", gradient: "from-yellow-900/60 to-orange-900/60" },
  { label: "ModistCare Niacinamide Serum", gradient: "from-blue-900/60 to-cyan-900/60" },
  { label: "Premium Packaging Design", gradient: "from-purple-900/60 to-pink-900/60" },
  { label: "Brand Identity System", gradient: "from-emerald-900/60 to-teal-900/60" },
];

export default function Proof() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Proof of Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Built Our Own Brand <span className="gradient-text">From Scratch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ModistCare is our own skincare brand — proof that our process works.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-4">
              {proofImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={shouldReduce ? {} : { scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductPlaceholder {...img} />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-500 mt-4">
              Replace with actual ModistCare product photos
            </p>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                We&apos;ve been where you are.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We didn&apos;t just read about launching skincare brands — we actually did it. ModistCare was built from zero, using the exact process we now offer to our clients.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Award, title: "Real Experience", desc: "Built and launched multiple products in the Pakistani market" },
                  { icon: Package, title: "Battle-Tested Process", desc: "Our 30-day launch process has been refined through real launches" },
                  { icon: TrendingUp, title: "Growing Community", desc: "50+ happy clients and counting, with repeat orders proving market fit" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 glass rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
