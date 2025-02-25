
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AuthSection } from "@/components/AuthSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AuthSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
