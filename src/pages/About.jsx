import { AiOutlineLaptop } from "react-icons/ai";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-full flex items-center justify-center px-10"
    >
      <div className="h-[80%] w-[80%] flex flex-col justify-around">
        <h2 className="font-[Sedan] text-7xl text-text_color">
          Experience the new digital <br />
          era with our comprehensive <br />
          tech services & solutions
        </h2>
        <hr className="border-[1px] border-accent opacity-50" />
        <div className="flex items-center justify-between">
          <div className="w-[30%] flex items-center justify-between">
            <div className="w-[13rem] h-[7rem] rounded-3xl bg-text_color"></div>
            <p className="text-3xl text-text_color font-[Sedan] font-medium">
              Innovative &<br />
              expert team
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 w-[50%] gap-y-5">
            <div className="flex items-center gap-3 text-text_color">
              <AiOutlineLaptop className="bg-accent rounded-md w-8 h-8 p-1" />
              <p className="font-extralight text-md">Customized solutions</p>
            </div>
            <div className="flex items-center gap-3 text-text_color">
              <AiOutlineLaptop className="bg-accent rounded-md w-8 h-8 p-1" />
              <p className="font-extralight text-md">Customized solutions</p>
            </div>
            <div className="flex items-center gap-3 text-text_color">
              <AiOutlineLaptop className="bg-accent rounded-md w-8 h-8 p-1" />
              <p className="font-extralight text-md">Customized solutions</p>
            </div>
            <div className="flex items-center gap-3 text-text_color">
              <AiOutlineLaptop className="bg-accent rounded-md w-8 h-8 p-1" />
              <p className="font-extralight text-md">Customized solutions</p>
            </div>
            <div className="flex items-center gap-3 text-text_color">
              <AiOutlineLaptop className="bg-accent rounded-md w-8 h-8 p-1" />
              <p className="font-extralight text-md">Customized solutions</p>
            </div>
            <div className="flex items-center gap-3 text-text_color">
              <AiOutlineLaptop className="bg-accent rounded-md w-8 h-8 p-1" />
              <p className="font-extralight text-md">Customized solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
