import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import MissionSection from "./components/MissionSection";
import MatchesSection from "./components/MatchesSection";
import MerchSection from "./components/MerchSection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <MissionSection />
      <MatchesSection />
      <MerchSection />
      <JoinSection />
      <Footer />
    </>
  );
}
