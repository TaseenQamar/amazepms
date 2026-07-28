"use client";

import { motion } from "framer-motion";
import ClientsMarquee from "@/components/ClientsMarquee";
import { easeExpo, scrollViewport } from "@/lib/animations";

export default function ClientLogoSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: 0.65, ease: easeExpo }}
    >
      <ClientsMarquee
        id="client-logos"
        title="Trusted by 100+ valued partners across India"
      />
    </motion.div>
  );
}
