import React from 'react'

const AmenitiesGallery = () => {
  return (
    <div >
        <div className="flex flex-col justify-center items-center gap-4 p-2 text-center pb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">
          Amenities
          </h1>
          <p>Luxurious tents, AC rooms, free Wi-Fi, dining, and more.</p>
        </div>
        <div className="h-[60vh] sm:h-[90vh] px-0 sm:px-6 md:px-20 mb-10">
          <div className="h-1/2 flex justify-evenly py-2">
            <div className="w-[45%] sm:w-[32%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img
                src="/New/LuxuryTentStay1.avif"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[45%] sm:w-[64%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img
                src="/New/NonACRoom2.avif"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="h-1/2 flex justify-evenly py-2">
            <div className="w-[45%] sm:w-[64%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img
                src="/New/LuxuryTentStay2.avif"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[45%] sm:w-[32%] h-full bg-zinc-200 rounded-3xl overflow-hidden">
              <img
                src="/New/NonACRoom2.avif"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default AmenitiesGallery;