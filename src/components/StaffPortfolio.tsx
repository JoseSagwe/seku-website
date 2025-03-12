// components/StaffPortfolio.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Staff data
const staffMembers = [
  {
    id: 1,
    name: "Dr. Andrew Omala",
    title: "Chairman of Department",
    image: "/images/dr-andrew-omala.jpg",
    specialization: "Software Engineering, Data Science",
    email: "aomala@seku.ac.ke",
    profile: "/staff/andrew-omala"
  },
  {
    id: 2,
    name: "Mr. Obwaya Mogire",
    title: "Lecturer",
    image: "/images/Mr._Obwaya_Mogire.png",
    specialization: "Information Technology and Systems",
    email: "sbrown@seku.ac.ke",
    profile: "/staff/sarah-brown"
  },
  {
    id: 3,
    name: "Josphert N. Kimatuh",
    title: "Professor",
    image: "/images/staff-2.png",
    specialization: "Computer Networks, Cybersecurity",
    email: "jsmith@seku.ac.ke",
    profile: "/staff/john-smith"
  },
  {
    id: 4,
    name: "David M. Malonza",
    title: "Senior Lecturer",
    image: "/images/staff-3.jpg",
    specialization: "Artificial Intelligence, Machine Learning",
    email: "mjohnson@seku.ac.ke",
    profile: "/staff/mary-johnson"
  },
  {
    id: 5,
    name: "Ms. Jane Mbiri",
    title: "Lecturer",
    image: "/images/staff-4.jpg",
    specialization: "Database Systems, Big Data",
    email: "jwilson@seku.ac.ke",
    profile: "/staff/james-wilson"
  },
];

// Categories
const categories = [
  { id: "all", name: "All Staff" },
  { id: "professors", name: "Professors" },
  { id: "lecturers", name: "Lecturers" },
  { id: "assistants", name: "Assistant Lecturers" },
  { id: "technical", name: "Technical Staff" }
];

const StaffPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter staff based on active category and search term
  const filteredStaff = staffMembers.filter(staff => {
    const matchesCategory = activeCategory === "all" || 
      (activeCategory === "professors" && staff.title.includes("Professor")) ||
      (activeCategory === "lecturers" && staff.title.includes("Lecturer") && !staff.title.includes("Assistant")) ||
      (activeCategory === "assistants" && staff.title.includes("Assistant")) ||
      (activeCategory === "technical" && staff.title.includes("Technical"));
    
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      staff.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-green-600 to-green-700">
        <h2 className="text-2xl font-bold text-white">Our Staff Portfolio</h2>
        <p className="text-green-100 mt-1">Meet our dedicated faculty members</p>
      </div>
      
      <div className="p-6 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-b overflow-x-auto">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="divide-y">
        {filteredStaff.length > 0 ? (
          filteredStaff.map(staff => (
            <Link 
              href={staff.profile} 
              key={staff.id}
              className="block hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="p-6 flex items-center space-x-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">{staff.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="truncate">{staff.title}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 truncate">{staff.specialization}</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No staff members found matching the current filters.
          </div>
        )}
      </div>
      
      <div className="p-5 bg-gray-50 border-t">
        <Link href="/staff" className="text-green-700 hover:text-green-800 font-medium flex items-center justify-center">
          View All Staff Members
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default StaffPortfolio;