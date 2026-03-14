"use client";

import dynamic from "next/dynamic";

const DecimalBlocks = dynamic(
() => import("../visuals/DecimalBlocks"),
{ ssr:false }
)

const DecimalCompare = dynamic(
() => import("../visuals/DecimalCompare"),
{ ssr:false }
)

const DecimalOrder = dynamic(
() => import("../visuals/DecimalOrder"),
{ ssr:false }
)

export default function QuestionRenderer({
question,
answerInput,
setAnswerInput,
subAnswers,
setSubAnswers
}:any){

/* MULTI ANSWER MODE */

if(question.type === "multi"){

const multi = question.multi || []
const decimalBlocks = question.decimalBlocks || null
const compare = question.compare || null

return(

<>

{/* QUESTION TEXT */}

{question.text && (

<div className="text-lg bg-green-50 border border-green-200 p-4 rounded-md whitespace-pre-line mt-4">
{question.text}
</div>

)}

{/* DECIMAL BLOCKS ENGINE */}

{decimalBlocks && (

<div className="mt-12">

<DecimalBlocks
label={decimalBlocks.label || "Blocks"}
value={subAnswers["blocks"] || 0}
setValue={(v:any)=>
setSubAnswers({...subAnswers,blocks:v})
}
/>

</div>

)}

{/* DECIMAL COMPARE ENGINE */}

{compare && (

<div className="mt-12">

<DecimalCompare
left={compare.left}
right={compare.right}
value={subAnswers["compare"] || ""}
setValue={(v:any)=>
setSubAnswers({...subAnswers,compare:v})
}
/>

</div>

)}

{/* DECIMAL ORDER ENGINE */}

{question.order && (

<div className="mt-12">

<DecimalOrder
numbers={question.order.numbers}
values={subAnswers}
setValues={setSubAnswers}
/>

</div>

)}

{/* MULTI INPUT */}

{multi.length > 0 && (

<div className="mt-10 space-y-6">

{multi.map((m:any)=>{

/* CHECK IF INPUT SHOULD BE IN MIDDLE */

if(m.text.includes("[input]")){

const parts = m.text.split("[input]")

return(

<div key={m.key} className="flex items-center gap-3 text-lg">

<span className="font-semibold">
{parts[0]}
</span>

<input
type="text"
maxLength={1}
value={subAnswers[m.key] || ""}
className="border-2 border-black w-16 text-center p-1"
onChange={(e)=>{

const val = e.target.value

if(val === "<" || val === ">" || val === "=" || val === ""){
  setSubAnswers({...subAnswers,[m.key]:val})
}

}}
/>

<span className="font-semibold">
{parts[1]}
</span>

</div>

)

}

/* NORMAL INPUT (existing behaviour) */

return(

<div key={m.key} className="flex items-center gap-6 text-lg">

<span className="w-96 font-semibold">
{m.text}
</span>

<input
type="text"
value={subAnswers[m.key] || ""}
className="border-2 border-black w-28 text-center p-1"
onChange={(e)=>
setSubAnswers({...subAnswers,[m.key]:e.target.value})
}
/>

</div>

)

})}

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