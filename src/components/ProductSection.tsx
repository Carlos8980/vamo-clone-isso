import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductSection = () => {
  const features = [
    "+500 overlays exclusivos",
    "Compatível com Premiere, After, Final Cut, DaVinci e CapCut", 
    "Prontos para arrastar e soltar",
    "Otimizados para Reels, Shorts, YouTube e clipes",
    "Crie visuais cinematográficos em segundos",
    "Bônus: Aulas mostrando como aplicar"
  ];

  const previews = [
    { name: "Preview 1", color: "bg-red-500" },
    { name: "Preview 2", color: "bg-blue-500" },
    { name: "Preview 3", color: "bg-green-500" },
    { name: "Preview 4", color: "bg-purple-500" }
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          Apresentamos o <span className="gradient-text glow-text">Pack Z</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A solução definitiva para transformar seus vídeos em produções cinematográficas profissionais
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Features List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pack Preview */}
        <Card className="p-8 bg-gradient-to-br from-card/80 to-secondary/50 border-primary/30">
          <div className="text-center mb-6">
            <img 
              src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1"
              alt="Pack Z Preview"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <Badge variant="secondary" className="text-2xl font-bold px-4 py-2 mb-2">
              500+
            </Badge>
            <h3 className="text-3xl font-bold gradient-text">Pack Z</h3>
          </div>

          {/* Preview Grid */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-center mb-4">Preview dos Efeitos</h4>
            <div className="grid grid-cols-2 gap-4">
              {previews.map((preview, index) => (
                <div key={index} className={`${preview.color} h-16 rounded-lg flex items-center justify-center text-white font-semibold`}>
                  {preview.name}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductSection;