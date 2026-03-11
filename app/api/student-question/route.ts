import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(),"data","studentQuestions.json")

export async function POST(req:Request){

  const body = await req.json()

  const { username, chapter, questionNumber, question } = body

  const existing = JSON.parse(fs.readFileSync(filePath,"utf8"))

  existing.push({
    username,
    chapter,
    questionNumber,
    question
  })

  fs.writeFileSync(filePath,JSON.stringify(existing,null,2))

  return NextResponse.json({status:"saved"})

}