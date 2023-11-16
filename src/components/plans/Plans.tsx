"use client";
import React from "react";

import Card from "./Card";
import Plan from "@/types/Plan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
const Plans = () => {
  const plans: Plan[] = [
    {
      id: "1",
      name: "Premium",
      description: "A simple plan with basic features",
      price: 25000,
      features: [
        {
          id: "1",
          description: "1 Usuario administrador",
          hasTooltip: false,
        },
        {
          id: "2",
          description: "+ 4 usuarios Nivel Local",
          hasTooltip: true,
          tooltip:
            "Solo podrás ver zonas de edificación a nivel local de tu ubicación.",
        },
      ],
    },
    {
      id: "2",
      name: "Business",
      description: "A standard plan with more features",
      price: 35000,
      features: [
        {
          id: "3",
          description: "1 Usuario administrador",
          hasTooltip: false,
        },
        {
          id: "4",
          description: "+ 10 usuarios Nivel Local",
          hasTooltip: true,
          tooltip:
            "Solo podrás ver zonas de edificación a nivel local en relacion a tú ubicación.",
        },
      ],
    },
    {
      id: "3",
      name: "Enterprise",
      description: "Our most advanced plan with all features",
      price: 50000,
      features: [
        {
          id: "5",
          description: "1 Usuario administrador",
          hasTooltip: false,
        },
        {
          id: "6",
          description: "+ 10 usuarios Nivel Nacional",
          hasTooltip: true,
          tooltip:
            "Podrás ver todas las zonas de edificación a nivel nacional en relacion a tú ubicación.",
        },
      ],
    },
  ];

  return (
    <div className="mt-10  flex flex-col items-center" id="plans">
      <h1 className="font-dm font-bold text-2xl md:text-4xl text-center">
        Comprá tu plan y activá tu Ventaja sobre tus competidores
      </h1>

      <div className="mt-6 w-full">
        <Swiper
          className="slider"
          modules={[Pagination]}
          pagination
          spaceBetween={30}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {plans.map((plan) => {
            return (
              <SwiperSlide className="item-1" key={plan.id}>
                <Card plan={plan} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Plans;
