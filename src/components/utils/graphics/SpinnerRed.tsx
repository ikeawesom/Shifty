import React from "react";
import Image from "next/image";
import { DEFAULT_ICON_SIZE, IconsType } from "@/src/constants";

export default function SpinnerRed({ size }: IconsType) {
  return (
    <Image
      alt="Loading..."
      width={size ?? DEFAULT_ICON_SIZE * 0.8}
      height={size ?? DEFAULT_ICON_SIZE * 0.8}
      src="/icons/icon_spinner_red.png"
      className="animate-spin"
    />
  );
}
