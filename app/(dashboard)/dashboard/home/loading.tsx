import DefaultSkeleton from "@/src/components/utils/DefaultSkeleton";
import React from "react";

export default function loading() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full min-h-[50vh] max-[1090px]:grid-cols-1">
      <DefaultSkeleton className="max-[1090px]:col-span-1 col-span-2 row-span-1 h-full" />
      <DefaultSkeleton className="col-span-1 row-span-1 h-full" />
    </div>
  );
}
