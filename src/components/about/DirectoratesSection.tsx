// components/about/DirectoratesSection.tsx
import Image from "next/image";
import Link from "next/link";

// Complete Directorates data based on the images
const directorates = [
  {
    id: 1,
    name: "Directorate of Finance and Accounts",
    image: "/images/directorates/finance.jpg",
    link: "/directorates/finance"
  },
  {
    id: 2,
    name: "Directorate of Research Innovation and Commercialization",
    image: "/images/directorates/research.jpg",
    link: "/directorates/research"
  },
  {
    id: 3,
    name: "Directorate of Strategy Quality and Performance Management",
    image: "/images/directorates/quality.jpg",
    link: "/directorates/quality"
  },
  {
    id: 4,
    name: "Directorate of Facilities Management and Administration",
    image: "/images/directorates/facilities.jpg",
    link: "/directorates/facilities"
  },
  {
    id: 5,
    name: "Directorate of Open Distance and E-Learning (ODEL)",
    image: "/images/directorates/odel.jpg",
    link: "/directorates/odel"
  },
  {
    id: 6,
    name: "Directorate of Human Resource Management",
    image: "/images/directorates/hr.jpg",
    link: "/directorates/hr"
  },
  {
    id: 7,
    name: "Directorate of Internal Audit and Risk Assurance",
    image: "/images/directorates/audit.jpg",
    link: "/directorates/audit"
  },
  {
    id: 8,
    name: "Directorate of Academic Quality Assurance",
    image: "/images/directorates/academic-quality.jpg",
    link: "/directorates/academic-quality"
  },
  {
    id: 9,
    name: "Directorate of Partnership and Resource Mobilization",
    image: "/images/directorates/partnership.jpg",
    link: "/directorates/partnership"
  },
  {
    id: 10,
    name: "Directorate of Procurement and Supply Chain Management",
    image: "/images/directorates/procurement.jpg",
    link: "/directorates/procurement"
  },
  {
    id: 11,
    name: "Directorate of Technical and Vocational Education and Training (TVET)",
    image: "/images/directorates/tvet.jpg",
    link: "/directorates/tvet"
  },
  {
    id: 12,
    name: "Directorate of Information Communication and Technology",
    image: "/images/directorates/ict.jpg",
    link: "/directorates/ict"
  },
  {
    id: 13,
    name: "Board of Post Graduate Studies",
    image: "/images/directorates/postgraduate.jpg",
    link: "/directorates/postgraduate"
  }
];

const DirectoratesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Directorates</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            South Eastern Kenya University has the following directorates that support the university's operations and academic excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {directorates.map((directorate) => (
            <Link href={directorate.link} key={directorate.id} className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-40 w-full">
                  <Image
                    src={directorate.image}
                    alt={directorate.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-300">{directorate.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/directorates" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors duration-300">
            More About Directorates
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DirectoratesSection;