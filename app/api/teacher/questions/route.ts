import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function GET(){

  try{

    const questions = await redis.lrange("studentQuestions",0,-1)

    const parsed = questions.map((q)=>JSON.parse(q))

    return NextResponse.json({
      success:true,
      data:parsed
    })

  }catch(err:any){

    console.error("Teacher Questions API Error:",err)

    return NextResponse.json({
      success:false,
      error:String(err)
    })

  }

}