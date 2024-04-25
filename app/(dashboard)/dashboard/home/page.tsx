import React from "react";
import { Metadata } from "next";
import Logo from "@/src/components/Logo";
import UpcomingEvents from "@/src/components/dashboard/UpcomingEvents";
import TopPerformingMembers from "@/src/components/dashboard/TopPerformingMembers";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardHomePage() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-6">
      <Logo className="min-[600px]:hidden" />
      <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full min-h-[50vh] max-[1090px]:grid-cols-1">
        <UpcomingEvents className="col-span-2 row-span-2" />
        <TopPerformingMembers className="col-span-1 row-span-2" />
      </div>
    </div>
  );
}
