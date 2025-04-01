// components/about/CampusesSection.tsx
import Image from "next/image";
import Link from "next/link";

// Campuses data
const campuses = [
  {
    id: 1,
    name: "Kitui Town Campus",
    location: "Located at BLI. Manyenyoni in Kitui Town.",
    image: "/images/campuses/kitui-town.jpg",
    link: "/campuses/kitui-town"
  },
  {
    id: 2,
    name: "Wote Campus",
    location: "Located 2.8 km from Wote town, next to Government of Makueni County offices.",
    image: "/images/campuses/wote.jpg",
    link: "/campuses/wote"
  },
  {
    id: 3,
    name: "Mtito Andei Center",
    location: "Located along Nairobi-Mombasa highway in Makueni County.",
    image: "/images/campuses/mtito-andei.jpg",
    link: "/campuses/mtito-andei"
  },
  {
    id: 4,
    name: "Migwani Center",
    location: "Located in Nzatani village, Migwani location, Migwani sub county, Kitui county.",
    image: "/images/campuses/migwani.jpg",
    link: "/campuses/migwani"
  }
];

const CampusesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Campuses</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            South Eastern Kenya University has the following campuses strategically located to serve students across the region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {campuses.map((campus) => (
            <Link href={campus.link} key={campus.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={campus.image}
                    alt={campus.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{campus.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{campus.location}</p>
                  <div className="flex items-center text-green-700 group-hover:text-green-600 transition-colors duration-300">
                    <span className="font-medium">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/campuses" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors duration-300">
            More About Campuses and Centers
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusesSection;