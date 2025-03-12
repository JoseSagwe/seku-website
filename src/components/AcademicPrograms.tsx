// components/AcademicPrograms.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

// Program categories data
const programCategories = [
  {
    id: 1,
    title: "Undergraduate Programmes",
    description: "Market driven courses with rich learning experiences",
    image: "/images/undergraduate.jpg",
    link: "/programmes/undergraduate"
  },
  {
    id: 2,
    title: "Graduate Programmes",
    description: "Tailor made programmes that are market driven",
    image: "/images/graduate.png",
    link: "/programmes/graduate"
  },
  {
    id: 3,
    title: "Admissions",
    description: "How to apply",
    image: "/images/admissions.jpg",
    link: "/admissions"
  }
];

const AcademicPrograms = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Academic Programmes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programCategories.map((category) => (
            <Link href={category.link} key={category.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="relative h-56 w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;