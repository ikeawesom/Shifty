import React from "react";
import LogoutButton from "../auth/LogoutButton";
import FlexContainer from "../utils/FlexContainer";
import ProfileIcon from "./sidebar/ProfileIcon";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavAccountDetails() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <FlexContainer className="flex-col gap-4 w-full">
      <FlexContainer className="justify-start gap-3 min-[600px]:pr-4">
        <ProfileIcon
          text={user?.given_name ?? "User"}
          custom={user?.picture !== null}
          src={user?.picture ?? ""}
        />
        <FlexContainer className="flex-col items-start justify-start gap-0 min-[600px]:pr-10 max-[600px]:hidden">
          <h1 className="text-lg font-bold">
            {user?.given_name} {user?.family_name}
          </h1>
          <p className="text-sm">{user?.email}</p>
        </FlexContainer>
      </FlexContainer>
      <LogoutButton className="w-full custom" />
    </FlexContainer>
  );
}
