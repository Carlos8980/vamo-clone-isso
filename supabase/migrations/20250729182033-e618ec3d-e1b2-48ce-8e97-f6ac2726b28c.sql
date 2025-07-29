-- Create orders table to track payment information
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  product_name TEXT NOT NULL DEFAULT 'Pack Z - Overlays',
  amount INTEGER NOT NULL DEFAULT 9700, -- R$97.00 in cents
  currency TEXT NOT NULL DEFAULT 'brl',
  payment_method TEXT NOT NULL, -- 'card' or 'pix'
  payment_status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'paid', 'failed', 'expired'
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  pix_qr_code TEXT,
  pix_copy_paste TEXT,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since users don't need to be logged in)
CREATE POLICY "Allow public insert" ON public.orders
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow read by email" ON public.orders
  FOR SELECT
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();