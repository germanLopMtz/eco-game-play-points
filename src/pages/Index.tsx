import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ModelSection from "@/components/sections/ModelSection";
import MyProgress from "@/components/sections/Progress";
import MapSection from "@/components/sections/MapSection";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ModelSection />
      <MyProgress />
      <MapSection />
      <Partners />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
