"use client"

export default function Modal({
isOpen,
onClose,
title,
children
}:any){

if(!isOpen) return null

return(

<div
className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000]"
onClick={onClose}
>

<div
className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 relative"
onClick={(e)=>e.stopPropagation()}
>

{/* TITLE */}

<h2 className="text-2xl font-bold mb-4 text-gray-800">
{title}
</h2>

{/* CONTENT */}

<div className="text-lg whitespace-pre-line text-gray-700">
{children}
</div>

{/* CLOSE BUTTON */}

<div className="mt-6 flex justify-end">

<button
onClick={onClose}
className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-medium"

>

Close </button>

</div>

</div>

</div>

)

}
