import type { Metadata } from "next";
import StrengthPageHero from "@/components/strength/StrengthPageHero";
import StrengthContent from "@/components/strength/StrengthContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Strength | Amaze PMS",
  description:
    "Discover what makes Amaze PMS strong — in-house services, 20M+ sq.ft managed, audits, SOPs and unmatched staff welfare across PAN India.",
};

export default function StrengthPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <StrengthPageHero />
        <StrengthContent />
        <Footer />
      </main>
    </>
  );
}
