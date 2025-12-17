"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  description: string;
}

const MenuSection = () => {
  const [menuItems] = useState<MenuItem[]>([
    { name: "Espresso", price: "$3.50", image: "/esprasso.jpg", description: "Strong, bold, and pure espresso." },
    { name: "Cappuccino", price: "$4.00", image: "/cappuccino.jpg", description: "Espresso with steamed milk and creamy foam." },
    { name: "Croissant", price: "$2.50", image: "/croissant.jpg", description: "Buttery, flaky, and freshly baked." },
    { name: "Latte", price: "$4.50", image: "/latte.jpg", description: "Smooth espresso with steamed milk." },
  ]);

  return (
    <section
      id="menu"
      className="pt-24 pb-20 px-4 sm:px-6 min-h-screen bg-gradient-to-l text-white from-purple-800 to-black flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-3xl sm:text-4xl mb-5 font-bold">Our Delicious Menu</h2>
      <p className="text-base sm:text-lg max-w-2xl mb-10">
        Discover a wide range of freshly brewed coffees, handcrafted beverages, and tasty treats made to delight every coffee lover.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-purple-800 bg-opacity-10 p-3 rounded-lg text-center flex flex-col items-center">
            <div className="relative w-full aspect-4/3 mb-3">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
            <p className="font-medium">{item.price}</p>
            {item.description && <p className="text-sm sm:text-base mt-1">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
