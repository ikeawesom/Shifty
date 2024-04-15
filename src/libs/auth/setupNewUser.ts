import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import client from "../prisma/prismadb";
import { prismaConnect } from "../prisma";
import handleResponses from "../handleResponses";

export async function setupNewUser(user: KindeUser) {
  try {
    await prismaConnect();
    const data = await client.user.findUnique({
      where: { auth_id: user.id ?? "" },
    });

    if (data === null) {
      // not found
      await client.user.create({
        data: {
          auth_id: user.id,
          email: user.email ?? "",
          first_name: user.given_name ?? "",
          last_name: user.family_name ?? "",
          points: 100,
        },
      });
    }
    return handleResponses();
  } catch (error: any) {
    return handleResponses({ status: false, error });
  }
}
