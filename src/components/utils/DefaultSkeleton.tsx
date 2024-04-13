import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function DefaultSkeleton({ className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "rounded-lg bg-gray-600 animate-pulse w-full h-[10px]",
        className
      )}
    />
  );
}
