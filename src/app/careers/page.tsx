import type { Metadata } from "next";
import CareersPageHero from "@/components/careers/CareersPageHero";
import CareersContent from "@/components/careers/CareersContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | Amaze PMS",
  description:
    "Join Amaze PMS — current openings in facility management, security, housekeeping, technical and operations roles. Email careers@amazepms.com.",
};

export default function CareersPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <CareersPageHero />
        <CareersContent />
        <Footer />
      </main>
    </>
  );
}
