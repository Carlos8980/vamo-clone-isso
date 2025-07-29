import { Card } from "@/components/ui/card";

const ProblemsSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">Já passou por isso?</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <Card className="p-8 bg-card/50 border-red-500/30">
          <h3 className="text-2xl font-bold mb-4 text-red-400">Horas perdidas editando</h3>
          <p className="text-muted-foreground">
            Você passa uma eternidade tentando criar efeitos visuais do zero, quando poderia estar focando na criatividade.
          </p>
        </Card>
        
        <Card className="p-8 bg-card/50 border-red-500/30">
          <h3 className="text-2xl font-bold mb-4 text-red-400">Resultado "amador"</h3>
          <p className="text-muted-foreground">
            Mesmo com todo o esforço, seus vídeos ainda não têm aquele toque cinematográfico profissional.
          </p>
        </Card>
      </div>

      {/* Truth Section */}
      <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
        <h3 className="text-3xl font-bold mb-6 text-center">
          🎥 <span className="gradient-text">A verdade é...</span>
        </h3>
        <div className="space-y-4 text-lg text-center">
          <p>
            Se você já passou horas tentando dar um visual profissional aos seus vídeos, mas ainda sente que falta aquele toque de cinema... <span className="text-primary font-semibold">o Pack Z vai mudar isso.</span>
          </p>
          <p className="text-muted-foreground">
            Você quer entregar um vídeo de impacto, mas não quer gastar uma eternidade editando manualmente, certo?
          </p>
        </div>
      </Card>
    </section>
  );
};

export default ProblemsSection;