import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductSection = () => {
  const features = [
    {
      icon: "📥",
      text: "+500 overlays exclusivos"
    },
    {
      icon: "🎥",
      text: "Compatível com Premiere, After, Final Cut, DaVinci e CapCut"
    },
    {
      icon: "⚡",
      text: "Prontos para arrastar e soltar"
    },
    {
      icon: "🎯",
      text: "Otimizados para Reels, Shorts, YouTube e clipes"
    },
    {
      icon: "✅",
      text: "Crie visuais cinematográficos em segundos"
    },
    {
      icon: "🌐",
      text: "Bônus: Aulas mostrando como aplicar"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Main Features Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
        {/* Features List */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 bg-slate-700/30 border-slate-600/30 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-lg">{feature.icon}</span>
                </div>
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Preview Image */}
        <Card className="aspect-square bg-slate-700/50 border-slate-600/30 rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1"
            alt="Pack Z Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-primary text-primary-foreground px-3 py-1">
              Pack Z
            </Badge>
          </div>
        </Card>
      </div>

      {/* Preview Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Preview dos Efeitos
        </h2>
      </div>

      {/* Preview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <Card className="aspect-video bg-slate-700/50 border-slate-600/30 rounded-2xl flex items-center justify-center">
          <span className="text-primary font-semibold text-lg">Preview 1</span>
        </Card>
        <Card className="aspect-video bg-slate-700/50 border-slate-600/30 rounded-2xl flex items-center justify-center">
          <span className="text-primary font-semibold text-lg">Preview 2</span>
        </Card>
        <Card className="aspect-video bg-slate-700/50 border-slate-600/30 rounded-2xl flex items-center justify-center">
          <span className="text-primary font-semibold text-lg">Preview 3</span>
        </Card>
        <Card className="aspect-video bg-slate-700/50 border-slate-600/30 rounded-2xl flex items-center justify-center">
          <span className="text-primary font-semibold text-lg">Preview 4</span>
        </Card>
      </div>
    </section>
  );
};

export default ProductSection;