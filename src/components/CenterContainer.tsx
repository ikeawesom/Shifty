import React from "react";
import { UtilityType } from "../constants";
import { twMerge } from "tailwind-merge";

export default function CenterContainer({ children, className }: UtilityType) {
  return (
    <div className={twMerge("py-10 px-4 grid place-items-center", className)}>
      {children}
    </div>
  );
}
