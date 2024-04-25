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

export default async function UpcomingEvents({ className }: UtilityType) {
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

  console.log("events:", userCurrentEvents);
  data = [];

  const empty = data.length === 0;

  return (
    <FlexContainer
      className={twMerge("flex-col items-start justify-start gap-2", className)}
    >
      <h1 className="font-bold">Your upcoming events</h1>
      <DefaultCard className="flex flex-col items-start justify-start gap-3 p-2 h-full">
        {empty ? (
          <CenterContainer className="w-full h-full">
            <FlexContainer className="flex-col gap-4 text-center">
              <p className="text-sm">
                Hmm, looks like you have not created any events.
              </p>
              <Link
                className="custom"
                href={`/dashboard/events?${new URLSearchParams({
                  create: "true",
                })}`}
              >
                <PrimaryButton>Create Event</PrimaryButton>
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
