"use client";

import { useState, useMemo, useEffect } from "react";
import { questions } from "./data/questions";
import QuestionRenderer from "./components/QuestionRenderer";
import Modal from "./components/Modal";
import { markChapterComplete } from "@/lib/progress";
import { useRouter } from "next/navigation";
import { saveFeedback } from "@/lib/feedback";

import AskQuestion from "./components/AskQuestion";
import ChapterFeedback from "./components/ChapterFeedback";

export default function DecimalsPage(){

const [currentQuestion,setCurrentQuestion] = useState(0)

const [answerInput,setAnswerInput] = useState("")
const [subAnswers,setSubAnswers] = useState<any>({})

const [activeModal,setActiveModal] = useState<any>(null)

const [isCorrect,setIsCorrect] = useState<boolean|null>(null)

const router = useRouter();
const [chapterComplete,setChapterComplete] = useState(false);

const [feedbackText,setFeedbackText] = useState("");

/* RESET WHEN QUESTION CHANGES */

useEffect(()=>{

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

},[currentQuestion])

/* LOAD QUESTION */

const baseQuestion:any = useMemo(()=>{

let q = questions[currentQuestion]

if(typeof q === "function"){
q = q()
}

return q

},[currentQuestion])

/* NORMALIZE TEXT */

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

/* SUBMIT */

function submitMain(){

if(baseQuestion.type === "multi"){

let correct=true

Object.keys(baseQuestion.correctAnswer).forEach((key)=>{

let student = subAnswers[key] ?? ""
let correctAns = baseQuestion.correctAnswer[key]

console.log("Checking", key, "student:", student, "correct:", correctAns)

if(!isNaN(Number(correctAns))){

const studentNum = Number(student)
const correctNum = Number(correctAns)

if(studentNum !== correctNum){
correct=false
}

}

/* TEXT CHECK */

else{

student = String(student).trim()
correctAns = String(correctAns).trim()

/* FRACTION CHECK */

if(correctAns.includes("/")){

const [sn,sd] = student.split("/").map(Number)
const [cn,cd] = correctAns.split("/").map(Number)

if(!sn || !sd){
correct=false
}
else{
const studentVal = sn / sd
const correctVal = cn / cd

if(Math.abs(studentVal - correctVal) > 0.000001){
correct=false
}
}

}

/* ORDERED ANSWERS */

else if(correctAns.includes(",")){

if(student !== correctAns){
correct=false
}

}

/* NORMAL TEXT */

else{

const s = normalize(student)
const c = normalize(correctAns)

if(s !== c){
correct=false
}

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

if(currentQuestion < questions.length-1){

setCurrentQuestion(currentQuestion+1)

}else{

const user = localStorage.getItem("currentUser")

if(user){
markChapterComplete(user,"decimal")
}

setChapterComplete(true)

}

}

function previousQuestion(){

setCurrentQuestion(currentQuestion-1)

}



/* SUBMIT FEEDBACK */

function submitFeedback(){

const user = localStorage.getItem("currentUser");

if(!user){
router.push("/");
return;
}

saveFeedback(user,"decimal",feedbackText);

router.push("/maths");

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
You completed the Decimal chapter
</p>

<ChapterFeedback chapter="decimal" />

</div>

</div>

)}

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-4xl font-bold text-center text-green-700">

Decimals – Question {currentQuestion+1}

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

{/* SUBMIT */}

<div className="mt-8">

<button
onClick={submitMain}
className="bg-green-700 text-white px-6 py-3 rounded-lg shadow"
>
Submit
</button>

</div>

{/* RESULT */}

{isCorrect !== null && (

<div className="mt-6 text-xl font-bold">

{isCorrect ? "✅ Correct!" : "❌ Incorrect"}

</div>

)}

{/* MODAL BUTTONS */}

<div className="flex gap-8 mt-8">

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
onClick={()=>setActiveModal("solution")}
>
View Solution
</button>

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
onClick={()=>setActiveModal("step")}
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

{/* MODAL */}

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

{/* NAVIGATION */}

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
{"Next >>"}
</button>

</div>

</div>
<AskQuestion
chapter="decimal"
questionNumber={currentQuestion+1}
/>
</div>

)

}