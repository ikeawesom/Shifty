import Link from "next/link";
import React from "react";
import { UtilityType } from "../constants";
import { twMerge } from "tailwind-merge";

export default function Logo({ className }: UtilityType) {
  return (
    <Link
      href="/"
      className={twMerge(
        "custom text-4xl text-center font-bold text-blue-500",
        className
      )}
    >
      Shifty
    </Link>
  );
}
