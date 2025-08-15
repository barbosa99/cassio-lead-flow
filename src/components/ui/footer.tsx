import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Cass.io</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos pequenas e médias empresas em líderes digitais através
              de soluções tecnológicas inteligentes e inovadoras.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="bg-card/20 border-white/20">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-card/20 border-white/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-card/20 border-white/20">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Soluções */}
          {/* <div>
            <h4 className="font-bold mb-4">Soluções</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM Inteligente</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integração de Sistemas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoria Digital</a></li>
            </ul>
          </div> */}

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato.vitorbarbosa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+55 (31) 99104-7829</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Belo Horizonte, MG</span>
              </div>
            </div>

            <Button
              className="mt-6 w-full shadow-primary"
              asChild
            >
              <a
                href="https://wa.me/5531991047829?text=Olá,%20quero%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>

        {/* Links úteis */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
          <div>
            <h5 className="font-bold mb-3">Empresa</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossa equipe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div> */}

        {/* <div>
            <h5 className="font-bold mb-3">Suporte</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status do Sistema</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contatar Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-3">Legal</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LGPD</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
          <p className="text-muted-foreground text-sm">
            © 2024 Cass.io. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Desenvolvido com ❤️ para PMEs brasileiras
          </p>
        </div>
      </div>
    </footer>
  );
};