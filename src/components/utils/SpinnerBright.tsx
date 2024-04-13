import React from "react";
import Image from "next/image";
import { DEFAULT_ICON_SIZE } from "@/src/constants";

export default function SpinnerBright() {
  return (
    <Image
      alt="Loading.."
      width={DEFAULT_ICON_SIZE * 0.8}
      height={DEFAULT_ICON_SIZE * 0.8}
      src="/icons/icon_spinner_bright.png"
      className="animate-spin"
    />
  );
}
