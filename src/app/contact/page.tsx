import type { Metadata } from "next";
import ContactPageHero from "@/components/contact/ContactPageHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactMap from "@/components/contact/ContactMap";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Amaze PMS",
  description:
    "Contact Amaze PMS for property management services. Visit our Cyberabad office or call 9100694137 / email info@amazepms.com.",
};

export default function ContactPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <ContactPageHero />
        <ContactDetails />
        <ContactMap />
        <Footer />
      </main>
    </>
  );
}
