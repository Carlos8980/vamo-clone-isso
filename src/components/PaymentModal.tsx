import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const [email, setEmail] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<"card" | "pix" | null>(null);
  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<any>(null);

  const handlePayment = async () => {
    if (!email || !selectedMethod) {
      toast.error("Preencha todos os campos");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Digite um email válido");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { email, paymentMethod: selectedMethod }
      });

      if (error) throw error;

      if (data.success) {
        if (selectedMethod === "card") {
          // Redirect to Stripe checkout
          window.open(data.paymentUrl, "_blank");
          onClose();
          toast.success("Redirecionando para o pagamento...");
        } else if (selectedMethod === "pix") {
          // Show PIX data
          setPixData(data.pixData);
          toast.success("PIX gerado com sucesso!");
        }
      } else {
        throw new Error(data.error || "Erro ao processar pagamento");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      toast.error(error.message || "Erro ao processar pagamento");
    } finally {
      setLoading(false);
    }
  };

  const copyPixCode = () => {
    if (pixData?.copy_paste) {
      navigator.clipboard.writeText(pixData.copy_paste);
      toast.success("Código PIX copiado!");
    }
  };

  const resetModal = () => {
    setEmail("");
    setSelectedMethod(null);
    setPixData(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold gradient-text">
            Finalizar Compra - Pack Z
          </DialogTitle>
        </DialogHeader>

        {!pixData ? (
          <div className="space-y-6">
            {/* Product Summary */}
            <Card className="p-4 bg-teal-900/20 border-primary/30">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Pack Z - Overlays</span>
                <Badge className="bg-primary text-primary-foreground">+500 overlays</Badge>
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                • Aulas passo a passo<br/>
                • Template de workflow<br/>
                • Grupo exclusivo
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-2xl font-bold gradient-text">R$ 97,00</span>
              </div>
            </Card>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Seu email:</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Payment Methods */}
            <div>
              <label className="block text-sm font-medium mb-3">Escolha a forma de pagamento:</label>
              <div className="grid grid-cols-2 gap-3">
                <Card 
                  className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                    selectedMethod === "card" 
                      ? "border-primary bg-primary/10" 
                      : "border-muted-foreground/20"
                  }`}
                  onClick={() => setSelectedMethod("card")}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">💳</div>
                    <div className="font-semibold">Cartão</div>
                    <div className="text-xs text-muted-foreground">Débito/Crédito</div>
                  </div>
                </Card>

                <Card 
                  className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                    selectedMethod === "pix" 
                      ? "border-primary bg-primary/10" 
                      : "border-muted-foreground/20"
                  }`}
                  onClick={() => setSelectedMethod("pix")}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-semibold">PIX</div>
                    <div className="text-xs text-muted-foreground">Instantâneo</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handlePayment}
                disabled={!email || !selectedMethod || loading}
                className="w-full"
                size="lg"
              >
                {loading ? "Processando..." : "Finalizar Compra"}
              </Button>
              
              <Button variant="outline" onClick={resetModal} className="w-full">
                Cancelar
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>
        ) : (
          /* PIX Payment Screen */
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Pagamento via PIX</h3>
              <p className="text-muted-foreground">Escaneie o QR Code ou copie o código</p>
            </div>

            <Card className="p-4 bg-slate-800/50">
              <div className="text-center mb-4">
                <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(pixData.copy_paste)}`}
                    alt="QR Code PIX"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-black text-xs p-4">Erro ao gerar QR Code</div>';
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Código PIX:</label>
                  <div className="flex gap-2">
                    <Input 
                      value={pixData.copy_paste} 
                      readOnly 
                      className="text-xs"
                    />
                    <Button onClick={copyPixCode} variant="outline" size="sm">
                      Copiar
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    ⏰ Válido por 30 minutos
                  </p>
                  <p className="text-lg font-bold gradient-text mt-2">R$ 97,00</p>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <Button onClick={resetModal} variant="outline" className="w-full">
                Voltar
              </Button>
            </div>

            <div className="text-xs text-center text-muted-foreground">
              Após o pagamento, você receberá o acesso por email em até 5 minutos.
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;