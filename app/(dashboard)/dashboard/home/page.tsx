import React from "react";
import { Metadata } from "next";
import Logo from "@/src/components/Logo";
import UpcomingEvents from "@/src/components/dashboard/UpcomingEvents";
import TopPerformingMembers from "@/src/components/dashboard/TopPerformingMembers";
import DashboardCoinsSection from "@/src/components/dashboard/DashboardCoinsSection";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardHomePage() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-6">
      <Logo className="min-[600px]:hidden" />
      <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full">
        <UpcomingEvents className="col-span-2 row-span-3" />
        <DashboardCoinsSection className="col-span-1 row-span-1" />
        <TopPerformingMembers className="col-span-1 row-span-2" />
      </div>
    </div>
  );
}
