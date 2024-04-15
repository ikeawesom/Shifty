import React from "react";
import Image from "next/image";
import { DEFAULT_ICON_SIZE } from "@/src/constants";

export default function ProfileIcon({
  text,
  custom,
  src,
}: {
  text: string;
  custom?: boolean;
  src?: string;
}) {
  if (custom && src)
    return (
      <Image
        alt={text[0]}
        src={src ?? ""}
        width={DEFAULT_ICON_SIZE * 1.5}
        height={DEFAULT_ICON_SIZE * 1.5}
        className="rounded-full"
      />
    );
  return (
    <div className="rounded-full bg-blue-500 h-12 w-12 grid place-items-center">
      <h1 className="font-bold text-slate-50 text-2xl">{text[0]}</h1>
    </div>
  );
}
