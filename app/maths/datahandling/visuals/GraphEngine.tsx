"use client";

import { useEffect, useState } from "react";
import GraphBars from "./GraphBars";

export default function GraphEngine({
title,
labels = [],
maxValue = 10,
scale = 1,
xLabel = "",
yLabel = "",
values = {},
setValues = () => {},
orientation = "vertical"
}: any){

const [mounted,setMounted] = useState(false)

useEffect(()=>{
setMounted(true)
},[])

if(!mounted) return null

const height = 320
const width = 420

/* ================= COMMON GRID GENERATOR ================= */

function renderVerticalGrid(){
return(

<div
style={{
position:"absolute",
left:0,
top:0,
height,
width:"100%",
display:"flex",
flexDirection:"column",
justifyContent:"space-between",
zIndex:1
}}
>

{Array.from({length:(maxValue/scale)+1}).map((_,i)=>(
<div
key={i}
style={{
height:1,
width:"100%",
background:"#e5e5e5"
}}
/>
))}

</div>

)
}

function renderHorizontalGrid(){
return(

<div
style={{
position:"absolute",
left:0,
top:0,
width,
height,
display:"flex",
justifyContent:"space-between",
zIndex:1
}}
>
{Array.from({length:maxValue+1}).map((_,i)=>(
<div
key={i}
style={{
width:1,
height:"100%",
background:"#e5e5e5"
}}
/>
))}
</div>

)
}

/* ================= PAGE ================= */

return(

<div className="mt-12">

{/* TITLE */}

<div className="text-2xl font-bold text-center mb-6">
{title}
</div>

{/* ================= VERTICAL GRAPH ================= */}

{orientation !== "horizontal" && (

<div className="flex items-end">

{/* Y AXIS NUMBERS */}

<div
className="flex flex-col justify-between mr-4 font-semibold"
style={{height}}
>

{Array.from({length:(maxValue/scale)+1}).reverse().map((_,i)=>{

const value = (maxValue/scale - i) * scale

return(
<div key={i}>
{value}
</div>
)

})}

</div>

{/* GRAPH AREA */}

<div className="relative">

{renderVerticalGrid()}

{/* Y AXIS */}

<div
style={{
position:"absolute",
left:0,
bottom:0,
width:"3px",
height,
background:"black",
zIndex:50
}}
/>

{/* X AXIS */}

<div
style={{
position:"absolute",
left:0,
bottom:0,
height:"3px",
width:"100%",
background:"black",
zIndex:50
}}
/>

{/* Y ARROW */}

<div
style={{
position:"absolute",
left:-6,
top:-14,
fontSize:22,
fontWeight:"bold",
zIndex:60
}}
>
▲
</div>

{/* X ARROW */}

<div
style={{
position:"absolute",
right:-14,
bottom:-10,
fontSize:22,
fontWeight:"bold",
zIndex:60
}}
>
▶
</div>

{/* BARS */}

<div
className="flex items-end gap-16 pl-2"
style={{
height,
position:"relative",
zIndex:100
}}
>

<GraphBars
labels={labels}
values={values}
setValues={setValues}
maxValue={maxValue}
height={height}
/>

</div>

</div>

</div>

)}

{/* ================= HORIZONTAL GRAPH ================= */}

{orientation === "horizontal" && (

<div className="flex">

{/* CATEGORY LABELS */}

<div
className="flex flex-col justify-between pr-4 font-semibold"
style={{height}}
>
{labels.map((label:string)=>(
<div key={label} className="h-[40px] flex items-center justify-end">
{label}
</div>
))}
</div>

{/* GRAPH AREA */}

<div className="relative">

{renderHorizontalGrid()}

{/* Y AXIS */}

<div
style={{
position:"absolute",
left:0,
top:0,
width:"3px",
height,
background:"black",
zIndex:50
}}
/>

{/* Y ARROW */}

<div
style={{
position:"absolute",
left:-6,
top:-14,
fontSize:22,
fontWeight:"bold",
zIndex:60
}}
>
▲
</div>

{/* X AXIS */}

<div
style={{
position:"absolute",
bottom:0,
left:0,
height:"3px",
width,
background:"black",
zIndex:50
}}
/>

{/* X ARROW */}

<div
style={{
position:"absolute",
right:-14,
bottom:-10,
fontSize:22,
fontWeight:"bold",
zIndex:60
}}
>
▶
</div>

{/* X AXIS NUMBERS */}

<div
style={{
position:"absolute",
bottom:-22,
left:0,
width,
display:"flex",
justifyContent:"space-between",
fontSize:14,
fontWeight:600
}}
>
{Array.from({length:(maxValue/scale)+1}).map((_,i)=>{

const value = i * scale

return(
<span key={i}>
{value}
</span>
)

})}
</div>

{/* BARS */}

<div
className="flex flex-col gap-6"
style={{
width,
height,
paddingBottom:30,
position:"relative",
zIndex:100
}}
>

<GraphBars
labels={labels}
values={values}
setValues={setValues}
maxValue={maxValue}
height={height}
orientation="horizontal"
/>

</div>

</div>

</div>

)}

{/* X LABEL */}

<div className="text-center font-semibold mt-6">
{xLabel}
</div>

{/* SCALE */}

<div className="text-sm text-gray-600 mt-2 text-center">
Scale: 1 unit = {scale}
</div>

{/* INSTRUCTION */}

<div className="text-xs text-gray-500 mt-1 text-center">
Click bar to increase height. Right-click to decrease height.
</div>

</div>

)

}
