import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import YouShipSection from '@/components/YouShipSection';
import WeShipSection from '@/components/WeShipSection';
import DetailsSection from '@/components/DetailsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { HeroChipsScene, RollingDiceScene, DraggableChipScene } from '@/components/ThreeScenes';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <HeroChipsScene />
        <div className="relative z-10">
          <HeroSection />
          <div className="relative">
            <RollingDiceScene />
            <YouShipSection />
          </div>
          <div className="relative">
            <DraggableChipScene />
            <WeShipSection />
          </div>
          <DetailsSection />
          <CTASection />
        </div>
      </div>
      <Footer />
    </>
  );
}
