"use client";
import { DEFAULT_ICON_SIZE, NavLinkType } from "@/src/constants";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FlexContainer from "../../utils/FlexContainer";

export default function SidebarTab(config: NavLinkType) {
  const pathname = usePathname();
  const { link, title, icon } = config;

  return (
    <Link
      href={link}
      className={twMerge(
        "custom text-lg p-2 rounded-lg duration-100 w-full",
        pathname === link ? "bg-blue-200" : "hover:bg-blue-100 group"
      )}
    >
      <FlexContainer className="justify-start max-[600px]:justify-center">
        <Image
          alt=""
          width={DEFAULT_ICON_SIZE}
          height={DEFAULT_ICON_SIZE}
          src={`/icons/${icon}`}
        />
        <h1
          className={twMerge(
            "max-[600px]:hidden group-hover:text-gray-700 duration-100",
            pathname !== link && "text-gray-400"
          )}
        >
          {title}
        </h1>
      </FlexContainer>
    </Link>
  );
}
