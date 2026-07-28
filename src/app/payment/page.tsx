import type { Metadata } from "next";
import PaymentPageHero from "@/components/payment/PaymentPageHero";
import PaymentMethods from "@/components/payment/PaymentMethods";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Payment Methods | Amaze PMS",
  description:
    "Pay securely for Amaze PMS services using Stripe or Apple Pay.",
};

export default function PaymentPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <PaymentPageHero />
        <PaymentMethods />
        <Footer />
      </main>
    </>
  );
}
