"use client";

import { useState, useMemo, useEffect } from "react";
import { questions } from "./data/questions";
import QuestionRenderer from "./components/QuestionRenderer";
import Modal from "./components/Modal";
import { saveFeedback } from "@/lib/feedback";
import { markChapterComplete } from "@/lib/progress";
import { useRouter } from "next/navigation";

export default function MoneyPage(){

const [currentQuestion,setCurrentQuestion] = useState(0)

const [answerInput,setAnswerInput] = useState("")
const [subAnswers,setSubAnswers] = useState<any>({})

const [activeModal,setActiveModal] = useState<any>(null)

const [isCorrect,setIsCorrect] = useState<boolean|null>(null)

const [chapterComplete,setChapterComplete] = useState(false)
const [feedbackText,setFeedbackText] = useState("")

/* NEW STATE (PATCH) */
const [askOpen,setAskOpen] = useState(false)
const [studentQuestion,setStudentQuestion] = useState("")

const router = useRouter()

useEffect(()=>{

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

},[currentQuestion])

const [clientReady,setClientReady] = useState(false)
useEffect(()=>{
  setClientReady(true)
},[])


/* LOAD QUESTION */

const baseQuestion:any = useMemo(()=>{

  let q = questions[currentQuestion]

  if(typeof q === "function"){
    q = q()
  }

  if(q.id === 1 && clientReady){

    function randRupee(){
      const r = Math.floor(Math.random()*9)+1
      const p = Math.floor(Math.random()*99)+1
      return parseFloat(`${r}.${p.toString().padStart(2,"0")}`)
    }

    function randPaise(){
      return Math.floor(Math.random()*900)+100
    }

    const r1 = randRupee()
    const r2 = randRupee()
    const r3 = randRupee()

    const p1 = randPaise()
    const p2 = randPaise()
    const p3 = randPaise()

    q = {
      ...q,

      conversion:[
        {key:"a",text:`A. ₹${r1.toFixed(2)} = ____ paise`},
        {key:"b",text:`B. ₹${r2.toFixed(2)} = ____ paise`},
        {key:"c",text:`C. ₹${r3.toFixed(2)} = ____ paise`},
        {key:"d",text:`D. ${p1} paise = ₹ ____`},
        {key:"e",text:`E. ${p2} paise = ₹ ____`},
        {key:"f",text:`F. ${p3} paise = ₹ ____`}
      ],

      correctAnswer:{
        a:(r1*100).toString(),
        b:(r2*100).toString(),
        c:(r3*100).toString(),
        d:(p1/100).toFixed(2),
        e:(p2/100).toFixed(2),
        f:(p3/100).toFixed(2)
      },

      stepContent:[
        { key:"s1", text:"How many paise are there in 1 rupee?" },
        { key:"s2", text:"To convert rupees to paise, do we multiply or divide by 100?" },
        { key:"s3", text:`₹${r1.toFixed(2)} × 100 = ?` },
        { key:"s4", text:"To convert paise to rupees, do we multiply or divide by 100?" },
        { key:"s5", text:`${p1} ÷ 100 = ?` }
      ],

      steps:{
        s1:"100",
        s2:"multiply",
        s3:(r1*100).toString(),
        s4:"divide",
        s5:(p1/100).toFixed(2)
      }

    }

  }

  return q

},[currentQuestion, clientReady])

/* SUBMIT */

function submitMain(){

console.log("------ SUBMIT CLICKED ------")
console.log("Question ID:", baseQuestion.id)

if(baseQuestion.type === "multi"){

  let correct=true

  Object.keys(baseQuestion.correctAnswer).forEach((key)=>{

    let student = subAnswers[key] ?? ""
    let correctAns = baseQuestion.correctAnswer[key]

    student = String(student).trim()
    correctAns = String(correctAns).trim()

    if(student !== correctAns){
      correct=false
    }

  })

  setIsCorrect(correct)

}else{

  const student = answerInput.trim()
  const correctAns = String(baseQuestion.correctAnswer).trim()

  const result = student === correctAns

  setIsCorrect(result)

}

}

/* NAVIGATION */

function nextQuestion(){

if(currentQuestion < questions.length-1){

setCurrentQuestion(currentQuestion+1)

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}else{

const user = localStorage.getItem("currentUser")

if(user){
markChapterComplete(user,"money")
}

setChapterComplete(true)

}

}

function previousQuestion(){

setCurrentQuestion(currentQuestion-1)

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}

/* FEEDBACK */

function submitFeedback(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

saveFeedback(user,"money",feedbackText)

router.push("/maths")

}

/* NEW QUESTION SUBMIT */

async function submitStudentQuestion(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

await fetch("/api/student-question",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username:user,
chapter:"money",
questionNumber:currentQuestion+1,
question:studentQuestion
})
})

setStudentQuestion("")
setAskOpen(false)

}

/* PAGE */

return(

<div className="bg-white text-black min-h-screen">

{chapterComplete && (

<div className="fixed inset-0 flex items-center justify-center bg-white z-50">

<div className="text-center">

<div className="text-6xl mb-6">🎉</div>

<h1 style={{fontFamily:"var(--font-handwriting)",fontSize:"4rem"}}>
Congrats!
</h1>

<p className="text-2xl mt-4">
You completed the Money chapter
</p>

<div className="mt-8 flex flex-col items-center">

<p className="text-xl mb-4">
What do you think about this chapter?
</p>

<textarea
value={feedbackText}
onChange={(e)=>setFeedbackText(e.target.value)}
className="border-2 border-black p-4 w-96 h-32 text-lg"
placeholder="Write your feedback..."
/>

<button
onClick={submitFeedback}
className="mt-6 bg-blue-700 text-white px-8 py-4 text-xl rounded-xl"
>
Submit Feedback
</button>

</div>

</div>

</div>

)}

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-4xl font-bold text-center text-green-700">
Money – Question {currentQuestion+1}
</h1>

<div className="mt-10">

<QuestionRenderer
key={currentQuestion}
question={baseQuestion}
answerInput={answerInput}
setAnswerInput={setAnswerInput}
subAnswers={subAnswers}
setSubAnswers={setSubAnswers}
/>

</div>

<div className="mt-8">

<button
onClick={submitMain}
className="bg-green-700 text-white px-6 py-3 rounded-lg shadow"
>
Submit
</button>

</div>

{isCorrect !== null && (

<div className="mt-6 text-xl font-bold">
{isCorrect ? "✅ Correct!" : "❌ Incorrect"}
</div>

)}

<div className="flex gap-8 mt-8">

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
onClick={()=>setActiveModal("solution")}
>
View Solution
</button>

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
onClick={()=>setActiveModal("steps")}
>
Think Step-by-Step
</button>

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
onClick={()=>setActiveModal("hint")}
>
Hint
</button>

</div>

{activeModal && (

<Modal
activeModal={activeModal}
setActiveModal={setActiveModal}
question={baseQuestion}
stepValues={{}}
setStepValues={()=>{}}
submitStep={()=>{}}
/>

)}

<div className="flex justify-between mt-16 text-lg font-semibold">

<button
disabled={currentQuestion===0}
onClick={previousQuestion}
>
&lt;&lt; Previous
</button>

<button
disabled={false}
onClick={nextQuestion}
>
Next &gt;&gt;
</button>

</div>

</div>

<button
className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-xl text-lg font-semibold z-[999]"
onClick={()=>setAskOpen(true)}
>
💬 Ask Your Question
</button>

{askOpen && (

<div className="fixed inset-0 flex items-center justify-center z-50">

<div className="bg-white border-2 border-black p-6 rounded-2xl shadow-2xl w-[420px] text-black">

<h2 className="text-xl font-extrabold mb-4">
Ask Your Question
</h2>

<p className="mb-3">
Question {currentQuestion+1}
</p>

<textarea
value={studentQuestion}
onChange={(e)=>setStudentQuestion(e.target.value)}
className="border-2 border-black p-3 w-full h-28"
placeholder="Type your doubt here..."
/>

<div className="flex justify-end gap-4 mt-4">

<button
onClick={()=>setAskOpen(false)}
className="px-4 py-2 border border-black"
>
Cancel
</button>

<button
onClick={submitStudentQuestion}
className="px-6 py-2 bg-blue-700 text-white rounded"
>
Send
</button>

</div>

</div>

</div>

)}

</div>

)

}