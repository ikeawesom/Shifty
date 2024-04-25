"use server";
import { redirect } from "next/navigation";
import { prismaConnect, prismaDisconnect } from ".";
import { getServerSession } from "../auth/getServerSession";
import handleResponses from "../handleResponses";
import client from "./prismadb";

export async function getAuthID() {
  try {
    await prismaConnect();

    const {
      user: { email },
    } = await getServerSession();

    const auth_id = await client.user.findUnique({
      where: {
        email: email ?? "",
      },
      select: {
        auth_id: true,
      },
    });

    if (!auth_id || !email)
      redirect(
        `/error?${new URLSearchParams({
          code: `404`,
          message: "Invalid email address. Please sign out and try again.",
        })}`
      );

    return handleResponses({ data: auth_id.auth_id });
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
  }
}

export async function fetchCurrentEvents(auth_id: string) {
  try {
    await prismaConnect();
    const userPlansData = await client.event.findMany({
      where: { createdBy: auth_id },
    });
    return handleResponses({ data: userPlansData });
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
  } finally {
    await prismaDisconnect();
  }
}

export async function fetchUserPoints(auth_id: string) {
  try {
    await prismaConnect();
    const pointsData = await client.user.findUnique({
      where: { auth_id },
      select: { points: true },
    });
    return handleResponses({ data: pointsData?.points });
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
  } finally {
    await prismaDisconnect();
  }
}

export async function fetchUserMembers(auth_id: string) {
  try {
    await prismaConnect();
    const membersData = await client.member.findMany({
      where: { createdBy: auth_id },
      orderBy: { points: "desc" },
    });
    return handleResponses({ data: membersData });
  } catch (error: any) {
    return handleResponses({ status: false, error: error.message });
  } finally {
    await prismaDisconnect();
  }
}
