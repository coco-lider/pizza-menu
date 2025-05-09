import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../data/products.js";
import "swiper/css";

const Hero = () => {
  const [categoryFilter, setCategoryFilter] = useState("New");

  const newProducts = products.filter((product) => product.filter === categoryFilter);

  return (
    <div className="p-1">
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
        {newProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className={`"p-2 border rounded bg-[url(${product.image})]" w-[400px]`}>
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
