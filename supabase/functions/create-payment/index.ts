import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, paymentMethod } = await req.json();

    if (!email) {
      throw new Error("Email é obrigatório");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    if (paymentMethod === "card") {
      // Stripe payment for card
      const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
        apiVersion: "2023-10-16",
      });

      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        line_items: [
          {
            price_data: {
              currency: "brl",
              product_data: {
                name: "Pack Z - Overlays Profissionais",
                description: "+500 overlays profissionais para vídeos + bônus exclusivos",
              },
              unit_amount: 9700, // R$97.00 in cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/?payment=cancelled`,
        locale: "pt-BR",
      });

      // Save order to database
      const { error: dbError } = await supabase.from("orders").insert({
        user_email: email,
        payment_method: "card",
        stripe_session_id: session.id,
        expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutes
      });

      if (dbError) {
        console.error("Database error:", dbError);
      }

      return new Response(JSON.stringify({ 
        success: true,
        paymentUrl: session.url,
        sessionId: session.id 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });

    } else if (paymentMethod === "pix") {
      // PIX payment simulation (replace with real PIX provider)
      const pixCode = `00020126580014br.gov.bcb.pix0136${crypto.randomUUID()}520400005303986540597.005802BR5925Pack Z Overlays6009SAO PAULO62070503***6304`;
      
      // Generate PIX QR code data
      const pixData = {
        qr_code: pixCode,
        copy_paste: pixCode,
        expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutes
      };

      // Save order to database
      const { data: order, error: dbError } = await supabase.from("orders").insert({
        user_email: email,
        payment_method: "pix",
        pix_qr_code: pixData.qr_code,
        pix_copy_paste: pixData.copy_paste,
        expires_at: pixData.expires_at,
      }).select().single();

      if (dbError) {
        throw new Error(`Erro ao salvar pedido: ${dbError.message}`);
      }

      return new Response(JSON.stringify({
        success: true,
        orderId: order.id,
        pixData
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    throw new Error("Método de pagamento inválido");

  } catch (error) {
    console.error("Payment error:", error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});