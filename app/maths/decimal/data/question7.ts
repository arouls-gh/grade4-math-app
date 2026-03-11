export const question7 = {

id:7,

type:"multi",

text:`Some decimals have different numbers of digits after the decimal.

We can make them easier to compare by converting them to LIKE decimals.

Convert the following to like decimals.`,

multi:[

{
key:"a",
text:"A. Convert 0.4 so it has two digits after the decimal."
},

{
key:"b",
text:"B. Write 0.35 again (it already has two digits)."
},

{
key:"c",
text:"C. Which number is greater: 0.40 or 0.35 ?"
}

],

correctAnswer:{

a:"0.40",
b:"0.35",
c:"0.40"

},

hint:`Add a zero to make the decimals have the same number of digits.`,

solution:`0.4 has one digit after the decimal.

Add a zero:

0.4 = 0.40

Now compare:

0.40 > 0.35`,

stepContent:[
{key:"s1",text:"Look at the digits after the decimal."},
{key:"s2",text:"Add zeros to make them equal."},
{key:"s3",text:"Compare the numbers."}
],

steps:{
s1:"digits",
s2:"0.40",
s3:"0.40"
}

}