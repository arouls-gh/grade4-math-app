"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WorkbookPage() {

const router = useRouter();

const [grade,setGrade] = useState("");
const [subject,setSubject] = useState("");
const [term,setTerm] = useState("");
const [user,setUser] = useState("");

/* GET LOGGED IN USER */
useEffect(()=>{

async function loadUser(){

try {

const res = await fetch("/api/me", {
credentials: "include"
});

const data = await res.json();

if(!data.success){
router.push("/");
return;
}

setUser(data.username);

} catch (err) {

router.push("/");

}

}

loadUser();

},[router]);

/* LOGOUT */
function logout(){

document.cookie =
"student_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

router.push("/");

}

/* TEACHER INSIGHTS */
function openTeacherInsights(){
router.push("/teacher");
}

/* AUTO NAVIGATION */
useEffect(()=>{

if(grade==="4" && subject==="maths" && term==="2"){
router.push("/maths");
}

},[grade,subject,term,router]);

return(

<div className="min-h-screen bg-white flex items-center justify-center">

<button
onClick={logout}
className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded"

>

Logout </button>

<div className="bg-gray-100 p-10 rounded-2xl shadow-xl border-4 border-black w-96">

<h1 className="text-2xl font-extrabold text-black mb-4 text-center">
Select Details
</h1>

<div className="text-center mb-6 text-lg">
Welcome <b>{user}</b>
</div>

{user === "aroul" && (

<div className="mb-6 text-center">

<button
onClick={openTeacherInsights}
className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-800"

>

Teacher Insights </button>

</div>

)}

<div className="mb-6">

<label className="block text-lg font-bold text-black mb-2">
Grade
</label>

<select
value={grade}
onChange={(e)=>setGrade(e.target.value)}
className="w-full border-2 border-black p-3 text-lg font-bold text-black"

>

<option value="">Select Grade</option>
<option value="4">Standard 4</option>
</select>

</div>

<div className="mb-6">

<label className="block text-lg font-bold text-black mb-2">
Subject
</label>

<select
value={subject}
onChange={(e)=>setSubject(e.target.value)}
className="w-full border-2 border-black p-3 text-lg font-bold text-black"

>

<option value="">Select Subject</option>
<option value="maths">Maths</option>
</select>

</div>

<div className="mb-6">

<label className="block text-lg font-bold text-black mb-2">
Term
</label>

<select
value={term}
onChange={(e)=>setTerm(e.target.value)}
className="w-full border-2 border-black p-3 text-lg font-bold text-black"

>

<option value="">Select Term</option>
<option value="2">Term 2</option>
</select>

</div>

</div>

</div>

);

}
