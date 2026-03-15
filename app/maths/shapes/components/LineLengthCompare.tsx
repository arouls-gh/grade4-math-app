"use client"

export default function LineLengthCompare(){

return(

<div className="flex flex-col items-center mt-10 gap-8">

{/* STRAIGHT LINE AB */}

<div className="flex flex-col items-center">

<div className="flex items-center">

<span className="font-bold mr-2">A</span>

<svg width="288" height="20">
<line
x1="0"
y1="10"
x2="288"
y2="10"
stroke="black"
strokeWidth="4"
/>
</svg>

<span className="font-bold ml-2">B</span>

</div>

</div>


{/* CURVED LINE CD */}

<div className="flex flex-col items-center">

<div className="flex items-center">

<span className="font-bold mr-2">C</span>

<svg width="288" height="40">

<path
d="M0 20 Q144 -20 288 20"
stroke="black"
strokeWidth="4"
fill="transparent"
/>

</svg>

<span className="font-bold ml-2">D</span>

</div>

</div>

</div>

)

}