"use client";

import { useState } from "react";

export default function DecimalOrder({
numbers = [],
values = {},
setValues = () => {}
}:any){

const [order,setOrder] = useState(numbers)

function moveLeft(index:number){

if(index===0) return

const copy=[...order]

const temp = copy[index-1]
copy[index-1] = copy[index]
copy[index] = temp

setOrder(copy)

setValues({order:copy.join(",")})

}

function moveRight(index:number){

if(index===order.length-1) return

const copy=[...order]

const temp = copy[index+1]
copy[index+1] = copy[index]
copy[index] = temp

setOrder(copy)

setValues({order:copy.join(",")})

}

return(

<div className="mt-12">

<div className="text-lg font-bold mb-6 text-center">
Arrange the decimals in order
</div>

<div className="flex justify-center gap-6">

{order.map((num:string,index:number)=>(

<div
key={index}
className="flex flex-col items-center"
>

<div className="text-xl font-bold bg-blue-50 px-6 py-4 border rounded">
{num}
</div>

<div className="flex gap-2 mt-3">

<button
onClick={()=>moveLeft(index)}
className="px-3 py-1 border rounded bg-white"
>
◀
</button>

<button
onClick={()=>moveRight(index)}
className="px-3 py-1 border rounded bg-white"
>
▶
</button>

</div>

</div>

))}

</div>

</div>

)

}