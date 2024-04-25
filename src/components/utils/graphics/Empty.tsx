import React from "react";
import FlexContainer from "../FlexContainer";
import { GRAPHICS_TYPE, GraphicsType } from "@/src/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function GraphicsEmpty({
  children,
  className,
  type,
  size,
}: GraphicsType) {
  return (
    <FlexContainer className={twMerge("flex-col gap-5 p-10", className)}>
      <Image
        alt=""
        src={GRAPHICS_TYPE[type]}
        width={size ?? 150}
        height={size ?? 150}
      />
      <h1 className="text-center">{children}</h1>
    </FlexContainer>
  );
}
