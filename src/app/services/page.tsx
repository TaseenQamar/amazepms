import type { Metadata } from "next";
import ServicesPageHero from "@/components/services/ServicesPageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicePartners from "@/components/services/ServicePartners";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services | Amaze PMS",
  description:
    "Explore Amaze PMS property and asset management services — Security, Housekeeping, MEP, Pest Control, Parking and more across PAN India.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <ServicesPageHero />
        <ServicesGrid />
        <ServicePartners />
        <Footer />
      </main>
    </>
  );
}
