import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QualityStandard from "@/components/QualityStandard";
import BentoServices from "@/components/BentoServices";
import ProcessSteps from "@/components/ProcessSteps";
import TrustStrip from "@/components/TrustStrip";
import Gallery from "@/components/Gallery";
import FreeTools from "@/components/FreeTools";
import Reviews from "@/components/Reviews";
import EnterpriseSEOSection from "@/components/EnterpriseSEOSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Ambient Pastel Glass Backdrop (Isolated GPU compositor layer) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-mist pointer-events-none transform-gpu">
        <div className="float-blob absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-brand-300/40 blur-[100px]" />
        <div
          className="float-blob absolute top-1/3 -right-44 w-[520px] h-[520px] rounded-full bg-lav/70 blur-[110px]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="float-blob absolute bottom-0 left-1/4 w-[480px] h-[480px] rounded-full bg-brand-200/50 blur-[100px]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Navigation with Brand Logo */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <QualityStandard />
        <BentoServices />
        <ProcessSteps />
        <TrustStrip />
        <Gallery />
        <FreeTools />
        <Reviews />
        {/* Enterprise GEO Knowledge Base & Abuja District Anchor */}
        <EnterpriseSEOSection />
        <ContactCTA />
      </main>

      {/* Footer & WhatsApp FAB */}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}