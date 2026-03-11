import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req:Request){

const {username} = await req.json()

if(!username){
return NextResponse.json({
success:false,
message:"Username required"
})
}

const name = username.split("_")[0]
const password = name

const filePath = path.join(process.cwd(),"data","students.json")

let users:any[] = []

if(fs.existsSync(filePath)){
const file = fs.readFileSync(filePath,"utf-8")
users = file ? JSON.parse(file) : []
}

const exists = users.find(u=>u.username===username)

if(exists){
return NextResponse.json({
success:false,
message:"Username already exists. Try another."
})
}

users.push({
username,
password
})

fs.writeFileSync(filePath,JSON.stringify(users,null,2))

return NextResponse.json({
success:true
})

}