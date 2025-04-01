// components/about/UnitsSection.tsx
import Link from "next/link";

// Units data
const units = [
  { id: 1, name: "Alcohol, Drug and Substance Abuse Prevention", link: "/units/alcohol-drug-prevention" },
  { id: 2, name: "Career Services", link: "/units/career-services" },
  { id: 3, name: "Disability Mainstreaming", link: "/units/disability-mainstreaming" },
  { id: 4, name: "Gender Mainstreaming", link: "/units/gender-mainstreaming" },
  { id: 5, name: "HIV and AIDS Control", link: "/units/hiv-aids-control" },
  { id: 6, name: "Resolution of Public Complaints", link: "/units/public-complaints" },
  { id: 7, name: "Health Unit", link: "/units/health" },
  { id: 8, name: "Corruption Prevention Unit", link: "/units/corruption-prevention" },
  { id: 9, name: "Cohesion and National Values Mainstreaming", link: "/units/cohesion-values" }
];

const UnitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">University Units</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            South Eastern Kenya University has the following Units that support students and staff welfare.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="col-span-1 md:col-span-2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <img 
                  src="/images/university-units.jpg" 
                  alt="University Units" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {units.map((unit) => (
              <Link 
                href={unit.link} 
                key={unit.id}
                className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
              >
                <div className="mr-3 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-gray-700 hover:text-green-700 transition-colors duration-200">{unit.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/units" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors duration-300">
            More About SEKU Units
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;