export const question8 = {

id:8,

type:"multi",

showPolygonCheck:true,

figures:[
{type:"triangle"},
{type:"circle"},
{type:"square"},
{type:"openShape"},
{type:"pentagon"},
{type:"curvedShape"}
],

text:`Look at each figure carefully.

Decide whether the figure is a polygon or not a polygon.`,

multi:[

{key:"a",text:"A. The figure is (state weather <polygon> OR <not polygon>)"},
{key:"b",text:"B. The figure is (state weather <polygon> OR <not polygon>)"},
{key:"c",text:"C. The figure is (state weather <polygon> OR <not polygon>)"},
{key:"d",text:"D. The figure is (state weather <polygon> OR <not polygon>)"},
{key:"e",text:"E. The figure is (state weather <polygon> OR <not polygon>)"},
{key:"f",text:"F. The figure is (state weather <polygon> OR <not polygon>)"}

],

correctAnswer:{

a:"polygon",
b:"not polygon",
c:"polygon",
d:"not polygon",
e:"polygon",
f:"not polygon"

},

hint:`A polygon must be closed and have straight sides.`,

solution:`Triangles, squares and pentagons are polygons.

Shapes with curves or open sides are not polygons.`,

stepContent:[

{text:"Check if the figure is closed."},
{text:"Check if the sides are straight."},
{text:"If both conditions are true, it is a polygon."}

]

}
