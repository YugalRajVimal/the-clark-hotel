// import React from "react";

// const NonACRoom = () => {
//   return (
//     <>
//       <div className="h-[170vh] lg:h-[90vh] flex flex-col px-6 md:px-20 my-10">
//         <div className="h-[65%] flex items-center flex-col lg:flex-row p-2">
//           <div className="h-full w-full md:w-[80%] lg:w-1/2 p-2">
//             <img
//               src="/New/NonACRoom1.avif"
//               className="h-full w-full object-cover rounded-xl"
//             />
//           </div>
//           <div className="h-full w-full md:w-[80%] lg:w-1/2 flex flex-col p-1">
//             <div className=" h-1/2 w-full flex">
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom2.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom3.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//             </div>
//             <div className=" h-1/2 w-full flex">
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom4.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//               <div className="h-full w-1/2 p-1">
//                 <img
//                   src="/New/NonACRoom5.avif"
//                   className="h-full w-full object-cover rounded-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="h-[35%] flex md:flex-row flex-col justify-evenly px-4">
//           <div className="w-full md:w-1/2 flex flex-col gap-2 justify-evenly ">
//             <h4 className="text-3xl font-semibold ">Non-AC Room</h4>
//             <p>
//               Experience budget-friendly non-AC rooms at Birla Dharamshala
//               Ayodhya. Located close to Ram Mandir, enjoy free WiFi and parking
//               for a hassle-free stay.
//             </p>
//             <p className="text-xl font-semibold">Affordable rates</p>
//             <button className="bg-[#17fb18] w-fit px-6 py-3 text-sm sm:text-lg text-black border border-[1px] border-black rounded-full">
//               <a href="http://wa.me/+91" className=" h-full">
//                 RESERVE NOW
//               </a>
//             </button>
//           </div>
//           <div className="w-full md:w-1/2 flex justify-center items-center">
//             <div className="w-[80%] h-full p-6 md:p-0 md:h-1/2 bg-[#fdedcf] flex  items-center">
//               <ul className="list-disc pl-10 text-xl">
//                 <li>Free WiFi, Parking</li>
//                 <li>Comfortable and Affordable</li>
//                 <li>Nearby Ram Mandir</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NonACRoom;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const NonACRoom = () => {
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
          end: "bottom 90%",
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
              src="/New/king1.avif"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Smaller Images Section */}
          <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col gap-2">
            <div className="h-full flex flex-row lg:flex-col gap-2 w-full">
              <div className="h-[90%] lg:h-1/2 w-full p-1 image">
                <img
                  src="/New/king2.avif"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="h-[90%] lg:h-1/2 w-full p-1 image">
                <img
                  src="/New/king3.avif"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[40%] flex md:flex-row flex-col justify-evenly px-4">
          <div className="w-full flex flex-col md:flex-row gap-2 justify-evenly content">
            <div className="w-full md:w-1/2 pl-4">
              <h4 className="text-3xl font-semibold pb-2">King Suite Room</h4>
              <p>
                Indulge in our spacious Junior Suite, offering stunning views of
                the pool and garden, complete with a dining table, minibar, and
                tea/coffee maker for your convenience.
              </p>
              <ul className="list-disc py-4 pl-6 text-lg">
                <li>Spacious suite amenities</li>
                <li>Pool and garden views</li>
                <li>Dining table included</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 text-left md:text-right pl-6">
              <p className="text-xl font-semibold py-4">Luxury nightly rate</p>
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

export default NonACRoom;
