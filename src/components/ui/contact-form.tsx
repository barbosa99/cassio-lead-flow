import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Building, User } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulação de integração com Mailchimp
      // Em produção, você substituiria por sua API key e endpoint do Mailchimp
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. Entraremos em contato em até 24h!",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para 
            <span className="text-gradient"> transformar</span> seu negócio?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e receba uma consultoria gratuita personalizada 
            para sua empresa em até 24 horas.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-card border-white/10 shadow-primary">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome completo *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-12 h-12 bg-background/50 border-white/20"
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail corporativo *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-12 h-12 bg-background/50 border-white/20"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  name="company"
                  placeholder="Nome da empresa *"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="pl-12 h-12 bg-background/50 border-white/20"
                />
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone/WhatsApp *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="pl-12 h-12 bg-background/50 border-white/20"
                />
              </div>
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Conte-nos sobre os principais desafios da sua empresa..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-background/50 border-white/20"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-muted-foreground">
                * Campos obrigatórios. Seus dados estão seguros conosco.
              </p>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="px-8 py-3 shadow-primary hover-lift animate-pulse-glow"
              >
                {isLoading ? "Enviando..." : "Solicitar Consultoria Gratuita"}
              </Button>
            </div>
          </form>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
          <div className="animate-fade-in">
            <div className="text-2xl font-bold text-gradient mb-2">✓ Sem compromisso</div>
            <p className="text-sm text-muted-foreground">Consultoria 100% gratuita</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-gradient mb-2">⚡ Resposta rápida</div>
            <p className="text-sm text-muted-foreground">Retorno em até 24 horas</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-2xl font-bold text-gradient mb-2">🔒 Dados seguros</div>
            <p className="text-sm text-muted-foreground">LGPD compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
};