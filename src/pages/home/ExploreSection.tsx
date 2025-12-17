import React from "react";
import Image from "next/image";

const ExplorerSection = () => (
  <section
    id="explorer"
    className="px-4 sm:px-6 pt-24 min-h-screen bg-gradient-to-l from-purple-800 to-black flex flex-col justify-center items-center text-center"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-5 font-bold">
      Explore the Taste of Perfection
    </h2>

    <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-3">
      Step inside Master Cafe and immerse yourself in the rich aroma of freshly brewed coffee, handcrafted beverages, and mouth-watering treats. Every corner is designed to delight your senses.
    </p>

    <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-5">
      Explore our cozy ambiance, friendly staff, and signature drinks crafted to perfection. Whether it’s a morning espresso or an evening latte, Master Cafe promises an unforgettable experience.
    </p>

    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="relative w-full md:w-1/2 aspect-[16/9]">
        <Image
          src="/interior.jpg"
          alt="Cafe Interior"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default ExplorerSection;
