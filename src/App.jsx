import React from "react";
import GlassCard from "./components/GlassCard";
import Loader from "./components/Created/Loader";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-full flex justify-center items-center">
        <GlassCard />
      </div>
      <div className="flex justify-center items-center w-full h-[100vh] bg-red-500">
        <Loader />
      </div>
    </>
  );
}

export default App;
