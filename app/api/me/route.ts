import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {

try {

const cookieStore = await cookies()

const session = cookieStore.get("student_session")

if(!session){
return NextResponse.json({ success:false })
}

return NextResponse.json({
success:true,
username: session.value
})

} catch(err){

console.error("ME API ERROR:", err)

return NextResponse.json({
success:false
})

}

}