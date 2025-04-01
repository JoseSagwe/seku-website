"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DepartmentChair from "@/components/DepartmentChair";
import StaffPortfolio from "@/components/StaffPortfolio";
import AcademicProgramsList from "@/components/sections/home/AcademicProgramsList";

export default function ComputerScienceDepartment() {
  return (
    <main>
      <Navbar />
      
      {/* Department Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Department of Computer Science and Technology
          </h1>
          <div className="flex items-center text-green-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/schools/science-computing" className="hover:text-white">School of Science and Computing</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Department of Computer Science and Technology</span>
          </div>
        </div>
      </div>
      
      <DepartmentChair />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AcademicProgramsList />
          </div>
          <div className="lg:col-span-1">
            <StaffPortfolio />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}