import React from "react";
import home1 from "../assets/home1.jpg";
export const Banner = () => {
  return (
    <div className="relative w-full h-[786px] overflow-hidden">
      <img
        src={home1}
        alt="GIF Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-sm md:text-lg tracking-wide mb-2 uppercase">
          SSA Hunter Valley
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Grow your game with the <br className="hidden md:block" />
          <span className="text-white">Professionals</span>
        </h1>
        <p className="mt-4 px-6 py-2 text-lg md:text-3xl text-white font-semibold bg-[linear-gradient(to_right,transparent,#D2F24F,transparent)] shadow-adopt-shadow w-[638px]">
          Adopt • Nurture • Deliver
        </p>

        <button className="mt-6 border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};
