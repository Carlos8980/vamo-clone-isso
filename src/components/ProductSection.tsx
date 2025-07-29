import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Bonus Section */}
      <div className="text-center mb-12">
        <Card className="max-w-2xl mx-auto p-6 bg-primary/10 border-primary/30 rounded-2xl">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-lg">🎁</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Bônus: Aulas mostrando como aplicar
            </span>
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