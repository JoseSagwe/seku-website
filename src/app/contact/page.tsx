import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactBanner from "@/components/sections/contact/contact-banner";
import ContactSection from "@/components/sections/contact/contact-section";

export default function Contact() {
    return (
        <>
            <Navbar />
            <ContactBanner />
            <ContactSection />
            <Footer />
        </>
    )
}

