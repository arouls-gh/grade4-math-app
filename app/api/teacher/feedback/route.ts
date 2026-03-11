import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {

  const data = await kv.lrange("studentFeedback", 0, -1);

  const feedback = data.map((x: any) => JSON.parse(x));

  return NextResponse.json(feedback);

}