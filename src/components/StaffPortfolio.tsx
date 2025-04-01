// components/StaffPortfolio.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define TypeScript interfaces for our data
interface StaffMember {
  id: number;
  name: string;
  title: string;
  image: string;
  specialization: string;
  email: string;
  phone: string;
  education: string[];
  bio: string;
  publications: string[];
  profile: string;
}

interface Category {
  id: string;
  name: string;
}

// Staff data
const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Dr. Andrew Omala",
    title: "Chairman of Department",
    image: "/images/dr-andrew-omala.jpg",
    specialization: "Software Engineering, Data Science",
    email: "aomala@seku.ac.ke",
    phone: "+254 712 345 678",
    education: [
      "PhD in Computer Science, University of Nairobi",
      "MSc in Software Engineering, University of Manchester",
      "BSc in Computer Science, JKUAT"
    ],
    bio: "Dr. Andrew Omala is the Chairman of the Computer Science and Technology Department. His research interests include software engineering methodologies, machine learning, and data analytics. He has published several papers in reputable journals and conferences.",
    publications: [
      "Omala, A., et al. (2023). \"Machine Learning Applications in Kenyan Agriculture\", Journal of AI in Agriculture.",
      "Omala, A., et al. (2022). \"Software Development Methodologies for Resource-Constrained Environments\", IEEE Software."
    ],
    profile: "/staff/andrew-omala"
  },
  {
    id: 2,
    name: "Mr. Obwaya Mogire",
    title: "Lecturer",
    image: "/images/Mr._Obwaya_Mogire.png",
    specialization: "Information Technology and Systems",
    email: "obwaya@seku.ac.ke",
    phone: "+254 723 456 789",
    education: [
      "MSc in Information Technology, University of Nairobi",
      "BSc in Computer Science, Kenyatta University"
    ],
    bio: "Mr. Obwaya Mogire is a dedicated lecturer with expertise in Information Technology and Systems. His teaching focuses on preparing students for real-world IT challenges and innovative solutions.",
    publications: [
      "Mogire, O., et al. (2021). \"Digital Transformation in Kenyan Educational Institutions\", Journal of Educational Technology.",
      "Mogire, O., et al. (2020). \"Cloud Computing Adoption in SMEs\", International Journal of IT Management."
    ],
    profile: "/staff/obwaya-mogire"
  },
  {
    id: 3,
    name: "Prof. Josphert N. Kimatu",
    title: "Professor",
    image: "/images/staff-2.png",
    specialization: "Computer Networks, Cybersecurity",
    email: "jkimatu@seku.ac.ke",
    phone: "+254 734 567 890",
    education: [
      "PhD in Computer Security, MIT",
      "MSc in Computer Networks, Stanford University",
      "BSc in Computer Engineering, University of Nairobi"
    ],
    bio: "Professor Kimatu is a leading expert in cybersecurity and computer networks. With over 15 years of experience, he has contributed significantly to the field through research, teaching, and industry collaboration.",
    publications: [
      "Kimatu, J., et al. (2023). \"Network Security Frameworks for Critical Infrastructure\", IEEE Security & Privacy.",
      "Kimatu, J., et al. (2022). \"Blockchain Applications in Securing IoT Networks\", Journal of Network Security."
    ],
    profile: "/staff/josphert-kimatu"
  },
  {
    id: 4,
    name: "Dr. David M. Malonza",
    title: "Senior Lecturer",
    image: "/images/staff-3.jpg",
    specialization: "Artificial Intelligence, Machine Learning",
    email: "dmalonza@seku.ac.ke",
    phone: "+254 745 678 901",
    education: [
      "PhD in AI and Machine Learning, University of California",
      "MSc in Computer Science, University of Cape Town",
      "BSc in Mathematics and Computing, JKUAT"
    ],
    bio: "Dr. Malonza specializes in AI and machine learning with a focus on natural language processing and computer vision. His research aims to develop AI solutions tailored to African contexts and challenges.",
    publications: [
      "Malonza, D., et al. (2023). \"Natural Language Processing for African Languages\", ACL Conference.",
      "Malonza, D., et al. (2022). \"Computer Vision Applications in Wildlife Conservation\", CVPR."
    ],
    profile: "/staff/david-malonza"
  },
  {
    id: 5,
    name: "Ms. Jane Mbiri",
    title: "Lecturer",
    image: "/images/staff-4.jpg",
    specialization: "Database Systems, Big Data",
    email: "jmbiri@seku.ac.ke",
    phone: "+254 756 789 012",
    education: [
      "MSc in Data Science, University of Manchester",
      "BSc in Computer Science, University of Nairobi"
    ],
    bio: "Ms. Mbiri is a specialist in database systems and big data analytics. Her teaching and research focus on efficient data management systems and extracting insights from large datasets.",
    publications: [
      "Mbiri, J., et al. (2022). \"Big Data Analytics for Healthcare in Resource-Limited Settings\", Journal of Health Informatics.",
      "Mbiri, J., et al. (2021). \"NoSQL Database Performance in IoT Applications\", International Database Conference."
    ],
    profile: "/staff/jane-mbiri"
  },
];

// Categories
const categories: Category[] = [
  { id: "all", name: "All Staff" },
  { id: "professors", name: "Professors" },
  { id: "lecturers", name: "Lecturers" },
  { id: "assistants", name: "Assistant Lecturers" },
  { id: "technical", name: "Technical Staff" }
];

const StaffPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Handle URL parameters for direct staff access
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const staffId = urlParams.get('staff');
      
      if (staffId) {
        const staff = staffMembers.find(s => s.id === parseInt(staffId));
        if (staff) {
          setSelectedStaff(staff);
          setIsModalOpen(true);
        }
      }
    }
  }, []);

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

  const openStaffModal = (staff: StaffMember) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
    // Update URL without refreshing page
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set('staff', staff.id.toString());
      window.history.pushState({}, '', url.toString());
    }
  };

  const closeStaffModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
    // Remove staff parameter from URL
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete('staff');
      window.history.pushState({}, '', url.toString());
    }
  };

  return (
    <>
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
              <button 
                key={staff.id}
                onClick={() => openStaffModal(staff)}
                className="block w-full text-left hover:bg-gray-50 transition-colors duration-200"
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
              </button>
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

      {/* Staff Detail Modal */}
      {isModalOpen && selectedStaff && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeStaffModal}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeStaffModal}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="sm:flex sm:items-start">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="md:col-span-1 flex flex-col items-center">
                      <div className="relative h-48 w-48 rounded-full overflow-hidden mb-4 border-4 border-green-100">
                        <Image
                          src={selectedStaff.image}
                          alt={selectedStaff.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900">{selectedStaff.name}</h3>
                      <p className="text-lg text-green-700 font-medium mb-2">{selectedStaff.title}</p>
                      <p className="text-gray-600 mb-4">{selectedStaff.specialization}</p>
                      
                      <div className="mt-2 space-y-2 w-full px-4">
                        <a 
                          href={`mailto:${selectedStaff.email}`}
                          className="flex items-center justify-center py-2 px-4 w-full bg-green-50 hover:bg-green-100 text-green-700 rounded-md transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          {selectedStaff.email}
                        </a>
                        
                        <a 
                          href={`tel:${selectedStaff.phone}`}
                          className="flex items-center justify-center py-2 px-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md transition-colors duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          {selectedStaff.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="border-b pb-4 mb-4">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Biography</h4>
                        <p className="text-gray-600">{selectedStaff.bio}</p>
                      </div>
                      
                      <div className="border-b pb-4 mb-4">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Education</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {selectedStaff.education.map((edu, index) => (
                            <li key={index}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Selected Publications</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {selectedStaff.publications.map((pub, index) => (
                            <li key={index}>{pub}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Link 
                  href={selectedStaff.profile}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  View Full Profile
                </Link>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeStaffModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffPortfolio;