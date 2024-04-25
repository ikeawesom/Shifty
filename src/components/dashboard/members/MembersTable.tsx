"use client";
import React from "react";
import { MemberType, UtilityType } from "@/src/constants";
import { twMerge } from "tailwind-merge";
import FlexContainer from "../../utils/FlexContainer";
import Spinner from "../../utils/graphics/Spinner";
import { useMembers } from "@/src/hooks/useMembers";
import GraphicsEmpty from "../../utils/graphics/Empty";
import AddMembersOptions from "./AddMembersOptions";
import HRow from "../../utils/HRow";
import Link from "next/link";
import Points from "../../utils/graphics/Points";

export default function MembersTable({ className }: UtilityType) {
  const { loading, members, onQueryChange, query } = useMembers();
  const empty = members?.length === 0;

  const getRoute = (id: string) =>
    `/dashboard/members?${new URLSearchParams({ view: id })}`;

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
        <HRow />
        <div
          className={twMerge(
            "w-full",
            (loading || empty) && "grid place-items-center min-h-[20vh]"
          )}
        >
          {loading ? (
            <Spinner />
          ) : empty && query === "" ? (
            <GraphicsEmpty type="sleeping">
              This place looks empty. Try inviting others or create members!
            </GraphicsEmpty>
          ) : empty && query !== "" ? (
            <GraphicsEmpty type="question" size={250}>
              Hmmm, member "{query}" cannot be found. Try check your spelling or
              create a new member!
            </GraphicsEmpty>
          ) : (
            members && (
              <>
                <table>
                  <tbody>
                    <tr className="header">
                      <th>Name</th>
                      <th>
                        <span className="flex items-center justify-start gap-0">
                          Points <Points />
                        </span>
                      </th>
                    </tr>
                    {members.map((member: MemberType) => {
                      const { member_id, first_name, last_name, points } =
                        member;
                      const full_name = `${first_name} ${last_name}`;
                      if (member_id)
                        return (
                          <tr key={member_id}>
                            <td className="custom">
                              <Link
                                className="block custom p-3"
                                href={getRoute(member_id)}
                              >
                                {full_name}
                              </Link>
                            </td>
                            <td className="custom">
                              <Link
                                className="block custom p-3"
                                href={getRoute(member_id)}
                              >
                                <span className="flex items-center justify-start gap-0">
                                  {points} <Points />
                                </span>
                              </Link>
                            </td>
                          </tr>
                        );
                    })}
                  </tbody>
                </table>
              </>
            )
          )}
        </div>
      </FlexContainer>
    </>
  );
}
