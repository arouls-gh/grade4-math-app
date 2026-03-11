"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChapterFeedback({chapter}:{chapter:string}){

const [text,setText] = useState("")
const router = useRouter()

async function submit(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

await fetch("/api/student-feedback",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({
username:user,
chapter,
feedback:text
})
})

router.push("/maths")

}

return(

<div className="mt-8 flex flex-col items-center">

<p className="text-xl mb-4">
What do you think about this chapter?
</p>

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
className="border-2 border-black p-4 w-96 h-32 text-lg"
placeholder="Write your feedback..."
/>

<button
onClick={submit}
className="mt-6 bg-blue-700 text-white px-8 py-4 text-xl rounded-xl"
>
Submit Feedback
</button>

</div>

)

}