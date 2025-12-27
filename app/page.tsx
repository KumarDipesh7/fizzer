import Hero from "@/app/components/Hero";
import ProductsSection from "@/app/components/ProductsSection";
import Intro from "@/app/components/Intro";
import NewVideoSection from "@/app/components/NewVideoSection";
import MerchSection from "@/app/components/MerchSection";
import JoinSection from "@/app/components/JoinSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <Intro />
      <NewVideoSection />
      <MerchSection />
      <JoinSection />
      <Footer />
    </>
  );
}
