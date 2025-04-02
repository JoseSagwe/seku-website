// src/components/sections/news/newsBanner.tsx
import Image from "next/image";

const NewsBanner = () => {
    return (
        <div className="relative w-full h-80">
            <Image
                src="/images/news/news-banner.jpg"
                alt="News Banner"
                className="object-cover"
                fill
            />

            <div
                className="absolute inset-0 bg-black opacity-50"
                aria-hidden="true"
            ></div>

            <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-6xl font-bold">Latest News</h2>
                <p className="text-xl mt-2">
                    <span className="text-gray-300">News</span> {/* */} <span className="text-white">stay updated</span>
                </p>
            </div>
        </div>
    )
}

export default NewsBanner