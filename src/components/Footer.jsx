import React from "react";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import logo2 from "../assets/logo2.png";
import CallIcon from "../assets/CallIcon.svg";
import MailIcon from "../assets/Email.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-white text-gray-800">
        <div className="grid md:grid-cols-2">
          <div
            className="relative bg-cover bg-center h-64 md:h-80"
            style={{ backgroundImage: `url(${footer1})` }}
          >
            <div className="bg-opacity-60 h-full w-full flex flex-col justify-center px-6 text-white">
              <h2 className="text-2xl font-bold">
                Our Coaches<span className="text-lime-400">•</span>
              </h2>
              <p className="mt-2 text-sm max-w-md">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
              <button className="mt-4 text-sm underline">Read More</button>
            </div>
          </div>

          <div className="relative bg-[#99B81B] h-64 md:h-80 text-white flex flex-col justify-center px-6">
            <h2 className="text-2xl font-bold">
              Events<span className="text-white">•</span>
            </h2>
            <p className="mt-2 text-sm max-w-md">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <button className="mt-4 text-sm underline flex items-center gap-1">
              Read More <span>→</span>
            </button>

            <img
              src={footer2}
              alt="Racket"
              className="absolute right-6 bottom-4 w-[463px] h-[300px] mt-50 opacity-50 hidden md:block"
            />
          </div>
        </div>
     <footer className="bg-gray-100 pt-10">

  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-800 border-b pb-6 mx-4 md:mx-16">
    <span>About Us</span>
    <span>Coaches</span>
    <span>Programs</span>
    <span>Amenities</span>
    <span>News</span>
    <span>Blogs</span>
    <span>Matches</span>
    <span>Events</span>
    <span>FAQs</span>
  </div>

  <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16 py-8">

    <div>
      <img src={logo2} alt="SSA Logo" className="w-24 mb-4" />
    </div>

    <div>
      <h3 className="text-[#99B81B] font-semibold text-lg mb-1">Signature Slam Academy</h3>
      <p className="text-sm">30 Wills Hill Road, Lovedale, NSW</p>
       <p className="text-sm mt-2 flex items-center gap-2">
    <img src={CallIcon} alt="Call Icon" className="w-4 h-4" />
    +91 5642589752
  </p>
       <p className="text-sm mt-2 flex items-center gap-2">
    <img src={MailIcon} alt="Call Icon" className="w-4 h-4" /> info@ssagroup.com
  </p>
    </div>
    <div>
      <h4 className="text-[#99B81B] font-semibold mb-2">Connect with us</h4>
      <div className="flex gap-4 text-xl text-gray-700">
    
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={youtube} alt="" />
      </div>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-900 via-green-700 to-green-500 text-white text-xs flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-3">
    <span>Terms And Condition</span>
    <span>© 2023 All Rights Reserved www.signatureslamacademy.com</span>
    <span className="text-right">Privacy Policy</span>
  </div>
</footer>

      </div>
    </div>
  );
};

export default Footer;
