"use client";

import Link from "next/link";
import React, { useState } from "react";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-800 to-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center py-20">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl w-96 p-8 text-center shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-white">Sign In</h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />

          <div className="flex justify-between gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
          <p className="text-sm text-white">
              Forot Password?
            </p>
        </form>

        <p className="text-gray-300 text-sm mt-4">
          Dont have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
