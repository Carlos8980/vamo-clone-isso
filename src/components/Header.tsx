import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-primary gradient-text">[Z]</div>
        <span className="text-sm text-muted-foreground">EFFECTS</span>
      </div>
      
      <Button variant="cinematic" size="sm">
        🎬 Garantir Pack Z
      </Button>
    </header>
  );
};

export default Header;