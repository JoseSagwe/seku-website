// components/Schools.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

// School data
const schools = [
  {
    id: 1,
    name: "School of Business and Economics",
    image: "/images/business-school.png",
    link: "/schools/business"
  },
  {
    id: 2,
    name: "School of Science and Computing",
    image: "/images/science-computing.jpg",
    link: "/schools/science-computing"
  },
  {
    id: 3,
    name: "School of Health Sciences",
    image: "/images/health-sciences.jpg",
    link: "/schools/health"
  },
  {
    id: 4,
    name: "School of Agriculture, Environment, Water and Natural Resources",
    image: "/images/agriculture.jpg",
    link: "/schools/agriculture"
  },
  {
    id: 5,
    name: "School of Education",
    image: "/images/education.jpg",
    link: "/schools/education"
  },
  {
    id: 6,
    name: "School of Engineering and Technology",
    image: "/images/engineering.jpg",
    link: "/schools/engineering"
  },
  {
    id: 7,
    name: "School of Law",
    image: "/images/law.png",
    link: "/schools/law"
  },
  {
    id: 8,
    name: "School of Humanities and Social Sciences",
    image: "/images/humanities.jpg",
    link: "/schools/humanities"
  }
];

const Schools = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Schools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            South Eastern Kenya University is unique among its peer public universities in Kenya having eight schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {schools.map((school) => (
            <Link href={school.link} key={school.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center border-t">
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">{school.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;