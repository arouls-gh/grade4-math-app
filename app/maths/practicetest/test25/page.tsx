"use client"

import { useState, useEffect } from "react"

import { questions as decimal } from "@/app/maths/decimal/data/questions"
import { questions as shapes } from "@/app/maths/shapes/data/questions"
import { questions as symmetry } from "@/app/maths/symmetrypatterns/data/questions"
import { questions as money } from "@/app/maths/money/data/questions"
import { questions as datahandling } from "@/app/maths/datahandling/data/questions"
import { questions as measurement } from "@/app/maths/measurement/data/questions"
import { questions as perimeter } from "@/app/maths/perimeterarea/data/questions"
import { questions as time } from "@/app/maths/time/data/questions"

import { useRouter } from "next/navigation"

import DecimalRenderer from "@/app/maths/decimal/components/QuestionRenderer"
import ShapesRenderer from "@/app/maths/shapes/components/QuestionRenderer"
import SymmetryRenderer from "@/app/maths/symmetrypatterns/components/QuestionRenderer"
import MoneyRenderer from "@/app/maths/money/components/QuestionRenderer"
import DataRenderer from "@/app/maths/datahandling/components/QuestionRenderer"
import MeasurementRenderer from "@/app/maths/measurement/components/QuestionRenderer"
import PerimeterRenderer from "@/app/maths/perimeterarea/components/QuestionRenderer"

export default function Test25(){

const [current,setCurrent] = useState(0)
const [answers,setAnswers] = useState<any>({})
const [questions,setQuestions] = useState<any[]>([])

const [testFinished,setTestFinished] = useState(false)
const [score,setScore] = useState(0)
const [wrongQuestions,setWrongQuestions] = useState<any[]>([])

const router = useRouter()

function shuffle(arr:any[]){
return [...arr].sort(()=>Math.random()-0.5)
}

/* SAFE QUESTION RESOLVER */

function resolveQuestion(q:any){

try{

let question = q

if(typeof question === "function"){
question = question()
}

if(question?.generate){
question = question.generate()
}

if(!question || !question.type) return null

return question

}catch{
return null
}

}

/* ONLY WORD PROBLEMS FROM TIME */

const timeWordQuestions = time.filter(q => q.id >= 7 && q.id <= 9)

/* MERGE ALL CHAPTERS */

const allQuestions = [
...decimal.map(q=>({q,chapter:"decimal"})),
...shapes.map(q=>({q,chapter:"shapes"})),
...symmetry.map(q=>({q,chapter:"symmetry"})),

/* EXCLUDE MONEY QUESTION 1 */
...money
  .filter((q:any)=>q.id !== 1)
  .map(q=>({q,chapter:"money"})),

...datahandling.map(q=>({q,chapter:"datahandling"})),
...measurement.map(q=>({q,chapter:"measurement"})),
...perimeter.map(q=>({q,chapter:"perimeter"})),
...timeWordQuestions.map(q=>({q,chapter:"time"}))
]

/* BUILD TEST */

useEffect(()=>{

const resolved = allQuestions.map(item=>{

const question = resolveQuestion(item.q)

if(!question) return null

return {
question,
chapter:item.chapter
}

}).filter(Boolean)

setQuestions(shuffle(resolved).slice(0,25))

},[])

/* CURRENT QUESTION */

const qItem = questions[current]
const question = qItem?.question
const chapter = qItem?.chapter

if(!question) return null

/* ANSWERS */

const answerInput = answers[current]?.answerInput || ""
const subAnswers = answers[current]?.subAnswers || {}

function setAnswerInput(value:string){
setAnswers({...answers,[current]:{...answers[current],answerInput:value}})
}

function setSubAnswers(value:any){
setAnswers({...answers,[current]:{...answers[current],subAnswers:value}})
}

/* SELECT RENDERER */

function getRenderer(chapter:string){

if(chapter==="decimal") return DecimalRenderer
if(chapter==="shapes") return ShapesRenderer
if(chapter==="symmetry") return SymmetryRenderer
if(chapter==="money") return MoneyRenderer
if(chapter==="datahandling") return DataRenderer
if(chapter==="measurement") return MeasurementRenderer
if(chapter==="perimeter") return PerimeterRenderer

return DecimalRenderer

}

const Renderer = getRenderer(chapter)

/* SCORE */

function finishTest(){

let correct=0
let wrong:any[]=[]

questions.forEach((q,i)=>{

const question=q.question
const student=answers[i]

if(!student){
wrong.push(q)
return
}

if(question.type==="multi"){

let ok=true

Object.keys(question.correctAnswer).forEach(k=>{
if(student.subAnswers?.[k]!=question.correctAnswer[k]) ok=false
})

if(ok) correct++
else wrong.push(q)

}else{

if(student.answerInput==question.correctAnswer) correct++
else wrong.push(q)

}

})

setScore(correct)
setWrongQuestions(wrong)
setTestFinished(true)

}

/* NAVIGATION */

function nextQuestion(){
if(current<questions.length-1) setCurrent(current+1)
else finishTest()
}

function previousQuestion(){
if(current>0) setCurrent(current-1)
}

/* RETRY */

function retryTest(){
window.location.reload()
}

/* RESULT PAGE */

if(testFinished){

return(

<div className="min-h-screen bg-white p-10 text-black">

<h1 className="text-5xl font-extrabold text-center text-green-700">
Test Completed
</h1>

<div className="text-center mt-8 text-3xl font-bold">
Score: {score} / {questions.length}
</div>

<div className="text-center mt-4 text-xl font-semibold">
Correct: {score} | Wrong: {questions.length-score}
</div>

<div className="flex justify-center gap-6 mt-10">

<button
onClick={retryTest}
className="px-10 py-4 text-xl font-bold text-white rounded-xl shadow-lg"
style={{backgroundColor:"#7e22ce"}}
>
Retry Test
</button>

<button
onClick={()=>router.push("/maths")}
className="px-10 py-4 text-xl font-bold text-white bg-blue-700 rounded-xl shadow-lg"
>
Back to Maths Home
</button>

</div>

{/* WRONG QUESTIONS */}

<div className="mt-14 max-w-4xl mx-auto">

<h2 className="text-2xl font-bold mb-6">
Wrong Questions
</h2>

{wrongQuestions.map((w,i)=>{

const q=w.question

return(

<div key={i} className="border-2 border-gray-300 p-6 mb-6 rounded-lg bg-white">

<div className="font-bold text-lg mb-2">
{q.text || "Question"}
</div>

<div className="text-red-600 font-semibold">
Correct Answer: {JSON.stringify(q.correctAnswer)}
</div>

</div>

)

})}

</div>

</div>

)

}

/* TEST PAGE */

return(

<div className="min-h-screen bg-white p-10">

<h1 className="text-3xl font-bold text-center text-purple-700">
Practice Test (25 Questions)
</h1>

<div className="text-center mt-4 text-lg font-semibold text-gray-600">
Question {current+1} of {questions.length}
</div>

<div className="mt-10 bg-white border-2 border-green-300 rounded-xl p-8 shadow text-black">

<Renderer
question={question}
answerInput={answerInput}
setAnswerInput={setAnswerInput}
subAnswers={subAnswers}
setSubAnswers={setSubAnswers}
/>

{/* TIME WORD PROBLEM ANSWERS */}

{chapter === "time" && question.type === "multi" && (

<div className="mt-8 space-y-6">

<div className="flex items-center gap-4">
<span className="font-bold">A.</span>
<input
className="border-2 border-black p-2 w-20 text-center"
placeholder="Hr"
value={subAnswers["a_h"] || ""}
onChange={(e)=>setSubAnswers({...subAnswers,a_h:e.target.value})}
/>
<span>hr</span>
<input
className="border-2 border-black p-2 w-20 text-center"
placeholder="Min"
value={subAnswers["a_m"] || ""}
onChange={(e)=>setSubAnswers({...subAnswers,a_m:e.target.value})}
/>
<span>min</span>
</div>

<div className="flex items-center gap-4">
<span className="font-bold">B.</span>
<input
className="border-2 border-black p-2 w-20 text-center"
placeholder="Hr"
value={subAnswers["b_h"] || ""}
onChange={(e)=>setSubAnswers({...subAnswers,b_h:e.target.value})}
/>
<span>hr</span>
<input
className="border-2 border-black p-2 w-20 text-center"
placeholder="Min"
value={subAnswers["b_m"] || ""}
onChange={(e)=>setSubAnswers({...subAnswers,b_m:e.target.value})}
/>
<span>min</span>
</div>

<div className="flex items-center gap-4">
<span className="font-bold">C.</span>
<input
className="border-2 border-black p-2 w-40 text-center"
placeholder="Time"
value={subAnswers["c"] || ""}
onChange={(e)=>setSubAnswers({...subAnswers,c:e.target.value})}
/>
</div>

</div>

)}

</div>

<div className="mt-10 flex justify-between">

<button
disabled={current===0}
onClick={previousQuestion}
className="bg-gray-300 px-6 py-3 rounded"
>
Previous
</button>

<button
onClick={nextQuestion}
className="bg-blue-700 text-white px-6 py-3 rounded"
>
{current===questions.length-1 ? "Finish Test" : "Next"}
</button>

</div>

</div>

)

}