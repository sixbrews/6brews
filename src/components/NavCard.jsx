import { AiOutlineArrowRight } from "react-icons/ai";

const NavCard = ({ handleNavigate, id }) => {
  return (
    <div
      onClick={() => handleNavigate(id)}
      className="w-[300px] h-[200px] rounded-lg bg-accent text-text_color text-2xl p-5 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <div className="flex items-center w-full h-10 gap-3">
        <h1>{id[0].toUpperCase() + id.slice(1)}</h1>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default NavCard;
