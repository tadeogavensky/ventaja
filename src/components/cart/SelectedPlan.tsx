"use client";
import usePlanContext from "@/hooks/usePlanContext";
import React from "react";

const SelectedPlan = () => {
  const { plan } = usePlanContext();

  return <p className="font-bold text-xl">{plan?.name}</p>;
};

export default SelectedPlan;
