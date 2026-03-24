"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, Palette, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    step: "01",
    icon: ShoppingBag,
    title: "Choose Your Product",
    description:
      "Select from our proven, ready-to-sell skincare formulas. Serums, facewashes, shampoos and more.",
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  {
    step: "02",
    icon: Palette,
    title: "Customize Your Brand",
    description:
      "We design your logo, packaging & product identity — a brand that stands out on shelves and online.",
    color: "from-teal-500 to-cyan-500",
    glow: "shadow-teal-500/20",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch & Sell",
    description:
      "Get your products ready in 30 days and start selling online. We set up your store and guide you through launch.",
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/20",
  },
];

export default function HowItWorks() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three simple steps to get your skincare brand from idea to market.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-purple-500/50" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -6 }}
                className={`glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all shadow-xl ${step.glow} relative`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-6 right-6 text-4xl font-black text-white/5">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    Step {step.step} —
                  </span>{" "}
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
