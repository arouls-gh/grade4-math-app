import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function POST(req: Request){

try{

const {name,standard,section} = await req.json()

if(!name){
return NextResponse.json({
success:false,
message:"Student name required"
})
}

const base = name.split(" ")[0].toLowerCase()

const keys = await redis.keys(`student:${base}_${standard}_${section}*`)

if(keys.length === 0){
return NextResponse.json({
success:false,
message:"Student not found"
})
}

const data = await redis.get(keys[0])

if(!data){
return NextResponse.json({
success:false,
message:"Student not found"
})
}

const student = JSON.parse(data)

const username = keys[0].replace("student:","")

return NextResponse.json({
success:true,
username,
password:student.password
})

}catch(err){

console.error("RECOVER ERROR:",err)

return NextResponse.json({
success:false,
message:"Server error"
})

}

}