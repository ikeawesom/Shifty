import React from "react";
import { UtilityType } from "../constants";
import { twMerge } from "tailwind-merge";
import CenterContainer from "./CenterContainer";

export default function PageWrapper({
  parentClassName,
  children,
  className,
}: UtilityType) {
  return (
    <CenterContainer className={parentClassName}>
      <div
        className={twMerge(
          "w-full max-w-[1000px] flex-col flex items-start justify-start gap-7",
          className
        )}
      >
        {children}
      </div>
    </CenterContainer>
  );
}
