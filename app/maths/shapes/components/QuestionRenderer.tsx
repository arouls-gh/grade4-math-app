"use client"

import ObjectImage from "./ObjectImage"
import LineFigures from "./LineFigures"
import MeasureLine from "./MeasureLine"
import PolygonCompare from "./PolygonCompare"
import PolygonTypeFigures from "./PolygonTypeFigures"
import PolygonCountFigures from "./PolygonCountFigures"
import LineTypeFigures from "./LineTypeFigures"
import PolygonCheckFigures from "./PolygonCheckFigures"
import CirclePartsFigures from "./CirclePartsFigures"
import LineLengthCompare from "./LineLengthCompare"

export default function QuestionRenderer({
question,
answerInput,
setAnswerInput,
subAnswers,
setSubAnswers
}:any){

function updateSubAnswer(key:string,value:string){

if(typeof setSubAnswers !== "function") return

setSubAnswers({
...subAnswers,
[key]:value
})

}

return(

<div className="mt-6">

{/* QUESTION TEXT */}

<div className="text-xl font-semibold whitespace-pre-line">
{question.text}
</div>

{/* OBJECT IMAGE */}

{question.object && (

<div className="mt-8 flex justify-center">
<ObjectImage object={question.object} />
</div>

)}

{/* LINE FIGURES */}

{question.showFigures && (

<div className="mt-10 flex justify-center">
<LineFigures />
</div>

)}

{/* MEASURE LINE (Question 2) */}

{question.showMeasureLine && (

<div className="mt-8 flex justify-center">
<MeasureLine length={question.length}/>
</div>

)}

{/* LINE LENGTH COMPARISON (Question 2) */}

{question.showLineLengthCompare && (

<div className="mt-10 flex justify-center">
<LineLengthCompare/>
</div>

)}

{/* POLYGON TYPE (Question 3) */}

{question.showPolygonType && question.polygons && (

<div className="mt-10 flex justify-center">
<PolygonTypeFigures polygons={question.polygons}/>
</div>

)}

{/* POLYGON SIDE COUNT (Question 4) */}

{question.showPolygonCount && question.polygons && (

<div className="mt-10 flex justify-center">
<PolygonCountFigures polygons={question.polygons}/>
</div>

)}

{question.showLineTypes && (

<div className="mt-10 flex justify-center">
<LineTypeFigures lines={question.lines}/>
</div>

)}

{question.showPolygonCheck && (

<div className="mt-10 flex justify-center">
<PolygonCheckFigures figures={question.figures}/>
</div>

)}

{question.showCircleParts && (

<div className="mt-10 flex justify-center">
<CirclePartsFigures parts={question.parts}/>
</div>

)}


{/* MULTI QUESTION MODE */}

{question.type === "multi" && question.multi && (

<div className="mt-10 space-y-6 max-w-3xl">

{question.multi.map((q:any)=>(

<div
key={q.key}
className="flex items-center justify-between gap-6"
>

<div className="flex-1 text-lg">
{q.text}
</div>

<input
type="text"
value={subAnswers?.[q.key] || ""}
onChange={(e)=>updateSubAnswer(q.key,e.target.value)}
className="border-2 border-black w-40 p-2 text-center"
/>

</div>

))}

</div>

)}

{/* SINGLE ANSWER MODE */}

{question.type !== "multi" && (

<div className="mt-6">

Answer =

<input
type="text"
value={answerInput}
onChange={(e)=>setAnswerInput(e.target.value)}
className="border-2 border-black ml-2 w-40 p-2 text-center"
/>

</div>

)}

</div>

)

}
