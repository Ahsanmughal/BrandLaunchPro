"use client";
import { motion, useReducedMotion } from "framer-motion";
import { HelpCircle, TrendingDown, Package, AlertTriangle, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const problems = [
  {
    icon: HelpCircle,
    title: "No Manufacturing Partner",
    text: "Finding a reliable contract manufacturer with low MOQs is nearly impossible.",
  },
  {
    icon: TrendingDown,
    title: "High Minimum Orders",
    text: "Most factories demand 1,000+ units minimum — killing your initial budget.",
  },
  {
    icon: Package,
    title: "Packaging & Branding Gaps",
    text: "No technical expertise in formulation, packaging design or brand identity.",
  },
  {
    icon: AlertTriangle,
    title: "Quality Control Risks",
    text: "Product failures and compliance issues can destroy your brand before launch.",
  },
];

export default function Problem() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Hex background */}
      <div className="absolute inset-0 hex-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="tech-label block mb-3">Manufacturing Challenges</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 max-w-3xl leading-tight">
            Challenges We <span className="accent-text">Solve</span> for You
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Every aspiring brand owner faces the same production and sourcing obstacles. We&apos;ve engineered a solution for each one.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {problems.map((problem, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -4 }}
                className="industrial-card industrial-card-hover rounded-sm p-6 border-l-2 border-l-red-500/50 group h-full"
              >
                <div className="w-10 h-10 rounded-sm bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2 tracking-wide">{problem.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{problem.text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Resolution card */}
        <AnimatedSection>
          <div className="industrial-card rounded-sm p-8 sm:p-12 border-l-4 border-l-amber-500 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-xl font-black text-white">
                One Partner. Complete Turnkey Solution.
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              From raw material sourcing and formulation to batch production, quality assurance and packaging — BrandLaunchPro handles every stage of the manufacturing process.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
