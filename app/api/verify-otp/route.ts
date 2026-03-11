import { NextResponse } from "next/server"
import { otpStore } from "@/lib/otpStore"

export async function POST(req:Request){

const {mobile,otp} = await req.json()

const record = otpStore.get(mobile)

if(!record){
return NextResponse.json({
success:false,
message:"OTP not found"
})
}

if(Date.now() > record.expires){
otpStore.delete(mobile)

return NextResponse.json({
success:false,
message:"OTP expired"
})
}

if(record.otp !== otp){
return NextResponse.json({
success:false,
message:"Invalid OTP"
})
}

otpStore.delete(mobile)

return NextResponse.json({
success:true
})

}
