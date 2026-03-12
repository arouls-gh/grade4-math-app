import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

async function ensureStaticUser(){

const exists = await redis.exists("student:aroul")

if(!exists){

await redis.set(
"student:aroul",
JSON.stringify({
name:"aroul",
standard:"admin",
section:"admin",
password:"aroul123"
})
)

}

}

export async function GET(){

try{

// ensure static user always exists
await ensureStaticUser()

const keys = await redis.keys("student:*")

const students:any[] = []

for(const key of keys){

const data = await redis.get(key)

if(data){

const student = JSON.parse(data)

students.push({
username:key.replace("student:",""),
name:student.name,
standard:student.standard,
section:student.section
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