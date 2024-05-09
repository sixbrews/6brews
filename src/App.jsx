import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import OurServices from "./pages/OurServices";
import OurProjects from "./pages/OurProject";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      {/* <OurServices /> */}
      <OurProjects />
    </div>
  );
}

export default App;
