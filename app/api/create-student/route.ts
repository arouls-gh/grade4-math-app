import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function POST(req: Request) {

try{

const {name,standard,section,password} = await req.json()

const base = name.split(" ")[0].toLowerCase()

let username = `${base}_${standard}_${section}`
let count = 1

while(await redis.exists(`student:${username}`)){
count++
username = `${base}_${standard}_${section}_${count}`
}

await redis.set(
`student:${username}`,
JSON.stringify({
name,
standard,
section,
password
})
)

return NextResponse.json({
success:true,
username
})

}catch(err){

console.error("CREATE STUDENT ERROR:",err)

return NextResponse.json({
success:false,
message:"Account creation failed"
})

}

}