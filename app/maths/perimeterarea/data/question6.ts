export const question6 = {

  id:6,

  type:"single",

  text:`

Find the **area of the shaded region**.

Each small square represents **1 square unit**.

<svg width="260" height="260" viewBox="0 0 240 240">

<!-- GRID -->

${Array.from({length:7}).map((_,i)=>`
<line x1="0" y1="${i*40}" x2="240" y2="${i*40}" stroke="#ccc"/>
<line x1="${i*40}" y1="0" x2="${i*40}" y2="240" stroke="#ccc"/>
`).join("")}

<!-- SHADED FULL SQUARES -->

<rect x="40" y="120" width="80" height="80" fill="#8ecae6"/>
<rect x="80" y="80" width="80" height="80" fill="#8ecae6"/>
<rect x="120" y="40" width="80" height="80" fill="#8ecae6"/>

<!-- HALF SQUARES -->

<polygon points="0,160 40,160 40,200" fill="#8ecae6"/>
<polygon points="160,0 200,0 200,40" fill="#8ecae6"/>

</svg>

Area = ______ square units

`,

  correctAnswer:"11",

  hint:`

Hint 1  
Each **complete square** counts as **1 square unit**.

Hint 2  
Squares that are **half covered** count as **½ square unit**.

Hint 3  
Squares that are **more than half covered** can be counted as **1 square unit**.

Hint 4  
Squares that are **less than half covered** are **ignored (0)**.

Hint 5  
Add all counted squares to get the total area.

`,

  steps:{

    step1:"10",
    step2:"2",
    step3:"1",
    step4:"11"

  },

  stepContent:[

{
key:"step1",
text:`

Step 1 — Count all fully shaded squares

Full squares = ______

`
},

{
key:"step2",
text:`

Step 2 — Count all half shaded squares

Half squares = ______

`
},

{
key:"step3",
text:`

Step 3 — Convert half squares into area

Half square area = (number of half squares × 1/2)

Half square area = ______

`
},

{
key:"step4",
text:`

Step 4 — Add everything

Total area =

Full squares + Half square area

Area = ______ square units

`
}

],

solution:`

Full squares = 10

Half squares = 2

Half area = 2 × 1/2 = 1

Total area

10 + 1 = 11

Area = 11 square units

`,

lesson:`

Students learned that irregular shapes on grids can be measured by counting complete squares and combining partial squares.

`

};