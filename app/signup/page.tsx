"use client"

import { useState } from "react"

export default function Signup(){

const [name,setName] = useState("")
const [standard,setStandard] = useState("4")
const [section,setSection] = useState("A")
const [password,setPassword] = useState("")
const [username,setUsername] = useState("")
const [loading,setLoading] = useState(false)

async function createAccount(){

if(!name || !password){
alert("Please fill all details")
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

setUsername(data.username)

// redirect after 3 seconds
setTimeout(()=>{
window.location.href="/"
},3000)

}else{
alert(data.message)
}

}

return(

<div className="min-h-screen flex flex-col items-center justify-center bg-white">

<h1 className="text-4xl font-bold mb-8 text-black">
Create Account
</h1>

<input
placeholder="Student Name with Initial"
className="border border-gray-400 p-3 mb-4 w-80 bg-white text-black"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<select
className="border border-gray-400 p-3 mb-4 w-80 bg-white text-black"
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
className="border border-gray-400 p-3 mb-4 w-80 bg-white text-black"
value={section}
onChange={(e)=>setSection(e.target.value)}

>

<option value="A">Section A</option>
<option value="B">Section B</option>
<option value="C">Section C</option>
<option value="D">Section D</option>
<option value="E">Section E</option>
<option value="F">Section F</option>
<option value="G">Section G</option>
<option value="H">Section H</option>
<option value="I">Section I</option>
<option value="J">Section J</option>
<option value="K">Section K</option>

</select>

<input
type="password"
placeholder="Choose Password"
className="border border-gray-400 p-3 mb-6 w-80 bg-white text-black"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={createAccount}
style={{
backgroundColor:"black",
color:"white",
padding:"12px 32px",
borderRadius:"6px",
fontSize:"18px",
marginTop:"10px",
cursor:"pointer"
}}
disabled={loading || username}

>

{loading ? "Creating..." : "Create Username"}

</button>

{username && (

<div
style={{
marginTop:"30px",
padding:"20px",
border:"2px solid green",
background:"#e8f7e8",
textAlign:"center",
width:"320px"
}}
>

<p style={{fontSize:"18px",fontWeight:"bold"}}>
This is your username
</p>

<p style={{fontSize:"28px",fontWeight:"bold",marginTop:"10px"}}>
{username}
</p>

<p style={{marginTop:"10px"}}>
Redirecting to login page...
</p>

</div>

)}

</div>

)

}
