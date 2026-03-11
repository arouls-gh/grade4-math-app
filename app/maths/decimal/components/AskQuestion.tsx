"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AskQuestion({
chapter,
questionNumber
}:{chapter:string,questionNumber:number}){

const [open,setOpen] = useState(false)
const [question,setQuestion] = useState("")

const router = useRouter()

async function submit(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

await fetch("/api/student-question",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
username:user,
chapter,
questionNumber,
question
})
})

setQuestion("")
setOpen(false)

}

return(

<>

<button
className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-xl text-lg font-semibold z-[999]"
onClick={()=>setOpen(true)}
>
💬 Ask Your Question
</button>

{open && (

<div className="fixed inset-0 flex items-center justify-center z-50">

<div className="bg-white border-2 border-black p-6 rounded-2xl shadow-2xl w-[420px] text-black">

<h2 className="text-xl font-extrabold mb-4">
Ask Your Question
</h2>

<p className="mb-3">
Question {questionNumber}
</p>

<textarea
value={question}
onChange={(e)=>setQuestion(e.target.value)}
className="border-2 border-black p-3 w-full h-28"
placeholder="Type your doubt here..."
/>

<div className="flex justify-end gap-4 mt-4">

<button
onClick={()=>setOpen(false)}
className="px-4 py-2 border border-black"
>
Cancel
</button>

<button
onClick={submit}
className="px-6 py-2 bg-blue-700 text-white rounded"
>
Send
</button>

</div>

</div>

</div>

)}

</>

)

}