import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-secondary/50 border border-primary/30 rounded-full px-4 py-2 mb-8">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-sm text-primary">Criado por profissional com +7 anos no audiovisual</span>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Mais de <span className="gradient-text glow-text">500 Overlays</span><br />
        <span className="text-foreground">Cinematográficos</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
        Ideal para editores, criadores e videomakers que querem elevar o visual com rapidez e qualidade profissional –{" "}
        <span className="text-primary font-semibold">sem precisar criar do zero.</span>
      </p>

      {/* Video Preview Card */}
      <Card className="max-w-4xl mx-auto mb-12 bg-card/50 border-primary/20 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-dark-blue to-secondary">
          <img 
            src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Preview do Pack Z"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <Button
            variant="hero"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            ▶ Assistir Preview
          </Button>
        </div>
      </Card>

      {/* CTA Button */}
      <Button variant="hero" size="lg" className="mb-8">
        🎬 Quero acessar agora o Pack Z
      </Button>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Acesso Imediato</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Garantia de 7 dias</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Suporte Vitalício</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;