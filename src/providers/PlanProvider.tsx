"use client";
import { useState } from "react";
import { PlanContext } from "../context/PlanContext";
import Plan from "@/types/Plan";

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<Plan | null>(null);
  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
