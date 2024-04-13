import React from "react";
import Logo from "../Logo";
import {
  DEFAULT_ICON_SIZE,
  NAVBAR_MAIN_LINKS,
  NavLinkType,
} from "@/src/constants";
import Link from "next/link";
import FlexContainer from "../utils/FlexContainer";
import Image from "next/image";

export default function MainNav() {
  return (
    <div className="bg-white shadow-sm py-3 px-10 w-full fixed top-0 left-0 z-20 flex items-center justify-between gap-4">
      <Logo />
      <FlexContainer className="justify-start gap-4 sm:gap-8 text-lg">
        {NAVBAR_MAIN_LINKS.map((navLink: NavLinkType) => {
          const { link, title, icon } = navLink;
          return (
            <Link className="hover:text-blue-500" key={link} href={link}>
              {title}
            </Link>
          );
        })}
        <Link href="/api/auth/login">
          <Image
            alt="Account"
            src="/icons/icon_user.svg"
            width={DEFAULT_ICON_SIZE}
            height={DEFAULT_ICON_SIZE}
          />
        </Link>
      </FlexContainer>
    </div>
  );
}
