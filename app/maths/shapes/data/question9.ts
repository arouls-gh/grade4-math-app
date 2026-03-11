export const question9 = {

id:9,

type:"multi",

showCircleParts:true,

parts:[
{type:"center"},
{type:"radius-horizontal"},
{type:"diameter-horizontal"},
{type:"circumference"},
{type:"radius-vertical"},
{type:"diameter-vertical"}
],

text:`Look at each figure carefully.

Identify the part of the circle shown in violet colour.`,

multi:[

{key:"a",text:"A. This part is"},
{key:"b",text:"B. This part is"},
{key:"c",text:"C. This part is"},
{key:"d",text:"D. This part is"},
{key:"e",text:"E. This part is"},
{key:"f",text:"F. This part is"}

],

correctAnswer:{

a:"center",
b:"radius",
c:"diameter",
d:"circumference",
e:"radius",
f:"diameter"

},

hint:`The center is the middle point.

Radius goes from center to the circle.

Diameter goes across the circle through the center.

Circumference is the boundary of the circle.`,

solution:`Each labeled figure shows a specific part of the circle.`,

stepContent:[

{text:"Look at the circle carefully."},
{text:"Find the middle point (center)."},
{text:"Check if the line goes from the center to the boundary (radius)."},
{text:"If the line passes across the circle through the center, it is a diameter."}

]

}
