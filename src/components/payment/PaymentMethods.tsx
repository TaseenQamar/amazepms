"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Apple,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { easeExpo, scrollViewport } from "@/lib/animations";
import StripeCheckout from "@/components/payment/StripeCheckout";

type Method = "stripe" | "apple";

const FEATURES = [
  "Secure checkout powered by Stripe Elements",
  "Apple Pay & wallets when available on device",
  "Instant confirmation for service invoices",
  "PCI-DSS compliant payment flow",
];

function StripeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 25" className={className} aria-hidden>
      <text
        x="0"
        y="18"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="20"
        letterSpacing="-0.5"
      >
        stripe
      </text>
    </svg>
  );
}

export default function PaymentMethods() {
  const [method, setMethod] = useState<Method>("stripe");
  const [amount, setAmount] = useState("5000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-lavender/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-cyan/15 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.65, ease: easeExpo }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Secure Checkout
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Choose your{" "}
            <span className="text-gradient">payment method</span>
          </h2>
          <p className="mt-3 text-base text-muted">
            Pay for Amaze PMS services with Stripe Payment Element or Apple Pay
            — encrypted end to end.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.button
                type="button"
                onClick={() => setMethod("stripe")}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{ duration: 0.55, ease: easeExpo }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 380, damping: 18 },
                }}
                className={`group soft-card relative overflow-hidden rounded-2xl p-5 text-left transition-shadow duration-300 ${
                  method === "stripe"
                    ? "ring-2 ring-[#635BFF] shadow-[0_20px_44px_-16px_rgba(99,91,255,0.45)]"
                    : "hover:shadow-[0_20px_44px_-16px_rgba(26,26,92,0.28)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#635BFF]/12 text-[#635BFF] transition-transform duration-300 group-hover:scale-110">
                    <CreditCard className="h-6 w-6" />
                  </span>
                  {method === "stripe" && (
                    <CheckCircle2 className="h-5 w-5 text-[#635BFF]" />
                  )}
                </div>
                <p className="mt-4 text-lg font-bold text-ink">Stripe</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Cards &amp; more via Stripe Payment Element.
                </p>
                <div className="mt-4 text-[#635BFF]">
                  <StripeMark className="h-5 w-16" />
                </div>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setMethod("apple")}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{ duration: 0.55, delay: 0.08, ease: easeExpo }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 380, damping: 18 },
                }}
                className={`group soft-card relative overflow-hidden rounded-2xl p-5 text-left transition-shadow duration-300 ${
                  method === "apple"
                    ? "ring-2 ring-ink shadow-[0_20px_44px_-16px_rgba(0,0,0,0.35)]"
                    : "hover:shadow-[0_20px_44px_-16px_rgba(26,26,92,0.28)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-transform duration-300 group-hover:scale-110">
                    <Apple className="h-6 w-6" />
                  </span>
                  {method === "apple" && (
                    <CheckCircle2 className="h-5 w-5 text-ink" />
                  )}
                </div>
                <p className="mt-4 text-lg font-bold text-ink">Apple Pay</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Express Checkout via Stripe wallets.
                </p>
                <p className="mt-4 text-sm font-semibold tracking-tight text-ink">
                  Pay
                </p>
              </motion.button>
            </div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.55, delay: 0.12, ease: easeExpo }}
              className="soft-card space-y-3 rounded-2xl p-5 sm:p-6"
            >
              {FEATURES.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={scrollViewport}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.4,
                    ease: easeExpo,
                  }}
                  whileHover={{
                    x: 6,
                    transition: { type: "spring", stiffness: 400, damping: 22 },
                  }}
                  className="group flex cursor-default items-start gap-2.5 text-sm text-ink-soft"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:text-[#e89172]" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Stripe Elements panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.7, ease: easeExpo }}
            className="soft-card relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8"
            data-lenis-prevent
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1a1a5c] via-[#e89172] to-cyan" />

            <div className="mb-5 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Full Name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Amount (INR)
                </span>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">
                    ₹
                  </span>
                  <input
                    required
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-xl border border-ink/10 bg-white py-3 pr-4 pl-8 text-sm text-ink outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                  />
                </div>
              </label>
            </div>

            <StripeCheckout
              amount={amount}
              name={name}
              email={email}
              method={method}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
