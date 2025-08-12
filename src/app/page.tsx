import AboutUs from "@/components/LandingPage/AboutUs";
import Contact from "@/components/LandingPage/Contact";
import Footer from "@/components/LandingPage/Footer";
import Gallery from "@/components/LandingPage/Gallery";
import Hero from "@/components/LandingPage/Hero";
import Impact from "@/components/LandingPage/Impact";
import Journey from "@/components/LandingPage/Journey";
import MissionVision from "@/components/LandingPage/MissionVision";
import Services from "@/components/LandingPage/Services";
import Testimonials from "@/components/LandingPage/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <MissionVision />
      <Services />
      <Impact />
      {/* <Testimonials />
      <Journey /> */}
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
