"use client"

export default function LineFigures(){

return(

<div className="grid grid-cols-4 gap-12 mt-8 text-center items-center">

{/* LINE */}

<div>
<svg width="120" height="40">

<line
x1="10"
y1="20"
x2="110"
y2="20"
stroke="black"
strokeWidth="3"
/>

<polygon points="10,20 18,16 18,24" fill="black"/>
<polygon points="110,20 102,16 102,24" fill="black"/>

</svg>

<div className="text-sm mt-1 font-medium">
A
</div>

</div>

{/* LINE SEGMENT */}

<div>
<svg width="120" height="40">

<circle cx="15" cy="20" r="4" fill="black"/>
<circle cx="105" cy="20" r="4" fill="black"/>

<line
x1="15"
y1="20"
x2="105"
y2="20"
stroke="black"
strokeWidth="3"
/>

</svg>

<div className="text-sm mt-1 font-medium">
B
</div>

</div>

{/* RAY */}

<div>
<svg width="120" height="40">

<circle cx="15" cy="20" r="4" fill="black"/>

<line
x1="15"
y1="20"
x2="110"
y2="20"
stroke="black"
strokeWidth="3"
/>

<polygon points="110,20 102,16 102,24" fill="black"/>

</svg>

<div className="text-sm mt-1 font-medium">
C
</div>

</div>

{/* ANGLE */}

<div>
<svg width="120" height="60">

<line
x1="30"
y1="40"
x2="80"
y2="10"
stroke="black"
strokeWidth="3"
/>

<line
x1="30"
y1="40"
x2="100"
y2="40"
stroke="black"
strokeWidth="3"
/>

<circle cx="30" cy="40" r="4" fill="black"/>

</svg>

<div className="text-sm mt-1 font-medium">
D
</div>

</div>

</div>

)

}
