import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title({ children, className }: UtilityType) {
  return (
    <h1 className={twMerge("text-4xl font-bold text-start", className)}>
      {children}
    </h1>
  );
}
