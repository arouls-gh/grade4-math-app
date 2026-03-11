import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export async function POST(req:Request){

const body = await req.json()

await kv.lpush("studentQuestions", body)

return NextResponse.json({success:true})

}