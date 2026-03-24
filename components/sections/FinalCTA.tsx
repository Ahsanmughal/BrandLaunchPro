"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function FinalCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            whileHover={shouldReduce ? {} : { scale: 1.005 }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-slate-900 to-purple-900/60" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 px-8 py-20 sm:px-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Launch Your{" "}
                <span className="gradient-text">Skincare Brand?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Join 50+ entrepreneurs who have launched their brands with us. Your journey starts with a single message.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#packages"
                  className="group flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Start Your Brand
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-10 py-4 rounded-2xl glass border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
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
