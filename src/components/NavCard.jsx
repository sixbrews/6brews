import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavCard = () => {
  return (
    <Link
      to="/apply"
      className="w-[300px] h-[200px] rounded-lg bg-accent text-text_color text-2xl p-5 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <div className="flex items-center w-full h-10 gap-3">
        <h1>Title</h1>
        <AiOutlineArrowRight />
      </div>
    </Link>
  );
};

export default NavCard;
