"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FlaskConical, Settings, PackageCheck, Truck, ClipboardCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Consultation & Specification",
    description:
      "Define your product brief, target market, and technical requirements. We assess MOQ, formulation complexity, and production timeline.",
  },
  {
    step: "02",
    icon: FlaskConical,
    title: "Formulation & R&D",
    description:
      "Our lab team develops and tests your formula to meet performance benchmarks. Custom or ready-made formulations available.",
  },
  {
    step: "03",
    icon: Settings,
    title: "Batch Production",
    description:
      "Full-scale manufacturing in our GMP-compliant facility. Rigorous in-process quality checks at every stage.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "Packaging & QA",
    description:
      "Filling, labeling, and packaging with your brand identity. Final quality assurance sign-off before dispatch.",
  },
  {
    step: "05",
    icon: Truck,
    title: "Delivery & Launch",
    description:
      "Products delivered to your door within 30 days. We also support store setup and launch strategy.",
  },
];

export default function HowItWorks() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Production Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Our <span className="accent-text">Manufacturing</span> Pipeline
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A structured, five-stage process that takes your concept from brief to finished product — in 30 days.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-amber-500/60 via-amber-500/20 to-transparent" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={shouldReduce ? {} : { x: 4 }}
                  className="industrial-card industrial-card-hover rounded-sm p-6 lg:pl-20 relative"
                >
                  {/* Step number circle */}
                  <div className="hidden lg:flex absolute left-0 top-6 w-[4.5rem] items-center justify-center">
                    <div className="w-9 h-9 rounded-sm bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-4 h-4 text-slate-950" />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Mobile icon */}
                    <div className="lg:hidden w-9 h-9 rounded-sm bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <step.icon className="w-4 h-4 text-slate-950" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-amber-500 font-bold">STEP {step.step}</span>
                        <div className="flex-1 h-px bg-slate-700" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
