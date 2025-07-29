import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [verifying, setVerifying] = useState(true);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    
    if (sessionId) {
      verifyPayment(sessionId);
    } else {
      setVerifying(false);
    }
  }, [searchParams]);

  const verifyPayment = async (sessionId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke("verify-payment", {
        body: { sessionId }
      });

      if (error) throw error;

      if (data.success && data.status === "paid") {
        setPaymentVerified(true);
        setCustomerEmail(data.customerEmail);
      }
    } catch (error) {
      console.error("Payment verification error:", error);
    } finally {
      setVerifying(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-xl font-bold mb-2">Verificando pagamento...</h2>
          <p className="text-muted-foreground">Aguarde um momento</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md mx-auto p-8 text-center">
        {paymentVerified ? (
          <>
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-2xl font-bold gradient-text mb-4">
              Pagamento Aprovado!
            </h1>
            <p className="text-muted-foreground mb-6">
              Obrigado pela sua compra! Você receberá o acesso ao Pack Z com todos os overlays no email:
            </p>
            <div className="bg-primary/10 p-3 rounded-lg mb-6">
              <span className="font-semibold text-primary">{customerEmail}</span>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                ✅ +500 overlays profissionais<br/>
                ✅ Aulas passo a passo<br/>
                ✅ Template de workflow<br/>
                ✅ Acesso ao grupo exclusivo
              </div>
              <Button 
                onClick={() => window.location.href = "/"}
                className="w-full"
              >
                Voltar ao início
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="text-6xl mb-6">❌</div>
            <h1 className="text-2xl font-bold mb-4">
              Erro na verificação
            </h1>
            <p className="text-muted-foreground mb-6">
              Não foi possível verificar seu pagamento. Entre em contato conosco se o problema persistir.
            </p>
            <Button 
              onClick={() => window.location.href = "/"}
              variant="outline"
              className="w-full"
            >
              Voltar ao início
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default PaymentSuccess;