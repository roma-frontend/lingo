import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { challengesOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async (req: Request) => {
  if (!isAdmin) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const data = await db.query.challengesOptions.findMany();

  return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!isAdmin) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const data = await db
    .insert(challengesOptions)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
