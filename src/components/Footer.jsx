import logo from "../assets/images/logo.png";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-[40vh] flex flex-col items-center justify-around">
      <hr className="w-full border-[1px] border-text_color opacity-5" />
      <img src={logo} alt="logo" className="w-[20rem] object-contain" />
      <h2 className="text-text_color text-center text-xl font-light">
        OneSignal is the market leading self-serve customer engagement
        <br />
        solution for Push Notifications, Email, SMS & In-App.
      </h2>
      <div className="flex items-center gap-5">
        <AiOutlineInstagram className="text-3xl text-text_color cursor-pointer" />
        <AiOutlineLinkedin className="text-3xl text-text_color cursor-pointer" />
      </div>
      <div className="flex items-center gap-5">
        <a href="#" className="text-text_color no-underline">
          Privacy
        </a>
        <a href="#" className="text-text_color no-underline">
          Terms of Use
        </a>
        <a href="#" className="text-text_color no-underline">
          Acceptable Use Policy
        </a>
        <a href="#" className="text-text_color no-underline">
          Software Lifecycle Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
