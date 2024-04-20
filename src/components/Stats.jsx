import StatsCard from "./StatsCard";

const Stats = () => {
  return (
    <div className="flex items-center justify-around w-[80%]">
      {[1, 1, 1].map((_, index) => (
        <StatsCard key={index} />
      ))}
    </div>
  );
};

export default Stats;
