import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET(){

  try{

    const questions = await kv.lrange("studentQuestions",0,-1)

    return NextResponse.json(questions)

  }catch(err){

    console.error("Teacher questions API error:",err)

    return NextResponse.json({error:"failed"}, {status:500})

  }

}