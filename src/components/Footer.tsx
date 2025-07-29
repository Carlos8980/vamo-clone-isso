import { Card } from "@/components/ui/card";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold text-primary gradient-text">[Z]</div>
              <span className="text-xs text-muted-foreground tracking-wider -mt-1">EFFECTS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforme seus vídeos em produções cinematográficas profissionais com mais de 500 overlays exclusivos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollToSection('como-funciona')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Como Funciona</button></li>
              <li><button onClick={() => scrollToSection('depoimentos')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Depoimentos</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">FAQ</button></li>
              <li><button onClick={() => scrollToSection('garantia')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Garantia</button></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Suporte</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <a href="mailto:suporte@packz.com" className="text-muted-foreground hover:text-primary transition-colors">suporte@packz.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📋</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🔒</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">💬</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Pack Z Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Pack Z</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary">✨</span>
                <span className="text-muted-foreground">Criado por João Silva</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🎬</span>
                <span className="text-muted-foreground">+7 anos no audiovisual</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">👥</span>
                <span className="text-muted-foreground">+1000 clientes satisfeitos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🏆</span>
                <span className="text-muted-foreground">Qualidade profissional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">
              <p>Pack Z © 2024 • Todos os direitos reservados</p>
              <p className="mt-1">Marca registrada • CNPJ: 00.000.000/0001-00</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-muted-foreground">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;