// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schools from "@/components/Schools";
import AcademicPrograms from "@/components/AcademicPrograms";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AcademicPrograms />
      <Schools />
      <LatestNews />
      <Footer />
    </main>
  );
}