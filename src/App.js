import { AboutSection } from "./components/about/AboutSection";
import { Banner } from "./components/banner/ParallaxBanner";
import { ConsultationBanner } from "./components/contact/ConsultationBanner";
import { HeroSection } from "./components/Hero/HeroSection";
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
      </MainPage>
    </>
  );
}

export default App;
