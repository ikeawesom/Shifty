import React from "react";
import FlexContainer from "../../utils/FlexContainer";
import DefaultSkeleton from "../../utils/DefaultSkeleton";

export default function AccountDetailsLoadSkeleton() {
  return (
    <FlexContainer className="flex-col gap-2 w-full">
      <DefaultSkeleton />
      <DefaultSkeleton />
    </FlexContainer>
  );
}
