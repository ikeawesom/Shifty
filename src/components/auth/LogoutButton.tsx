"use client";
import React, { useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import PrimaryButton from "../utils/PrimaryButton";
import { DEFAULT_ICON_SIZE, UtilityType } from "@/src/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function LogoutButton({ className }: UtilityType) {
  const [loading, setLoading] = useState(false);

  return (
    <LogoutLink
      aria-disabled={loading}
      onClick={() => setLoading(true)}
      className={twMerge(
        "max-[600px]:justify-self-center max-[600px]:w-fit",
        className
      )}
    >
      <PrimaryButton
        loading={loading}
        className="min-[600px]:w-full w-fit grid place-items-center max-[600px]:p-2"
      >
        <span className="max-[600px]:hidden">Sign Out</span>
        <span className="min-[600px]:hidden">
          <Image
            alt="Sign Out"
            src="/icons/icon_sign_out_bright.svg"
            width={DEFAULT_ICON_SIZE * 1.2}
            height={DEFAULT_ICON_SIZE * 1.2}
          />
        </span>
      </PrimaryButton>
    </LogoutLink>
  );
}
