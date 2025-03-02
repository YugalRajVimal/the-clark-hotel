import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AffordableRoomPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animate the entire component when it enters the viewport with scroll scrub
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Trigger animation when 80% of the element is visible
          scrub: 1, // Enable smooth scrub scrolling
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[90vh] flex flex-col lg:flex-row justify-evenly items-center p-4 pb-20"
    >
      <div className="w-full text-left lg:text-left lg:w-1/2 h-1/2 lg:h-full flex justify-center items-start lg:items-start gap-6 flex-col pl-6">
        <h3 className="text-3xl font-semibold"> Welcome to The Clarks Hotel</h3>
        <p className="pl-2 ">Experience luxury and heritage in Varanasi.</p>
        <button className=" w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
          <a href="http://wa.me/+91" className="h-full">
            BOOK NOW
          </a>
        </button>
      </div>

      <div className="relative w-full sm:w-[80%] lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center">
        <div className="h-[100%] w-full md:w-[70%] flex justify-center items-center  overflow-hidden">
          <img src="/New/room.avif" className="h-full aspect-[1/1] object-cover rounded-2xl" />
        </div>
        <div className="absolute text-white flex gap-6 w-[70%] md:w-[65%] lg:w-1/2 p-6 lg:p-10 bg-[#a67c52] top-[78%] lg:top-[60%] lg:right-[60%] rounded-md">
          <div>
            <h4 className="text-4xl font-semibold">150+</h4>
            <span>Best Rates</span>
          </div>
          <div>
            <h4 className="text-4xl font-semibold">15</h4>
            <span className="">Trusted By Guests</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffordableRoomPage;
