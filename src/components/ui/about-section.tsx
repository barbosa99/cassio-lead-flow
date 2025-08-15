import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Automação Inteligente",
      description: "Automatize processos complexos e reduza custos operacionais em até 60%"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Segurança Enterprise",
      description: "Proteção de dados de nível corporativo com compliance total"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Crescimento Acelerado",
      description: "Soluções escaláveis que crescem junto com sua empresa"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a 
            <span className="text-gradient"> Cass.io</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 PMEs já transformaram seus negócios com nossas soluções. 
            Seja o próximo a alcançar resultados extraordinários.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-white/10 hover-lift text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Resultados que falam por si
              </h3>
              <div className="space-y-4">
                {[
                  "ROI médio de 300% no primeiro ano",
                  "Redução de 60% nos custos operacionais",
                  "Aumento de 45% na produtividade",
                  "Suporte 24/7 em português"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas atendidas</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação cliente</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte dedicado</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5★</div>
                  <div className="text-sm text-muted-foreground">Avaliação média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};