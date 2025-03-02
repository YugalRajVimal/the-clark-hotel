

export default function TentAmenities() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[#F8E6D1]">
      <h2 className="text-4xl font-bold text-center">Luxurious Tent Amenities</h2>
      <p className="text-center text-gray-600 mt-2">
        Experience comfort with our luxurious tents, AC and non-AC rooms in Kumbh city.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center">
        {/* Left Column - Image */}
        <div>
          <img src="/New/NonACRoom3.avif" className="h-full w-full object-cove rounded-xl" />
        </div>

        {/* Right Column - Amenities List */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Boat Ride Experience</h3>
            <p className="text-gray-600">
              Take a serene boat ride and enjoy the beautiful surroundings of the Kumbh city.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Convenient Parking Facilities</h3>
            <p className="text-gray-600">
              Enjoy hassle-free parking while you stay at Divya Kumbh Tent in Prayagraj.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Complimentary Wi-Fi Access</h3>
            <p className="text-gray-600">
              Stay connected with free Wi-Fi available throughout our tent city for all guests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
