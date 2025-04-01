// components/Hero.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image 
          src="/hero-image.jpg" 
          alt="SEKU Campus" 
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/40"></div>
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            South Eastern Kenya University
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforming Lives Through Quality Education and Research
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/admissions" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Apply Now
            </Link>
            <Link 
              href="/programmes" 
              className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;