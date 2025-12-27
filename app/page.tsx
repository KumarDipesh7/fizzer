import Hero from "@/app/components/Hero";
import ProductsSection from "@/app/components/ProductsSection";
import MissionSection from "@/app/components/MissionSection";
import MatchesSection from "@/app/components/MatchesSection";
import MerchSection from "@/app/components/MerchSection";
import JoinSection from "@/app/components/JoinSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <MissionSection />
      <MatchesSection />
      <MerchSection />
      <JoinSection />
      <Footer />
    </>
  );
}
