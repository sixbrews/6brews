import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import OurProjects from "./pages/OurProject";
import OurServices from "./pages/OurServices";
import Why from "./pages/Why";
import { AiOutlineArrowRight } from "react-icons/ai";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-[40px] bg-accent text-text_color text-base flex items-center justify-center gap-2">
        <h1 className="cursor-pointer">
          Join our corporate ready program. 100% guaranteed internships
        </h1>
        <AiOutlineArrowRight className="cursor-pointer" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <OurServices />
      <OurProjects />
      <Footer />
    </div>
  );
}

export default App;
