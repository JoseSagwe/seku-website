"use client";
import Image from "next/image";
const DepartmentChair = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-green-700 rounded-full opacity-10 transform -rotate-6"></div>
                <div className="absolute inset-0 bg-blue-700 rounded-full opacity-10 transform rotate-6"></div>
                <div className="relative h-full w-full rounded-full overflow-hidden border-8 border-white shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/dr-andrew-omala.jpg"
                    alt="Dr. Andrew Omala"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Chairman of Department
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Andrew Omala</h2>
              <div className="h-1 w-20 bg-green-700 mb-6"></div>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                Welcome to the Department of Computer Science and Technology. Our department is dedicated to academic excellence, cutting-edge research, and innovative technological advancements that shape the future.
                In a rapidly evolving digital world, Computer Science and Technology play a critical role in driving innovation across diverse sectors of our economy. Our dynamic curriculum is designed to equip a learner with skills and dispositions in computing, programming, artificial intelligence, cybersecurity, and other emerging technologies.
                Our faculty comprises highly skilled and committed personnel with vast experience in both research and industry. 
                </p>
                <p>
                Additionally, our learning environment is supported with access to state-of-the-art laboratories, research centres, and industry partnerships that enhance practical learning and career opportunities.
                Whether you aspire to be a Data Scientist, AI expert, Software Developer and or cybersecurity expert, our department provides the required competencies to help you achieve your goals.
                We invite you to explore our programs and be part of an exciting journey in tech world.
                </p>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <a href="mailto:aomala@seku.ac.ke" className="flex items-center text-green-700 hover:text-green-800 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
                <a href="tel:+254700000000" className="flex items-center text-green-700 hover:text-green-800 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone
                </a>
                <a href="#" className="flex items-center text-green-700 hover:text-green-800 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentChair;