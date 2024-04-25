"use client";
import React from "react";
import PrimaryButton from "./utils/PrimaryButton";
import {
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import RightArrow from "./utils/graphics/RightArrow";

export default function Hero() {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <div className="flex flex-col items-center text-center justify-center gap-6 h-[70vh] sm:px-10 px-6">
      <h1 className="sm:text-7xl text-5xl max-[420px]:text-4xl font-bold text-blue-500">
        <span className="text-gray-700">Delegate Tasks Effortlessly -</span>{" "}
        Daily, Weekly, and Monthly.
      </h1>
      <p className="sm:text-xl text-lg">
        Say Goodbye to{" "}
        <span className="sm:text-3xl text-xl font-bold">Manual Work</span> and
        Hello to{" "}
        <span className="sm:text-3xl text-xl font-bold text-blue-500">
          Seamless Automation.
        </span>{" "}
        Give us your shifts, and we'll handle the rest.
      </p>
      {isAuthenticated ? (
        <Link href="/dashboard">
          <PrimaryButton className="text-xl px-8 pr-4 py-3 flex items-center justify-center">
            Go to Dashboard <RightArrow />
          </PrimaryButton>
        </Link>
      ) : (
        <RegisterLink>
          <PrimaryButton className="text-xl px-8 py-3">
            Get Started
          </PrimaryButton>
        </RegisterLink>
      )}
    </div>
  );
}
