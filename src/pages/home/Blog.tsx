"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image"; 

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Making Perfect Cappuccino",
    snippet:
      "Learn how to brew a creamy, smooth cappuccino at home like a pro barista.",
    image: "/cappuccino.jpg",
    date: "Dec 1, 2025",
  },
  {
    id: 2,
    title: "Exploring Coffee Beans Around the World",
    snippet:
      "Discover the flavors and aromas of coffee beans from different countries.",
    image:
      "/cappuccino.jpg",
    date: "Nov 20, 2025",
  },
  {
    id: 3,
    title: "How to Pair Coffee with Desserts",
    snippet:
      "Tips on pairing your favorite desserts with the perfect coffee flavor.",
    image:
      "/cappuccino.jpg",
    date: "Nov 10, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-linear-to-l from-purple-800 to-black py-5 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Master Cafe Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400} 
              height={300}
              />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.snippet}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-purple-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
