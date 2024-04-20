import { AiOutlineArrowDown } from "react-icons/ai";
import Stats from "../components/Stats";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-[5rem] pt-28">
      <div className="w-full flex flex-col items-center gap-3">
        <h1 className="text-[8rem] text-text_color font-[Sedan] font-medium uppercase">
          Innov8 Labs
        </h1>
        <h2 className="text-xl text-text_color font-normal uppercase">
          Where Tomorrow&apos;s Solutions are Born Today
        </h2>
      </div>
      <button className="text-text_color text-xl font-light rounded-[10rem] uppercase px-10 py-4 bg-accent flex items-center gap-3">
        <span>Explore More</span>
        <div className="px-2 py-1 border-[1px] border-text_color rounded-[5rem]">
          <AiOutlineArrowDown />
        </div>
      </button>
      <Stats />
    </div>
  );
};

export default Hero;
