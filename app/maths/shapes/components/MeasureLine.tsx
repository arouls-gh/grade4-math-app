"use client"

export default function MeasureLine({length}:any){

const scale = 35   // pixels per cm
const width = length * scale

return(

<div className="flex flex-col items-center mt-6">

<div className="flex items-center gap-2">

<span className="font-bold">A</span>

<div
style={{
width:width,
height:"4px",
background:"black",
position:"relative"
}}
>

</div>

<span className="font-bold">B</span>

</div>

</div>

)

}