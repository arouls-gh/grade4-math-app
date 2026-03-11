"use client";

export default function GraphGrid({
maxValue,
height
}:any){

const step = height / maxValue

return(

<div
className="absolute left-0 bottom-0 w-full"
style={{height}}
>

{Array.from({length:maxValue+1}).map((_,i)=>{

const y = i * step

return(

<div
key={i}
className="absolute w-full border-t border-gray-300"
style={{bottom:y}}
/>

)

})}

</div>

)

}