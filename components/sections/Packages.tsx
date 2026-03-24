"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Star, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const packages = [
  {
    name: "Starter",
    tagline: "Test Your Idea",
    emoji: "🟢",
    price: "PKR 99,000",
    best: "Best for beginners",
    popular: false,
    message: "Hi, I'm interested in the Starter Package for PKR 99,000",
    features: [
      "1 Product (Serum / Facewash / Shampoo)",
      "100 Units",
      "Ready-made formula",
      "Bottle + basic label",
      "Logo placement",
      "Basic packaging design",
    ],
    ctaLabel: "Start Now",
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/30",
    btn: "from-emerald-500 to-teal-500",
  },
  {
    name: "Growth",
    tagline: "Build Your Brand",
    emoji: "🔵",
    price: "PKR 299,000",
    best: "Most popular choice",
    popular: true,
    message: "Hi, I'm interested in the Growth Package for PKR 299,000",
    features: [
      "2–3 Products",
      "200–300 Units each",
      "Premium packaging",
      "Custom branding (logo + labels)",
      "Product naming",
      "Shopify / Daraz store setup",
      "Pricing guidance",
    ],
    ctaLabel: "Launch My Brand",
    gradient: "from-purple-600/20 to-pink-600/20",
    border: "border-purple-500/40",
    btn: "from-purple-500 to-pink-500",
  },
  {
    name: "Premium",
    tagline: "Done For You Business",
    emoji: "🔴",
    price: "PKR 650,000",
    best: "Complete solution",
    popular: false,
    message: "Hi, I'm interested in the Premium Package for PKR 650,000",
    features: [
      "3–5 Products",
      "300–500 Units each",
      "Custom formulations",
      "Premium packaging + boxes",
      "Full brand identity",
      "Shopify store (complete)",
      "Product photography",
      "Launch strategy",
    ],
    ctaLabel: "Book Consultation",
    gradient: "from-rose-600/20 to-orange-600/20",
    border: "border-rose-500/30",
    btn: "from-rose-500 to-orange-500",
  },
];

export default function Packages() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start small and scale up, or go all-in with our premium done-for-you package.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={shouldReduce ? {} : { y: -6, scale: 1.01 }}
                className={`relative rounded-3xl p-8 border bg-gradient-to-b ${pkg.gradient} ${pkg.border} ${
                  pkg.popular
                    ? "shadow-2xl shadow-purple-500/20 ring-2 ring-purple-500/50"
                    : "shadow-xl"
                } h-full flex flex-col transition-all duration-300 glass`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-2xl mb-1">{pkg.emoji}</div>
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm">{pkg.tagline}</p>
                  <p className="text-xs text-slate-500 mt-1">{pkg.best}</p>
                </div>

                <div className="mb-8">
                  <p className="text-3xl font-black text-white">
                    {pkg.price}
                    <span className="text-slate-400 text-sm font-normal ml-1">starting from</span>
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-br ${pkg.btn} rounded-full p-0.5 text-white`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r ${pkg.btn} text-white font-bold text-base hover:opacity-90 hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {pkg.ctaLabel}
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
