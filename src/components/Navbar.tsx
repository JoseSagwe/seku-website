// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-green-700 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-green-200 flex items-center">
              <span>Main Site</span>
            </Link>
            <Link href="/career" className="hover:text-green-200 flex items-center">
              <span>Career Paths</span>
            </Link>
            <Link href="/email" className="hover:text-green-200 flex items-center">
              <span>Check Email</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+254 748 60 59 967</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>scienceandcomputing@seku.ac.ke</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Mon - Fri 8:00 - 17:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-52">
                <Image 
                  src="/seku-logo.png" 
                  alt="SEKU Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority 
                />
              </div>
              <div className="ml-2 hidden md:block">
                <div className="text-green-700 font-semibold text-lg">South Eastern Kenya University</div>
                <div className="text-sm text-gray-600">School of Science and Computing</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-green-700">HOME</Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-green-700">ABOUT US</Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-green-700 group flex items-center">
                DEPARTMENTS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/departments/computer-science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Computer Science & Technology</Link>
                <Link href="/departments/life-sciences" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Life Sciences</Link>
                <Link href="/departments/mathematics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Mathematics & Actuarial Science</Link>
                <Link href="/departments/physical-sciences" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">Physical Sciences</Link>
              </div>
            </div>
            <Link href="/programmes" className="font-medium text-gray-700 hover:text-green-700">PROGRAMMES</Link>
            <Link href="/research" className="font-medium text-gray-700 hover:text-green-700">RESEARCHES</Link>
            <Link href="/news" className="font-medium text-gray-700 hover:text-green-700">CURRENT NEWS</Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-green-700">CONTACT US</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">HOME</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">ABOUT US</Link>
            <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md" onClick={() => {}}>
              DEPARTMENTS
            </button>
            <div className="pl-6 space-y-1">
              <Link href="/departments/computer-science" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">Computer Science & Technology</Link>
              <Link href="/departments/life-sciences" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">Life Sciences</Link>
              <Link href="/departments/mathematics" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">Mathematics & Actuarial Science</Link>
              <Link href="/departments/physical-sciences" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">Physical Sciences</Link>
            </div>
            <Link href="/programmes" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">PROGRAMMES</Link>
            <Link href="/research" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">RESEARCHES</Link>
            <Link href="/news" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">CURRENT NEWS</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md">CONTACT US</Link>
          </div>
          <div className="px-5 py-3 border-t">
            <div className="flex items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm text-gray-700">+254 748 60 59 967</span>
            </div>
            <div className="flex items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm text-gray-700">scienceandcomputing@seku.ac.ke</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;