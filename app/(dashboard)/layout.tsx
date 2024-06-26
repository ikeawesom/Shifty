import PageWrapper from "@/src/components/PageWrapper";
import CoinsSection from "@/src/components/dashboard/CoinsSection";
import Sidebar from "@/src/components/navigation/sidebar/Sidebar";
import FlexContainer from "@/src/components/utils/FlexContainer";
import { setupNewUser } from "@/src/libs/auth/setupNewUser";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const authenticated = await isAuthenticated();
  if (user === null || !authenticated) redirect("/api/auth/login");

  const { error } = await setupNewUser(user);
  if (error)
    redirect(
      `/error?${new URLSearchParams({
        error: error.code,
        message: error.message,
      })}`
    );

  return (
    <div className="min-h-svh w-full flex items-start justify-start">
      <Sidebar />
      <FlexContainer className="flex-col w-full gap-0 items-end">
        <CoinsSection className="min-[600px]:hidden p-3" />
        <PageWrapper
          parentClassName="w-full block p-4"
          className="max-w-[100%] p-0"
        >
          {children}
        </PageWrapper>
      </FlexContainer>
    </div>
  );
}
