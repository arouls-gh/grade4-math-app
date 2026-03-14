"use client";

import { useState } from "react";

export default function DecimalBlocks({
label = "Blocks",
value = 0,
setValue = () => {}
}: any){

const totalBlocks = 10

const [local,setLocal] = useState<number>(value)

function toggleBlock(index:number){

let newVal = index + 1

if(local === newVal){
newVal = index
}

setLocal(newVal)
setValue(newVal)

}

return(

<div className="mt-10">

{/* TITLE */}

<div className="text-lg font-bold mb-4">
Click blocks to represent the "tenths"
</div>

{/* BLOCK ROW */}

<div className="flex gap-2">

{Array.from({length:totalBlocks}).map((_,i)=>{

const filled = i < local

return(

<div
key={i}
onClick={()=>toggleBlock(i)}
className="w-12 h-12 border-2 border-black cursor-pointer flex items-center justify-center transition-all"
style={{
backgroundColor:filled ? "#4ade80" : "#ffffff"
}}
>

{filled ? "■" : ""}

</div>

)

})}

</div>

{/* DECIMAL VALUE */}

<div className="mt-6 text-xl font-semibold">

Decimal value = {local}/10 = {(local/10).toFixed(1)}

</div>

</div>

)

}