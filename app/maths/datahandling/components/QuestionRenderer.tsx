"use client";

import DataTable from "../visuals/DataTable";
import dynamic from "next/dynamic";

const DrawBarGraph = dynamic(
() => import("../visuals/DrawBarGraph"),
{ ssr: false }
);

import TallyBuilder from "../visuals/TallyBuilder";
import PictographBuilder from "../visuals/PictographBuilder";
import GraphEngine from "../visuals/GraphEngine";

export default function QuestionRenderer({
question,
answerInput,
setAnswerInput,
subAnswers,
setSubAnswers
}:any){

if(question.type === "multi"){

const table = question.table || null
const drawGraph = question.drawGraph || null
const graph = question.graph || null
const tally = question.tally || null
const tallyTable = question.tallyTable || null   // ⭐ NEW
const pictograph = question.pictograph || null
const multi = question.multi || []

return(

<>

{/* QUESTION STORY */}

{question.text && (

<div className="text-lg bg-green-50 border border-green-200 p-4 rounded-md whitespace-pre-line mt-4">
{question.text}
</div>

)}

{/* TABLE DISPLAY */}

{table && (

<div className="mt-8">

<DataTable
headers={table.headers}
rows={table.rows}
/>

</div>

)}

{/* ================= TALLY TABLE DISPLAY (NEW) ================= */}

{tallyTable && (

<div className="mt-8">

<table className="border-collapse border border-gray-400 text-center">

<thead className="bg-gray-100">

<tr>
<th className="border px-6 py-2">Item</th>
<th className="border px-6 py-2">Tally Marks</th>
</tr>

</thead>

<tbody>

{tallyTable.map((row:any,i:number)=>(

<tr key={i}>

<td className="border px-6 py-3 font-semibold">
{row.item}
</td>

<td className="border px-6 py-3 text-lg tracking-widest">
{row.tally}
</td>

</tr>

))}

</tbody>

</table>

</div>

)}

{/* BAR GRAPH DISPLAY (READ GRAPH QUESTIONS) */}

{graph && (

<div className="mt-12">

<GraphEngine
title={question.graph.title}
labels={question.graph.labels}
values={question.graph.values}
maxValue={question.graph.maxValue}
scale={question.graph.scale}
xLabel={question.graph.xLabel}
yLabel={question.graph.yLabel}
orientation={question.graph.orientation}
/>

</div>

)}

{/* BAR GRAPH DRAWING */}

{drawGraph && (

<div className="mt-12">

<DrawBarGraph
labels={drawGraph.labels}
maxValue={drawGraph.maxValue}
scale={drawGraph.scale}
values={subAnswers}
setValues={setSubAnswers}
/>

</div>

)}

{/* TALLY BUILDER */}

{tally && (

<div className="mt-12">

<TallyBuilder
items={tally.items}
values={subAnswers}
setValues={setSubAnswers}
/>

</div>

)}

{/* PICTOGRAPH BUILDER */}

{pictograph && (

<div className="mt-12">

<PictographBuilder
items={pictograph.items}
icon={pictograph.icon}
scale={pictograph.scale}
values={subAnswers}
setValues={setSubAnswers}
/>

</div>

)}

{/* GENERIC MULTI INPUT */}

{multi.length > 0 && (

<div className="mt-10 space-y-6">

{multi.map((m:any)=>(

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