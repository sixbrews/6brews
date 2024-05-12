import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import OurProjects from "./pages/OurProject";
import OurServices from "./pages/OurServices";
import Why from "./pages/Why";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Why />
      {/* <OurServices /> */}
      <OurProjects />
      <Footer />
    </div>
  );
}

export default App;
