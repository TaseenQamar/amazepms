import type { Metadata } from "next";
import GalleryPageHero from "@/components/gallery/GalleryPageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Amaze PMS",
  description:
    "See Amaze PMS teams in action — training, operations, housekeeping and facility management across our sites.",
};

export default function GalleryPage() {
  return (
    <>
      <main className="flex flex-1 flex-col page-gradient">
        <GalleryPageHero />
        <GalleryGrid />
        <Footer />
      </main>
    </>
  );
}
