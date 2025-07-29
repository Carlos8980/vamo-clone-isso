import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Editor de Vídeo",
      text: "Usei em um casamento e o cliente ficou impactado. Economizei 2h por vídeo!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Ana Costa", 
      role: "Criadora de Conteúdo",
      text: "Meus Reels no Instagram explodiram depois que comecei a usar o Pack Z. Qualidade cinema!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Roberto Lima",
      role: "Videomaker", 
      text: "Finalmente posso entregar vídeos profissionais sem gastar uma fortuna em efeitos. Recomendo!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ];

  return (
    <section id="depoimentos" className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
        <p className="text-xl text-muted-foreground">
          Mais de <span className="text-primary font-semibold">1000 editores</span> já transformaram seus vídeos com o Pack Z
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-primary text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">"{testimonial.text}"</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;