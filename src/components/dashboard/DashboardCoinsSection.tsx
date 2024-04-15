import { DEFAULT_ICON_SIZE, UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";
import DefaultCard from "../utils/DefaultCard";
import FlexContainer from "../utils/FlexContainer";
import { fetchUserPoints, getAuthID } from "@/src/libs/prisma/fetchUserData";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardCoinsSection({
  className,
}: UtilityType) {
  const { data: auth_id } = await getAuthID();
  const { data: points } = await fetchUserPoints(auth_id);

  return (
    <FlexContainer
      className={twMerge("flex-col items-start justify-start gap-2", className)}
    >
      <h1 className="font-bold text-gray-700">Shifty Balance</h1>
      <DefaultCard className="flex flex-col items-center justify-center gap-3 p-2 h-full">
        <Link href="/dashboard/shop">
          <FlexContainer className="gap-3 drop-shadow-2xl">
            <h1 className="font-bold text-6xl text-gray-700">{points ?? 0}</h1>
            <Image
              alt="Shift Coins"
              src="/icons/icon_fire_filled.svg"
              width={DEFAULT_ICON_SIZE * 1.5}
              height={DEFAULT_ICON_SIZE * 1.5}
            />
          </FlexContainer>
        </Link>
      </DefaultCard>
    </FlexContainer>
  );
}
