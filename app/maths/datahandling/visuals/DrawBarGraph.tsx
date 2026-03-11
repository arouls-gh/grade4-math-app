"use client";

import { useEffect, useState } from "react";
import GraphEngine from "./GraphEngine";

export default function DrawBarGraph({
labels = [],
maxValue = 10,
scale = 1,
values = {},
setValues = () => {}
}:any){

const [mounted,setMounted] = useState(false)

useEffect(()=>{
setMounted(true)
},[])

if(!mounted) return null

return(

<GraphEngine
title="Survey Results"
labels={labels}
maxValue={maxValue}
scale={scale}
xLabel="Items"
yLabel="Count"
values={values}
setValues={setValues}
/>

)

}