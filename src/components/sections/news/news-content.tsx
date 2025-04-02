// components/sections/news/news-content.tsx
'use client'
import { useState, useEffect } from "react";
import { newsContent } from "../../../../constants/news";
import Image from "next/image";

const NewsContent = () => {
    const [selectedNewsIndex, setSelectedNewsIndex] = useState(0);
    const [imagesExist, setImagesExist] = useState<{ [newsIndex: number]: { [imgIndex: number]: boolean } }>({});

    useEffect(() => {
        const checkImageExistence = async () => {
            const imageStatus: { [newsIndex: number]: { [imgIndex: number]: boolean } } = {};

            for (let newsIndex = 0; newsIndex < newsContent.length; newsIndex++) {
                const news = newsContent[newsIndex];
                imageStatus[newsIndex] = {};

                for (let imgIndex = 0; imgIndex < news.images.length; imgIndex++) {
                    const img = news.images[imgIndex];
                    try {
                        const response = await fetch(img, { method: 'HEAD' });
                        imageStatus[newsIndex][imgIndex] = response.ok;
                    } catch (error) {
                        // Using underscore prefix to indicate we're ignoring this variable
                        imageStatus[newsIndex][imgIndex] = false;
                    }
                }
            }

            setImagesExist(imageStatus);
        };

        checkImageExistence();
    }, []);

    const handleSelectNews = (index: number) => {
        setSelectedNewsIndex(index);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-12 text-gray-800">Latest News</h1>
            <div className="flex flex-col-reverse md:flex-row gap-8">
                {/* Main content area */}
                <div className="flex-grow order-2 md:order-1">
                    {newsContent[selectedNewsIndex] && (
                        <section className="w-full">
                            <div>
                                <h2 className="text-3xl font-semibold mb-3 text-gray-800">{newsContent[selectedNewsIndex].title}</h2>
                                <p className="text-gray-500 mb-8 font-medium">{newsContent[selectedNewsIndex].date}</p>

                                {/* Full-width images */}
                                <div className="space-y-8 mb-8">
                                    {newsContent[selectedNewsIndex].images.map((img, i) => (
                                        imagesExist[selectedNewsIndex]?.[i] && (
                                            <div key={i} className="w-full">
                                                <div className="relative w-full h-[400px]">
                                                    <Image
                                                        src={img}
                                                        alt={newsContent[selectedNewsIndex].title}
                                                        fill
                                                        sizes="100vw"
                                                        style={{ objectFit: 'cover' }}
                                                        className="rounded-lg shadow-md"
                                                        onError={() => {
                                                            setImagesExist(prev => ({
                                                                ...prev,
                                                                [selectedNewsIndex]: {
                                                                    ...prev[selectedNewsIndex],
                                                                    [i]: false
                                                                }
                                                            }));
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>

                                {/* Improved text styling */}
                                <div className="text-gray-700 text-lg space-y-6 mb-8 leading-relaxed">
                                    {newsContent[selectedNewsIndex].description.map((desc, i) => (
                                        <p key={i} className="first-letter:text-xl first-letter:font-medium">{desc}</p>
                                    ))}
                                </div>

                                {/* Contact information with improved styling */}
                                {(newsContent[selectedNewsIndex].contact.description || newsContent[selectedNewsIndex].contact.email) && (
                                    <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
                                        <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Information</h3>
                                        {newsContent[selectedNewsIndex].contact.description && (
                                            <p className="text-gray-700 font-medium mb-2">
                                                {newsContent[selectedNewsIndex].contact.description}
                                            </p>
                                        )}
                                        {newsContent[selectedNewsIndex].contact.email && (
                                            <p className="text-blue-600 hover:text-blue-800 transition-colors">
                                                <span className="font-medium">Email:</span> {newsContent[selectedNewsIndex].contact.email}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>

                <div className="w-full md:w-64 flex-shrink-0 md:border-l md:pl-6 order-1 md:order-2 mb-8 md:mb-0">
                    <h3 className="font-semibold text-xl mb-4 text-gray-800">News List</h3>
                    <ul className="space-y-3">
                        {newsContent.map((news, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer p-3 rounded-md transition-all duration-200 ${selectedNewsIndex === index
                                        ? "bg-green-50 border-l-4 border-green-500 shadow-sm"
                                        : "hover:bg-gray-50 border-l-4 border-transparent"
                                    }`}
                                onClick={() => handleSelectNews(index)}
                            >
                                <p className="font-medium truncate text-gray-800">{news.title}</p>
                                <p className="text-sm text-gray-500 mt-1">{news.date}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NewsContent;