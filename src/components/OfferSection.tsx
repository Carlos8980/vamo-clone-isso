import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OfferSection = () => {
  const overlayTypes = [
    { name: "Film Burns", count: 138 },
    { name: "Glitchs", count: 56 },
    { name: "Light Leaks", count: 131 },
    { name: "Film Letters", count: 40 },
    { name: "Burning Paper", count: 10 },
    { name: "Punch Hole", count: 14 },
    { name: "Wipe & Bright SFX", count: 31 },
    { name: "Super 8mm", count: 15 },
    { name: "Lens Flare", count: 105 }
  ];

  const bonuses = [
    "Aulas passo a passo (como aplicar)",
    "Template de workflow no Premiere", 
    "Grupo exclusivo de compradores"
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Oferta Completa</h2>
        <p className="text-xl text-muted-foreground">
          Veja tudo o que você vai receber hoje
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
        {/* Overlays */}
        <Card className="p-8 bg-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🎁 <span className="gradient-text">+500 Overlays</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {overlayTypes.map((type, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                <span className="text-sm">{type.name}</span>
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {type.count}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Bonus */}
        <Card className="p-8 bg-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🎓 <span className="gradient-text">+ Bônus</span>
          </h3>
          <div className="space-y-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span>{bonus}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Price Section */}
      <Card className="max-w-lg mx-auto p-8 bg-gradient-to-br from-card/80 to-primary/10 border-primary/30 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-2xl text-muted-foreground line-through">De R$299</span>
            <Badge className="bg-red-500 text-white px-3 py-1 text-lg">-67%</Badge>
          </div>
          <div className="text-6xl font-bold gradient-text glow-text">R$97</div>
          <p className="text-muted-foreground mt-2">acesso vitalício e imediato</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-primary font-semibold">Satisfação garantida</span>
        </div>

        <Button variant="hero" size="lg" className="w-full">
          🚀 Garantir meu Pack Z agora
        </Button>
      </Card>
    </section>
  );
};

export default OfferSection;