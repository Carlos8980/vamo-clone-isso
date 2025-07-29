import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 57
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-6 py-16">
      <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30 text-center">
        <h2 className="text-4xl font-bold mb-4">
          ⚠️ <span className="text-red-400">Oferta por Tempo Limitado</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Bônus disponíveis por tempo limitado – acesso vitalício até às 23h59 de hoje.
        </p>

        <div className="mb-8">
          <p className="text-xl mb-6">Tempo restante:</p>
          <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground">HORAS</div>
            </div>
            <div className="text-4xl text-red-400">:</div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground">MINUTOS</div>
            </div>
            <div className="text-4xl text-red-400">:</div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground">SEGUNDOS</div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-8">
          <strong className="text-red-400">ATENÇÃO:</strong> Após o término do prazo, o preço volta para R$299 e os bônus não estarão mais disponíveis.
        </p>

        <Button variant="hero" size="lg">
          🔥 Garantir agora antes que acabe
        </Button>
      </Card>
    </section>
  );
};

export default CountdownSection;