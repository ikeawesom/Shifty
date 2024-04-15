"use client";
import { ButtonType } from "@/src/constants";
import { twMerge } from "tailwind-merge";
import SpinnerBright from "./SpinnerBright";

export default function PrimaryButton(config: ButtonType) {
  const { children, className, disabled, loading, onClick, type } = config;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type ? type : "button"}
      className={twMerge(
        "rounded-lg shadow-sm duration-150 ease-in-out bg-blue-500 text-slate-50 px-6 py-2",
        `${
          disabled || loading
            ? "opacity-70 cursor-not-allowed"
            : "hover:brightness-90"
        }`,
        className
      )}
    >
      {loading ? <SpinnerBright /> : children ? children : "Click Me"}
    </button>
  );
}
