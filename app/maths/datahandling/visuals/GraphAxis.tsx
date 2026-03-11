"use client";

export default function GraphAxis({
maxValue,
height,
scale = 1
}: any){

/*
Example:

maxValue = 15
scale = 5

We want:
0,5,10,15
*/

const steps = maxValue / scale

return(

<div
className="flex flex-col justify-between mr-4 font-semibold"
style={{height}}
>

{Array.from({length:steps+1}).map((_,i)=>{

const value = maxValue - (i * scale)

return(

<div key={i}>
{value}
</div>
)

})}

</div>

)

}
