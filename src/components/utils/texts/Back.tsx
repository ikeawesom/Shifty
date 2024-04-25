"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DEFAULT_ICON_SIZE } from "@/src/constants";

export default function Back() {
  const router = useRouter();

  return (
    <h1
      onClick={() => router.back()}
      className="text-sm cursor-pointer hover:brightness-75 duration-150 text-blue-500 custom flex items-center justify-start gap-1 hover:-translate-x-1"
    >
      <Image
        alt="Back"
        src="/icons/icon_back.svg"
        width={DEFAULT_ICON_SIZE}
        height={DEFAULT_ICON_SIZE}
      />
      Back
    </h1>
  );
}
