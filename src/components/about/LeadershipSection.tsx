// components/about/LeadershipSection.tsx
import Image from "next/image";
import Link from "next/link";

const leaders = [
  {
    id: 1,
    name: "Prof. Eng. Douglas Shitanda",
    position: "Vice Chancellor",
    image: "/images/leaders/vice-chancellor.jpg",
    profile: "/leadership/vice-chancellor"
  },
  {
    id: 2,
    name: "Prof. Francis Wachira, PhD",
    position: "DVC, Corporate Services",
    image: "/images/leaders/dvc-corporate.jpg",
    profile: "/leadership/dvc-corporate"
  },
  {
    id: 3,
    name: "Prof. Harrison Maithya",
    position: "DVC, Academics, Research and Innovation",
    image: "/images/leaders/dvc-academics.jpg",
    profile: "/leadership/dvc-academics"
  },
  {
    id: 4,
    name: "Dr. John F. Koga, PhD",
    position: "Academics Registrar",
    image: "/images/leaders/registrar.jpg",
    profile: "/leadership/registrar"
  },
  {
    id: 5,
    name: "Dr. David Butali Namasaka, PhD",
    position: "Director, Facilities Management and Administration",
    image: "/images/leaders/director-facilities.jpg",
    profile: "/leadership/director-facilities"
  },
  {
    id: 6,
    name: "CPA Ferguson Muthui",
    position: "Director, Finance and Accounts",
    image: "/images/leaders/director-finance.jpg",
    profile: "/leadership/director-finance"
  }
];

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The University Management Board</h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated leadership team committed to excellence in higher education and transforming lives through quality education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader) => (
            <div key={leader.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-60 w-full bg-gray-200">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-green-700 mb-4">{leader.position}</p>
                <Link href={leader.profile} className="inline-flex items-center justify-center px-4 py-2 border border-green-700 text-sm font-medium rounded-md text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/leadership" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors duration-300">
            More About Leadership
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;