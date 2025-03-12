// app/schools/science-computing/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchoolOfScienceAndComputing() {
  // Departments data
  const departments = [
    {
      id: 1,
      name: "Department of Computer Science and Technology",
      image: "/images/computer-science.jpg",
      link: "/departments/computer-science"
    },
    {
      id: 2,
      name: "Department of Life Sciences",
      image: "/images/life-sciences.jpg",
      link: "/departments/life-sciences"
    },
    {
      id: 3,
      name: "Department of Physical Sciences",
      image: "/images/physical-sciences.jpg",
      link: "/departments/physical-sciences"
    },
    {
      id: 4,
      name: "Department of Mathematics and Actuarial Science",
      image: "/images/mathematics.jpg",
      link: "/departments/mathematics"
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* School Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            School of Science and Computing
          </h1>
          <div className="flex items-center text-green-100">
            <Link href="/" className="hover:text-white">Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/schools" className="hover:text-white">Schools</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>School of Science and Computing</span>
          </div>
        </div>
      </div>
      
      {/* Dean's Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1 bg-gradient-to-br from-green-700 to-green-600 text-white p-8 flex flex-col justify-center items-center text-center">
                <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <Image
                    src="/images/dean-science.jpg"
                    alt="Dean of School of Science and Computing"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Prof. Dean </h3>
                <p className="text-green-100">Dean, School of Science and Computing</p>
                <div className="mt-4 flex space-x-3">
                  <a href="mailto:dean-science@seku.ac.ke" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a href="tel:+254700000000" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Message from the Dean</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    The School of Science and Computing is strategically placed to offer support programs towards 
                    achievement of the South Eastern Kenya University (SEKU) mandate in teaching, Research and 
                    Innovation in Dryland Agriculture, Water Resources, Mining and Environmental Conservation.
                  </p>
                  <p>
                    To achieve this goal, the school continues to offer, review and develop relevant academic 
                    programs in order to meet her teaching and training requirements in diverse fields of the 
                    school's training areas. To run her activities are qualified members of staff who offer 
                    intensive student training and scientific exposure to contribute to achieving Kenya's Vision 2030.
                  </p>
                  <p>
                    Key physical facilities within the school include four well-equipped ultra-modern laboratories 
                    for training and research. Among these are well-equipped Molecular Biology, biology, and computer 
                    laboratories. The school also houses a state-of-the-art Atomic Absorption Spectrophotometer (AAS) 
                    for analytical research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our academic departments offering specialized programs in various fields of science and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((department) => (
              <Link 
                href={department.link} 
                key={department.id}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-56">
                    <Image
                      src={department.image}
                      alt={department.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                    <div className="absolute bottom-0 w-full p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{department.name}</h3>
                      <div className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm">Explore Department</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Research Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Research Highlights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge research projects currently being undertaken by our faculty and students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Biotechnology and Crop Improvement</h3>
              <p className="text-gray-600 mb-4">
                Research on innovative biotechnological approaches to enhance crop yield, pest resistance, and nutritional value of important food crops in Kenya.
              </p>
              <Link 
                href="/research/biotechnology"
                className="text-green-700 hover:text-green-800 font-medium inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI and Machine Learning Applications</h3>
              <p className="text-gray-600 mb-4">
                Development of artificial intelligence and machine learning solutions to address challenges in healthcare, agriculture, and education in Kenya.
              </p>
              <Link 
                href="/research/ai-machine-learning"
                className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Climate Change Adaptation</h3>
              <p className="text-gray-600 mb-4">
                Research on developing sustainable strategies to mitigate the effects of climate change on agricultural systems in arid and semi-arid regions.
              </p>
              <Link 
                href="/research/climate-change"
                className="text-purple-700 hover:text-purple-800 font-medium inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey with Us?</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Join our vibrant academic community and discover the endless possibilities in science and technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/admissions" 
              className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}