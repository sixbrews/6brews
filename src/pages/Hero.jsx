import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-7xl text-text_color font-[Sedan] font-medium">
        Innov8 Labs
      </h1>
      <h2 className="text-xl text-text_color font-thin">
        Where Tomorrow&apos;s Solutions are Born Today
      </h2>
      <button className="text-text_color text-md rounded-[10rem] uppercase px-6 py-3 bg-accent flex items-center gap-3">
        <span>Explore More</span>
        <div className="px-2 py-1 border-[1px] border-text_color rounded-[5rem]">
          <AiOutlineArrowDown />
        </div>
      </button>
    </div>
  );
};

export default Hero;
