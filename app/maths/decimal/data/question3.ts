export const question3 = {

id:3,

type:"multi",

text:`A ribbon is marked into 10 equal parts.

Show the decimal 0.6 using the blocks.`,

decimalBlocks:{
label:"Ribbon Length"
},

multi:[

{
key:"a",
text:"A. How many tenths are shaded?"
},

{
key:"b",
text:"B. Write the fraction form."
}

],

correctAnswer:{

blocks:"6",
a:"6",
b:"6/10"

},

hint:`0.6 means six tenths.`,

solution:`0.6 means 6 tenths.

So 6 blocks must be shaded.

Fraction = 6/10`,

stepContent:[
{key:"s1",text:"0.6 means 6 tenths."},
{key:"s2",text:"Shade 6 blocks."},
{key:"s3",text:"Fraction = 6/10"}
],

steps:{
s1:"tenths",
s2:"6",
s3:"6/10"
}

}