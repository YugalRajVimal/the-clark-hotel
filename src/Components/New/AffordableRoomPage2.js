

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AffordableRoomPage2 = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current;

    // Animate the section title with scroll scrub
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animate the room cards with scroll scrub
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[160vh] min-[445px]:h-[110vh] lg:h-[100vh] w-full bg-[#4a3f35] flex flex-col justify-evenly items-center"
    >
      <h1 className="text-3xl  md:text-6xl text-white font-semibold text-center py-4">Luxury Heritage Hotel</h1>
      <p className="text-base text-white text-center px-10 min-[445px]:px-20">
      Experience colonial charm and modern amenities at The Clarks Hotel, Varanasi for unforgettable stays.
      </p>
      <div className="h-[80%] min-[445px]:h-[75%] lg:h-[65%] w-full flex flex-col gap-4 lg:flex-row justify-evenly items-center">
        {[
          {
            img: "/New/luxury1.avif",
            title: "Dining Experience",
            desc: "Savor exquisite cuisine and delightful beverages in our elegant dining spaces, enhancing your stay.",
          },
          {
            img: "/New/luxury2.avif",
            title: "Comfortable Accommodations",
            desc: "Choose from standard superior rooms, premier rooms, and spacious junior suites for your perfect stay.",
          }
        ].map((room, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[80%] lg:w-[29%] aspect-[4/5] rounded-b-3xl lg:rounded-b-0 rounded-t-3xl flex flex-col bg-white overflow-hidden"
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

export default AffordableRoomPage2;
