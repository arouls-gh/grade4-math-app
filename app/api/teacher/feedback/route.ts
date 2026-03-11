import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {

  const feedback = await kv.lrange("studentFeedback", 0, -1);

  return NextResponse.json(feedback);

}