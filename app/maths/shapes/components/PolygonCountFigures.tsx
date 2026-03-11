"use client"

function getPolygonPoints(sides:number, radius:number, cx:number, cy:number){

const points=[]

for(let i=0;i<sides;i++){

const angle=(2*Math.PI*i)/sides - Math.PI/2

const x=cx + radius*Math.cos(angle)
const y=cy + radius*Math.sin(angle)

points.push(`${x},${y}`)

}

return points.join(" ")
}

export default function PolygonCountFigures({polygons}:any){

return(

<div className="grid grid-cols-3 gap-16 mt-12">

{polygons.map((p:any,i:number)=>(

<div key={i} className="flex flex-col items-center">

<div className="font-bold text-lg mb-3">
{String.fromCharCode(65+i)}
</div>

<svg width="150" height="150">

<polygon
points={getPolygonPoints(p.sides,45,75,75)}
stroke="black"
strokeWidth="3"
fill="none"
/>

</svg>

</div>

))}

</div>

)

}