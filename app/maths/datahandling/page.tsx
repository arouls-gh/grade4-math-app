"use client";

import { useState, useMemo, useEffect } from "react";
import { questions } from "./data/questions";
import QuestionRenderer from "./components/QuestionRenderer";
import Modal from "./components/Modal";
import { saveFeedback } from "@/lib/feedback";
import { markChapterComplete } from "@/lib/progress";
import { useRouter } from "next/navigation";

import AskQuestion from "./components/AskQuestion";
import ChapterFeedback from "./components/ChapterFeedback";

export default function DataHandlingPage(){

const router = useRouter()

const [currentQuestion,setCurrentQuestion] = useState(0)

const [answerInput,setAnswerInput] = useState("")
const [subAnswers,setSubAnswers] = useState<any>({})

const [activeModal,setActiveModal] = useState<any>(null)

const [isCorrect,setIsCorrect] = useState<boolean|null>(null)

const [chapterComplete,setChapterComplete] = useState(false)

const [feedbackText,setFeedbackText] = useState("")

/* RESET STATE WHEN QUESTION CHANGES */

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

return q

},[currentQuestion,clientReady])

/* HELPER: NORMALIZE TEXT ANSWERS */

function normalize(text:string){

return text
.toLowerCase()
.replace(/,/g," ")
.replace(/and/g," ")
.split(" ")
.map(x=>x.trim())
.filter(x=>x.length>0)
.sort()
.join(" ")

}

/* HELPER: NORMALIZE YES/NO */

function normalizeYesNo(value:string){

const v = value.trim().toLowerCase()

if(v==="yes" || v==="y") return "yes"
if(v==="no" || v==="n") return "no"

return v

}

/* SUBMIT */

function submitMain(){

if(baseQuestion.type === "multi"){

let correct=true

Object.keys(baseQuestion.correctAnswer).forEach((key)=>{

let student = subAnswers[key] ?? ""
let correctAns = baseQuestion.correctAnswer[key]

student = String(student).trim()
correctAns = String(correctAns).trim()

const studentYesNo = normalizeYesNo(student)
const correctYesNo = normalizeYesNo(correctAns)

if(studentYesNo === "yes" || studentYesNo === "no"){

if(studentYesNo !== correctYesNo){
correct=false
}

}

else if(!isNaN(Number(correctAns))){

if(student !== correctAns){
correct=false
}

}

else{

const s = normalize(student)
const c = normalize(correctAns)

if(s !== c){
correct=false
}

}

})

setIsCorrect(correct)

}else{

const student = answerInput.trim()
const correctAns = String(baseQuestion.correctAnswer).trim()

setIsCorrect(student === correctAns)

}

}

/* NAVIGATION */

function nextQuestion(){

if(currentQuestion === questions.length-1){

const user = localStorage.getItem("currentUser")

if(user){
markChapterComplete(user,"datahandling")
}

setChapterComplete(true)

return
}

setCurrentQuestion(currentQuestion+1)

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}

function previousQuestion(){

setCurrentQuestion(currentQuestion-1)

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}

/* SUBMIT FEEDBACK */

function submitFeedback(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

saveFeedback(user,"datahandling",feedbackText)

router.push("/maths")

}

/* PAGE */

return(

<div className="bg-white text-black min-h-screen">

{chapterComplete && (

<div className="fixed inset-0 flex items-center justify-center bg-white z-50">

<div className="text-center">

<div className="text-6xl mb-6">
🎉
</div>

<h1
style={{fontFamily:"var(--font-handwriting)",fontSize:"4rem"}}
>
Congrats!
</h1>

<p className="text-2xl mt-4">
You completed the Data Handling chapter
</p>

<ChapterFeedback chapter="datahandling" />

</div>

</div>

)}

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-4xl font-bold text-center text-green-700">

Data Handling – Question {currentQuestion+1}

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
onClick={nextQuestion}
>
Next &gt;&gt;
</button>

</div>

</div>

<AskQuestion
chapter="datahandling"
questionNumber={currentQuestion+1}
/>

</div>

)

}