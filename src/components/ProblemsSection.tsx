import { Card } from "@/components/ui/card";

const ProblemsSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Já passou por isso?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Problems Card */}
        <Card className="p-8 bg-red-900/20 border-red-500/30 rounded-2xl">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-400 text-lg">⏱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Horas perdidas editando</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você passa uma eternidade tentando criar efeitos visuais do zero, quando poderia estar focando na criatividade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-400 text-lg">☹</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Resultado "amador"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mesmo com todo o esforço, seus vídeos ainda não têm aquele toque cinematográfico profissional.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Solution Card */}
        <Card className="p-8 bg-primary/10 border-primary/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-primary text-lg">!</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">A verdade é...</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Se você já passou horas tentando dar um visual profissional aos seus vídeos, mas ainda sente que falta aquele{" "}
                  <span className="text-primary font-semibold glow-text">toque de cinema</span>... o Pack Z vai mudar isso.
                </p>
                <p>
                  Você quer entregar um vídeo de impacto, mas não quer gastar uma eternidade editando manualmente,{" "}
                  <span className="text-primary font-semibold glow-text">certo?</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProblemsSection;