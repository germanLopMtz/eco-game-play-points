import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ModelSection from "@/components/sections/ModelSection";
import MapSection from "@/components/sections/MapSection";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ModelSection />
      <MapSection />
      <Partners />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Landing; 