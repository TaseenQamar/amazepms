import type { Metadata } from "next";
import AboutPageHero from "@/components/about/AboutPageHero";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import Segments from "@/components/about/Segments";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Amaze PMS",
  description:
    "Learn about Amaze Property Management Solutions — Mission, Vision, Values and the segments we cater to across PAN India.",
};

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <AboutPageHero />
        <AboutIntro />
        <MissionVisionValues />
        <Segments />
        <Footer />
      </main>
    </>
  );
}
