// components/about/AboutHero.tsx
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="relative bg-green-800 text-white">
      {/* Optional Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero-image.jpg"
          alt="SEKU Campus"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            South Eastern Kenya University
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl leading-relaxed">
            South Eastern Kenya University (SEKU) is a premier institution committed to 
            excellence in teaching, research, and community outreach. We strive to provide 
            quality education that transforms lives and contributes to sustainable development.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default AboutHero;