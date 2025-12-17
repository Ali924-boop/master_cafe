import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';

const reviews = [
  {
    text: "Amazing coffee and friendly staff!",
    name: "John Doe",
    rating: 5,
    avatar: "/avatar.jpg",
  },
  {
    text: "Best latte in town. Highly recommend!",
    name: "Jane Smith",
    rating: 4.5,
    avatar: "/avatar2.png",
  },
  {
    text: "Cozy atmosphere perfect for work or relaxation.",
    name: "Alex Johnson",
    rating: 5,
    avatar: "/avatar.jpg",
  },
];

const ReviewsSection: React.FC = () => (
  <section
    id="reviews"
    className="px-4 sm:px-6 pt-24 pb-20 min-h-screen bg-gradient-to-l from-purple-800 to-black flex flex-col justify-center items-center text-center"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-white">Reviews</h2>
    <p className="text-sm sm:text-base md:text-lg max-w-2xl mb-10 text-gray-300">
      What our customers say about us.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center w-full max-w-6xl">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between"
        >
          {/* User Avatar */}
          <div className="flex items-center mb-4 gap-3 sm:gap-4">
            <div className="relative w-12 h-12 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src={review.avatar}
                alt={review.name}
                fill
                className="rounded-full object-cover border-2 border-yellow-400"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-200 text-sm sm:text-base">{review.name}</p>
              <div className="flex items-center mt-1">
                {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                  <span key={i} className="text-yellow-400 mr-1 text-base sm:text-lg">
                    <FaStar />
                  </span>
                ))}
                {review.rating % 1 !== 0 && (
                  <span className="text-yellow-400 text-base sm:text-lg">
                    <FaStarHalfAlt />
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-100 mt-2 text-sm sm:text-base">&quot;{review.text}&quot;</p>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSection;
