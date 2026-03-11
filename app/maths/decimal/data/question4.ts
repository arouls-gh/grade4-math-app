export const question4 = {

id:4,

type:"multi",

text:`Look at the decimal number:

4.7

Answer the following questions.`,

multi:[

{
key:"a",
text:"A. What is the whole number part?"
},

{
key:"b",
text:"B. What digit is in the tenths place?"
},

{
key:"c",
text:"C. What is the value of the digit 7?"
}

],

correctAnswer:{

a:"4",
b:"7",
c:"0.7"

},

hint:`Digits after the decimal represent tenths.`,

solution:`The number is 4.7

Whole number part = 4  
Tenths digit = 7  
Value of 7 = 0.7`,

stepContent:[
{key:"s1",text:"The digit before the decimal is the whole number."},
{key:"s2",text:"The digit after the decimal shows tenths."},
{key:"s3",text:"7 tenths = 0.7"}
],

steps:{
s1:"4",
s2:"7",
s3:"0.7"
}

}