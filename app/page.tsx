import Navbar from '@/components/Navbar';
import ScrollAnimations from '@/components/ScrollAnimations';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import RulesSection from '@/components/RulesSection';
import DeckSection from '@/components/DeckSection';
import PotSection from '@/components/PotSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <RulesSection />
      <DeckSection />
      <PotSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
