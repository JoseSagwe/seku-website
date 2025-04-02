// src/components/sections/contact/contact-banner.tsx
import Image from "next/image";

const ContactBanner = () => {
    return (
        <div className="relative w-full h-80">
            <Image
                src="/images/contact/contact.jpg"
                alt="Contact Banner"
                className="object-cover"
                fill
            />

            <div
                className="absolute inset-0 bg-black opacity-50"
                aria-hidden="true"
            ></div>

            <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-6xl font-bold">Contact Us</h2>
                <p className="text-xl mt-2">
                    <span className="text-gray-300">Contact</span> {/* */} <span className="text-white">talk with us</span>
                </p>
            </div>
        </div>
    )
}

export default ContactBanner