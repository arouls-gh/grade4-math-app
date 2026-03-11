"use client"

export default function LineTypeFigures({lines}:any){

function renderLine(type:string){

if(type==="horizontal line"){
return <line x1="20" y1="60" x2="120" y2="60" stroke="black" strokeWidth="4"/>
}

if(type==="vertical line"){
return <line x1="70" y1="10" x2="70" y2="110" stroke="black" strokeWidth="4"/>
}

if(type==="slanting line"){
return <line x1="20" y1="100" x2="120" y2="20" stroke="black" strokeWidth="4"/>
}

if(type==="curved line"){
return <path d="M20 80 Q70 10 120 80" stroke="black" strokeWidth="4" fill="none"/>
}

}

return(

<div className="grid grid-cols-3 gap-16 mt-10">

{lines.map((l:any,i:number)=>(

<div key={i} className="flex flex-col items-center">

<div className="font-bold text-lg mb-2">
{String.fromCharCode(65+i)}
</div>

<svg width="140" height="120">

{renderLine(l.type)}

</svg>

</div>

))}

</div>

)

}
