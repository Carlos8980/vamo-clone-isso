import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
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
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Agora é com você.</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Vai continuar editando como amador, ou quer dar um salto profissional nos seus vídeos com o Pack Z?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Without Pack Z */}
        <Card className="p-8 bg-card/50 border-red-500/30">
          <h3 className="text-2xl font-bold mb-6 text-red-400">Sem o Pack Z</h3>
          <div className="space-y-4">
            {withoutPack.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✗</span>
                </div>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* With Pack Z */}
        <Card className="p-8 bg-gradient-to-br from-card/80 to-primary/10 border-primary/30">
          <h3 className="text-2xl font-bold mb-6 text-primary">Com o Pack Z</h3>
          <div className="space-y-4">
            {withPack.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Final Price & CTA */}
      <Card className="max-w-lg mx-auto p-8 bg-gradient-to-br from-card/80 to-primary/10 border-primary/30 text-center">
        <div className="text-6xl font-bold gradient-text glow-text mb-2">R$97</div>
        <p className="text-muted-foreground mb-2">Investimento único • Acesso vitalício</p>
        <p className="text-sm text-primary mb-8">Menos de R$0,20 por overlay</p>
        
        <Button variant="hero" size="lg" className="w-full pulse-glow">
          Sim, quero turbinar meus vídeos com o Pack Z
        </Button>
        
        <p className="text-xs text-muted-foreground mt-4">
          🔒 Pagamento 100% seguro • Garantia de 7 dias • Acesso imediato
        </p>
      </Card>
    </section>
  );
};

export default FinalCTASection;