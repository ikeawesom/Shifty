import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function HRow({ className }: UtilityType) {
  return (
    <hr
      className={twMerge(
        "h-[2px] max-w-[500px] w-full bg-gray-400 my-2 rounded-full",
        className
      )}
    />
  );
}
