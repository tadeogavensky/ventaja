"use client";
import Plan from "@/types/Plan";
import { features } from "process";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useSession } from "next-auth/react";

import usePlanContext from "@/hooks/usePlanContext";

const Card = ({ plan }: { plan: Plan }) => {
  const { setPlan } = usePlanContext();
  const [isTooltipVisible, setTooltip] = useState(false);

  const { data: session, status } = useSession();

  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`flex mx-auto flex-col my-12 items-center justify-between p-8 h-[500px] sm:[250px]  w-full relative transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ${
        plan.name == "Business" ? "border-oxfordBlue border-2" : ""
      }`}
    >
      {plan.name == "Business" && (
        <div className="bg-oxfordBlue rounded-3xl px-12 py-1 z-20 absolute -top-4">
          <p className="text-white font-bold 20">MÁS VENDIDO</p>
        </div>
      )}

      <div className="text-center">
        <div className="text-lg font-semibold">Plan {plan.name}</div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-2xl sm:text-4xl font-bold flex items-baseline">
            {plan.price.toLocaleString("es-CL", {
              currency: "CLP",
              style: "currency",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            <p className="text-base">/año</p>
          </div>
        </div>

        <Link
          href={status == "authenticated" ? "/auth/cart" : "/login"}
          className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-400 mx-auto focus:shadow-outline focus:outline-none"
          onClick={() => {
            setPlan(plan);
          }}
        >
          Elegir plan
        </Link>
        <div className="mt-6 space-y-3">
          {plan.features.map((feature) => {
            return (
              <div
                className="flex items-center justify-center gap-2 relative"
                key={feature.id}
              >
                <p className="text-gray-700">{feature.description}</p>
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setTooltip(true);
                  }}
                  onMouseLeave={() => {
                    setTooltip(false);
                  }}
                >
                  {feature.hasTooltip && <BsFillQuestionCircleFill />}

                  {isTooltipVisible && feature.hasTooltip && (
                    <div className="absolute top-10 left-0 p-2 text-xs bg-oxfordBlue text-white rounded">
                      <p>{feature.tooltip}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm text-center sm:max-w-sm sm:mx-auto">
          {plan.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
