import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req:Request){

const {name,standard,section,password} = await req.json()

const filePath = path.join(process.cwd(),"data","students.json")

let students:any[] = []

if(fs.existsSync(filePath)){
const file = fs.readFileSync(filePath,"utf-8")
students = file ? JSON.parse(file) : []
}

const base = name.split(" ")[0].toLowerCase()

let username = `${base}_${standard}_${section}`

let count = 1

while(students.find(s=>s.username===username)){
count++
username = `${base}_${standard}_${section}_${count}`
}

students.push({
username,
name,
standard,
section,
password
})

fs.writeFileSync(filePath,JSON.stringify(students,null,2))

return NextResponse.json({
success:true,
username
})

}