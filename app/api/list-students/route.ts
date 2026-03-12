import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function GET() {

try{

const keys = await redis.keys("student:*")

const students:any[] = []

for(const key of keys){

const data = await redis.get(key)

if(data){

const student = JSON.parse(data)

students.push({
username: key.replace("student:",""),
name: student.name,
standard: student.standard,
section: student.section
})

}

}

return NextResponse.json({
success:true,
count:students.length,
students
})

}catch(err){

console.error("LIST STUDENTS ERROR:",err)

return NextResponse.json({
success:false
})

}

}