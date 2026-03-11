import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

const filePath = path.join(process.cwd(),"data","studentFeedback.json")

export async function POST(req:Request){

  const body = await req.json()

  const { username, chapter, feedback } = body

  if(!username || !chapter || !feedback){
    return NextResponse.json({error:"Missing fields"},{status:400})
  }

  let data:any[] = []

  try{

    if(fs.existsSync(filePath)){
      const file = fs.readFileSync(filePath,"utf8")
      data = JSON.parse(file)
    }

  }catch{
    data=[]
  }

  data.push({
    username,
    chapter,
    feedback
  })

  fs.writeFileSync(filePath,JSON.stringify(data,null,2))

  return NextResponse.json({success:true})

}