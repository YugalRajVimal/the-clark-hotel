import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  return (
    <div
      ref={sectionRef}
      className="h-[180vh] min-[445px]:h-[180vh] lg:h-[100vh] w-full bg-[#4a3f35] flex flex-col justify-evenly items-center"
    >
      <h1 className="text-3xl  md:text-6xl text-white font-semibold text-center py-4">
        Exceptional Hotel Amenities
      </h1>
      <p className="text-base text-white text-center px-10 min-[445px]:px-20">
        Experience luxury and comfort with our diverse range of amenities for
        all guests.
      </p>
      <div className="h-[90%] min-[445px]:h-[75%] lg:h-[65%] w-full flex flex-col gap-4 lg:flex-row justify-evenly items-center">
        {[
          {
            img: "/New/amenities1.avif",
            title: "Diverse Room Options",
            desc: "Choose from standard, premier, and junior suites for a perfect stay.",
          },
          {
            img: "/New/amenities2.avif",
            title: "Modern Facilities Available",
            desc: "Enjoy modern amenities including a swimming pool, dining options, and more.",
          },
          {
            img: "/New/amenities3.avif",
            title: "Heritage Meets Luxury",
            desc: "Our heritage hotel combines colonial charm with contemporary comforts for an unforgettable experience.",
          },
        ].map((room, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[80%] min-h-[300px] lg:w-[29%] aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col bg-white overflow-hidden"
          >
            <div className="w-full h-[50%]">
              <img src={room.img} className="h-full w-full object-cover" />
            </div>
            <div className="w-full h-[50%] flex flex-col justify-center items-center gap-3 p-6">
              <h4 className="text-xl font-semibold">{room.title}</h4>
              <p>{room.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
