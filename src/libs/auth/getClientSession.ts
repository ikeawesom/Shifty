"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export function getClientSession() {
  const { getUser, isAuthenticated } = useKindeBrowserClient();
  const user = getUser() as KindeUser;

  return { user, authenticated: isAuthenticated };
}
