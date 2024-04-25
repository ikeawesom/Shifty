"use client";
import React from "react";
import { MemberType, UtilityType } from "@/src/constants";
import { twMerge } from "tailwind-merge";
import FlexContainer from "../../utils/FlexContainer";
import Spinner from "../../utils/graphics/Spinner";
import { useMembers } from "@/src/hooks/useMembers";
import GraphicsEmpty from "../../utils/graphics/Empty";
import AddMembersOptions from "./AddMembersOptions";

export default function MembersTable({ className }: UtilityType) {
  const { loading, members, onQueryChange, query } = useMembers();
  const empty = members?.length === 0;

  return (
    <>
      <FlexContainer className="flex-col items-start justify-start w-full gap-2">
        <form className="flex items-center justify-between w-full gap-3 flex-wrap">
          <input
            className="flex-1"
            placeholder="Search for member..."
            type="text"
            value={query}
            onChange={onQueryChange}
          />
          <AddMembersOptions />
        </form>
        <div
          className={twMerge(
            "w-full",
            (loading || empty) && "grid place-items-center min-h-[20vh]"
          )}
        >
          {loading ? (
            <Spinner />
          ) : empty ? (
            <GraphicsEmpty type="sleeping">
              This place looks empty. Try inviting others or create members!
            </GraphicsEmpty>
          ) : (
            members &&
            members.map((member: MemberType) => {
              const { member_id, first_name, last_name, points } = member;
              const full_name = `${first_name} ${last_name}`;
              return (
                <tr
                  className="flex items-center justify-between p-3"
                  key={member_id}
                >
                  <p>{full_name}</p>
                  <p>{points}</p>
                </tr>
              );
            })
          )}
        </div>
      </FlexContainer>
    </>
  );
}
