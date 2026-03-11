function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function generate(){

  const rectL = rand(10,16);
  const rectB = rand(4,8);
  const sq = rand(4,8);

  const rectArea = rectL * rectB;
  const sqArea = sq * sq;

  const totalArea = rectArea + sqArea;

  const perimeter =
    rectL +
    rectB +
    (rectL - sq) +
    sq +
    sq +
    (rectB + sq);

  return {rectL,rectB,sq,totalArea,perimeter};

}

const {rectL,rectB,sq,totalArea,perimeter} = generate();

export const question7 = {

  id:7,

  type:"multi",

  text:`

The figure below is formed by combining a **rectangle** and a **square**.

Rectangle  
Length = ${rectL} m  
Breadth = ${rectB} m  

Square  
Side = ${sq} m  


<svg width="320" height="240">

<!-- RECTANGLE AREA -->
<rect
x="40"
y="40"
width="200"
height="80"
fill="#bde0fe"
/>

<!-- SQUARE AREA -->
<rect
x="40"
y="120"
width="80"
height="80"
fill="#ffc8dd"
/>

<!-- OUTER BORDER ONLY -->

<path
d="
M40 40
L240 40
L240 120
L120 120
L120 200
L40 200
Z
"
fill="none"
stroke="black"
stroke-width="3"
/>

<!-- LABELS -->

<text x="140" y="30" text-anchor="middle">${rectL} m</text>
<text x="250" y="85">${rectB} m</text>

<text x="80" y="215" text-anchor="middle">${sq} m</text>
<text x="20" y="170">${sq} m</text>

</svg>


Area of the shape = ______  

Perimeter of the shape = ______  

`,

  correctAnswer:{

    area:String(totalArea),
    perimeter:String(perimeter)

  },

  hint:`

Hint 1  
Split the L-shape into a **rectangle and a square**.

Hint 2  
Area of rectangle = length × breadth.

Hint 3  
Area of square = side × side.

Hint 4  
Add both areas to get the **total area**.

Hint 5  
For perimeter, follow only the **outer boundary of the shape**.

`,

  steps:{

    step1:String(totalArea),
    step2:String(perimeter)

  },

  stepContent:[

{
key:"step1",
text:`

Step 1 — Calculate the area

Rectangle area = ${rectL} × ${rectB}

Square area = ${sq} × ${sq}

Total area = rectangle area + square area

Area = ______

`
},

{
key:"step2",
text:`

Step 2 — Calculate the perimeter

Trace only the **outside boundary** of the L-shape.

Add the lengths of all outside edges.

Perimeter = ______

`
}

],

solution:`

Rectangle area

${rectL} × ${rectB}

Square area

${sq} × ${sq}

Total area

= ${totalArea}


Perimeter of the outer boundary

= ${perimeter}

`,

lesson:`

Students learned that composite shapes can be split into simpler shapes to calculate **area**, and perimeter is calculated by tracing **only the outer boundary**.

`

};