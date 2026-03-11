import { NextResponse } from "next/server"
import { otpStore } from "@/lib/otpStore"

export async function POST(req:Request){

const {mobile} = await req.json()

if(!mobile){
return NextResponse.json({
success:false,
message:"Mobile number required"
})
}

const otp = Math.floor(100000 + Math.random()*900000).toString()

const expires = Date.now() + 5 * 60 * 1000

otpStore.set(mobile,{
otp,
expires
})

console.log("OTP for",mobile,"=",otp)

return NextResponse.json({
success:true
})

}
