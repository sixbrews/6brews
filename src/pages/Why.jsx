import { BiCheckCircle } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";

const Why = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[70%] grid grid-cols-2 grid-rows-2 justify-items-center gap-20 my-10">
        <div className="w-[40rem] h-[40rem] bg-text_color rounded-3xl"></div>
        <div className="w-[40rem] h-[40rem] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-3xl px-14 flex flex-col justify-center gap-8">
          <h2 className="text-4xl text-accent font-medium font-[Sedan]">
            Template Design Variants
          </h2>
          <p className="text-text_color text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ex
            fringilla, dignissim dui tristique, scelerisque velit. Aliquam
            posuere pretium.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" />
          </div>
        </div>
        <div className="w-[40rem] h-[47rem] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-3xl px-14 flex flex-col justify-center gap-8">
          <h2 className="text-4xl text-accent font-medium font-[Sedan]">
            Huge UI Collections
          </h2>
          <p className="text-text_color text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ex
            fringilla, dignissim dui tristique, scelerisque velit. Aliquam
            posuere pretium.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" ticked />
            <TDV number={4} content="Variants and designs" />
            <TDV number={4} content="Variants and designs" />
          </div>
        </div>
        <div className="w-[40rem] h-[47rem] flex flex-col items-center justify-between">
          <div className="w-full h-[48%] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center gap-3">
            <BsLightning className="text-2xl text-text_color" />
            <h3 className="font-[Sedan] text-3xl text-text_color">
              Modern Interactions
            </h3>
            <p className="text-text_color text-lg font-extralight">
              Kickstart your web journey
            </p>
          </div>
          <div className="w-full h-[48%] bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-3xl flex flex-col items-center justify-center gap-3">
            <BsLightning className="text-2xl text-text_color" />
            <h3 className="font-[Sedan] text-3xl text-text_color">
              Modern Interactions
            </h3>
            <p className="text-text_color text-lg font-extralight">
              Kickstart your web journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TDV = ({ number, content, ticked }) => {
  return (
    <div className="w-full h-[70px] rounded-[5rem] bg-transparent border-[1px] border-text_color flex items-center justify-around">
      <div className="flex items-center justify-center gap-5">
        <p className="text-accent text-xl font-medium">{number}+</p>
        <p className="text-text_color text-xl font-light">{content}</p>
      </div>
      <BiCheckCircle
        className={`${
          ticked ? "text-text_color" : "text-transparent"
        } text-2xl`}
      />
    </div>
  );
};

export default Why;
