"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

const router = useRouter();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

async function handleSubmit(){

if(!username || !password){
alert("Enter username and password");
return;
}

setLoading(true);

const res = await fetch("/api/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({username,password}),
credentials: "include"
});

const data = await res.json();

setLoading(false);

if(data.success){

// give browser a moment to store cookie
setTimeout(()=>{
router.push("/workbook");
},100);

}else{
alert(data.message || "Invalid username or password");
}

}

const title = "my  math  workbook".split("");

const rainbow = [
"#ff0000",
"#ff7f00",
"#ffff00",
"#00ff00",
"#0000ff",
"#4b0082",
"#9400d3",
];

return(

<div
className="min-h-screen flex flex-col items-center justify-center bg-white text-black"
style={{fontFamily:"var(--font-handwriting)"}}
>

<div className="text-center mb-24 leading-none">

<h1
className="font-bold tracking-wide flex flex-wrap justify-center"
style={{fontSize:"6rem"}}
>

{title.map((letter,i)=>(
<span
key={i}
style={{
color:rainbow,
padding:"0 6px"
}}

>

{letter===" " ? "\u00A0" : letter} </span>
))}

</h1>

</div>

<div className="flex flex-col items-center gap-8">

<input
placeholder="username"
className="text-2xl text-center border-2 border-black rounded-lg bg-white outline-none w-72 py-3"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="password"
className="text-2xl text-center border-2 border-black rounded-lg bg-white outline-none w-72 py-3"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleSubmit}
style={{
backgroundColor:"#7c3aed",
color:"white",
fontSize:"26px",
padding:"16px 60px",
borderRadius:"12px",
boxShadow:"0 4px 8px rgba(0,0,0,0.2)",
cursor:"pointer"
}}
disabled={loading}

>

{loading ? "Logging in..." : "Login"}

</button>

<button
onClick={()=>router.push("/signup")}
style={{
fontSize:"18px",
color:"#2563eb",
cursor:"pointer"
}}

>

Create new account </button>

<button
onClick={()=>router.push("/recover")}
style={{
fontSize:"18px",
color:"#2563eb",
cursor:"pointer"
}}

>

Forgot Username / Password </button>

</div>

</div>

);

}
