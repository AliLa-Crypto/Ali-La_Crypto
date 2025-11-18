import HeroSection from "../Components/HomePage/HeroSection";
import LevelSelector from "../Components/LevelSelector";
import WhatYouCanDo from "../Components/HomePage/WhatYouCanDo";

function HomePage() {
  return (
    <>
      <div className="pb-3">
        <HeroSection />
      </div>
      <LevelSelector />
      <WhatYouCanDo />
    </>
  );
}

export default HomePage;
