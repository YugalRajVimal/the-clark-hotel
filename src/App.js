import React from "react";

import HomeImageComponent from "./Components/New/HomeImageComponent";
import JayShreeRam from "./Components/JayShreeRam";
import RoomPricingComponent from "./Components/RoomPricingComponent";
import GalleryComponent from "./Components/GalleryComponent";
import BirlaDharamshala from "./Components/BirlaDharamshala";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import AffordableRoomPage from "./Components/New/AffordableRoomPage";
import AffordableRoomPage2 from "./Components/New/AffordableRoomPage2";
import ACRoom from "./Components/New/ACRoom";
import NonACRoom from "./Components/New/NonACRoom";
import Review from "./Components/New/Review";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/New/AboutUs";
import Rooms from "./Components/New/Rooms";
import Services from "./Components/New/Services";
import Location from "./Components/New/ContactUs";
import Layout from "./Layout";
import DiningOptions from "./Components/New/DiningOptions";
import TentAmenities from "./Components/New/TentAmenities";
import AmenitiesGallery from "./Components/New/AmenitiesGallery";
import Amenities from "./Components/New/DiningOptions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="relative w-full overflow-hidden">
                {/* <Nav /> */}
                <HomeImageComponent />
                <AffordableRoomPage />
                <AffordableRoomPage2 />
                <ACRoom />
                {/* <NonACRoom /> */}
                {/* <Footer /> */}
                <div className="fixed flex h-[150px] items-center  justify-between px-7 pt-10 w-full bottom-[0px] sm:bottom-0 left-0 ">
                  <a href="tel:+91" className="">
                    <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />
                  </a>
                  <a href="http://wa.me/+91">
                    <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
                  </a>
                </div>
              </div>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/accommodation" element={<Rooms />} />
          <Route
            path="/amenities"
            element={
              <>
                <Amenities />
                {/* <TentAmenities />
                <AmenitiesGallery /> */}
              </>
            }
          />
          <Route path="/contact" element={<Location />} />
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
