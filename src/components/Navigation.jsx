import React from "react";
import { categories } from "../data/categories.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Navigation = () => {
  return (
    <div className="flex p-1 max-w-full overflow-x-auto">
      <Swiper
        spaceBetween={10}
        breakpoints={{
            320: { slidesPerView: 2 },
            375: { slidesPerView: 2.5 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <button className="text-[18px] border p-1 w-[120px] flex items-center gap-2 rounded-[5px]">
              <img
                src={category.image}
                alt={category.name}
                className="w-5 h-5"
              />
              {category.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Navigation;
