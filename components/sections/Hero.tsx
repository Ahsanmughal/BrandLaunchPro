"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Zap, Shield, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const stats = [
  { icon: Clock, label: "Launch in 30 Days" },
  { icon: Shield, label: "End-to-End Support" },
  { icon: Zap, label: "Low MOQ" },
];

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Pakistan&apos;s #1 Private Label Skincare Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Launch Your{" "}
            <span className="gradient-text">Skincare Brand</span>
            <br />
            in 30 Days
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We handle product formulation, packaging, branding &amp; store setup — so you can focus on selling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#packages"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Start Your Brand
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass glass-hover text-white font-semibold text-lg border border-white/20 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              Get Pricing on WhatsApp
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-400">
                <Icon className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating cards decoration */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, scale: 0.9 }}
          animate={shouldReduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Happy Clients", value: "50+" },
            { label: "Products Launched", value: "150+" },
            { label: "Brands Built", value: "30+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
