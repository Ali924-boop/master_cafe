"use client";

import React from "react";
import HeroSection from "./HeroSection";
import MenuSection from "./MenuSection";
import ExplorerSection from "./ExploreSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ReviewsSection from "./ReviewSection";
import Blog from "./Blog";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-black text-white">
      <HeroSection />
      <MenuSection />
      <ExplorerSection />
      <AboutSection />
      <ContactSection />
      <ReviewsSection />
      <Blog />
    </div>
  );
};

export default Home;
