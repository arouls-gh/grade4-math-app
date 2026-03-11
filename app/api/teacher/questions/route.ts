import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export async function GET(){

const data = await kv.lrange("studentQuestions",0,-1)

return NextResponse.json(data)

}