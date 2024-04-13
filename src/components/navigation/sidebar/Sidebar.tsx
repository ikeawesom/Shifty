import React, { Suspense } from "react";
import Logo from "../../Logo";
import FlexContainer from "../../utils/FlexContainer";
import { NAVBAR_DASHBOARD_LINKS, NavLinkType } from "@/src/constants";
import SidebarTab from "./SidebarTab";
import NavAccountDetails from "../NavAccountDetails";
import AccountDetailsLoadSkeleton from "./AccountDetailsLoadSkeleton";

export default async function Sidebar() {
  return (
    <FlexContainer className="w-fit min-[600px]:py-6 p-3 max-[600px]:p-2 bg-white/30 backdrop-blur-xl border-[1px] border-white/70 z-20 shadow-sm min-h-svh h-svh flex-col items-center justify-between gap-6">
      <FlexContainer className="flex-col items-center justify-start gap-6 w-full">
        <Logo className="max-[600px]:hidden" />
        <FlexContainer className="gap-4 flex-col w-full">
          {NAVBAR_DASHBOARD_LINKS.map((navLink: NavLinkType, index: number) => {
            const { link, title, icon } = navLink;
            return (
              <SidebarTab key={index} link={link} title={title} icon={icon} />
            );
          })}
        </FlexContainer>
      </FlexContainer>
      <Suspense fallback={<AccountDetailsLoadSkeleton />}>
        <NavAccountDetails />
      </Suspense>
    </FlexContainer>
  );
}
