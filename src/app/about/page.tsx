// app/about/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import HistorySection from "@/components/about/HistorySection";
import MissionVision from "@/components/about/MissionVision";
import LeadershipSection from "@/components/about/LeadershipSection";
import CampusesSection from "@/components/about/CampusesSection";
import DirectoratesSection from "@/components/about/DirectoratesSection";
import UnitsSection from "@/components/about/UnitsSection";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <AboutHero />
      <HistorySection />
      <MissionVision />
      <LeadershipSection />
      <CampusesSection />
      <DirectoratesSection />
      <UnitsSection />
      <Footer />
    </main>
  );
}