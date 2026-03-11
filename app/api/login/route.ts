import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {

try {

const body = await req.json()
const username = body.username?.trim()
const password = body.password?.trim()

if (!username || !password) {
return NextResponse.json({
success:false,
message:"Username and password required"
})
}

const filePath = path.join(process.cwd(),"data","students.json")

if (!fs.existsSync(filePath)) {
return NextResponse.json({
success:false,
message:"Student database not found"
})
}

const file = fs.readFileSync(filePath,"utf-8")
const students = file ? JSON.parse(file) : []

const user = students.find(
(s:any) =>
s.username?.trim().toLowerCase() === username.toLowerCase() &&
s.password?.trim() === password
)

if (!user) {
return NextResponse.json({
success:false,
message:"Invalid username or password"
})
}

const res = NextResponse.json({
success:true
})

res.cookies.set("student_session", username, {
httpOnly:true,
path:"/"
})

return res

} catch (err) {

console.error("LOGIN ERROR:", err)

return NextResponse.json({
success:false,
message:"Login server error"
})

}

}