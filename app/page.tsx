import Hero from "@/app/components/Hero";
import ProductsSection from "@/app/components/ProductsSection";
import VideoGuide from "./components/VideoGuide";
import Intro from "@/app/components/Intro";
import About from "./components/About";
import NewVideoSection from "@/app/components/NewVideoSection";
import Testimonials from "./components/Testimonials";
import MerchSection from "@/app/components/MerchSection";
import FAQSection from "./components/FAQSection";
import JoinSection from "@/app/components/JoinSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <VideoGuide />
      <ProductsSection />
      <About />
      <NewVideoSection />
      <Testimonials />
      {/* <MerchSection /> */}
      <FAQSection />
      <JoinSection />
      <Footer />
    </>
  );
}
