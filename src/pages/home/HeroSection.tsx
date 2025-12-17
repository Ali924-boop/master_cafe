"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="mb-5 text-5xl font-bold">Welcome in Master Cafe</h1>
        <p className="mb-5 max-w-md">
         Freshly brewed coffee, handpicked beans, and cozy vibes. Experience the perfect cup every time at MasterCafe.
        </p>
        <Link href={"/menu"}>
        <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600">Explore Our Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
