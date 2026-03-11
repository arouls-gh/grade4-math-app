"use client"

import { useState } from "react"

export default function Login(){

const [mode,setMode] = useState<"login"|"register">("login")

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

const [name,setName] = useState("")
const [standard,setStandard] = useState("4")
const [section,setSection] = useState("A")

const [loading,setLoading] = useState(false)

async function handleLogin(){

if(!username || !password){
alert("Enter username and password")
return
}

setLoading(true)

const res = await fetch("/api/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({username,password})
})

setLoading(false)

const data = await res.json()

if(data.success){
window.location.href="/student"
}else{
alert(data.message)
}

}

async function handleRegister(){

if(!name || !password){
alert("Enter all details")
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

setLoading(false)

const data = await res.json()

if(data.success){
alert("Username created: " + data.username)
setMode("login")
}else{
alert(data.message)
}

}

return(

<div className="flex flex-col items-center mt-40">

<h1 className="text-3xl font-bold mb-6">
Student Portal
</h1>

<div className="flex gap-4 mb-6">

<button
onClick={()=>setMode("login")}
className={`px-4 py-2 rounded ${mode==="login"?"bg-blue-600 text-white":"bg-gray-200"}`}

>

Login </button>

<button
onClick={()=>setMode("register")}
className={`px-4 py-2 rounded ${mode==="register"?"bg-green-600 text-white":"bg-gray-200"}`}

>

New Student </button>

</div>

{mode==="login" && (

<>
<input
placeholder="Username"
className="border p-2 mb-4 w-64"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2 mb-4 w-64"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleLogin}
className="bg-blue-600 text-white px-6 py-2 rounded"
disabled={loading}

>

{loading ? "Logging in..." : "Login"} </button>

</>

)}

{mode==="register" && (

<>
<input
placeholder="Student Name with Initial"
className="border p-2 mb-4 w-64"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<select
className="border p-2 mb-4 w-64"
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
className="border p-2 mb-4 w-64"
value={section}
onChange={(e)=>setSection(e.target.value)}

>

<option value="A">Section A</option>
<option value="B">Section B</option>
<option value="C">Section C</option>
</select>

<input
type="password"
placeholder="Choose Password"
className="border p-2 mb-4 w-64"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleRegister}
className="bg-green-700 text-white px-6 py-2 rounded"
disabled={loading}

>

{loading ? "Creating..." : "Create Username"} </button>

</>

)}

</div>

)

}
