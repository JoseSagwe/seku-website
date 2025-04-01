// components/about/MissionVision.tsx
const MissionVision = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-xl shadow-md p-8 transform transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <div className="w-16 h-1 bg-green-700 mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education through research, teaching, extension, innovation and entrepreneurship with emphasis on food and nutrition security, health, engineering and technology, environment and natural resources management for sustainable development.
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white rounded-xl shadow-md p-8 transform transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <div className="w-16 h-1 bg-blue-700 mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  A globally competitive Centre of Excellence in Research, Teaching and Learning, Community Service, Innovation and Commercialization.
                </p>
              </div>
            </div>
            
            {/* Quality Policy */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Policy Statement</h3>
              <div className="w-16 h-1 bg-purple-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                South Eastern Kenya University is committed to providing quality education that meets the needs of all interested parties through teaching, research extension, consultancy and entrepreneurship.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Further the university is committed to quality services and proving a condusive learning environment founded on academic freedom, teamwork, pursuit of excellence, professionalism and integrity to satisfy all interested parties and comply with legal requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To realize this commitment, the university shall ensure effective communication and continous improvement of the effectiveness of the Quality Management Systems based on the ISO 9001:2015 Standards. The university shall review this policy and established quality objectives from time to time for continued relevance and suitability.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;