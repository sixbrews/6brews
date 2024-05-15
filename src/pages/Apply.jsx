import { AiOutlineArrowRight } from "react-icons/ai";
import ApplyContent from "../components/ApplyContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Apply = () => {
  return (
    <>
      <div className="w-full h-[40px] bg-accent text-text_color text-base flex items-center justify-center gap-2">
        <h1 className="cursor-pointer">
          Join our corporate ready program. 100% guaranteed internships
        </h1>
        <AiOutlineArrowRight className="cursor-pointer" />
      </div>
      <Navbar />
      <ApplyContent />
      <Footer />
    </>
  );
};

export default Apply;
