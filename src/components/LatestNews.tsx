// components/LatestNews.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

// News data
const newsItems = [
  {
    id: 1,
    title: "SEKU Researchers Develop New Agricultural Technology",
    date: "March 10, 2025",
    excerpt: "Researchers from the School of Agriculture have developed a new technology that increases crop yield by 30%.",
    image: "/images/news-1.jpeg",
    link: "/news/agricultural-technology"
  },
  {
    id: 2,
    title: "Computer Science Department Hosts Annual Hackathon",
    date: "March 5, 2025",
    excerpt: "Over 200 students participated in the annual hackathon organized by the Department of Computer Science.",
    image: "/images/news-2.jpg",
    link: "/news/annual-hackathon"
  },
  {
    id: 3,
    title: "SEKU Signs MOU with Industry Partners for Student Internships",
    date: "February 28, 2025",
    excerpt: "The university has signed agreements with leading companies to provide internship opportunities for students.",
    image: "/images/news-3.jpg",
    link: "/news/internship-mou"
  }
];

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest News & Events</h2>
          <Link href="/news" className="text-green-700 hover:text-green-800 font-medium flex items-center">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link href={item.link} className="hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link href={item.link} className="text-green-700 hover:text-green-800 font-medium flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;