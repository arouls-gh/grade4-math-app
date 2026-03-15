export const question2 = {

id:2,

type:"single",

text:`Look at the two lines.

AB is a straight line.

CD is a curved line.

Which line is longer?

Write AB or CD.`,

showLineLengthCompare:true,

correctAnswer:"cd",

hint:`A straight line is the shortest distance between two points.

A curved path between the same two points will always be longer.`,

solution:`Both lines start and end at the same points.

However, AB is a straight line while CD is curved.

A straight line gives the shortest distance between two points.

Since CD bends and curves between the same points, it covers a longer distance.

Therefore the longer line is **CD**.`,

stepContent:[

{ text:"Observe the starting points A and C." },

{ text:"Observe the ending points B and D." },

{ text:"AB is a straight line between the two points." },

{ text:"CD curves between the same two points." },

{ text:"A curved path between two points is longer than the straight path." },

{ text:"Therefore CD is longer." }

]

}