import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <Hero />
        <ClientsMarquee />
        <About />
        <WhyChooseUs />
        <Contact />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
