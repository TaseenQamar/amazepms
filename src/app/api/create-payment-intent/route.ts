import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amountInr = Number(body.amount);
    const email = typeof body.email === "string" ? body.email : undefined;
    const name = typeof body.name === "string" ? body.name : undefined;

    if (!Number.isFinite(amountInr) || amountInr < 1) {
      return NextResponse.json(
        { error: "Enter a valid amount (minimum ₹1)." },
        { status: 400 }
      );
    }

    // Stripe expects smallest currency unit (paise for INR)
    const amount = Math.round(amountInr * 100);

    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      automatic_payment_methods: { enabled: true },
      receipt_email: email || undefined,
      metadata: {
        customer_name: name || "",
        source: "amazepms-payment-page",
      },
      description: "Amaze PMS service payment",
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to create payment";
    console.error("[create-payment-intent]", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
