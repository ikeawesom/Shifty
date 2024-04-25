import { DEFAULT_ICON_SIZE } from "@/src/constants";
import React from "react";
import Image from "next/image";

export default function RightArrow() {
  return (
    <Image
      src="/icons/icon_right_bright.svg"
      alt=""
      width={DEFAULT_ICON_SIZE}
      height={DEFAULT_ICON_SIZE}
      className="translate-y-[1.3px]"
    />
  );
}
