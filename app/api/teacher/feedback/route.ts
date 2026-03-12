import Redis from "ioredis"
import { NextResponse } from "next/server"

export async function GET(){

  try{

    const feedback = await kv.lrange("studentFeedback",0,-1)

    return NextResponse.json({
      success:true,
      data:feedback
    })

  }catch(err:any){

    console.error("Teacher Feedback API Error:",err)

    return NextResponse.json({
      success:false,
      error:String(err)
    })

  }

}