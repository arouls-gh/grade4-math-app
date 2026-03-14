export const question4 = {

id:4,

type:"multi",

text:`Look at the number:

24.71

Answer the following questions.`,

multi:[

{
key:"a",
text:"A. What is the whole number part?"
},

{
key:"b",
text:"B. What digit is in the ones place of the whole number?"
},

{
key:"c",
text:"C. What digit is in the tens place of the whole number?"
},

{
key:"d",
text:"D. What digit is in the tenths place of decimal part?"
},

{
key:"e",
text:"E. What digit is in the hundredths place of decimal part?"
},

{
key:"f",
text:"F. What is the value of the digit 4?"
},

{
key:"g",
text:"G. What is the value of the digit 2?"
},

{
key:"h",
text:"H. What is the value of the digit 7?"
},

{
key:"i",
text:"I. What is the value of the digit 1?"
}

],

correctAnswer:{

a:"24",
b:"4",
c:"2",
d:"7",
e:"1",
f:"4",
g:"20",
h:"0.7",
i:"0.01"

},

hint:`Digits to the left of the decimal are whole numbers.

Digits to the right of the decimal show tenths and hundredths.`,

solution:`The number is 24.71

Whole number part = 24

Tens place = 2  
Ones place = 4  

Tenths place = 7  
Hundredths place = 1  

Value of 4 = 4  
Value of 2 = 20  
Value of 7 = 0.7  
Value of 1 = 0.01`,

stepContent:[

{key:"s1",text:"Digits before the decimal form the whole number part."},
{key:"s2",text:"Identify the tens and ones digits in 24."},
{key:"s3",text:"Digits after the decimal represent tenths and hundredths."},
{key:"s4",text:"Determine the place value of each digit."}

],

steps:{
s1:"24",
s2:"2",
s3:"7",
s4:"0.01"
}

}