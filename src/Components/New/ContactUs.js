import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Location from "./Location";

const ContactUs = () => {
  const textSectionRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Text Section Animation
    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Map Animation
    gsap.fromTo(
      mapRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="mt-8  md:min-h-[62vh] ">
      <Location />
    </div>
  );
};

export default ContactUs;
