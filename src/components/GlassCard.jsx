import React from 'react';

const GlassCard = () => {
  return (
    <div className = "w-3/4 h-3/4 rounded-xl bg-white/30 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl flex justify-around items-center  ">
      <div className = "w-1/2 h-[90%] rounded-xl bg-white/50"></div>

      <div className="w-[40%] h-[90%]  flex-col justify-around ">

        <div className='w-[100%] h-[80%] rounded-xl bg-white/50 '></div>
        
        <div className="flex justify-center items-center w-[100%] h-[20%]">
          <button className = "w-1/2 h-12 rounded-xl text-white bg-btnclr">tatte shaat</button>
        </div>
      </div>
    </div>
  )
}

export default GlassCard;
