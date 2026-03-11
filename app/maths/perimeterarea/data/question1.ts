function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

/* generate values */

const rectL = rand(6,20);
const rectB = rand(3,12);

const square = rand(4,15);

const t1 = rand(3,15);
const t2 = rand(3,15);
const t3 = rand(3,15);

const p1 = rand(3,15);
const p2 = rand(3,15);
const p3 = rand(3,15);
const p4 = rand(3,15);
const p5 = rand(3,15);

export const question1 = {

  id:1,
  type:"multi",

  text:"Find the perimeter of the following shapes.",

  values:{
    rectL,
    rectB,
    square,
    tri:[t1,t2,t3],
    poly:[p1,p2,p3,p4,p5]
  },

  correctAnswer:{
    A:String(2*(rectL+rectB)),
    B:String(4*square),
    C:String(t1+t2+t3),
    D:String(p1+p2+p3+p4+p5)
  },

  /* STEP ANSWERS */

  steps:{

    rect_add:String(rectL + rectB),
    rect_total:String(2 * (rectL + rectB)),

    square_total:String(4 * square),

    tri_total:String(t1 + t2 + t3),

    poly_total:String(p1 + p2 + p3 + p4 + p5)

  },

  /* STEP CONTENT (interactive modal) */

  stepContent:[

    {
      key:"rect_add",
      text:`
A. Rectangle

Step 1

Add the length and breadth.

${rectL} + ${rectB} =
`
    },

    {
      key:"rect_total",
      text:`
Step 2

Multiply the result by 2.

2 × (${rectL} + ${rectB}) =
`
    },

    {
      key:"square_total",
      text:`
B. Square

All sides are equal.

Perimeter = 4 × side

4 × ${square} =
`
    },

    {
      key:"tri_total",
      text:`
C. Triangle

Add all three sides.

${t1} + ${t2} + ${t3} =
`
    },

    {
      key:"poly_total",
      text:`
D. Irregular Polygon

Add all five sides.

${p1} + ${p2} + ${p3} + ${p4} + ${p5} =
`
    }

  ],

  hint:`
Perimeter means the distance around a shape.

Perimeter = sum of all its sides.
`,

  solution:`
Rectangle
P = 2 × (${rectL} + ${rectB})
P = ${2*(rectL+rectB)}

Square
P = 4 × ${square}
P = ${4*square}

Triangle
P = ${t1} + ${t2} + ${t3}
P = ${t1+t2+t3}

Polygon
P = ${p1}+${p2}+${p3}+${p4}+${p5}
P = ${p1+p2+p3+p4+p5}
`,

  lesson:`
Perimeter means the total distance around a shape.

Rectangle → opposite sides equal  
Square → all sides equal  
Triangle → add all sides  
Polygon → add all sides
`

};