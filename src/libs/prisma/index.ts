import client from "./prismadb";

export async function prismaConnect() {
  try {
    await client.$connect();
    console.log("[PRISMA] Connected to database.");
  } catch (err: any) {
    console.log(`[PRISMA] ERROR ${err.code}: ${err.message}`);
  }
}

export async function prismaDisconnect() {
  try {
    await client.$disconnect();
    console.log("[PRISMA] Disconnected from database.");
  } catch (err: any) {
    console.log(`[PRISMA] ERROR ${err.code}: ${err.message}`);
  }
}
