import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ContactForm } from "@/components/ui/contact-form";
import { ClientsSection } from "@/components/ui/clients-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
