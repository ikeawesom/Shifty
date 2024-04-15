import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export async function getServerSession() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  const user = (await getUser()) as KindeUser;

  return { user, authenticated: isLoggedIn };
}
