import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function FlexContainer({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-4", className)}
    >
      {children}
    </div>
  );
}
