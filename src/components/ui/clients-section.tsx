import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const ClientsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechStart Soluções",
      content: "A Cass.io transformou completamente nossa operação. Conseguimos reduzir custos em 45% e aumentar nossa produtividade significativamente.",
      rating: 5
    },
    {
      name: "Marina Santos",
      position: "Diretora Comercial",
      company: "InovaCorp",
      content: "O suporte é excepcional e as soluções são verdadeiramente inovadoras. Recomendo para qualquer PME que queira crescer.",
      rating: 5
    },
    {
      name: "Roberto Oliveira",
      position: "Fundador",
      company: "DigitalPlus",
      content: "ROI impressionante! Em 6 meses recuperamos todo o investimento e hoje somos 300% mais eficientes.",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechStart", "InovaCorp", "DigitalPlus", "SmartBiz", "ProSolutions", "NextGen"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Empresas que
            <span className="text-gradient"> confiam</span> em nós
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre os resultados alcançados 
            com nossas soluções tecnológicas.
          </p>
        </div>

        {/* Logos dos clientes */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 opacity-60">
          {clientLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-gradient-card rounded-lg border border-white/10 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-lg font-bold text-muted-foreground">
                {logo}
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-white/10 hover-lift relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position} • {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA secundário */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Junte-se a mais de 500 empresas satisfeitas
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Não perca tempo com soluções que não funcionam. 
              Escolha a tecnologia que realmente transforma negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">&lt; 24h</div>
                <div className="text-sm text-muted-foreground">Tempo de resposta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">300%</div>
                <div className="text-sm text-muted-foreground">ROI médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};