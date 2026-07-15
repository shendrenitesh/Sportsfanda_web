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
        className="overflow-hidden rounded-2xl shadow-sm"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[280px] sm:h-[360px] lg:h-[470px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white sm:px-8">
                <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>

                <p className="text-base sm:text-xl">{slide.subtitle}</p>

                <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium transition hover:bg-blue-700 sm:mt-6 sm:px-6 sm:py-3">
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
