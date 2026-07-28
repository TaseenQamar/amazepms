import type { Metadata } from "next";
import ClientsPageHero from "@/components/clients/ClientsPageHero";
import ClientLists from "@/components/clients/ClientLists";
import ClientDistribution from "@/components/clients/ClientDistribution";
import ClientLogoSlider from "@/components/clients/ClientLogoSlider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Clients | Amaze PMS",
  description:
    "Explore Amaze PMS clients across Commercial & IT Parks, Residential Communities, Malls, Hospitals, Education, Warehouses and Manufacturing.",
};

export default function ClientsPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <ClientsPageHero />
        <ClientLists />
        <ClientDistribution />
        <ClientLogoSlider />
        <Footer />
      </main>
    </>
  );
}
