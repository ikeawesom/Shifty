import CenterContainer from "@/src/components/CenterContainer";
import FlexContainer from "@/src/components/utils/FlexContainer";
import { DEFAULT_ICON_SIZE } from "@/src/constants";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "An error has occurred!",
};

export default function ErrorPage({
  searchParams,
}: {
  searchParams: { [query: string]: string };
}) {
  const { code, message } = searchParams;
  if (!message) redirect("/");

  return (
    <CenterContainer className="min-h-svh">
      <FlexContainer className="gap-5 flex-col">
        <Image
          src="/icons/icon_hm.svg"
          alt="An error has occured"
          width={DEFAULT_ICON_SIZE * 5}
          height={DEFAULT_ICON_SIZE * 5}
        />
        <FlexContainer className="gap-4 flex-col text-4xl text-center">
          <h1 className="font-bold text-blue-500">
            Oops, an error has occured.
          </h1>
          <h1 className="font-bold text-gray-700">Please try again later.</h1>
          <p className="text-lg text-gray-500">{`ERROR ${
            code ?? 404
          }: ${message}`}</p>
        </FlexContainer>
      </FlexContainer>
    </CenterContainer>
  );
}
