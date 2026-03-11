"use client";

import { useState } from "react";

const colors = [
"#5B8FF9",
"#61DDAA",
"#65789B",
"#F6BD16",
"#7262FD",
"#78D3F8"
];

export default function GraphBars({
labels,
values,
setValues,
maxValue,
height,
orientation="vertical"
}: any) {

/* ================= VERTICAL SCALE ================= */

const stepVertical = height / maxValue;

/* ================= HORIZONTAL SCALE ================= */

const width = 420
const stepHorizontal = width / maxValue

const [dragging,setDragging] = useState<string | null>(null);

/* ================= VERTICAL UPDATE ================= */

function updateValue(label:string,clientY:number,rectTop:number){

let val = Math.round((rectTop + height - clientY) / stepVertical);

if(val < 0) val = 0;
if(val > maxValue) val = maxValue;

setValues({
...values,
[label]:val
});

}

/* ================= HORIZONTAL UPDATE ================= */

function updateHorizontal(label:string,clientX:number,rectLeft:number){

let val = Math.round((clientX - rectLeft) / stepHorizontal);

if(val < 0) val = 0;
if(val > maxValue) val = maxValue;

setValues({
...values,
[label]:val
});

}

function startDrag(label:string){
setDragging(label);
}

function stopDrag(){
setDragging(null);
}

/* ================= HORIZONTAL MODE (UNCHANGED) ================= */

if(orientation === "horizontal"){

return(

<div className="flex flex-col gap-6">

{labels.map((label:string,index:number)=>{

const val = values?.[label] ?? 0;
const barWidth = val * stepHorizontal;

return(

<div
key={label}
className="flex items-center"
>

<div
className="rounded shadow-md cursor-ew-resize transition-all duration-200"
style={{
height:36,
width:barWidth,
backgroundColor:colors[index % colors.length]
}}
onMouseDown={(e)=>{

const rect = e.currentTarget.parentElement?.getBoundingClientRect();

if(!rect) return;

startDrag(label);

const move = (ev:any)=>{
updateHorizontal(label,ev.clientX,rect.left);
};

const up = ()=>{
stopDrag();
window.removeEventListener("mousemove",move);
window.removeEventListener("mouseup",up);
};

window.addEventListener("mousemove",move);
window.addEventListener("mouseup",up);

}}
/>

</div>

);

})}

</div>

)

}

/* ================= VERTICAL MODE ================= */

return(

<div
className="flex items-end gap-24 px-16 relative"
style={{height}}
onMouseUp={stopDrag}
onMouseLeave={stopDrag}
>

{labels.map((label:string,index:number)=>{

const val = values?.[label] ?? 0;

/* CLAMP VALUE TO AXIS RANGE */

const safeVal = Math.max(0, Math.min(val, maxValue))

/* FINAL BAR HEIGHT */

const barHeight = safeVal * stepVertical

return(

<div
key={label}
className="relative flex flex-col items-center"
style={{width:75,height}}
>

{/* BAR */}

<div
className="rounded-t shadow-md cursor-ns-resize transition-all duration-200"
style={{
position:"absolute",
bottom:0,
height:barHeight,
width:55,
backgroundColor:colors[index % colors.length]
}}
onMouseDown={(e)=>{

const rect = e.currentTarget.parentElement?.parentElement?.getBoundingClientRect();

if(!rect) return;

startDrag(label);

const move = (ev:any)=>{
updateValue(label,ev.clientY,rect.top);
};

const up = ()=>{
stopDrag();
window.removeEventListener("mousemove",move);
window.removeEventListener("mouseup",up);
};

window.addEventListener("mousemove",move);
window.addEventListener("mouseup",up);

}}
/>

{/* LABEL */}

<div
className="absolute text-sm font-semibold text-center"
style={{
bottom:-32,
width:"100%"
}}
>
{label}
</div>

</div>

);

})}

</div>

);

}