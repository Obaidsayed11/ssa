import React from "react";

const About = () => {
  return (
    <div className="w-full flex px-10 py-16 bg-white">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-black mb-2 relative">
          About Us
          <span className="absolute top-0 left-[105%] w-2 h-2 bg-[#94B109] rounded-full ml-2 mt-2"></span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mt-4 max-w-xl">
          To be the first venue in the world to have
          <span className="text-[#94B109] font-semibold">
            {" "}
            60 multi surface courts{" "}
          </span>
          at one location and establish first one stop tennis academy in the
          Asia Pacific producing grand slam champions.
        </p>
        <div className="flex gap-10 mt-10 text-center text-black">
          <div>
            <p className="text-2xl font-bold text-[#94B109]">20</p>
            <p className="text-base">courts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#94B109]">12</p>
            <p className="text-base">coaches</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#94B109]">17</p>
            <p className="text-base">years</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#94B109]">10</p>
            <p className="text-base">clubs</p>
          </div>
        </div>
        <button className="mt-8 w-[140px] py-2 bg-[#94B109] text-white font-semibold rounded-full hover:bg-[#7ea107]">
          Read More
        </button>
      </div>
      <div className=" flex justify-center items-center pl-10">
        <img
          src="../src/assets/home3.jpg"
          alt="Tennis Academy Overview"
          className="rounded-md object-cover h-[500px] w-[800px]"
        />
      </div>
    </div>
  );
};

export default About;
