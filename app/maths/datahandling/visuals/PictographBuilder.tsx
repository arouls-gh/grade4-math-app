"use client";

export default function PictographBuilder({
items = [],
icon = "🍎",
scale = 1,
values = {},
setValues = () => {}
}:any){

return(

<div className="space-y-6">

{/* SCALE */}

<div className="text-center text-lg font-bold">

<span className="text-2xl mr-2">{icon}</span>
= {scale} students

</div>

{/* PICTOGRAPH ROWS */}

<div className="space-y-6">

{items.map((itemObj:any,index:number)=>{

const label = itemObj.item

/* show icons from data OR student values */

const count =
values[label] !== undefined
? values[label]
: itemObj.count

return(

<div
key={label}
className="flex items-center gap-10"
>

{/* LABEL */}

<div className="w-40 text-right text-lg font-semibold">

{label}

</div>

{/* ICONS */}

<div className="flex gap-3">

{Array.from({length:count}).map((_,i)=>(

<span
key={label + "-" + i}
className="text-3xl"

>

{icon} </span>

))}

</div>

</div>

)

})}

</div>

</div>

)

}
