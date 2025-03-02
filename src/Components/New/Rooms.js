

import React, { useEffect, useRef } from "react";
import ACRoom from "./ACRoom";
import NonACRoom from "./NonACRoom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LuxuryTextStay from "./LuxuryTentStay";

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate the entire section when it enters the viewport
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div>
      {/* <ACRoom /> */}
      <LuxuryTextStay />
      <NonACRoom />
      {/* Comfortable Rooms Section */}
      <div ref={sectionRef}>
        <div className="flex flex-col justify-center items-center gap-4 p-2 text-center pb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Accommodations</h1>
          <p>Experience luxury and comfort in our exquisite rooms.</p>
        </div>
        <div className="h-[80%]  flex items-center flex-col lg:flex-row p-2">
          <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-[80%] md:w-full lg:w-[40%] p-2 ">
            <img
              src="/New/accomodations1.avif"
              className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
            />
          </div>
          <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-[80%] md:w-full lg:w-[40%] p-2 ">
            <img
              src="/New/accomodations2.avif"
              className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
            />
          </div>
          <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-[80%] md:w-full lg:w-[40%] p-2 ">
            <img
              src="/New/accomodations3.avif"
              className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
            />
          </div>
          <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-[80%] md:w-full lg:w-[40%] p-2 ">
            <img
              src="/New/accomodations4.avif"
              className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
            />
          </div>
          <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-[80%] md:w-full lg:w-[40%] p-2 ">
            <img
              src="/New/accomodations5.avif"
              className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
            />
          </div>
          <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-[80%] md:w-full lg:w-[40%] p-2 ">
            <img
              src="/New/accomodations6.avif"
              className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
