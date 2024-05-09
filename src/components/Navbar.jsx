import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="fixed w-full py-5 flex items-center justify-between px-10 z-10">
      <p className="text-2xl text-text_color">Innov8 Labs</p>
      <div className="w-[30%] h-full flex items-center justify-around">
        <button className="bg-accent text-text_color h-12 uppercase w-[150px] rounded-[10rem] font-medium">
          Apply
        </button>
        <button className="flex items-center justify-center gap-3 bg-accent text-text_color h-12 uppercase w-[200px] rounded-[10rem] font-medium">
          <GiHamburgerMenu className="text-bold" />
          <span>Explore Menu</span>
        </button>
      </div>
      <p className="text-2xl text-text_color">Contact Us</p>
      <div className="flex items-center gap-5 text-text_color">
        <BsLinkedin className="w-5 h-5 hover:text-[rgba(255,255,255,0.7)] cursor-pointer" />
        <BsInstagram className="w-5 h-5 hover:text-[rgba(255,255,255,0.7)] cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
