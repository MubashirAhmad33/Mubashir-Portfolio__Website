import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    rating: 5,
    review:
      "This service was amazing! I really appreciate the quality of work and the customer service was fantastic.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
    rating: 4,
    review:
      "Very satisfied with the outcome. Will definitely recommend to others!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // Uncomment to add more reviews
  // {
  //   id: 3,
  //   name: "Sam Wilson",
  //   role: "Marketing Specialist",
  //   rating: 4,
  //   review:
  //     "The project exceeded my expectations, and the attention to detail was incredible.",
  //   avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  // },
];

const ReviewSection = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="lg:text-3xl text-lg font-bold mb-8 text-center">
          Customer Reviews
        </h2>
        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  className="w-14 h-14 rounded-full mr-4"
                  src={review.avatar}
                  alt={review.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {/* Star Ratings */}
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-700 group-hover:text-white">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
