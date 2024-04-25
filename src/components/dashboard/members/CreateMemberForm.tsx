"use client";
import React from "react";
import FlexContainer from "../../utils/FlexContainer";
import Back from "../../utils/texts/Back";
import FormInputContainer from "../../utils/FormInputContainer";
import { twMerge } from "tailwind-merge";
import SecondaryButton from "../../utils/SecondaryButton";
import HRow from "../../utils/HRow";
import PrimaryButton from "../../utils/PrimaryButton";
import RightArrow from "../../utils/graphics/RightArrow";
import SpinnerBright from "../../utils/graphics/SpinnerBright";
import { useCreateMember } from "@/src/hooks/useCreateMember";

export default function CreateMemberForm() {
  const {
    handleChange,
    handleSubmit,
    memberDetails,
    setMemberDetails,
    loading,
    errorMessage,
  } = useCreateMember();

  return (
    <FlexContainer className="flex-col gap-3 w-full justify-start items-start">
      <Back />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-start justify-start w-full"
      >
        <h1 className="text-2xl font-bold">Create New Member</h1>
        <FormInputContainer id="first_name" text="Enter member's first name">
          <input
            className="max-w-[500px] w-full"
            name="first_name"
            value={memberDetails.first_name}
            onChange={handleChange}
            placeholder="e.g. John"
          />
        </FormInputContainer>
        <FormInputContainer id="last_name" text="Enter member's last name">
          <input
            className="max-w-[500px] w-full"
            name="last_name"
            value={memberDetails.last_name}
            onChange={handleChange}
            placeholder="e.g. Tan"
          />
        </FormInputContainer>
        <HRow className="max-w-[500px]" />
        <SecondaryButton
          className="text-sm"
          onClick={() =>
            setMemberDetails({
              ...memberDetails,
              points: {
                points: !memberDetails.points.disabled
                  ? 0
                  : memberDetails.points.points,
                disabled: !memberDetails.points.disabled,
              },
            })
          }
          activated={!memberDetails.points.disabled}
        >
          Change default points value
        </SecondaryButton>
        <FormInputContainer id="points" text="Starting points">
          <input
            disabled={memberDetails.points.disabled}
            name="points"
            className={twMerge(
              memberDetails.points.disabled && "bg-white/40 border-blue-200"
            )}
            value={memberDetails.points.points}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let value = 0;
              if (e.target.value !== "") {
                value = parseInt(e.target.value);
              }
              setMemberDetails({
                ...memberDetails,
                points: {
                  ...memberDetails.points,
                  points: value,
                },
              });
            }}
          />
        </FormInputContainer>
        <PrimaryButton
          type="submit"
          disabled={loading}
          className={twMerge(
            "mt-2 flex items-center justify-center",
            loading ? "gap-1" : "pr-4"
          )}
        >
          Create Member
          {loading ? <SpinnerBright /> : <RightArrow />}
        </PrimaryButton>
      </form>
      {errorMessage !== "" && (
        <p className="text-sm text-red-500">ERROR: {errorMessage}</p>
      )}
    </FlexContainer>
  );
}
