"use server";
import { EventType } from "@/src/constants";
import { prismaConnect, prismaDisconnect } from ".";
import handleResponses from "../handleResponses";
import client from "./prismadb";

export async function getMemberData(member_id: string) {
  try {
    await prismaConnect();
    const memberData = await client.member.findUnique({ where: { member_id } });
    return handleResponses({ data: memberData });
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
  } finally {
    await prismaDisconnect();
  }
}

export async function getEventsMembers(member_id: string) {
  try {
    await prismaConnect();
    const events = await client.event.findMany({
      where: { members: { hasEvery: [member_id] } },
      orderBy: { createdOn: "desc" },
    });

    return handleResponses({ data: events });
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
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
    return handleResponses({ status: false, error: error.message });
  } finally {
    await prismaDisconnect();
  }
}

export async function deleteMember(member: string) {
  try {
    await prismaConnect();
    const { data, error } = await getEventsMembers(member);
    if (error) throw new Error(error);

    const events = data as EventType[];

    if (events.length !== 0)
      throw new Error(
        "This member is still participating in some activities. Please remove them from their activities before deleting this member."
      );

    await client.member.delete({
      where: { member_id: member },
    });

    return handleResponses();
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
  } finally {
    await prismaDisconnect();
  }
}
