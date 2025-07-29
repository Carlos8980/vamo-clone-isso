import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-6 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold text-primary gradient-text">[Z]</div>
        <span className="text-sm text-muted-foreground tracking-wider">EFFECTS</span>
      </div>
      
      <Button variant="cinematic" size="sm" className="pulse-glow px-6">
        🎬 Garantir Pack Z
      </Button>
    </header>
  );
};

export default Header;