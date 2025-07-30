import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PaymentModal from "./PaymentModal";

const FinalCTASection = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const withoutPack = [
    "Horas perdidas criando efeitos",
    "Resultado amador", 
    "Clientes insatisfeitos",
    "Menos trabalhos"
  ];

  const withPack = [
    "Vídeos profissionais em minutos",
    "Clientes impressionados",
    "Mais trabalhos e reconhecimento", 
    "Economia de tempo e dinheiro"
  ];

  return (
    <section data-section="final-cta" className="container mx-auto px-6 py-16">
      <Card className="max-w-4xl mx-auto p-8 bg-slate-800/50 border-primary/30 rounded-2xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mr-4">
              Agora é com você.
            </h2>
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl">⚡</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vai continuar editando como amador, ou quer dar um{" "}
            <span className="text-primary font-semibold glow-text">salto profissional</span>{" "}
            nos seus vídeos com o Pack Z?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Without Pack Z */}
          <Card className="p-6 bg-red-900/20 border-red-500/30 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-red-400">Sem o Pack Z</h3>
            <div className="space-y-3">
              {withoutPack.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* With Pack Z */}
          <Card className="p-6 bg-teal-900/20 border-primary/30 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-primary">Com o Pack Z</h3>
            <div className="space-y-3">
              {withPack.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-primary text-lg">•</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Final Price & CTA */}
        <div className="text-center">
          <div className="text-6xl font-bold gradient-text glow-text mb-2">R$97</div>
          <p className="text-muted-foreground mb-2">Investimento único • Acesso vitalício</p>
          <p className="text-sm text-primary mb-8">Menos de R$0,20 por overlay</p>
          
          <div className="space-y-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full max-w-lg mx-auto pulse-glow"
              onClick={() => setPaymentModalOpen(true)}
            >
              Sim, quero turbinar meus vídeos com o Pack Z →
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">ou</p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full max-w-lg mx-auto border-green-500/50 text-green-400 hover:bg-green-500/10"
                onClick={() => window.open('https://wa.me/5515997979893?text=Eu%20quero%20adquirir%20o%20Pack%20Z', '_blank')}
              >
                💬 Falar no WhatsApp
              </Button>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground">
            🔒 Pagamento 100% seguro • Garantia de 7 dias • Acesso imediato
          </p>
        </div>
      </Card>
      
      <PaymentModal 
        isOpen={paymentModalOpen} 
        onClose={() => setPaymentModalOpen(false)} 
      />
    </section>
  );
};

export default FinalCTASection;