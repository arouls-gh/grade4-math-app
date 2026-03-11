export const question1 = {

id:1,

type:"multi",

showFigures:true,

text:`Look at the figures and identify what each one represents.

Type your answers in words.

For the last question, write two words separated by a comma.
Example: angle, vertex`,

multi:[

{
key:"a",
text:"A. The first figure represents a ______"
},

{
key:"b",
text:"B. The second figure represents a ______"
},

{
key:"c",
text:"C. The third figure represents a ______"
},

{
key:"d",
text:"D. The fourth figure forms an ______ and the meeting point is called the ______ (write two answers separated by a comma)"
}

],

correctAnswer:{

a:"line",
b:"line segment",
c:"ray",
d:"angle, vertex"

},

hint:`• A line goes forever in both directions.

• A line segment has two end points.

• A ray starts at one point and goes forever in one direction.

• When two lines meet they form an angle.`,

solution:`A line extends endlessly in both directions.

A line segment has two end points.

A ray has one end point and extends forever in one direction.

When two lines meet they form an angle, and the meeting point is called the vertex.

Therefore:

A → Line
B → Line Segment
C → Ray
D → Angle, Vertex`,

stepContent:[

{
key:"s1",
text:"Observe the first figure. The arrows on both sides show that the line extends infinitely in both directions."
},

{
key:"s2",
text:"The second figure has two fixed end points. A line with two end points is called a line segment."
},

{
key:"s3",
text:"The third figure has one end point and extends in one direction. This is called a ray."
},

{
key:"s4",
text:"The fourth figure shows two lines meeting at a point. This forms an angle."
},

{
key:"s5",
text:"The point where the two lines meet is called the vertex."
}

],

steps:{
s1:"line",
s2:"line segment",
s3:"ray",
s4:"angle",
s5:"vertex"
}

}
