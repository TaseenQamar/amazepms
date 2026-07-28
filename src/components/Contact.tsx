"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-x-clip">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-lavender/20 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* VIP: magnetic heading — blur-free letter spacing open */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.7, ease: easeExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
            viewport={scrollViewport}
            transition={{ duration: 0.9, ease: easeExpo }}
            className="text-xs font-semibold uppercase text-cyan"
          >
            Contact Us
          </motion.p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Let&apos;s talk about your{" "}
            <span className="text-gradient">facility needs.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Reach our Cyberabad HQ or drop a message — we&apos;ll get back with
            a tailored IFM proposal.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* VIP ANIMATION: stack cards — slide stack from bottom */}
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Head Office",
                detail:
                  "4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "91006 94137 / 99085 38137",
                href: "tel:9908538137",
              },
              {
                icon: Mail,
                title: "Email",
                detail: "Info@amazepms.com",
                href: "mailto:Info@amazepms.com",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  x: 4,
                  transition: { type: "spring", stiffness: 350, damping: 20 },
                }}
                className="group soft-card flex cursor-default gap-4 rounded-2xl p-5 will-change-transform hover:shadow-[0_20px_44px_-16px_rgba(26,26,92,0.28),0_0_0_1px_rgba(232,145,114,0.3)]"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={scrollViewport}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                    delay: 0.15 + i * 0.1,
                  }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(232,145,114,0.55)]"
                >
                  <item.icon className="h-5 w-5" />
                </motion.span>
                <div>
                  <div className="text-sm font-bold text-ink transition-colors group-hover:text-[#1a1a5c]">
                    {item.title}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm leading-relaxed text-muted transition-colors hover:text-cyan"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* VIP ANIMATION: form — expand from center + fields cascade */}
          <motion.form
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollViewport}
            transition={{ duration: 0.75, ease: easeExpo }}
            onSubmit={(e) => e.preventDefault()}
            className="soft-card rounded-[1.75rem] p-6 transition-shadow duration-500 hover:shadow-[0_24px_50px_-18px_rgba(26,26,92,0.28),0_0_0_1px_rgba(232,145,114,0.25)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Full Name", type: "text", placeholder: "Your name", span: false },
                { label: "Phone", type: "tel", placeholder: "Your phone", span: false },
                { label: "Email", type: "email", placeholder: "you@company.com", span: true },
              ].map((field, i) => (
                <motion.label
                  key={field.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={scrollViewport}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: easeExpo }}
                  className={`block ${field.span ? "sm:col-span-2" : ""}`}
                >
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                    {field.label}
                  </span>
                  <input
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                  />
                </motion.label>
              ))}
              <motion.label
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{ delay: 0.4, duration: 0.45, ease: easeExpo }}
                className="block sm:col-span-2"
              >
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Message
                </span>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your site / service needs"
                  className="w-full resize-none rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                />
              </motion.label>
            </div>
            <motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={scrollViewport}
              transition={{ delay: 0.5, type: "spring", stiffness: 160, damping: 14 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_-10px_rgba(232,145,114,0.55)] sm:w-auto"
            >
              Send Message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
