import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Why from "./pages/Why";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
