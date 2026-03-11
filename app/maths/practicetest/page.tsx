"use client"

import { useRouter } from "next/navigation"

export default function PracticeTestPage(){

const router = useRouter()

return(

<div className="min-h-screen bg-white p-12">

<h1 className="text-4xl font-bold text-center text-purple-700">
Practice Test
</h1>

<div className="mt-20 flex flex-col items-center gap-12">

<button
onClick={()=>router.push("/maths/practicetest/test25")}
className="bg-blue-700 text-white text-2xl px-10 py-5 rounded-xl shadow-lg"
>
25 Questions Test
</button>

<button
onClick={()=>router.push("/maths/practicetest/test50")}
className="bg-green-700 text-white text-2xl px-10 py-5 rounded-xl shadow-lg"
>
50 Questions Test
</button>

</div>

</div>

)

}