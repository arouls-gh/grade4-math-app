import Redis from "ioredis"
import { NextResponse } from "next/server"

const redis = new Redis(process.env.REDIS_URL as string)

export async function POST(req: Request) {

try{

const body = await req.json()
const username = body.username?.trim()
const password = body.password?.trim()

if(!username || !password){
return NextResponse.json({
success:false,
message:"Username and password required"
})
}

const data = await redis.get(`student:${username}`)

if(!data){
return NextResponse.json({
success:false,
message:"Invalid username or password"
})
}

const user = JSON.parse(data)

if(user.password !== password){
return NextResponse.json({
success:false,
message:"Invalid username or password"
})
}

const res = NextResponse.json({
success:true
})

res.cookies.set("student_session",username,{
httpOnly:true,
path:"/"
})

return res

}catch(err){

console.error("LOGIN ERROR:",err)

return NextResponse.json({
success:false,
message:"Login server error"
})

}

}