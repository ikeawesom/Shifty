import { UtilityType } from "@/src/constants";
import { twMerge } from "tailwind-merge";

export default function DefaultCard({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full backdrop-blur-xl border-[1px] bg-gradient-to-br from-white/55 to-white/30 border-white/70 z-20 shadow-sm rounded-lg sm:p-4 p-2",
        className
      )}
    >
      {children}
    </div>
  );
}
