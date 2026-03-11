"use client"

import { useState } from "react"

export default function Recover(){

const [name,setName] = useState("")
const [standard,setStandard] = useState("4")
const [section,setSection] = useState("A")
const [result,setResult] = useState<any>(null)

async function recoverAccount(){

if(!name){
alert("Enter student name")
return
}

const res = await fetch("/api/forgot-credentials",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
standard,
section
})
})

const data = await res.json()

if(data.success){

setResult(data)

setTimeout(()=>{
window.location.href="/"
},5000)

}else{
alert(data.message || "Student not found")
}

}

return(

<div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">

<h1 className="text-4xl font-bold mb-8">
Forgot Username / Password
</h1>

<input
placeholder="Student Name"
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
className="border border-gray-400 p-3 mb-6 w-80 bg-white text-black"
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

<button
onClick={recoverAccount}
style={{
backgroundColor:"black",
color:"white",
padding:"12px 32px",
borderRadius:"6px",
fontSize:"18px",
cursor:"pointer"
}}

>

Find My Account </button>

{result && (

<div
style={{
marginTop:"30px",
padding:"20px",
border:"2px solid green",
background:"#e8f7e8",
textAlign:"center",
width:"340px",
color:"black"
}}
>

<p style={{fontSize:"18px",fontWeight:"bold"}}>
Your Login Details
</p>

<p style={{marginTop:"10px"}}>
Username: <b>{result.username}</b>
</p>

<p>
Password: <b>{result.password}</b>
</p>

<p style={{marginTop:"10px"}}>
Redirecting to login page...
</p>

</div>

)}

</div>

)

}
