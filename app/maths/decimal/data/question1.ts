export const question1 = {

id:1,

type:"multi",

text:`Riya has a chocolate bar divided into 10 equal pieces.

She eats 3 pieces.

Use the blocks to show the part she ate.`,

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
text:"B. Write the decimal number."
}

],

correctAnswer:{

blocks:"3",
a:"3",
b:"0.3"

},

hint:`Each block represents 1/10 of the chocolate bar.`,

solution:`3 pieces out of 10 are eaten.

So the fraction is 3/10.

3/10 written as a decimal is 0.3.`,

stepContent:[
{key:"s1",text:"Each block represents one tenth."},
{key:"s2",text:"Count the shaded blocks."},
{key:"s3",text:"Write the decimal."}
],

steps:{
s1:"tenths",
s2:"3",
s3:"0.3"
}

}