import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function POST(req:Request){

  try{

    const body = await req.json()

    const record = {
      username: body.username,
      chapter: body.chapter,
      questionNumber: body.questionNumber,
      question: body.question
    }

    await redis.lpush(
      "studentQuestions",
      JSON.stringify(record)
    )

    return NextResponse.json({success:true})

  }catch(err){

    console.error("Question Save Error:",err)

    return NextResponse.json({
      success:false
    })

  }

}