import CustomButton from "./CustomButton";

const GlassCard = () => {
  return (
    <div className="w-[350px] h-[450px] flex flex-col rounded-xl bg-white/30 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl flex justify-around items-center">
      <div className="w-[90%] h-[60%] flex flex-col rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl flex justify-around items-center">
        <img
          className="w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        ></img>
      </div>
      <div className="w-[90%] h-[35%] flex flex-col rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl flex justify-around items-center">
        <h1 className="text-white font-extrabold">Web Development</h1>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley{" "}
        </p>
      </div>
    </div>
  );
};

export default GlassCard;
