import { Card } from "@/components/ui/card";

const ComparisonSection = () => {
  const features = [
    "+500 arquivos",
    "Suporte vitalício", 
    "Aulas bônus",
    "Preço acessível",
    "Atualizações gratuitas",
    "Compatibilidade total"
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Pack Z vs Concorrência</h2>
        <p className="text-xl text-muted-foreground">
          Veja por que somos a melhor opção do mercado
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-card/50 border-primary/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/20">
                <th className="text-left p-6 font-bold text-lg">Características</th>
                <th className="text-center p-6 font-bold text-lg text-primary">Pack Z</th>
                <th className="text-center p-6 font-bold text-lg text-muted-foreground">Outros Packs</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="p-6">{feature}</td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                  </td>
                  <td className="text-center p-6">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-sm">✗</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
};

export default ComparisonSection;