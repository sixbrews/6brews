import { AiOutlineLayout } from "react-icons/ai";

const StatsCard = () => {
  return (
    <div className="w-[300px] h-[200px] text-text_color flex items-center gap-5 p-5 bg-[rgba(255,255,255,0.02)] rounded-xl shadow-2xl backdrop-blur-md">
      <AiOutlineLayout className="w-20 h-20 font-black" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">45+ Pages</h2>
        <p className="text-lg font-light">
          Pre-built pages expedite website creation process.
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
