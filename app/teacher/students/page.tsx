"use client"

import { useState } from "react"

export default function TeacherStudents(){

const [name,setName] = useState("")
const [standard,setStandard] = useState("4")
const [section,setSection] = useState("A")
const [password,setPassword] = useState("")
const [result,setResult] = useState<any>(null)
const [loading,setLoading] = useState(false)

async function createStudent(){

if(!name || !password){
alert("Enter student name and password")
return
}

setLoading(true)

const res = await fetch("/api/create-student",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
standard,
section,
password
})
})

const data = await res.json()

setLoading(false)

if(data.success){
setResult(data)
}else{
alert(data.message || "Error creating student")
}

}

return(

<div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">

<h1 className="text-4xl font-bold mb-8">
Create Student (Teacher Panel)
</h1>

<input
placeholder="Student Name"
className="border border-gray-400 p-3 mb-4 w-80"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<select
className="border border-gray-400 p-3 mb-4 w-80"
value={standard}
onChange={(e)=>setStandard(e.target.value)}
>

<option value="1">Std 1</option>
<option value="2">Std 2</option>
<option value="3">Std 3</option>
<option value="4">Std 4</option>
<option value="5">Std 5</option>

</select>

<select
className="border border-gray-400 p-3 mb-4 w-80"
value={section}
onChange={(e)=>setSection(e.target.value)}
>

<option value="A">Section A</option>
<option value="B">Section B</option>
<option value="C">Section C</option>
<option value="D">Section D</option>
<option value="E">Section E</option>
<option value="F">Section F</option>

</select>

<input
placeholder="Password"
type="text"
className="border border-gray-400 p-3 mb-6 w-80"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={createStudent}
className="bg-black text-white px-8 py-3 rounded"
disabled={loading}
>

{loading ? "Creating..." : "Create Student"}

</button>

{result && (

<div
className="mt-6 border border-green-600 bg-green-100 p-4 w-80 text-center"
>

<p className="font-bold">
Student Created
</p>

<p>
Username: <b>{result.username}</b>
</p>

</div>

)}

</div>

)

}