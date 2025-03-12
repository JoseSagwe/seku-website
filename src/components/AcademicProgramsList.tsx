// components/AcademicProgramsList.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

// Program data
const programs = [
  {
    id: "certificate",
    title: "Certificate Programmes",
    items: [
      { id: 1, name: "Certificate in Information Technology", duration: "Minimum 2 Semesters", entry: "KCSE Mean Grade C- (Minus)" }
    ],
    fees: [
      { id: 1, name: "Government Sponsored Students Programme (GSSP)", link: "/download/certificate-gssp-fees" },
      { id: 2, name: "Privately Sponsored Students Programme (PSSP)", link: "/download/certificate-pssp-fees" }
    ]
  },
  {
    id: "diploma",
    title: "Diploma Programmes",
    items: [
      { id: 1, name: "Diploma in Information Technology", duration: "Minimum 4 Semesters", entry: "KCSE Mean Grade C- (Minus)" },
      { id: 2, name: "Diploma in Computer Science", duration: "Minimum 4 Semesters", entry: "KCSE Mean Grade C- (Minus)" }
    ],
    fees: [
      { id: 1, name: "Government Sponsored Students Programme (GSSP)", link: "/download/diploma-gssp-fees" },
      { id: 2, name: "Privately Sponsored Students Programme (PSSP)", link: "/download/diploma-pssp-fees" }
    ]
  },
  {
    id: "degree",
    title: "Degree Programmes",
    items: [
      { id: 1, name: "Bachelor of Science in Computer Science", duration: "Minimum 8 Semesters", entry: "KCSE Mean Grade of C+ and above, with at least a C+ in Mathematics and Physics" },
      { id: 2, name: "Bachelor of Information Technology", duration: "Minimum 8 Semesters", entry: "KCSE Mean Grade of C+ and above, with at least a C in Mathematics" },
      { id: 3, name: "Bachelor of Science in Cybersecurity and Computer Networks", duration: "Minimum 8 Semesters", entry: "KCSE Mean Grade of C+ and above, with at least a C+ in Mathematics and Physics" }
    ],
    fees: [
      { id: 1, name: "Government Sponsored Students Programme (GSSP)", link: "/download/degree-gssp-fees" },
      { id: 2, name: "Privately Sponsored Students Programme (PSSP)", link: "/download/degree-pssp-fees" }
    ]
  },
  {
    id: "masters",
    title: "Masters Programmes",
    items: [
      { id: 1, name: "Master of Science in Information Systems", duration: "Minimum 4 Semesters", entry: "Bachelor's degree in a related field with at least a Second Class Honours (Upper Division)" }
    ],
    fees: [
      { id: 1, name: "Tuition of Ksh. 120,000.00 and Statutory charges of Ksh. 32,500.00", link: "#" }
    ]
  }
];

const AcademicProgramsList = () => {
  const [activeTab, setActiveTab] = useState("certificate");

  const activeProgram = programs.find(p => p.id === activeTab);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <h2 className="text-2xl font-bold text-white">Academic Programmes</h2>
        <p className="text-blue-100 mt-1">Explore our diverse range of programs</p>
      </div>
      
      <div className="bg-gray-100 px-4 overflow-x-auto">
        <div className="flex space-x-1 py-2">
          {programs.map(program => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === program.id
                  ? "bg-white text-blue-700 shadow-sm"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {program.title}
            </button>
          ))}
        </div>
      </div>
      
      {activeProgram && (
        <div className="p-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{activeProgram.title}</h3>
              <ul className="space-y-4">
                {activeProgram.items.map(item => (
                  <li key={item.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-blue-700">{item.name}</h4>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Duration:</span>
                          <p className="text-sm text-gray-600">{item.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Entry Requirement:</span>
                          <p className="text-sm text-gray-600">{item.entry}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fee Structure:</h3>
              <ul className="space-y-3">
                {activeProgram.fees.map(fee => (
                  <li key={fee.id} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{fee.name}</span>
                    {fee.link !== "#" && (
                      <Link 
                        href={fee.link} 
                        className="ml-2 text-blue-600 hover:text-blue-800 inline-flex items-center"
                      >
                        <span className="text-sm">Download</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/apply" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply for this Programme
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicProgramsList;