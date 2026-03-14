export const question2 = {

id:2,

type:"multi",

text:`A pizza is cut into 10 equal slices.

Rahul eats 7 slices.

Use the blocks to represent the slices eaten.`,

decimalBlocks:{
label:"Pizza Slices"
},

multi:[

{
key:"a",
text:"A. Write the fraction of pizza eaten."
},

{
key:"b",
text:"B. Write the decimal form."
}

],

correctAnswer:{

blocks:"7",
a:"7/10",
b:"0.7"

},

hint:`Count how many slices out of 10 are eaten
Tenths in decimal is the first digit after decimal point
Hundreths in decimal is the second digit after decimal point.`,

solution:`Rahul ate 7 slices out of 10.

Fraction = 7/10  
Decimal = 0.7`,

stepContent:[
{key:"s1",text:"Total slices = 10"},
{key:"s2",text:"Slices eaten = 7"},
{key:"s3",text:"7/10 = 0.7"}
],

steps:{
s1:"10",
s2:"7",
s3:"0.7"
}

}