import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToFinalCTA = () => {
    const element = document.querySelector('[data-section="final-cta"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-6 px-6 flex justify-between items-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-primary gradient-text">[Z]</div>
        <span className="text-xs text-muted-foreground tracking-wider -mt-1">EFFECTS</span>
      </div>
      
      <Button variant="cinematic" size="sm" className="pulse-glow px-6 rounded-full" onClick={scrollToFinalCTA}>
        🎬 Garantir Pack Z
      </Button>
    </header>
  );
};

export default Header;