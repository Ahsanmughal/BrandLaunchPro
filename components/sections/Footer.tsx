import { Factory, MessageCircle, Globe, Share2, Link, ShieldCheck, BadgeCheck, FlaskConical } from "lucide-react";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

const footerLinks = {
  Services: [
    { label: "Starter Package", href: "#packages" },
    { label: "Growth Package", href: "#packages" },
    { label: "Premium Package", href: "#packages" },
    { label: "Product Catalog", href: "#products" },
  ],
  Company: [
    { label: "Production Process", href: "#how-it-works" },
    { label: "Why Partner With Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Request a Quote", href: "#packages" },
  ],
};

const certBadges = [
  { icon: ShieldCheck, label: "GMP-Compliant" },
  { icon: BadgeCheck, label: "Quality Assured" },
  { icon: FlaskConical, label: "R&D Lab" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/60 overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-amber-500 flex items-center justify-center flex-shrink-0">
                <Factory className="w-4 h-4 text-slate-950" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Brand<span className="text-amber-400">LaunchPro</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Pakistan&apos;s premier contract skincare manufacturer. Turnkey formulation, production, packaging and launch — from 100 units MOQ.
            </p>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {certBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono"
                >
                  <Icon className="w-3 h-3 text-amber-500" />
                  {label}
                </span>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-green-600/10 border border-green-500/20 text-green-400 font-semibold text-sm hover:bg-green-600/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-4 font-mono">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} {SITE_NAME}. Contract Skincare Manufacturing · Pakistan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Globe, label: "Instagram", href: "#" },
              { icon: Share2, label: "Twitter", href: "#" },
              { icon: Link, label: "LinkedIn", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-600 hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
