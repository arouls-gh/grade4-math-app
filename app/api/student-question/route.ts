import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { username, chapter, questionNumber, question } = await req.json();

  const record = {
    username,
    chapter,
    questionNumber,
    question,
    timestamp: Date.now()
  };

  await kv.lpush("studentQuestions", JSON.stringify(record));

  return NextResponse.json({ success: true });

}