import React from "react";
import FlexContainer from "../utils/FlexContainer";
import Image from "next/image";
import { DEFAULT_ICON_SIZE, UtilityType } from "@/src/constants";
import { getAuthID, fetchUserPoints } from "@/src/libs/prisma/fetchUserData";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default async function CoinsSection({ className }: UtilityType) {
  const { data: auth_id } = await getAuthID();
  const { data: points } = await fetchUserPoints(auth_id);

  return (
    <Link href="/dashboard/shop" className="custom">
      <FlexContainer className={twMerge("gap-1 drop-shadow-2xl", className)}>
        <h1 className="font-bold text-3xl text-gray-700">{points ?? 0}</h1>
        <Image
          alt="Shift Coins"
          src="/icons/icon_fire_filled.svg"
          width={DEFAULT_ICON_SIZE * 0.7}
          height={DEFAULT_ICON_SIZE * 0.7}
        />
      </FlexContainer>
    </Link>
  );
}
