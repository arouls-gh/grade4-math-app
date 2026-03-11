import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { username, chapter, feedback } = await req.json();

  const record = {
    username,
    chapter,
    feedback,
    timestamp: Date.now()
  };

  await kv.lpush("studentFeedback", JSON.stringify(record));

  return NextResponse.json({ success: true });

}