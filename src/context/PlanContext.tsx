"use client";
import Plan from "@/types/Plan";
import { createContext } from "react";
interface PlanContextProps {
  plan: Plan | null;
  setPlan: React.Dispatch<React.SetStateAction<Plan | null>>;
}

export const PlanContext = createContext({} as PlanContextProps);
