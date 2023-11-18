"use client";
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";

const usePlanContext = () => {
  return useContext(PlanContext);
};

export default usePlanContext;
