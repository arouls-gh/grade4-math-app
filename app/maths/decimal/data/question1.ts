export const question1 = {

id:1,

type:"multi",

text:`A chocolate bar is divided into 10 equal pieces.

Riya eats 3 pieces.

Shade the blocks to show the pieces she ate.`,

decimalBlocks:{
label:"Chocolate Bar"
},

multi:[

{
key:"a",
text:"A. How many tenths are shaded?"
},

{
key:"b",
text:"B. Write the decimal number for the shaded part."
}

],

correctAnswer:{

blocks:"3",
a:"3",
b:"0.3"

},

hint:`Tenths in a decimal is the first digit after the decimal point.

Hundredths in a decimal is the second digit after the decimal point.`,

solution:`Riya ate 3 pieces out of 10.

So the fraction is 3/10.

Three tenths written as a decimal is 0.3.`,

stepContent:[

{
key:"s1",
text:"The chocolate bar has 10 equal pieces. What do we call one part out of 10?"
},

{
key:"s2",
text:"Riya ate 3 pieces. So how many tenths are shaded?"
},

{
key:"s3",
text:"Three tenths written as a decimal becomes what number?"
}

],

steps:{
s1:"tenths",
s2:"3",
s3:"0.3"
}

}