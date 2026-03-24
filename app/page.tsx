import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Packages from "@/components/sections/Packages";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import Proof from "@/components/sections/Proof";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Packages />
      <Products />
      <WhyUs />
      <Proof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
