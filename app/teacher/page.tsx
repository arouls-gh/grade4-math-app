"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TeacherLogin(){

const router = useRouter()

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

function login(){

if(username==="aroul" && password==="aroul123"){

localStorage.setItem("teacher","true")
router.push("/teacher/dashboard")

}else{

setError("Invalid login")

}

}

return(

<div className="min-h-screen flex items-center justify-center bg-white">

<div className="border p-10 rounded-xl shadow w-[400px]">

<h1 className="text-3xl font-bold mb-6 text-center">
Teacher Login
</h1>

<input
className="border p-3 w-full mb-4"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
className="border p-3 w-full mb-4"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={login}
className="bg-blue-700 text-white w-full p-3 rounded"
>
Login
</button>

{error && (

<p className="text-red-600 mt-3 text-center">
{error}
</p>

)}

</div>

</div>

)

}