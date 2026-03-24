"use client";
import { motion, useReducedMotion } from "framer-motion";
import { HelpCircle, TrendingDown, Package, AlertTriangle, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const problems = [
  { icon: HelpCircle, text: "Don't know where to manufacture?" },
  { icon: TrendingDown, text: "High MOQs kill your budget?" },
  { icon: Package, text: "No idea about packaging or branding?" },
  { icon: AlertTriangle, text: "Fear of product failure?" },
];

export default function Problem() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Starting a skincare brand is{" "}
            <span className="gradient-text">confusing, expensive,</span> and risky.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sound familiar? You&apos;re not alone. Every aspiring brand owner faces these obstacles.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {problems.map((problem, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-slate-300 font-medium">{problem.text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <div className="glass rounded-3xl p-8 sm:p-12 border border-emerald-500/30 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-white mb-2">
              👉 We solve <span className="gradient-text">all of this</span> for you.
            </p>
            <p className="text-slate-400">
              One partner. Complete solution. From formula to store.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
