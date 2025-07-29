import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import CountdownSection from "@/components/CountdownSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ProductSection />
        <TestimonialsSection />
        <ComparisonSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <CountdownSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
