import CustomButton from "./CustomButton";
import WebImg from "../assets/images/Web-dev-photo.webp";

const GlassCard = ({serviceName}) => {
  return (
    <div className="w-[320px] h-[420px] flex flex-col rounded-2xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl flex justify-around items-center p-2 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="w-[90%] h-[50%] flex flex-col rounded-xl shadow-lg ring-1 ring-black/5 backdrop-blur-3xl flex justify-around items-center">
        <img
          className="w-full h-full rounded-xl"
          src={WebImg}
          alt={serviceName} // Alt text for accessibility
        />
      </div>
      <div className="w-[90%] h-[40%] flex flex-col flex justify-around items-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl p-4">
      <h1 className="text-white font-extrabold">{serviceName}</h1>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard {" "}
        </p>
      </div>
    </div>
  );
};

export default GlassCard;
