// components/about/HistorySection.tsx
import Image from "next/image";

const HistorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Brief History</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <Image
                  src="/hero-image.jpg"
                  alt="SEKU History"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                The University is a fully fledged University and is the successor to the South Eastern University College (SEUCO) which was a Constituent College of the University of Nairobi. The University has undergone tremendous growth since inception in 2008. The current student population stands at around 8,000 students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We pride ourselves in having highly qualified teaching staff consisting of Professors and lecturers most of whom have a Ph. D and vast experience in both teaching and research.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This ensures that our students are well equipped with knowledge in their areas of study that makes them stand out from the rest. Our focus is producing all round graduates able to contribute to the development of this country.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The University is a premier institution of higher learning in the region offering various certificate, diploma and degree programmes. SEKU envisions becoming a World Class University with quality teaching, creative learning, innovative research and strong community outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;