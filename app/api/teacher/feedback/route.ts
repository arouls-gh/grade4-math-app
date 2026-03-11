import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET(){

  try{

    const feedback = await kv.lrange("studentFeedback",0,-1)

    return NextResponse.json(feedback)

  }catch(err){

    console.error("Teacher feedback API error:",err)

    return NextResponse.json({error:"failed"}, {status:500})

  }

}