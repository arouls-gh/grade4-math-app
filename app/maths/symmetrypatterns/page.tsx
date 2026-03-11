"use client";

import { useState, useMemo } from "react";
import { questions } from "./data/questions";
import QuestionRenderer from "./components/QuestionRenderer";
import Modal from "./components/Modal";
import { saveFeedback } from "@/lib/feedback";
import { markChapterComplete } from "@/lib/progress";
import { useRouter } from "next/navigation";
import AskQuestion from "./components/AskQuestion";
import ChapterFeedback from "./components/ChapterFeedback";
export default function SymmetryPatternsPage(){

const [currentQuestion,setCurrentQuestion] = useState(0)

const [answerInput,setAnswerInput] = useState("")
const [subAnswers,setSubAnswers] = useState<any>({})

const [activeModal,setActiveModal] = useState<any>(null)

const [isCorrect,setIsCorrect] = useState<boolean|null>(null)

/* NEW FEEDBACK STATES */

const [chapterComplete,setChapterComplete] = useState(false)
const [feedbackText,setFeedbackText] = useState("")

const router = useRouter()

/* ---------------------------
LOAD QUESTION
----------------------------*/

const baseQuestion:any = useMemo(()=>{

  let q = questions[currentQuestion];

  if(typeof q === "function"){
    return q();
  }

  return q;

},[currentQuestion])

/* ---------------------------
SUBMIT LOGIC
----------------------------*/

function submitMain(){

console.log("Student answers:", subAnswers)
console.log("Correct answers:", baseQuestion.correctAnswer)

if(baseQuestion.type === "multi"){

let correct=true

Object.keys(baseQuestion.correctAnswer).forEach((key)=>{

let student = subAnswers[key] ?? "";
let correctAns = baseQuestion.correctAnswer[key];

student = String(student).trim();
correctAns = String(correctAns).trim();

console.log("KEY:", key);
console.log("Student:", student);
console.log("Correct:", correctAns);

if(student !== correctAns){
correct = false;
}

});

setIsCorrect(correct)

}else{

const student = answerInput.trim().toUpperCase()
const correctAns = String(baseQuestion.correctAnswer).trim().toUpperCase()

setIsCorrect(student === correctAns)

}

}

/* ---------------------------
NAVIGATION
----------------------------*/

function nextQuestion(){

if(currentQuestion < questions.length-1){

setCurrentQuestion(currentQuestion+1)

setAnswerInput("")
setSubAnswers({})
setIsCorrect(null)

}else{

const user = localStorage.getItem("currentUser")

if(user){
markChapterComplete(user,"symmetrypatterns")
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

/* ---------------------------
SUBMIT FEEDBACK
----------------------------*/

function submitFeedback(){

const user = localStorage.getItem("currentUser")

if(!user){
router.push("/")
return
}

saveFeedback(user,"symmetrypatterns",feedbackText)

router.push("/maths")

}

/* ---------------------------
PAGE
----------------------------*/

return(

<div className="bg-white text-black min-h-screen">

{/* CHAPTER COMPLETE SCREEN */}

{chapterComplete && (

<div className="fixed inset-0 flex items-center justify-center bg-white z-50">

<div className="text-center">

<div className="text-6xl mb-6">🎉</div>

<h1
style={{fontFamily:"var(--font-handwriting)",fontSize:"4rem"}}
>
Congrats!
</h1>

<p className="text-2xl mt-4">
You completed the Symmetry and Patterns chapter
</p>

<ChapterFeedback chapter="symmetrypatterns" />

</div>

</div>

)}

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-4xl font-bold text-center text-blue-700">

Symmetry and Patterns – Question {currentQuestion+1}

</h1>

{/* QUESTION */}

<div className="mt-10">

<QuestionRenderer

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
className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
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
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
onClick={()=>setActiveModal("solution")}
>
View Solution
</button>

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
onClick={()=>setActiveModal("steps")}
>
Think Step-by-Step
</button>

<button
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
onClick={()=>setActiveModal("hint")}
>
Hint
</button>

</div>

{/* MODALS */}

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
Next &gt;&gt;
</button>

</div>

</div>

<AskQuestion
chapter="symmetrypatterns"
questionNumber={currentQuestion+1}
/>

</div>

)

}