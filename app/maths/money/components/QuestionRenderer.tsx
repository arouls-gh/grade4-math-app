"use client";

export default function QuestionRenderer({
question,
answerInput,
setAnswerInput,
subAnswers,
setSubAnswers
}:any){

if(question.type === "multi"){

const coins = question.coins || []
const shopping = question.shopping || []
const compare = question.compare || []
const change = question.change || []
const conversion = question.conversion || []

return(

<>

{/* QUESTION STORY */}

{question.text && (

<div className="text-lg bg-green-50 border border-green-200 p-4 rounded-md whitespace-pre-line mt-4">
{question.text}
</div>

)}

{/* RUPEE ↔ PAISE CONVERSION */}

{conversion.length > 0 && (

<div className="mt-8 space-y-6">

{conversion.map((c:any)=>(
  
<div key={c.key} className="flex items-center gap-6 text-lg">

<span className="w-80 font-semibold">
{c.text}
</span>

<input
type="text"
value={subAnswers[c.key] || ""}
className="border-2 border-black w-28 p-1 text-center"
onChange={(e)=>
setSubAnswers({...subAnswers,[c.key]:e.target.value})
}
/>

</div>

))}

</div>

)}

{/* COIN COUNTING */}

{coins.length > 0 && (

<div className="mt-8 space-y-6">

{coins.map((c:any)=>(
  
<div key={c.key} className="flex items-center gap-6 text-lg">

<span className="w-80 font-semibold">
{c.text}
</span>

<input
type="text"
value={subAnswers[c.key] || ""}
className="border-2 border-black w-24 p-1 text-center"
onChange={(e)=>
setSubAnswers({...subAnswers,[c.key]:e.target.value})
}
/>

</div>

))}

</div>

)}

{/* SHOPPING */}

{shopping.length > 0 && (

<div className="mt-8 space-y-8">

{shopping.map((s:any)=>(

<div key={s.key} className="space-y-3">

<div className="text-lg font-semibold whitespace-pre-line">
{s.text}
</div>

<div>

Answer =
<input
type="text"
value={subAnswers[s.key] || ""}
className="border-2 border-black ml-2 w-28 p-1 text-center"
onChange={(e)=>
setSubAnswers({...subAnswers,[s.key]:e.target.value})
}
/>

</div>

</div>

))}

</div>

)}

{/* COMPARISON */}

{compare.length > 0 && (

<div className="mt-8 space-y-6">

{compare.map((c:any)=>(

<div key={c.key} className="flex items-center gap-4 text-lg">

<span className="w-80 font-semibold">
{c.text}
</span>

<input
type="text"
value={subAnswers[c.key] || ""}
placeholder=">, <, ="
className="border-2 border-black w-16 text-center"
onChange={(e)=>
setSubAnswers({...subAnswers,[c.key]:e.target.value})
}
/>

</div>

))}

</div>

)}

{/* CHANGE */}

{change.length > 0 && (

<div className="mt-8 space-y-6">

{change.map((c:any)=>(

<div key={c.key} className="space-y-2">

<div className="font-semibold">
{c.text}
</div>

<div>

Change =
<input
type="text"
value={subAnswers[c.key] || ""}
className="border-2 border-black ml-2 w-24 p-1 text-center"
onChange={(e)=>
setSubAnswers({...subAnswers,[c.key]:e.target.value})
}
/>

</div>

</div>

))}

</div>

)}

</>

)

}

/* SINGLE ANSWER MODE */

return(

<>

<div
className="text-xl font-bold whitespace-pre-line"
dangerouslySetInnerHTML={{__html:question.text}}
/>

<div className="mt-6">

Answer =
<input
type="text"
value={answerInput}
onChange={(e)=>setAnswerInput(e.target.value)}
className="border-2 border-black ml-2 w-32 p-2"
/>

</div>

</>

)

}