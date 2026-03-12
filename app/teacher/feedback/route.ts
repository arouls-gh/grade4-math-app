import redis from "@/lib/redis"
import { NextResponse } from "next/server"

export async function GET(){

try{

const data = await redis.lrange("studentFeedback",0,-1)

return NextResponse.json(
  data.map(item=>JSON.parse(item))
)

}catch(err){

console.error(err)

return NextResponse.json({
error:"failed"
})

}

}