import { useGetHomePageQuery } from "../services/homePageApi.js";
import { Navbar } from "../components/Navbar.jsx";
import { Banner } from "../components/Banner.jsx";

import React from "react";
import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import CardTestimonials from "../components/CardTestimonials.jsx";
import Facilities from "../components/Facilities.jsx";
import Footer from "../components/Footer.jsx";
import home4 from "../assets/home4.jpg";
import home2 from "../assets/home2.jpg";
const HomePage = () => {
  const { data, isLoading, error } = useGetHomePageQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading homepage data</p>;

  const homepage = data?.data?.pages?.nodes?.[0]?.homepage;
  console.log(data.data);

  if (!homepage) return <p>No homepage data found.</p>;
  return (
    <>
      <div className="mx-auto">
        <Navbar />
        <Banner />
      </div>
      <div className="flex h-[500px] bg-white">
        <div className="flex items-center ">
          <img
            src={home2}
            alt="GIF Banner"
            className="w-[300px] h-[450px] object-contain"
          />
        </div>
        <div className="w-7/12 flex flex-col  justify-center px-6 ">
          <p className="text-black text-2xl leading-relaxed max-w-[90%] ">
            To be the first venue in the world to have
            <span className="text-[#94B109] font-semibold">
              {" "}
              60 multi surface courts{" "}
            </span>
            at one location and establish first one stop tennis academy in the
            Asia Pacific producing grand slam champions.
          </p>
          <div className="flex space-x-12 mt-32 text-2xl">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-black">About Us</span>
              <span className="h-[2px] w-[100px] bg-[#94B109] mt-1" />
            </div>
            <span className="text-gray-400">Coaches</span>
            <span className="text-gray-400">Vision</span>
            <span className="text-gray-400">Mission</span>
          </div>
        </div>
      </div>
      <About />
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <img
          src={home4}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <p className="text-2xl md:text-4xl font-semibold max-w-4xl leading-snug">
            “ We have created an environment ideal for <br />
            building craft. Our goal is to be recognized as the <br />
            best tennis performance centre in the world. ”
          </p>

          {/* Line */}
          <div className="w-2/5 h-px bg-white my-6"></div>

          {/* Author */}
          <div className="text-left w-2/5">
            <p className="font-semibold text-sm md:text-base">John Doe</p>
            <p className="text-sm opacity-80">Chairman</p>
          </div>
        </div>
      </div>
      <Features />
      <CardTestimonials />
      <Facilities />
      <Footer />
    </>
  );
};

export default HomePage;
 