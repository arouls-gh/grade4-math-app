import Redis from "ioredis"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const redis = new Redis(process.env.REDIS_URL as string)

export async function POST(req:Request){

  try{

    const body = await req.json()

    /* GET USER FROM COOKIE */

    const session = cookies().get("student_session")?.value

    let username = "unknown"

    if(session){
      const user = await redis.get(session)
      if(user){
        username = user
      }
    }

    /* SAVE QUESTION */

    await redis.lpush(
      "studentQuestions",
      JSON.stringify({
        student: username,
        chapter: body.chapter,
        questionNumber: body.questionNumber,
        question: body.question
      })
    )

    return NextResponse.json({success:true})

  }catch(err){

    console.error("Question Save Error:",err)

    return NextResponse.json({
      success:false
    })

  }

}