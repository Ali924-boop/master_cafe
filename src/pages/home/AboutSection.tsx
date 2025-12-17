import React from "react";
import Image from "next/image";

const AboutSection = () => (
  <section
    id="about"
    className="pt-20 pb-12 px-4 sm:px-6 min-h-screen bg-gradient-to-l from-purple-800 to-black flex flex-col justify-center items-center text-center"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-white">
      About Master Café
    </h2>

    <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-6 leading-relaxed text-white">
      Master Café is more than just a coffee shop — it&aposs a lifestyle. Founded in 2020,
      our mission is to serve premium, freshly brewed coffee made from hand-selected
      beans sourced from the world’s finest farms.
      <br />
      <br />
      With a warm ambiance, a relaxed seating environment, and a passion for exceptional
      customer service, we aim to give every guest a memorable experience whether
      you’re here to work, relax, or catch up with friends.
    </p>

    <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-10 leading-relaxed text-white">
      At Master Café, quality is our promise, community is our priority, and great coffee
      is at the heart of everything we do.
    </p>

    {/* Images */}
    <div className="w-full flex flex-col md:flex-row gap-5 justify-center items-center">
      <div className="relative w-full md:w-1/2 aspect-[4/3]">
        <Image
          src="/interior.jpg"
          alt="Interior"
          fill
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/2 aspect-[4/3]">
        <Image
          src="/exterior.jpg"
          alt="Exterior"
          fill
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
