import { Card } from "@/components/ui/card";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Serve para CapCut?",
      answer: "Sim! O Pack Z é compatível com CapCut, Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve e outros editores principais."
    },
    {
      question: "Preciso ter experiência em edição?",
      answer: "Não! Os overlays são super fáceis de usar - basta arrastar e soltar. Além disso, você recebe aulas bônus mostrando como aplicar os efeitos."
    },
    {
      question: "Recebo os arquivos na hora?",
      answer: "Sim! Após a confirmação do pagamento, você recebe acesso imediato ao Pack Z e pode fazer o download instantaneamente."
    },
    {
      question: "As aulas têm suporte?",
      answer: "Sim! Você terá acesso ao grupo exclusivo de compradores onde pode tirar dúvidas e receber suporte vitalício."
    },
    {
      question: "Posso usar nos meus vídeos comerciais?",
      answer: "Sim! Você pode usar os overlays em projetos pessoais e comerciais sem limitações. Licença vitalícia incluída."
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
        <p className="text-xl text-muted-foreground">
          Tire suas dúvidas sobre o Pack Z
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="bg-card/50 border-primary/20 overflow-hidden">
            <button
              className="w-full p-6 text-left flex justify-between items-center hover:bg-secondary/20 transition-colors"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <div className={`text-primary transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                +
              </div>
            </button>
            {openFAQ === index && (
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;