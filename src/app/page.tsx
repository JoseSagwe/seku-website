// app/page.tsx
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import Hero from "@/components/sections/home/Hero";
import AcademicPrograms from "@/components/AcademicPrograms";
import Schools from "@/components/sections/home/Schools";
import LatestNews from "@/components/sections/home/LatestNews";

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