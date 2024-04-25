import React from "react";
import { Metadata } from "next";
import Title from "@/src/components/utils/texts/Title";
import FlexContainer from "@/src/components/utils/FlexContainer";
import DefaultCard from "@/src/components/utils/DefaultCard";
import MembersTable from "@/src/components/dashboard/members/MembersTable";
import CreateMemberForm from "@/src/components/dashboard/members/CreateMemberForm";
import MemberDetailsSection from "@/src/components/dashboard/members/MemberDetailsSection";

export const metadata: Metadata = {
  title: "Members",
};

export default function MembersPage({
  searchParams,
}: {
  searchParams: { [method: string]: string };
}) {
  const method = searchParams.new;
  const viewID = searchParams.view;

  return (
    <FlexContainer className="flex-col items-start justify-start w-full">
      <div>
        <Title>Members</Title>
        <p className="text-sm mt-2">
          Configure and manage all your participating members here.
        </p>
      </div>
      <DefaultCard>
        {method === "import" ? (
          <></>
        ) : method === "create" ? (
          <CreateMemberForm />
        ) : viewID ? (
          <MemberDetailsSection member={viewID} />
        ) : (
          <MembersTable />
        )}
      </DefaultCard>
    </FlexContainer>
  );
}
