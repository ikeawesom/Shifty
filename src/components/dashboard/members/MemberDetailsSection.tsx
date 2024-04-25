"use client";
import React from "react";
import FlexContainer from "../../utils/FlexContainer";
import DefaultSkeleton from "../../utils/DefaultSkeleton";
import Points from "../../utils/graphics/Points";
import Back from "../../utils/texts/Back";
import MemberEventsSection from "./MemberEventsSection";
import useFetchMember from "@/src/hooks/useFetchMember";
import CenterContainer from "../../CenterContainer";
import DeleteMemberButton from "./DeleteMemberButton";

export default function MemberDetailsSection({ member }: { member: string }) {
  const { errorMessage, loading, memberDetails } = useFetchMember(member);

  if (loading)
    return (
      <FlexContainer className="flex-col items-start justify-start gap-2">
        <Back />
        {/* <Spinner /> */}
        <DefaultSkeleton className="max-w-[300px] h-[50px]" />
        <DefaultSkeleton className="max-w-[80px] h-[30px]" />
        <DefaultSkeleton className="max-w-[450px] h-[20px]" />
        <DefaultSkeleton className="min-h-[25vh]" />
        <DefaultSkeleton className="max-w-[150px] h-[50px] mt-3" />
      </FlexContainer>
    );
  if (errorMessage !== "")
    return (
      <CenterContainer className="min-h-[30vh]">
        <h1 className="text-lg text-red-500">ERROR: {errorMessage}</h1>
      </CenterContainer>
    );

  if (memberDetails === undefined) return;

  const { first_name, last_name, member_id, points } = memberDetails;
  const full_name = `${first_name} ${last_name}`;

  return (
    <FlexContainer className="flex-col items-start justify-start gap-2">
      <Back />
      <h1 className="text-4xl font-bold mt-2">{full_name}</h1>
      <h4 className="text-lg flex items-center justify-start animate-pulse">
        {points} <Points className="-translate-x-1" size={30} />
      </h4>
      <p className="text-xs text-gray-400 font-light">Member ID: {member_id}</p>
      <span className="my-2 w-full">
        <MemberEventsSection member={member} />
      </span>
      <DeleteMemberButton member={member} />
    </FlexContainer>
  );
}
