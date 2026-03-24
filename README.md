# BrandLaunchPro — Premium Skincare Brand Launch Landing Page

A premium, modern landing page for BrandLaunchPro — Pakistan's #1 private label skincare brand launch service.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
git clone https://github.com/Ahsanmughal/BrandLaunchPro.git
cd BrandLaunchPro
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 WhatsApp Integration

All WhatsApp CTAs are driven by a single config file. To update your WhatsApp number:

**Edit `lib/site.ts`:**

```ts
// TODO: Replace with your actual number (country code + number, no + or spaces)
export const WHATSAPP_NUMBER = "923001234567"; // e.g. 92 (Pakistan) + 3001234567
```

The `WHATSAPP_URL` is automatically generated from this number. No other changes needed.

---

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**
3. Import your `BrandLaunchPro` repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. Add your custom domain in **Project Settings → Domains**

---

## ✏️ How to Edit Content

All section text is in the component files under `components/sections/`.
Update `lib/site.ts` to change WhatsApp number, site URL, name, and description.

---

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles + Tailwind
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── Navbar.tsx
│   ├── sections/           # All landing page sections
│   └── ui/
│       └── AnimatedSection.tsx
├── lib/
│   └── site.ts             # Central config (WhatsApp, SEO, brand)
└── public/robots.txt
```

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
