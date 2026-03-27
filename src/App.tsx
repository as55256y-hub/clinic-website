import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookAppointment from "@/components/BookAppointment";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const App = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <BookAppointment />
    <ContactSection />
    <Footer />

    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/919209807893"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.156-1.97A15.923 15.923 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.314 22.598c-.39 1.1-1.932 2.014-3.17 2.282-.848.18-1.956.324-5.684-1.222-4.77-1.978-7.834-6.832-8.072-7.148-.228-.316-1.918-2.556-1.918-4.874 0-2.318 1.214-3.458 1.646-3.932.39-.428 1.028-.624 1.636-.624.198 0 .376.01.536.018.432.018.648.044.934.724.356.846 1.222 2.984 1.33 3.202.108.218.218.516.068.832-.14.316-.264.512-.486.786-.218.27-.46.604-.656.81-.218.228-.446.476-.192.934.256.458 1.136 1.876 2.44 3.038 1.676 1.494 3.088 1.958 3.526 2.176.438.218.694.182.95-.108.256-.294 1.1-1.28 1.394-1.72.29-.438.582-.366.978-.218.398.148 2.522 1.19 2.956 1.408.434.218.724.324.832.504.108.178.108 1.04-.282 2.14z" />
      </svg>
    </a>
    <Analytics />
  </div>
);

export default App;
