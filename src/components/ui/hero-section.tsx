import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background overlay gradiente sobre fundo escuro */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme seu
            <span className="block mt-2">
              negócio em referência.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Criação de sites e sistemas web inteligentes que impulsionam pequenas e médias empresas para o próximo nível de presença digital, 
            crescimento e eficiência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-primary hover-lift animate-pulse-glow"
              onClick={scrollToForm}
            >
              Solicitar Orçamento Gratuito
            </Button>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};