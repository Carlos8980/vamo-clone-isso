import { Card } from "@/components/ui/card";

const GuaranteeSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Garantia & Segurança</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <Card className="p-8 bg-card/50 border-primary/20 text-center">
          <div className="text-6xl font-bold gradient-text mb-4">7</div>
          <h3 className="text-2xl font-bold mb-4">Dias</h3>
          <p className="text-lg font-semibold text-primary mb-2">Garantia Total</p>
          <p className="text-muted-foreground">
            Se em até 7 dias você não ficar satisfeito, devolvemos seu dinheiro. Simples assim.
          </p>
        </Card>

        <Card className="p-8 bg-card/50 border-primary/20 text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-2xl font-bold mb-4">Compra segura</h3>
          <p className="text-muted-foreground">
            Aceitamos Pix, Cartão, Boleto
          </p>
        </Card>

        <Card className="p-8 bg-card/50 border-primary/20 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-2xl font-bold mb-4">Garantia 100%</h3>
          <p className="text-muted-foreground">
            de satisfação
          </p>
        </Card>
      </div>
    </section>
  );
};

export default GuaranteeSection;