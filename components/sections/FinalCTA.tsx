"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, FlaskConical } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const certBadges = [
  { icon: ShieldCheck, label: "GMP-Compliant" },
  { icon: FlaskConical, label: "500+ Formulations" },
  { icon: Clock, label: "30-Day Delivery" },
];

export default function FinalCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            whileHover={shouldReduce ? {} : { scale: 1.002 }}
            className="relative rounded-sm overflow-hidden border border-slate-700 border-l-4 border-l-amber-500 bg-slate-900"
          >
            <div className="px-8 py-16 sm:px-16">
              <span className="tech-label block mb-4">Ready to Manufacture?</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-3xl leading-tight">
                Start Your <span className="accent-text">Production</span> Today
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl">
                Join 100+ brands that chose BrandLaunchPro as their contract manufacturing partner. Your turnkey skincare production begins with a single message.
              </p>

              {/* Certification badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {certBadges.map(({ icon: Icon, label }) => (
                  <span key={label} className="industrial-badge">
                    <Icon className="w-3.5 h-3.5 text-amber-500" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#packages"
                  className="btn-amber text-base px-8 py-4 group"
                >
                  View Manufacturing Packages
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-base px-8 py-4"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  Talk on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
