"use client";

export default function DecimalCompare({
left,
right,
value,
setValue
}:any){

function choose(symbol:string){
setValue(symbol)
}

return(

<div className="mt-10 flex items-center justify-center gap-8 text-3xl font-bold">

<div className="bg-blue-50 px-6 py-4 rounded border">
{left}
</div>

<div className="flex gap-4">

<button
onClick={()=>choose("<")}
className={`px-6 py-4 border-2 rounded text-2xl font-bold ${
value === "<" ? "bg-green-400" : "bg-white"
}`}
>
&lt;
</button>

<button
onClick={()=>choose("=")}
className={`px-6 py-4 border-2 rounded text-2xl font-bold ${
value === "=" ? "bg-green-400" : "bg-white"
}`}
>
=
</button>

<button
onClick={()=>choose(">")}
className={`px-6 py-4 border-2 rounded text-2xl font-bold ${
value === ">" ? "bg-green-400" : "bg-white"
}`}
>
&gt;
</button>

</div>

<div className="bg-blue-50 px-6 py-4 rounded border">
{right}
</div>

</div>

)

}