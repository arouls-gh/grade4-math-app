import Redis from "ioredis"
import { NextResponse } from "next/server"

export async function POST(req:Request){

const body = await req.json()

await kv.lpush("studentFeedback", body)

return NextResponse.json({success:true})

}