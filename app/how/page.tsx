import HowHeroSection from "../../components/how/HowHeroSection";
import StepsSection from "../../components/how/StepsSection";
import TimelineSection from "../../components/how/TimelineSection";
import FaqSection from "../../components/how/FaqSection";
import BottomCTA from "../../components/how/BottomCTA";

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <HowHeroSection />
      <StepsSection />
      <TimelineSection />
      <FaqSection />
      <BottomCTA />
    </div>
  );
}
