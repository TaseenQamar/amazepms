"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Elements,
  PaymentElement,
  ExpressCheckoutElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Lock } from "lucide-react";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

const stripePromise = publishableKey
  ? loadStripe(publishableKey)
  : null;

type Props = {
  amount: string;
  name: string;
  email: string;
  method: "stripe" | "apple";
};

function CheckoutForm({
  amount,
  method,
}: {
  amount: string;
  method: "stripe" | "apple";
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [expressReady, setExpressReady] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setBusy(true);
    setError(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message ?? "Payment details incomplete");
      setBusy(false);
      return;
    }

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment?success=1`,
      },
      redirect: "if_required",
    });

    if (confirmError) {
      setError(confirmError.message ?? "Payment failed");
      setBusy(false);
      return;
    }

    setSuccess(true);
    setBusy(false);
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <p className="text-base font-bold text-emerald-800">Payment successful</p>
        <p className="text-sm text-emerald-700/80">
          Thank you — your Amaze PMS payment has been confirmed.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Apple Pay / Google Pay / Link wallets */}
      {(method === "apple" || method === "stripe") && (
        <div className={method === "apple" || expressReady ? "block" : "hidden"}>
          <ExpressCheckoutElement
            onReady={({ availablePaymentMethods }) => {
              setExpressReady(Boolean(availablePaymentMethods));
            }}
            onConfirm={async () => {
              if (!stripe || !elements) return;
              setBusy(true);
              setError(null);
              const { error: confirmError } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                  return_url: `${window.location.origin}/payment?success=1`,
                },
                redirect: "if_required",
              });
              if (confirmError) {
                setError(confirmError.message ?? "Wallet payment failed");
                setBusy(false);
                return;
              }
              setSuccess(true);
              setBusy(false);
            }}
            options={{
              buttonType: {
                applePay: "buy",
                googlePay: "buy",
              },
              layout: {
                maxColumns: 1,
                maxRows: 2,
              },
            }}
          />
          {method === "apple" && !expressReady && (
            <p className="mt-2 text-center text-xs text-muted">
              Apple Pay appears here on supported Safari / Apple devices when
              wallets are enabled in your Stripe Dashboard.
            </p>
          )}
        </div>
      )}

      {method === "stripe" && (
        <>
          {expressReady && (
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
              <span className="h-px flex-1 bg-ink/10" />
              Or pay with card
              <span className="h-px flex-1 bg-ink/10" />
            </div>
          )}
          <PaymentElement
            options={{
              layout: "tabs",
              wallets: {
                applePay: "auto",
                googlePay: "auto",
              },
            }}
          />
        </>
      )}

      {method === "apple" && expressReady && (
        <p className="text-center text-xs text-muted">
          Use the Apple Pay button above to complete checkout.
        </p>
      )}

      {error && (
        <p className="rounded-xl bg-red-50 px-3 py-2.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      {method === "stripe" && (
        <motion.button
          type="submit"
          disabled={!stripe || !elements || busy}
          whileHover={{ scale: busy ? 1 : 1.02, y: busy ? 0 : -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#635BFF] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_36px_-12px_rgba(99,91,255,0.55)] transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing…
            </>
          ) : (
            <>Pay ₹{Number(amount || 0).toLocaleString("en-IN")}</>
          )}
        </motion.button>
      )}
    </form>
  );
}

export default function StripeCheckout({
  amount,
  name,
  email,
  method,
}: Props) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);

  const createIntent = useCallback(async () => {
    const value = Number(amount);
    if (!Number.isFinite(value) || value < 1) {
      setClientSecret(null);
      setInitError("Enter a valid amount to continue.");
      return;
    }

    if (!publishableKey) {
      setInitError(
        "Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY to .env.local"
      );
      return;
    }

    setLoading(true);
    setInitError(null);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: value, name, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to start payment");
      }
      setClientSecret(data.clientSecret);
    } catch (err) {
      setClientSecret(null);
      setInitError(err instanceof Error ? err.message : "Payment setup failed");
    } finally {
      setLoading(false);
    }
  }, [amount, name, email]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      void createIntent();
    }, 450);
    return () => window.clearTimeout(t);
  }, [createIntent]);

  const options: StripeElementsOptions | undefined = useMemo(() => {
    if (!clientSecret) return undefined;
    return {
      clientSecret,
      appearance: {
        theme: "stripe",
        variables: {
          colorPrimary: "#635BFF",
          colorBackground: "#ffffff",
          colorText: "#1a1a5c",
          colorDanger: "#df1b41",
          fontFamily: "system-ui, sans-serif",
          borderRadius: "12px",
          spacingUnit: "4px",
        },
        rules: {
          ".Input": {
            border: "1px solid rgba(26,26,92,0.12)",
            boxShadow: "none",
            padding: "12px",
          },
          ".Input:focus": {
            border: "1px solid #e89172",
            boxShadow: "0 0 0 2px rgba(232,145,114,0.2)",
          },
          ".Label": {
            fontWeight: "600",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#6b7280",
          },
          ".Tab": {
            borderRadius: "12px",
          },
          ".Tab--selected": {
            borderColor: "#635BFF",
            boxShadow: "0 0 0 1px #635BFF",
          },
        },
      },
    };
  }, [clientSecret]);

  if (!stripePromise) {
    return (
      <div className="rounded-2xl border border-dashed border-ink/15 bg-white/80 p-6 text-center">
        <Lock className="mx-auto h-6 w-6 text-cyan" />
        <p className="mt-3 text-sm font-semibold text-ink">
          Stripe keys required
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Create <code className="text-ink">.env.local</code> with{" "}
          <code className="text-ink">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>{" "}
          and <code className="text-ink">STRIPE_SECRET_KEY</code>, then restart
          the dev server.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        <Lock className="h-3.5 w-3.5 text-cyan" />
        Encrypted payment · Stripe
      </div>
      <h3 className="text-xl font-bold text-ink sm:text-2xl">
        Complete your payment
      </h3>
      <p className="text-sm text-muted">
        Selected:{" "}
        <span className="font-semibold text-ink">
          {method === "stripe" ? "Stripe" : "Apple Pay"}
        </span>
      </p>

      {loading && (
        <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted">
          <Loader2 className="h-4 w-4 animate-spin text-[#635BFF]" />
          Loading Stripe checkout…
        </div>
      )}

      {initError && !loading && (
        <p className="rounded-xl bg-amber-50 px-3 py-2.5 text-sm font-medium text-amber-800">
          {initError}
        </p>
      )}

      {clientSecret && options && !loading && (
        <Elements
          key={clientSecret}
          stripe={stripePromise}
          options={options}
        >
          <CheckoutForm amount={amount} method={method} />
        </Elements>
      )}
    </div>
  );
}
