import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request){

const {name,standard,section} = await req.json()

const filePath = path.join(process.cwd(),"data","students.json")

if(!fs.existsSync(filePath)){
return NextResponse.json({success:false})
}

const file = fs.readFileSync(filePath,"utf-8")
const students = file ? JSON.parse(file) : []

const student = students.find(
(s:any)=>
s.name.toLowerCase() === name.toLowerCase() &&
s.standard === standard &&
s.section === section
)

if(!student){
return NextResponse.json({
success:false,
message:"Student not found"
})
}

return NextResponse.json({
success:true,
username:student.username,
password:student.password
})

}