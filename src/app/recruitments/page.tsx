import type { Metadata } from "next";
import RecruitmentsPageHero from "@/components/recruitments/RecruitmentsPageHero";
import RecruitmentStrategy from "@/components/recruitments/RecruitmentStrategy";
import SkillDevelopment from "@/components/recruitments/SkillDevelopment";
import AuditsSection from "@/components/recruitments/AuditsSection";
import FunctionalApproach from "@/components/recruitments/FunctionalApproach";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recruitments & Training | Amaze PMS",
  description:
    "Amaze PMS recruitment strategy, skill development, audits and functional approach for manpower excellence across PAN India.",
};

export default function RecruitmentsPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <RecruitmentsPageHero />
        <RecruitmentStrategy />
        <SkillDevelopment />
        <AuditsSection />
        <FunctionalApproach />
        <Footer />
      </main>
    </>
  );
}
