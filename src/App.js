import { AboutSection } from "./components/about/AboutSection";
import { Banner } from "./components/banner/ParallaxBanner";
import { ConsultationBanner } from "./components/contact/ConsultationBanner";
import { ContactSection } from "./components/contact/ContactSection";
import { FooterSection } from "./components/footer/FooterSection";
import { HeroSection } from "./components/hero/HeroSection";
import { InfoSection } from "./components/info/InfoSection";
import { ServicesSection } from "./components/services/ServicesSection";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <MainPage>
        <HeroSection />
        <AboutSection />
        <ConsultationBanner />
        <ServicesSection />
        <Banner />
        <InfoSection />
        <ContactSection />
        <FooterSection />
      </MainPage>
    </>
  );
}

export default App;
