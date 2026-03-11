"use client"

export default function ObjectImage({ object }: { object: string }) {

const size = 120

if(object === "coin" || object === "clock"){

return(

<svg width={size} height={size}>

<circle
cx="60"
cy="60"
r="40"
fill="#facc15"
stroke="black"
strokeWidth="3"
/>

</svg>

)

}

if(object === "pizza slice"){

return(

<svg width={size} height={size}>

<polygon
points="60,20 20,100 100,100"
fill="#fde68a"
stroke="black"
strokeWidth="3"
/>

</svg>

)

}

if(object === "book"){

return(

<svg width={size} height={size}>

<rect
x="25"
y="25"
width="70"
height="70"
fill="#93c5fd"
stroke="black"
strokeWidth="3"
rx="6"
/>

</svg>

)

}

if(object === "dice face"){

return(

<svg width={size} height={size}>

<rect
x="25"
y="25"
width="70"
height="70"
fill="white"
stroke="black"
strokeWidth="3"
rx="10"
/>

<circle
cx="60"
cy="60"
r="6"
fill="black"
/>

</svg>

)

}

if(object === "window"){

return(

<svg width={size} height={size}>

<rect
x="20"
y="20"
width="80"
height="80"
fill="#bfdbfe"
stroke="black"
strokeWidth="3"
/>

<line
x1="60"
y1="20"
x2="60"
y2="100"
stroke="black"
strokeWidth="3"
/>

<line
x1="20"
y1="60"
x2="100"
y2="60"
stroke="black"
strokeWidth="3"
/>

</svg>

)

}

return null

}
