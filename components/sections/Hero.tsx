"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, FlaskConical } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "GMP-Compliant Facility" },
  { icon: FlaskConical, label: "500+ Formulations" },
  { icon: Clock, label: "30-Day Production Cycle" },
];

const stats = [
  { value: "100+", label: "Brands Launched" },
  { value: "500+", label: "Formulations" },
  { value: "30", label: "Days to Market" },
];

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: shouldReduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Hexagon background pattern */}
      <div className="absolute inset-0 hex-bg opacity-100 pointer-events-none" />
      {/* Subtle amber accent glow — top right corner only */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      {/* Vertical grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tech label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="tech-label">
              Contract Manufacturing · Pakistan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
          >
            Turnkey Skincare{" "}
            <span className="accent-text">Manufacturing</span>
            <br />
            Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 mb-4 max-w-2xl leading-relaxed"
          >
            From formula to finished product in 30 days. We handle formulation, batch production, packaging &amp; quality control — you focus on building your brand.
          </motion.p>

          {/* Certification badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {badges.map(({ icon: Icon, label }) => (
              <span key={label} className="industrial-badge">
                <Icon className="w-3.5 h-3.5 text-amber-500" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <a
              href="#packages"
              className="btn-amber text-base px-8 py-4 group"
            >
              View Production Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base px-8 py-4"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              Get a Quote on WhatsApp
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-0 max-w-sm border border-slate-700 rounded-sm overflow-hidden"
          >
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-4 py-4 text-center bg-slate-900 ${
                  i < stats.length - 1 ? "border-r border-slate-700" : ""
                }`}
              >
                <div className="text-2xl font-black text-amber-400 font-mono">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5 leading-tight">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
