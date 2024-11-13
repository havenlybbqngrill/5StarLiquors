import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel CSS
import "./CarouselStyles.css";

import {
  reviewAvatar1,
  reviewAvatar2,
  reviewAvatar3,
  reviewAvatar4,
  reviewAvatar5,
  reviewName1,
  reviewName2,
  reviewName3,
  reviewName4,
  reviewName5,
  reviewPosition1,
  reviewPosition2,
  reviewPosition3,
  reviewPosition4,
  reviewPosition5,
  reviewRating1,
  reviewRating2,
  reviewRating3,
  reviewRating4,
  reviewRating5,
  reviewText1,
  reviewText2,
  reviewText3,
  reviewText4,
  reviewText5,
} from "../data/data";

const reviews = [
  {
    id: 1,
    rating: reviewRating1,
    review: reviewText1,
    name: reviewName1,
    position: reviewPosition1,
    avatar: reviewAvatar1,
  },
  {
    id: 2,
    rating: reviewRating2,
    review: reviewText2,
    name: reviewName2,
    position: reviewPosition2,
    avatar: reviewAvatar2,
  },
  {
    id: 3,
    rating: reviewRating3,
    review: reviewText3,
    name: reviewName3,
    position: reviewPosition3,
    avatar: reviewAvatar3,
  },
  {
    id: 4,
    rating: reviewRating4,
    review: reviewText4,
    name: reviewName4,
    position: reviewPosition4,
    avatar: reviewAvatar4,
  },
  {
    id: 5,
    rating: reviewRating5,
    review: reviewText5,
    name: reviewName5,
    position: reviewPosition5,
    avatar: reviewAvatar5,
  },
];

const Review = () => {
  const [slidePercentage, setSlidePercentage] = useState(100);

  const updateSlidePercentage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidePercentage(33.33); // 3 reviews for large screens
    } else if (width >= 768) {
      setSlidePercentage(50); // 2 reviews for medium screens
    } else {
      setSlidePercentage(100); // 1 review for small screens
    }
  };

  useEffect(() => {
    updateSlidePercentage();

    window.addEventListener("resize", updateSlidePercentage);
    return () => {
      window.removeEventListener("resize", updateSlidePercentage);
    };
  }, []);

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <span className="text-sm text-gray-500 font-medium block mb-2">
              TESTIMONIAL
            </span>
            <div className="w-14 h-[2px] bg-[#722F37] mb-4"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Hear from Our Satisfied Customers!
          </h2>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          centerMode
          centerSlidePercentage={slidePercentage}
          showArrows={false}
          emulateTouch
        >
          {reviews.map((review) => (
            <div key={review.id} className="p-4 mb-10 md:mb-20">
              <div className="bg-white border shadow-lg border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-[#722F37] hover:shadow-sm">
                <div className="mb-7">
                  <div className="flex gap-2 text-amber-500 mb-4">
                    {Array(1)
                      .fill(0)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className="w-5 h-5 text-amber-500"
                        />
                      ))}
                    <span className="text-base font-semibold text-indigo-600">
                      {review.rating}
                    </span>
                  </div>
                  <p className="text-base text-left text-gray-600 leading-6 transition-all duration-500 group-hover:text-gray-800">
                    {review.review}
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-13 w-8 max-w-[50px] object-cover"
                    src={review.avatar}
                    alt="avatar"
                  />
                  <div className="flex flex-col text-start">
                    <h5 className="text-gray-900 font-medium mb-0.5">
                      {review.name}
                    </h5>
                    <span className="text-xs text-gray-500">
                      {review.position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
