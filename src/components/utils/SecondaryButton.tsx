import React from "react";
import PrimaryButton from "./PrimaryButton";
import { twMerge } from "tailwind-merge";
import { ButtonType } from "@/src/constants";
import Spinner from "./graphics/Spinner";

export default function SecondaryButton(config: ButtonType) {
  const { onClick, disabled, type, activated, className, children, loading } =
    config;
  return (
    <PrimaryButton
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
      className={twMerge(
        "bg-white text-gray-700 border-[1px] border-slate-50",
        `${disabled ? "opacity-70 cursor-not-allowed" : ""}`,
        activated && "bg-blue-200 border-blue-400",
        className
      )}
    >
      {loading ? <Spinner /> : children ? children : "Click Me"}
    </PrimaryButton>
  );
}
