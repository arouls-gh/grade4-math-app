"use client";

export default function TallyBuilder({
items,
values,
setValues
}:any){

function update(item:string,val:number){

if(val < 0) val = 0
if(val > 20) val = 20

setValues({
...values,
[item]:val
})

}

function renderTally(val:number){

let groups = Math.floor(val/5)
let remainder = val % 5

let marks=[]

for(let i=0;i<groups;i++){
marks.push("||||/")
}

marks.push("|".repeat(remainder))

return marks.join(" ")

}

return(

<div className="space-y-6">

{items.map((item:string)=>{

const val = values?.[item] ?? 0

return(

<div
key={item}
className="flex items-center gap-8 text-lg"
>

<div className="w-40 font-semibold">
{item}
</div>

<div className="text-2xl font-mono tracking-widest">
{renderTally(val)}
</div>

<div className="flex gap-2">

<button
className="bg-blue-600 text-white px-3 py-1 rounded"
onClick={()=>update(item,val+1)}

>

*

</button>

<button
className="bg-red-600 text-white px-3 py-1 rounded"
onClick={()=>update(item,val-1)}

>

*

</button>

</div>

<div className="text-sm text-gray-600">
{val}
</div>

</div>

)

})}

</div>

)

}
