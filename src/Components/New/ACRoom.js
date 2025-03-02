import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACRoom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animations for images
      gsap.fromTo(
        ".acroom-images",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 80%",
          },
        }
      );

      // Animations for text content
      gsap.fromTo(
        ".acroom-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <div
      ref={containerRef}
      className=" flex flex-col justify-evenly px-6 md:px-20 my-10"
    >
      <h1 className="text-4xl text-black text-center font-semibold">Gallery</h1>
      <p className="text-md text-black text-center  min-[445px]:px-20">
        Explore the elegance and charm of The Clarks Hotel Varanasi.
      </p>
      <div className="h-[80%] flex items-center flex-col lg:flex-row p-2">
        <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-full md:w-full lg:w-[40%] p-2 ">
          <img
            src="/New/gallery1.avif"
            className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
          />
        </div>
        <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-full md:w-full lg:w-[40%] p-2 ">
          <img
            src="/New/gallery2.avif"
            className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
          />
        </div>
        <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-full md:w-full lg:w-[40%] p-2 ">
          <img
            src="/New/gallery3.avif"
            className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
          />
        </div>
        <div className="acroom-images h-[35%] lg:h-1/2 lg:h-full w-full md:w-full lg:w-[40%] p-2 ">
          <img
            src="/New/gallery4.avif"
            className="w-full aspect-[1/1] object-cover rounded-xl mx-auto"
          />
        </div>
      </div>
      {/* <div className="h-[35%] flex md:flex-row flex-col justify-evenly px-4">
        <div className="acroom-content w-full md:w-1/2 flex flex-col gap-2 justify-evenly">
          <h4 className="text-3xl font-semibold">AC Room</h4>
          <p>
            Enjoy comfortable AC rooms at Birla Dharamshala Ayodhya, located
            near Ram Mandir. Affordable rates with complimentary WiFi and
            parking make your stay convenient and enjoyable.
          </p>
          <p className="text-xl font-semibold">Affordable rates</p>
          <button className="bg-[#17fb18] w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
            <a href="http://wa.me/+917340413545" className="h-full">
              BOOK NOW
            </a>
          </button>
        </div>
        <div className="acroom-content w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[80%] h-full p-6 md:p-0 md:h-1/2 bg-[#fdedcf] flex items-center">
            <ul className="list-disc pl-10 text-xl">
              <li>Free WiFi, Parking</li>
              <li>Non-AC Room</li>
              <li>Nearby Ram Mandir</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ACRoom;
