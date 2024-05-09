import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";
import logo from "../assets/images/logo.png";
import NavCard from "./NavCard";

const Navbar = () => {
  const handleNavbarShow = () => {
    gsap.to("#navbar", {
      duration: 0.8,
      delay: 0.3,
      display: "block",
      height: "100%",
    });
  };

  const handleNavbarClose = () => {
    gsap.to("#navbar", {
      duration: 0.8,
      delay: 0.3,
      display: "none",
      height: "0",
      onComplete: () => {
        gsap.set("#navbar", { clearProps: "all" });
      },
    });
  };

  return (
    <nav className="fixed w-full py-5 flex items-center justify-between px-10">
      <p className="text-2xl text-text_color">Innov8 Labs</p>
      <div className="w-[30%] h-full flex items-center justify-around">
        <button className="bg-accent text-text_color h-12 uppercase w-[150px] rounded-[10rem] font-medium">
          Apply
        </button>
        <div className="w-full h-[50%] flex flex-wrap items-center justify-center gap-14">
          {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <NavCard key={index} />
          ))}
        </div>
        <div className="w-full h-[30%] border-t-[1px] border-accent mt-20 bg-teal-200 flex flex-col items-center justify-center gap-5">
          <p className="text-2xl text-accent font-semibold">Connect with Us</p>
          <div className="flex items-center gap-5">
            <BsLinkedin className="w-7 h-7 text-accent cursor-pointer" />
            <BsInstagram className="w-7 h-7 text-accent cursor-pointer" />
          </div>
        </div>
      </div>
      <nav className="fixed w-full py-5 flex items-center justify-between px-10 font-light backdrop-blur-md z-[2]">
        <div className="h-full flex items-center gap-10">
          <img
            src={logo}
            alt="innnov8-labs"
            className="w-[14rem] object-contain"
          />
          <button
            onClick={handleNavbarShow}
            className="flex items-center justify-center gap-3 bg-accent text-text_color h-12 uppercase w-[200px] rounded-[10rem] font-light"
          >
            <AiOutlineMenu className="text-bold" />
            <span>Explore Menu</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-10">
          <button className="border-[1px] border-accent text-accent h-12 uppercase w-[150px] rounded-[10rem] font-light hover:border-text_color hover:text-text_color transition-all duration-300 ease-in-out">
            Apply
          </button>
          <div className="flex items-center gap-5 text-text_color">
            <BsLinkedin className="w-5 h-5 text-text_color cursor-pointer" />
            <BsInstagram className="w-5 h-5 text-text_color cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
