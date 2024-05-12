import GlassCard from "../components/GlassCard";

const OurServices = () => {
  const services = [
    "Web Development",
    "Android Development",
    "UI/UX",
    "Data Management and Analytics",
    "IT Strategy & Consulting",
    "IT Training and Education",
  ];
  return (
    <div className="flex flex-col justify-around items-center bg-background gap-10">
      <h1 className="text-7xl text-text_color font-[Sedan] font-medium">
        Our Services
      </h1>
      <div className=" grid grid-cols-3 gap-10 place-items-center p-4 ">
        {services.map((service, index) => (
          <GlassCard key={index} serviceName={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
