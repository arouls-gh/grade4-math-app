export const question1 = {

id:1,

type:"multi",

text:`
Write the **number of lines of symmetry** for each shape.
`,

shapes:[

{
key:"square",
name:"Square",
svg:`<svg width="120" height="120">
<rect x="20" y="20" width="80" height="80" stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"rectangle",
name:"Rectangle",
svg:`<svg width="140" height="100">
<rect x="20" y="30" width="100" height="50" stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"rightTriangle",
name:"Right Triangle",
svg:`<svg width="140" height="120">
<polygon points="20,100 20,20 100,100" stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"equilateralTriangle",
name:"Equilateral Triangle",
svg:`<svg width="140" height="120">
<polygon points="70,20 20,110 120,110" stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"pentagon",
name:"Pentagon",
svg:`<svg width="140" height="120">
<polygon points="70,20 20,60 40,110 100,110 120,60"
stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"hexagon",
name:"Hexagon",
svg:`<svg width="140" height="120">
<polygon points="40,20 100,20 120,60 100,100 40,100 20,60"
stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"octagon",
name:"Octagon",
svg:`<svg width="140" height="120">
<polygon points="40,20 100,20 120,40 120,80 100,100 40,100 20,80 20,40"
stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"circle",
name:"Circle",
svg:`<svg width="120" height="120">
<circle cx="60" cy="60" r="40" stroke="black" stroke-width="3" fill="none"/>
</svg>`
},

{
key:"quadrilateral",
name:"Irregular Quadrilateral",
svg:`<svg width="140" height="120">
<polygon points="20,30 120,40 100,100 30,90"
stroke="black" stroke-width="3" fill="none"/>
</svg>`
}

],

correctAnswer:{
square:"4",
rectangle:"2",
rightTriangle:"0",
equilateralTriangle:"3",
pentagon:"5",
hexagon:"6",
octagon:"8",
circle:"infinite",
quadrilateral:"0"
},

hint:`

Hint 1  
A **line of symmetry** divides a shape into **two equal mirror halves**.

Hint 2  
Imagine **folding the shape along a line**.

Hint 3  
If both halves match perfectly after folding, that line is a **line of symmetry**.

`,

steps:{

step1:"4",
step2:"2",
step3:"0",
step4:"3",
step5:"5",
step6:"6",
step7:"8",
step8:"infinite",
step9:"0"

},

stepContent:[

{
key:"step1",
text:`

Look at the **square**.

You can fold it:

• vertically  
• horizontally  
• diagonally from corner to corner  
• diagonally the other way

Number of symmetry lines = ______

`
},

{
key:"step2",
text:`

Look at the **rectangle**.

It can be folded:

• vertically  
• horizontally

Diagonal folds will **not match the halves**.

Number of symmetry lines = ______

`
},

{
key:"step3",
text:`

Look at the **right triangle**.

Try folding it across different lines.

The two halves **will not match exactly**.

Number of symmetry lines = ______

`
},

{
key:"step4",
text:`

An **equilateral triangle** has all sides equal.

You can draw a symmetry line from each **vertex to the midpoint of the opposite side**.

Number of symmetry lines = ______

`
},

{
key:"step5",
text:`

A **regular pentagon** has equal sides.

Each vertex can create a symmetry line through the centre.

Number of symmetry lines = ______

`
},

{
key:"step6",
text:`

A **regular hexagon** has equal sides and angles.

Symmetry lines pass through **opposite vertices and opposite sides**.

Number of symmetry lines = ______

`
},

{
key:"step7",
text:`

A **regular octagon** has 8 equal sides.

Each side and vertex pair creates symmetry.

Number of symmetry lines = ______

`
},

{
key:"step8",
text:`

A **circle** can be folded along **any line passing through its centre**.

This means it has **unlimited symmetry lines**.

Answer = ______

`
},

{
key:"step9",
text:`

Look at the **irregular quadrilateral**.

The sides and angles are not equal.

No fold creates two identical halves.

Number of symmetry lines = ______

`
}

],

solution:`

Square = 4

Rectangle = 2

Right Triangle = 0

Equilateral Triangle = 3

Pentagon = 5

Hexagon = 6

Octagon = 8

Circle = Infinite

Irregular Quadrilateral = 0

`,

lesson:`

A **line of symmetry** divides a shape into **two identical mirror halves**.

Regular shapes usually have **multiple symmetry lines**, while irregular shapes may have **none**.

A **circle** has **infinitely many lines of symmetry** because any line through the centre divides it into equal halves.

`

};