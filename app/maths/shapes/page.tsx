"use client"

import { useState, useMemo } from "react"
import { questions } from "./data/questions"
import QuestionRenderer from "./components/QuestionRenderer"
import Modal from "./components/Modal"
import { saveFeedback } from "@/lib/feedback"
import { markChapterComplete } from "@/lib/progress"
import { useRouter } from "next/navigation"
import AskQuestion from "./components/AskQuestion"
import ChapterFeedback from "./components/ChapterFeedback"
export default function ShapesPage(){

const [currentQuestion,setCurrentQuestion] = useState(0)

const [answerInput,setAnswerInput] = useState("")
const [subAnswers,setSubAnswers] = useState<any>({})

const [isCorrect,setIsCorrect] = useState<boolean|null>(null)

const [activeModal,setActiveModal] = useState<string|null>(null)

const [showCelebration,setShowCelebration] = useState(false)

/* NEW FEEDBACK STATES */

const [chapterComplete,setChapterComplete] = useState(false)
const [feedbackText,setFeedbackText] = useState("")

const router = useRouter()

/* LOAD QUESTION */

const question:any = useMemo(()=>{

const q = questions[currentQuestion]

if(typeof q === "function"){
return q()
}

return q

},[currentQuestion])

/* NORMALIZE TEXT */

function normalize(text:string){

return text
.toLowerCase()
.trim()
.replace(/\s+/g," ")

}

/* SUBMIT */

function submit(){

if(question.type === "multi"){

let correct = true

console.log("Student answers:", subAnswers)
console.log("Correct answers:", question.correctAnswer)

for(const key in question.correctAnswer){

const student = normalize(subAnswers[key] || "")
const answer = normalize(String(question.correctAnswer[key]))

console.log("Checking key:", key)
console.log("Student:", student)
console.log("Correct:", answer)

if(student !== answer){
correct = false
}

}

setIsCorrect(correct)

if(correct){

setShowCelebration(true)

setTimeout(()=>{
setShowCelebration(false)
},2000)

}

}else{

const student = normalize(answerInput || "")
const answer = normalize(String(question.correctAnswer || ""))

const result = student === answer

setIsCorrect(result)

if(result){

setShowCelebration(true)

setTimeout(()=>{
setShowCelebration(false)
},2000)

}

}

}

/* NAVIGATION */

function next(){

if(currentQuestion < questions.length-1){

setCurrentQuestion(q => q + 1)
setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}else{

const user = localStorage.getItem("currentUser")

if(user){
markChapterComplete(user,"shapes")
}

setChapterComplete(true)

}

}

function prev(){

if(currentQuestion > 0){

setCurrentQuestion(q => q - 1)
setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}

}

/* SUBMIT FEEDBACK */

function submitFeedback(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

saveFeedback(user,"shapes",feedbackText)

router.push("/maths")

}

/* MODAL TITLE */

function getModalTitle(){

if(activeModal === "hint") return "Hint"
if(activeModal === "solution") return "Solution"
if(activeModal === "steps") return "Think Step-by-Step"

return ""

}

/* MODAL CONTENT */

function getModalContent(){

if(activeModal === "hint") return question.hint

if(activeModal === "solution") return question.solution

if(activeModal === "steps" && question.stepContent){

return question.stepContent
.map((s:any,i:number)=>`${i+1}. ${s.text}`)
.join("\n\n")

}

return ""

}

return(

<div className="bg-white text-black min-h-screen">

{/* CHAPTER COMPLETE SCREEN */}

{chapterComplete && (

<div className="fixed inset-0 flex items-center justify-center bg-white z-50">

<div className="text-center">

<div className="text-6xl mb-6">🎉</div>

<h1 style={{fontFamily:"var(--font-handwriting)",fontSize:"4rem"}}>
Congrats!
</h1>

<p className="text-2xl mt-4">
You completed the Shapes and Figures chapter
</p>

<ChapterFeedback chapter="shapes" />

</div>

</div>

)}

<div className="max-w-5xl mx-auto p-10">

<h1 className="text-4xl font-bold text-center text-green-700">
Shapes and Figures Question - {currentQuestion + 1}
</h1>

<div className="mt-10 bg-white border border-gray-200 rounded-xl shadow-md p-8">

<QuestionRenderer
question={question}
answerInput={answerInput}
setAnswerInput={setAnswerInput}
subAnswers={subAnswers}
setSubAnswers={setSubAnswers}
/>

</div>

<div className="mt-8">

<button
onClick={submit}
className="font-bold text-white px-8 py-3 rounded-lg shadow-lg bg-green-700 hover:bg-green-800"
style={{minWidth:"140px"}}
>
Submit
</button>

</div>

{isCorrect !== null && (

<div className="mt-6 text-xl font-bold">
{isCorrect ? "✅ Correct!" : "❌ Incorrect"}
</div>

)}

{showCelebration && (

<div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">

<div className="text-[260px] leading-none animate-bounce select-none">
🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉
<br/>
🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉
<br/>
🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉
<br/>
🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉🎉🎊🎉
</div>

</div>

)}

<div className="flex gap-6 mt-8">

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

<div className="flex justify-between mt-16 text-lg font-semibold">

<button
disabled={currentQuestion===0}
onClick={prev}
className="disabled:opacity-40"
>
← Previous
</button>

<button
onClick={next}
>
Next →
</button>

</div>

</div>

<Modal
isOpen={activeModal !== null}
onClose={()=>setActiveModal(null)}
title={getModalTitle()}
>
{getModalContent()}
</Modal>

<AskQuestion
chapter="shapes"
questionNumber={currentQuestion+1}
/>

</div>

)

}