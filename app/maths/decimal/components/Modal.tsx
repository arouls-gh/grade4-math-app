"use client";

export default function Modal({
activeModal,
setActiveModal,
question
}:any){

let content=""

if(activeModal==="solution") content=question.solution
if(activeModal==="hint") content=question.hint

return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

<div className="bg-white p-8 rounded-lg max-w-xl">

<div className="text-lg whitespace-pre-line">

{content}

</div>

<div className="mt-6 text-right">

<button
onClick={()=>setActiveModal(null)}
className="bg-gray-200 px-4 py-2 rounded"
>
Close
</button>

</div>

</div>

</div>

)

}