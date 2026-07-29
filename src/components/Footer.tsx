"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import { PRESENCE } from "@/lib/content";
import { easeExpo, scrollViewport } from "@/lib/animations";

const MENU = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Strength", href: "/strength" },
  { label: "Gallery", href: "/gallery" },
];

const QUICK_LINKS = [
  { label: "Our Clients", href: "/clients" },
  { label: "Recruitments", href: "/recruitments" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07122e] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      {/* VIP ANIMATION: columns cascade upward like rising curtains */}
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.65, delay: 0, ease: easeExpo }}
          className="lg:col-span-1"
        >
          <a
            href="/"
            className="group inline-flex overflow-hidden rounded-xl bg-white/95 px-3 py-2 shadow-lg transition-shadow duration-300 hover:shadow-[0_12px_28px_-10px_rgba(232,145,114,0.45)]"
          >
            <Image
              src="/logo-amazepms.png"
              alt="Amaze PMSPL"
              width={140}
              height={76}
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Amaze Property Management Solutions Pvt Ltd
          </p>
          <div className="mt-5 flex gap-3">
            {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={scrollViewport}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                  delay: 0.2 + i * 0.08,
                }}
                whileHover={{
                  scale: 1.14,
                  backgroundColor: "rgb(232 145 114)",
                  transition: { type: "spring", stiffness: 400, damping: 16 },
                }}
                whileTap={{ scale: 0.94 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-transparent hover:text-white"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {[
          {
            title: "Menu",
            delay: 0.08,
            content: (
              <ul className="mt-4 space-y-2.5">
                {MENU.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block text-sm text-white/55 transition-colors hover:text-[#e89172]"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#e89172] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Quick Links",
            delay: 0.14,
            content: (
              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block text-sm text-white/55 transition-colors hover:text-[#e89172]"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#e89172] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Our Presence",
            delay: 0.2,
            content: (
              <ul className="mt-4 space-y-2.5">
                {PRESENCE.map((state) => (
                  <li
                    key={state}
                    className="group flex cursor-default items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <Building2 className="h-3.5 w-3.5 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#e89172]" />
                    {state}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Contact",
            delay: 0.26,
            content: (
              <ul className="mt-4 space-y-3.5 text-sm text-white/55">
                <li className="group flex gap-2.5 transition-colors hover:text-white/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:text-[#e89172]" />
                  <span>
                    4th floor, High Mark Chambers, Khajaguda X road, Cyberabad,
                    Hyderabad-500008
                  </span>
                </li>
                <li>
                  <a
                    href="tel:9100694137"
                    className="group inline-flex items-center gap-2.5 transition-colors hover:text-[#e89172]"
                  >
                    <Phone className="h-4 w-4 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#e89172]" />
                    91006 94137
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Info@amazepms.com"
                    className="group inline-flex items-center gap-2.5 transition-colors hover:text-[#e89172]"
                  >
                    <Mail className="h-4 w-4 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#e89172]" />
                    Info@amazepms.com
                  </a>
                </li>
              </ul>
            ),
          },
        ].map((col) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.65, delay: col.delay, ease: easeExpo }}
          >
            <h4 className="text-base font-bold text-white">{col.title}</h4>
            {col.content}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={scrollViewport}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="border-t border-white/10 py-5"
      >
        <p className="text-center text-xs text-white/40">
          Copyright © {new Date().getFullYear()} Amaze Property Management |
          All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
