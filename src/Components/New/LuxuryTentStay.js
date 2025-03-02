"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const LuxuryTentStay = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".image", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      gsap.from(".content", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="h-[120vh] lg:h-[90vh] flex flex-col justify-evenly px-6 md:px-20 my-10"
      >
        <div className="h-[60vh] lg:h-[70vh] flex flex-col lg:flex-row items-center p-2 gap-4">
          {/* Main Image */}
          <div className="h-1/2 lg:h-full w-full lg:w-[80%] lg:w-1/2 p-2 image">
            <img
              src="/New/standard1.avif"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Smaller Images Section */}
          <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col gap-2">
            <div className="h-full flex flex-row lg:flex-col gap-2 w-full">
              <div className="h-[90%] lg:h-1/2 w-full p-1 image">
                <img
                  src="/New/standard2.avif"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="h-[90%] lg:h-1/2 w-full p-1 image">
                <img
                  src="/New/standard3.avif"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[40%] flex md:flex-row flex-col justify-evenly px-4">
          <div className="w-full flex flex-col md:flex-row gap-2 justify-evenly content">
            <div className="w-full md:w-1/2 pl-4">
              <h4 className="text-3xl font-semibold pb-2">
                Standard Superior Room
              </h4>
              <p>
                Experience comfort in our Standard Superior Room, featuring
                essential amenities for a relaxing stay in the heart of
                Varanasi's heritage, perfect for both leisure and business
                travelers.
              </p>
              <ul className="list-disc py-4 pl-6 text-lg">
                <li>Enhanced luxury features</li>
                <li>Premier room amenities</li>
                <li>Essential comfort amenities</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 text-left md:text-right pl-6">
              <p className="text-xl font-semibold py-4">
                Affordable nightly rate
              </p>
              <button className="bg-[#326bd4] w-fit px-8 py-4 text-sm sm:text-lg text-black  rounded-full">
                <a href="http://wa.me/+91" className="h-full">
                  BOOK NOW
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryTentStay;
