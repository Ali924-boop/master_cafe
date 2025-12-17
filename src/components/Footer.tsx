"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-800 to-black text-white pt-10">
      
      {/* Main Footer Grid */}
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* 1️⃣ Logo & About */}
        <div className="flex flex-col items-start">
          <Image src="/logo.png" alt="Master Café Logo" width={60} height={60} />
          <p className="text-gray-300 mt-3 text-sm sm:text-base">
            Master Café — Serving premium coffee with love since 2020.
          </p>
        </div>

        {/* 2️⃣ Services */}
        <div className="flex flex-col">
          <h6 className="font-semibold mb-4 text-lg">Services</h6>
          <ul className="space-y-2 text-gray-300">
            {["Coffee", "Beverages", "Snacks", "Special Offers"].map((service, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white block">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Company */}
        <div className="flex flex-col">
          <h6 className="font-semibold mb-4 text-lg">Company</h6>
          <ul className="space-y-2 text-gray-300">
            {["About Us", "Contact", "Careers", "Blog"].map((page, i) => (
              <li key={i}>
                <a href={`/${page.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-white block">{page}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Social + Newsletter */}
        <div className="flex flex-col">
          <h6 className="font-semibold mb-4 text-lg">Follow Us</h6>
          <div className="flex flex-wrap gap-4 text-xl mb-4">
            <FaFacebookF className="hover:text-blue-500" />
            <FaInstagram className="hover:text-pink-500" />
            <FaTwitter className="hover:text-sky-400" />
            <FaLinkedinIn className="hover:text-blue-700" />
          </div>

          {/* Newsletter */}
          <h6 className="font-semibold text-lg">Subscribe</h6>
          <p className="text-gray-300 text-sm mb-2">Get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-lg bg-white text-black focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-400 px-4 py-2 text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Master Café. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
