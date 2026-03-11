export const question10 = {

id:10,

type:"multi",

text:`Read each problem carefully and find the answer.`,

multi:[

{
key:"a",
text:"A. A PIZZA has a radius of 6 m. Find the diameter of the PIZZA."
},

{
key:"b",
text:"B. A circular plate has a diameter of 18 cm. Find the radius of the plate."
}

],

correctAnswer:{

a:"12",
b:"9"

},

hint:`Diameter is twice the radius.

Radius is half of the diameter.`,

solution:`A. Diameter = 2 × 6 = 12

B. Radius = 18 ÷ 2 = 9`,

stepContent:[

{text:"Check whether radius or diameter is given."},
{text:"If radius is given, multiply by 2."},
{text:"If diameter is given, divide by 2."}

]

}
