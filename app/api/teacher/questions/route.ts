import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {

  const data = await kv.lrange("studentQuestions", 0, -1);

  const questions = data.map((x: any) => JSON.parse(x));

  return NextResponse.json(questions);

}