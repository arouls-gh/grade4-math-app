"use client"

export default function PolygonCompare(){

return(

<div className="grid grid-cols-2 gap-12 mt-8 text-center">

{/* A */}

<div className="flex gap-6 justify-center">
<svg width="60" height="60">
<polygon points="30,5 5,55 55,55" fill="none" stroke="black" strokeWidth="3"/>
</svg>

<svg width="60" height="60">
<polygon points="30,5 5,55 55,55" fill="none" stroke="black" strokeWidth="3"/>
</svg>
</div>

{/* B */}

<div className="flex gap-6 justify-center">
<svg width="60" height="60">
<rect x="5" y="10" width="50" height="40" stroke="black" fill="none" strokeWidth="3"/>
</svg>

<svg width="80" height="60">
<rect x="5" y="10" width="70" height="40" stroke="black" fill="none" strokeWidth="3"/>
</svg>
</div>

{/* C */}

<div className="flex gap-6 justify-center">
<svg width="60" height="60">
<polygon points="30,5 5,25 15,55 45,55 55,25" stroke="black" fill="none" strokeWidth="3"/>
</svg>

<svg width="60" height="60">
<polygon points="30,5 5,25 15,55 45,55 55,25" stroke="black" fill="none" strokeWidth="3"/>
</svg>
</div>

{/* D */}

<div className="flex gap-6 justify-center">
<svg width="60" height="60">
<polygon points="30,5 5,55 55,55" stroke="black" fill="none" strokeWidth="3"/>
</svg>

<svg width="60" height="60">
<rect x="10" y="10" width="40" height="40" stroke="black" fill="none" strokeWidth="3"/>
</svg>
</div>

</div>

)

}