"use client";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingDown, Clock, Star, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: TrendingDown,
    title: "Low MOQ",
    description: "Start with just 100 units. Test the market without risking your entire budget.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Your brand ready in 30 days. No endless delays, no excuses. We deliver on time.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Complete Solution",
    description: "From product to packaging to store — one partner for everything. No middlemen.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Real Brand Experience",
    description: "We built our own skincare brand (ModistCare) from scratch. We know what works.",
    color: "from-orange-500 to-rose-500",
  },
];

export default function WhyUs() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We&apos;re not just a manufacturer. We&apos;re your brand-building partner.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -6 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group h-full"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
