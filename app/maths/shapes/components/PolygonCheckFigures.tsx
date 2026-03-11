"use client"

export default function PolygonCheckFigures({figures}:any){

function renderShape(type:string){

if(type==="triangle"){
return <polygon points="60,10 10,100 110,100" stroke="black" strokeWidth="3" fill="none"/>
}

if(type==="square"){
return <rect x="25" y="25" width="70" height="70" stroke="black" strokeWidth="3" fill="none"/>
}

if(type==="pentagon"){
return <polygon points="60,10 20,50 35,100 85,100 100,50" stroke="black" strokeWidth="3" fill="none"/>
}

if(type==="circle"){
return <circle cx="60" cy="60" r="40" stroke="black" strokeWidth="3" fill="none"/>
}

if(type==="openShape"){
return <polyline points="10,90 60,10 110,90" stroke="black" strokeWidth="3" fill="none"/>
}

if(type==="curvedShape"){
return <path d="M10 70 Q60 10 110 70" stroke="black" strokeWidth="3" fill="none"/>
}

}

return(

<div className="grid grid-cols-3 gap-16 mt-10">

{figures.map((f:any,i:number)=>(

<div key={i} className="flex flex-col items-center">

<div className="font-bold text-lg mb-2">
{String.fromCharCode(65+i)}
</div>

<svg width="120" height="120">

{renderShape(f.type)}

</svg>

</div>

))}

</div>

)

}
