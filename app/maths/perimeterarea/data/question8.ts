function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function generate(){

  const length = rand(4,9);
  const breadth = rand(4,9);

  const area = length * breadth;

  return {length,breadth,area};

}

const {length,breadth,area} = generate();

export const question8 = {

  id:8,

  type:"single",

  text:`

A playground is drawn on a square grid.

Each small square represents **1 square metre**.

The playground covers **${length} squares in length** and **${breadth} squares in breadth**.

<svg width="320" height="260">

<!-- GRID -->

${Array.from({length:breadth+1}).map((_,i)=>`
<line x1="40" y1="${40+i*30}" x2="${40+length*30}" y2="${40+i*30}" stroke="#bbb"/>
`).join("")}

${Array.from({length:length+1}).map((_,i)=>`
<line x1="${40+i*30}" y1="40" x2="${40+i*30}" y2="${40+breadth*30}" stroke="#bbb"/>
`).join("")}

<!-- PLAYGROUND AREA -->

<rect
x="40"
y="40"
width="${length*30}"
height="${breadth*30}"
fill="rgba(120,180,255,0.35)"
stroke="black"
stroke-width="2"
/>

<!-- LABELS -->

<text x="${40+(length*30)/2}" y="30" text-anchor="middle">
${length} squares
</text>

<text x="${40+length*30+15}" y="${40+(breadth*30)/2}">
${breadth} squares
</text>

</svg>

Find the **area of the playground**.

Area = ______ square metres

`,

  correctAnswer:String(area),

  hint:`

Hint 1  
The playground forms a **rectangle**.

Hint 2  
Count how many squares make the **length**.

Hint 3  
Count how many squares make the **breadth**.

Hint 4  
Use the rectangle area formula.

Area = length × breadth

`,

  steps:{

    step1:String(length),

    step2:String(breadth),

    step3:String(area)

  },

  stepContent:[

{
key:"step1",
text:`

Step 1 — Identify the length

Length = ______ squares

`
},

{
key:"step2",
text:`

Step 2 — Identify the breadth

Breadth = ______ squares

`
},

{
key:"step3",
text:`

Step 3 — Calculate the area

Area = length × breadth

Area = ______ square metres

`
}

],

solution:`

Length = ${length}

Breadth = ${breadth}

Area of rectangle

= length × breadth

= ${length} × ${breadth}

= ${area} square metres

`,

lesson:`

Students learned that the **area of a rectangle can be calculated using length × breadth instead of counting each square individually**.

`

};