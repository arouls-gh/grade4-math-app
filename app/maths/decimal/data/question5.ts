export const question5 = {

id:5,

type:"multi",

text:`Look at the following decimals:

0.4  
0.8  
0.35  

Answer the questions.`,

multi:[

{
key:"a",
text:"A. Which decimals are like decimals?"
},

{
key:"b",
text:"B. Which decimal is unlike?"
}

],

correctAnswer:{

a:"0.4,0.8",
b:"0.35"

},

hint:`Like decimals have the same number of digits after the decimal.`,

solution:`0.4 and 0.8 have one digit after the decimal.

So they are like decimals.

0.35 has two digits after the decimal, so it is unlike.`,

stepContent:[
{key:"s1",text:"Count digits after the decimal."},
{key:"s2",text:"0.4 and 0.8 have one digit."},
{key:"s3",text:"0.35 has two digits."}
],

steps:{
s1:"digits",
s2:"0.4,0.8",
s3:"0.35"
}

}