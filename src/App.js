import { AboutSection } from "./components/about/AboutSection";
import { ConsultationBanner } from "./components/contact/ConsultationBanner";
import { HeroSection } from "./components/Hero/HeroSection";
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
      </MainPage>
    </>
  );
}

export default App;
