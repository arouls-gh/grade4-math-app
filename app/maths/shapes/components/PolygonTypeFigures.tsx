"use client"

export default function PolygonTypeFigures({polygons}:any){

function renderPolygon(p:any){

if(!p) return null

if(p.type==="triangle"){
return ( <polygon points="55,10 10,95 100,95" stroke="black" fill="none" strokeWidth="3"/>
)
}

if(p.type==="quadrilateral"){
return ( <polygon points="15,30 100,15 85,95 25,80" stroke="black" fill="none" strokeWidth="3"/>
)
}

if(p.type==="pentagon" && p.kind==="regular"){
return ( <polygon points="55,10 10,40 25,95 85,95 100,40" stroke="black" fill="none" strokeWidth="3"/>
)
}

if(p.type==="pentagon" && p.kind==="irregular"){
return ( <polygon points="55,10 15,40 30,95 100,80 85,30" stroke="black" fill="none" strokeWidth="3"/>
)
}

if(p.type==="hexagon"){
return ( <polygon points="30,10 80,10 105,55 80,100 30,100 5,55" stroke="black" fill="none" strokeWidth="3"/>
)
}

return null
}

if(!polygons || polygons.length===0){
return null
}

return(

<div className="grid grid-cols-3 gap-12 mt-10">

{polygons.map((p:any,i:number)=>(

<div key={i} className="flex flex-col items-center">

<div className="font-bold text-lg mb-2">
{String.fromCharCode(65+i)}
</div>

<svg width="120" height="120">
{renderPolygon(p)}
</svg>

</div>

))}

</div>

)

}
