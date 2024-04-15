import React from "react";
import DefaultCard from "../utils/DefaultCard";
import { fetchCurrentEvents, getAuthID } from "@/src/libs/prisma/fetchUserData";
import { redirect } from "next/navigation";
import CenterContainer from "../CenterContainer";
import PrimaryButton from "../utils/PrimaryButton";
import { UtilityType } from "@/src/constants";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import FlexContainer from "../utils/FlexContainer";

export default async function TopPerformingMembers({ className }: UtilityType) {
  let data = [] as any[];

  const { data: auth_id } = await getAuthID();

  const { data: userCurrentEvents, error } = await fetchCurrentEvents(auth_id);
  if (error)
    redirect(
      `/error?${new URLSearchParams({
        code: error.code,
        message: error.message,
      })}`
    );
  else {
    console.log("data:", userCurrentEvents);
    data = [];
  }

  const empty = data.length === 0;

  return (
    <FlexContainer
      className={twMerge("flex-col items-start justify-start gap-2", className)}
    >
      <h1 className="font-bold text-gray-700">Top Monthly Performers</h1>
      <DefaultCard className="flex flex-col items-start justify-start gap-3 p-2 h-full">
        {empty ? (
          <CenterContainer className="w-full h-full">
            <FlexContainer className="flex-col gap-4">
              <p className="text-sm">Nobody here yet. Let's invite some!</p>
              <Link
                className="custom"
                href={`/dashboard/members?${new URLSearchParams({
                  invite: "true",
                })}`}
              >
                <PrimaryButton>Invite Members</PrimaryButton>
              </Link>
            </FlexContainer>
          </CenterContainer>
        ) : (
          <></>
        )}
      </DefaultCard>
    </FlexContainer>
  );
}
