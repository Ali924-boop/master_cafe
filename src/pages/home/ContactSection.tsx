import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection: React.FC = () => (
  <section
    id="contact"
    className="pt-24 px-4 sm:px-6 min-h-screen bg-gradient-to-l from-purple-800 to-black text-white flex flex-col justify-center items-center"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>

    <p className="text-sm sm:text-base md:text-lg max-w-2xl text-center text-gray-300 mb-10 leading-relaxed">
      Whether you have questions, want to make a reservation, or simply wish to connect,
      the Master Café team is here to help. Reach out to us anytime.
    </p>

    {/* Contact Card */}
    <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg border border-white/20">
      <div className="space-y-6 text-left text-white">

        {/* Email */}
        <div className="flex items-center gap-4">
          <span className="text-2xl text-yellow-400">
            <FaEnvelope />
          </span>
          <div>
            <p className="text-xs sm:text-sm opacity-70">Email</p>
            <p className="text-base sm:text-lg font-medium">info@mastercafe.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <span className="text-2xl text-green-400">
            <FaPhoneAlt />
          </span>
          <div>
            <p className="text-xs sm:text-sm opacity-70">Phone</p>
            <p className="text-base sm:text-lg font-medium">(123) 456-7890</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4">
          <span className="text-2xl text-red-400">
            <FaMapMarkerAlt />
          </span>
          <div>
            <p className="text-xs sm:text-sm opacity-70">Address</p>
            <p className="text-base sm:text-lg font-medium">
              123 Cafe Street, City, State 12345
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="pt-4 sm:pt-6 border-t border-white/20">
          <p className="text-xs sm:text-sm opacity-70 mb-3">Follow Us</p>

          <div className="flex gap-4 sm:gap-5 text-xl sm:text-2xl">
            <a href="#" className="hover:text-blue-500 transition-all" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition-all" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400 transition-all" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ContactSection;
