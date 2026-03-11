export const question9 = {

id:9,

type:"single",

text:`

A curved pond is drawn on the grid below.

Each small square represents **2 square units**.

Find the **area of the shaded region**.


<svg width="320" height="280">

<!-- GRID -->

${Array.from({length:9}).map((_,i)=>`
<line x1="40" y1="${40+i*25}" x2="240" y2="${40+i*25}" stroke="#bbb"/>
`).join("")}

${Array.from({length:9}).map((_,i)=>`
<line x1="${40+i*25}" y1="40" x2="${40+i*25}" y2="240" stroke="#bbb"/>
`).join("")}


<!-- CURVED SHAPE -->

<path
d="
M70 60
C120 40, 180 60, 190 100
C200 140, 170 180, 130 200
C90 210, 70 180, 60 140
C50 110, 60 80, 70 60
"
fill="rgba(120,180,255,0.6)"
stroke="black"
stroke-width="2"
/>

</svg>


Area = ______ square units

`,

correctAnswer:"44",

hint:`

Hint 1  
Each small square represents **2 square units**.

Hint 2  
Count the **fully shaded squares**.

Hint 3  
Combine partial shaded squares to form **full squares**.

Hint 4  
Multiply the number of counted squares by **2 square units**.

`,

steps:{

step1:"22",

step2:"44"

},

stepContent:[

{
key:"step1",
text:`

Step 1 — Count the shaded squares

Full shaded squares = 21

Half shaded squares = 2

Two half squares combine to form **1 full square**

Total counted squares = ______

`
},

{
key:"step2",
text:`

Step 2 — Convert squares into area

Each square represents **2 square units**

Area = squares × 2

Area = ______ square units

`
}

],

solution:`

Full shaded squares = 21

Half shaded squares = 2

Two half squares = 1 full square

Total squares = 21 + 1 = 22


Each square = 2 square units

Area = 22 × 2

Area = 44 square units

`,

lesson:`

Students learned that the area of an irregular shape on a grid can be found by **counting full squares and combining partial squares**, then multiplying by the **area value of each square**.

`

};