"use server";
import { prismaConnect, prismaDisconnect } from ".";
import handleResponses from "../handleResponses";
import client from "./prismadb";

export async function getMemberData(member_id: string) {
  try {
    await prismaConnect();
    const memberData = await client.member.findUnique({ where: { member_id } });
    return handleResponses({ data: memberData });
  } catch (error: any) {
    return handleResponses({ status: false, error });
  } finally {
    await prismaDisconnect();
  }
}
