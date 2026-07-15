"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    title: "Sports Training",
    subtitle: "Train Hard. Perform Better.",
  },
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    title: "Gym & Fitness",
    subtitle: "Build Strength Every Day.",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Travel & Adventure",
    subtitle: "Explore New Destinations.",
  },
  {
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
    title: "Sports Shopping",
    subtitle: "Best Gear. Best Prices.",
  },
];

const SportsCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-105">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>

                <p className="text-xl">{slide.subtitle}</p>

                <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SportsCarousel;
