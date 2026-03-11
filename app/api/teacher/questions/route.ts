import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

export async function GET(){

  try{

    const questions = await kv.lrange("studentQuestions",0,-1)

    return NextResponse.json({
      success:true,
      data:questions
    })

  }catch(err:any){

    console.error("Teacher Questions API Error:",err)

    return NextResponse.json({
      success:false,
      error:String(err)
    })

  }

}