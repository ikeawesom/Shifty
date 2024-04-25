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

export async function createNewMember(
  first_name: string,
  last_name: string,
  points: number,
  auth_id: string
) {
  try {
    await prismaConnect();
    const { member_id } = await client.member.create({
      data: {
        first_name,
        last_name,
        points,
        createdBy: auth_id,
        createdOn: new Date(),
      },
    });
    return handleResponses({ data: member_id });
  } catch (error: any) {
    return handleResponses({ status: false, error });
  } finally {
    await prismaDisconnect();
  }
}
