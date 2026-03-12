import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function GET(){

  try{

    const feedback = await redis.lrange("studentFeedback",0,-1)

    const parsed = feedback.map((f)=>JSON.parse(f))

    return NextResponse.json({
      success:true,
      data:parsed
    })

  }catch(err:any){

    console.error("Teacher Feedback API Error:",err)

    return NextResponse.json({
      success:false,
      error:String(err)
    })

  }

}