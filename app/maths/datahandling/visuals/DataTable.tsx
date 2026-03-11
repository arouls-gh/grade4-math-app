"use client";

export default function DataTable({headers,rows}:any){

return(

<div className="overflow-x-auto">

<table className="border-collapse border border-black text-lg">

<thead>

<tr>

{headers.map((h:any,i:number)=>(

<th
key={i}
className="border border-black px-6 py-3 bg-gray-100 font-bold"
>
{h}
</th>
))}

</tr>

</thead>

<tbody>

{rows.map((row:any,i:number)=>(

<tr key={i}>

{row.map((cell:any,j:number)=>(

<td
key={j}
className="border border-black px-6 py-3 text-center"
>
{cell}
</td>
))}

</tr>

))}

</tbody>

</table>

</div>

)

}
