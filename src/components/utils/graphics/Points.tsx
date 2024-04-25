import React from "react";
import Image from "next/image";
import { DEFAULT_ICON_SIZE, IconsType } from "@/src/constants";

export default function Points({ className, size }: IconsType) {
  return (
    <Image
      alt="Points"
      width={size ? size : DEFAULT_ICON_SIZE * 0.8}
      height={size ? size : DEFAULT_ICON_SIZE * 0.8}
      src="/icons/icon_double_up.svg"
      className={className}
    />
  );
}
