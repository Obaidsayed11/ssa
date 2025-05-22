import React from "react";
import golf from "../assets/golf.svg";
import home10 from "../assets/home10.png";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";

const CardTestimonials = () => {
  return (
    <div>
      <div className="bg-white px-6 md:px-16 py-12 space-y-20">
        <section className="grid md:grid-cols-2 gap-0 items-center">
          <div className="bg-gradient-to-br from-[#003A5D] to-[#99B81B] text-white p-8 space-y-4 h-[100%]">
            <p className="uppercase tracking-widest text-sm">Launching</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Signature Slam Academy <br /> Hunter Valley
            </h2>
            <h3 className="text-lg mt-4 font-semibold">SSA Connectivity</h3>
            <ul className="text-2xl space-y-16">
              {[
                "Hunter Valley Golf and Country Club – - - - - - - - - - - - - - - - - - - - 220m",
                "Resorts Hunter Valley – - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  500m",
                "Cessnock Airport – - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 1.7km",
                "Cessnock CBD – - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 3.2km",
                "Nulkaba Public School – - - - - - - - - - - - - - -  - - - - - - - - - - - - - - 4.6km",
                "Cessnock Hospital – - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  7.2km",
                "McDonalds, KFC, Oporto – - - - - - - - - - - - - - - - - - - - - - - - - - - -7km",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <img
                    src={golf}
                    alt="Golf Icon"
                    className="w-5 h-5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={home10}
              alt="SSA Campus"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Meet our professionals<span className="text-green-500">•</span>
            </h2>
            <button className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 text-sm">
              View All
            </button>
          </div>
          <p className="text-gray-600 text-sm md:text-base mb-10 max-w-3xl">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <img
                src={test1}
                alt="Craig Tiley"
                className="w-full h-[500px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold">Craig Tiley</h3>
                <p className="text-sm text-gray-600">
                  CEO Tennis Australia & Australian Open Tournament Director
                </p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <img
                src={test2}
                alt="Stephen Farrow"
                className="w-full h-[500px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold">Stephen Farrow</h3>
                <p className="text-sm text-gray-600">
                  Director - Tournaments, Players & International Relations
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <img
                src={test3}
                alt="Cameron Pearson"
                className="w-full h-[500px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold">Cameron Pearson</h3>
                <p className="text-sm text-gray-600">
                  Head Men's Events - Tennis Australia
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardTestimonials;
