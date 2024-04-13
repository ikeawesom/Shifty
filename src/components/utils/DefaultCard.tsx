import { UtilityType } from "@/src/constants";
import { twMerge } from "tailwind-merge";

export default function DefaultCard({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full bg-white shadow-sm rounded-lg sm:p-8 p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
