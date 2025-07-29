import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import PaymentModal from "./PaymentModal";

const OfferSection = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
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
      <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        {/* Overlays Card - Takes 5 columns */}
        <div className="lg:col-span-5">
          <Card className="p-8 bg-teal-900/20 border-primary/30 rounded-2xl h-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              🎁 <span className="gradient-text">+500 Overlays</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {overlayTypes.map((type, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-foreground">{type.name}</span>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {type.count}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Takes 7 columns */}
        <div className="lg:col-span-7 space-y-8">
          {/* Bonus Card */}
          <Card className="p-8 bg-slate-800/30 border-slate-600/30 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              🎯 <span className="gradient-text">+ Bônus</span>
            </h3>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-primary-foreground text-sm">📚</span>
                  </div>
                  <span className="text-foreground">{bonus}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Price Card */}
          <Card className="p-8 bg-teal-900/20 border-primary/30 rounded-2xl text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-muted-foreground line-through">De R$299</span>
                <Badge className="bg-red-500 text-white px-3 py-1 text-lg">-67%</Badge>
              </div>
              <div className="text-6xl font-bold gradient-text glow-text">R$97</div>
              <p className="text-muted-foreground mt-2">acesso vitalício e imediato</p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
              </div>
              <span className="text-muted-foreground font-semibold">Satisfação garantida</span>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full pulse-glow"
              onClick={() => setPaymentModalOpen(true)}
            >
              🚀 Garantir meu Pack Z agora
            </Button>
          </Card>
        </div>
      </div>
      
      <PaymentModal 
        isOpen={paymentModalOpen} 
        onClose={() => setPaymentModalOpen(false)} 
      />
    </section>
  );
};

export default OfferSection;