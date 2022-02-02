import { AboutSection } from "./components/about/AboutSection";
import { HeroSection } from "./components/Hero/HeroSection";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <MainPage>
        <HeroSection />
        <AboutSection />
      </MainPage>
    </>
  );
}

export default App;
