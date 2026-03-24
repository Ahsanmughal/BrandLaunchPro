"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Package, TrendingUp, FlaskConical } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

function ProductPlaceholder({ label, tag }: { label: string; tag: string }) {
  return (
    <div className="w-full aspect-square rounded-sm industrial-card flex flex-col items-center justify-center gap-3 border border-slate-700 hover:border-amber-500/30 transition-colors group">
      <FlaskConical className="w-8 h-8 text-slate-600 group-hover:text-amber-500/60 transition-colors" />
      <div className="text-center px-4">
        <p className="text-slate-400 text-xs font-medium">{label}</p>
        <span className="text-[10px] font-mono text-amber-500/70">{tag}</span>
      </div>
    </div>
  );
}

const proofImages = [
  { label: "ModistCare Vitamin C Serum", tag: "LAUNCHED · 2023" },
  { label: "ModistCare Niacinamide Serum", tag: "LAUNCHED · 2023" },
  { label: "Premium Packaging Design", tag: "BRAND IDENTITY" },
  { label: "Custom Label System", tag: "PRODUCTION READY" },
];

export default function Proof() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Case Study · ModistCare</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight max-w-3xl">
            We Built a Skincare Brand <span className="accent-text">From Scratch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            ModistCare is our own label — proof that our formulation and production process delivers real, market-ready products.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Gallery */}
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-3">
              {proofImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={shouldReduce ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductPlaceholder {...img} />
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-3 font-mono">
              * Replace placeholders with actual ModistCare product photos
            </p>
          </AnimatedSection>

          {/* Text — lab report style */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {/* Report header */}
              <div className="industrial-card rounded-sm p-4 border-l-4 border-l-amber-500">
                <p className="tech-label mb-1">Lab Report — Production Record</p>
                <h3 className="text-xl font-black text-white">
                  We&apos;ve been where you are.
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                We didn&apos;t just read about launching skincare brands — we built one from zero using the exact production workflow we now offer our clients. Every formulation, every batch run, every packaging decision was real.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  {
                    icon: Award,
                    title: "Operational Experience",
                    desc: "Launched multiple SKUs into the Pakistani market with measurable sell-through.",
                  },
                  {
                    icon: Package,
                    title: "Battle-Tested Process",
                    desc: "30-day production cycle refined across multiple real product launches.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Proven Results",
                    desc: "50+ client brands launched with repeat orders confirming market fit.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 industrial-card rounded-sm p-4 border-l-2 border-l-slate-600">
                    <div className="w-8 h-8 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{item.title}</p>
                      <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
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
