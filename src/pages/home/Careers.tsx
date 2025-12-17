"use client";

import React, { useState } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Thank you! Your application has been submitted.");
    setFormData({ fullName: "", email: "", phone: "", position: "", message: "" });
  };

  const positions = ["Barista", "Chef", "Server", "Manager", "Marketing / Social Media"];

  return (
    <div className="min-h-screen bg-linear-to-l from-purple-900 via-purple-800 to-black py-16 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6 text-white">Join Our Team</h1>
        <p className="text-center text-white mb-12">
          Master Cafe is always looking for passionate individuals who love coffee and great customer experiences. 
          If you’re motivated and ready to be part of our growing team, we want to hear from you!
        </p>

        {/* Available Positions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Available Positions</h2>
          <ul className="list-disc list-inside text-white">
            {positions.map((pos, index) => (
              <li key={index}>{pos}</li>
            ))}
          </ul>
        </div>

        {/* Application Form */}
        <div className="rounded-xl shadow-lg p-8 bg-purple-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Apply Now</h2>
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              required
            />

            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-purple-300 outline-none"
              required
            >
              <option value="">Select Position</option>
              {positions.map((pos, index) => (
                <option key={index} value={pos}>{pos}</option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Cover Letter / Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-400 focus:ring-2 focus:ring-purple-400 outline-none resize-none"
              rows={4}
            />

            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:bg-purple-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
