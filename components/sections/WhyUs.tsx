"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Clock, Layers, BadgeCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: ShieldCheck,
    label: "GMP-Compliant",
    title: "Quality Assurance",
    description: "Every batch manufactured under Good Manufacturing Practice standards with full traceability and in-process QC checks.",
    stat: "100%",
    statLabel: "QC Pass Rate",
  },
  {
    icon: Clock,
    label: "Fast Production",
    title: "30-Day Turnaround",
    description: "From confirmed order to delivered product in 30 days. No unnecessary delays — we run a tight, structured production schedule.",
    stat: "30",
    statLabel: "Days to Delivery",
  },
  {
    icon: Layers,
    label: "Turnkey Service",
    title: "End-to-End Partner",
    description: "Formulation, production, packaging, branding and store setup — one partner for the complete supply chain. No middlemen.",
    stat: "1",
    statLabel: "Partner for Everything",
  },
  {
    icon: BadgeCheck,
    label: "Proven Process",
    title: "Real Brand Experience",
    description: "We built and launched our own skincare brand (ModistCare) using this exact process. You benefit from proven operational experience.",
    stat: "100+",
    statLabel: "Brands Launched",
  },
];

export default function WhyUs() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Why Partner With Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Why <span className="accent-text">BrandLaunchPro</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A manufacturing partner with the credentials, experience and infrastructure to take your brand to market at scale.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -4 }}
                className="industrial-card industrial-card-hover rounded-sm p-6 h-full flex flex-col"
              >
                {/* Top: badge + stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-black text-amber-400">{feature.stat}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider leading-tight">{feature.statLabel}</div>
                  </div>
                </div>
                <span className="industrial-badge mb-2 self-start">{feature.label}</span>
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
