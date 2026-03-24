import { Sparkles, MessageCircle, Globe, Share2, Link } from "lucide-react";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/site";

const footerLinks = {
  Services: [
    { label: "Starter Package", href: "#packages" },
    { label: "Growth Package", href: "#packages" },
    { label: "Premium Package", href: "#packages" },
    { label: "Products", href: "#products" },
  ],
  Company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Get Started", href: "#packages" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Brand<span className="gradient-text">LaunchPro</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Pakistan&apos;s premier private label skincare brand launch service. From formula to store in 30 days.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-600/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
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
                className="text-slate-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
