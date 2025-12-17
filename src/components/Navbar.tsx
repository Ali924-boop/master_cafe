"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["menu", "explorer", "about", "contact", "reviews", "blog"];

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    setOpen(false); // close mobile menu after click
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Close mobile menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-purple-900 to-black backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-white hover:text-purple-400 transition"
          >
          Cafe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-purple-400 transition text-sm md:text-base"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <Link
              href="/signin"
              className="ml-4 bg-purple-700 px-4 py-2 rounded-md text-white hover:bg-purple-600 transition"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl p-2 rounded hover:bg-purple-800 transition z-50"
            aria-label="Toggle Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 px-6 py-5 space-y-4 flex flex-col items-start">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left text-white text-lg hover:text-purple-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <Link
            href="/signin"
            className="block w-2xs text-center bg-purple-700 py-2 rounded-md text-white hover:bg-purple-600 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
