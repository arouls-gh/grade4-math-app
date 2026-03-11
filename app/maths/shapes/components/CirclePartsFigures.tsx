"use client"

export default function CirclePartsFigures({parts}:any){

const violet = "#7c3aed"

function renderPart(type:string){

/* CENTER */

if(type==="center"){
return(
<> <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="3" fill="none"/> <circle cx="60" cy="60" r="5" fill={violet}/>
</>
)
}

/* RADIUS - HORIZONTAL */

if(type==="radius" || type==="radius-horizontal"){
return(
<> <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="3" fill="none"/> <line x1="60" y1="60" x2="105" y2="60" stroke={violet} strokeWidth="4"/>
</>
)
}

/* RADIUS - VERTICAL */

if(type==="radius-vertical"){
return(
<> <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="3" fill="none"/> <line x1="60" y1="60" x2="60" y2="15" stroke={violet} strokeWidth="4"/>
</>
)
}

/* DIAMETER - HORIZONTAL */

if(type==="diameter" || type==="diameter-horizontal"){
return(
<> <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="3" fill="none"/> <line x1="15" y1="60" x2="105" y2="60" stroke={violet} strokeWidth="4"/>
</>
)
}

/* DIAMETER - VERTICAL */

if(type==="diameter-vertical"){
return(
<> <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="3" fill="none"/> <line x1="60" y1="15" x2="60" y2="105" stroke={violet} strokeWidth="4"/>
</>
)
}

/* CIRCUMFERENCE */

if(type==="circumference"){
return(
<> <circle cx="60" cy="60" r="45" stroke={violet} strokeWidth="4" fill="none"/>
</>
)
}

return null
}

return(

<div className="grid grid-cols-3 gap-16 mt-10">

{parts.map((p:any,i:number)=>(

<div key={i} className="flex flex-col items-center">

<div className="font-bold text-lg mb-2">
{String.fromCharCode(65+i)}
</div>

<svg width="120" height="120">

{renderPart(p.type)}

</svg>

</div>

))}

</div>

)

}
