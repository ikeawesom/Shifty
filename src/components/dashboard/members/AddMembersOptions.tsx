import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import DefaultCard from "../../utils/DefaultCard";
import FlexContainer from "../../utils/FlexContainer";
import PrimaryButton from "../../utils/PrimaryButton";
import SecondaryButton from "../../utils/SecondaryButton";

export default function AddMembersOptions() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <PrimaryButton
        onClick={() => setShow(!show)}
        type="button"
        className={twMerge(
          "flex items-center justify-center gap-2",
          show && "brightness-75 hover:brightness-75"
        )}
      >
        Add Member <span className="pb-[2.2px] text-xl">+</span>
      </PrimaryButton>
      {show && (
        <DefaultCard className="fade-down w-[200px] absolute top-14 min-[689px]:right-0 max-[689px]:left-0 border-slate-100 sm:p-2">
          <FlexContainer className="flex-col gap-2 w-full">
            <Link
              className="w-full custom"
              href={`/dashboard/members?${new URLSearchParams({
                new: "create",
              })}`}
            >
              <PrimaryButton className="w-full">Create members</PrimaryButton>
            </Link>
            <Link
              className="w-full custom"
              href={`/dashboard/members?${new URLSearchParams({
                new: "import",
              })}`}
            >
              <SecondaryButton className="border-slate-100 w-full px-3">
                Import members
              </SecondaryButton>
            </Link>
          </FlexContainer>
        </DefaultCard>
      )}
    </div>
  );
}
