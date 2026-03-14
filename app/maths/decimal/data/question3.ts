export const question3 = {

id:3,

type:"multi",

text:`Look at the decimal number 0.45.

Answer the following questions.`,

multi:[

{
key:"a",
text:"A. What is the tenths digit?"
},

{
key:"b",
text:"B. What is the hundredths digit?"
},

{
key:"c",
text:"C. Write the fraction form of 0.45"
}

],

correctAnswer:{

a:"4",
b:"5",
c:"45/100"

},

hint:`The first digit after the decimal point shows tenths.

The second digit after the decimal point shows hundredths.`,

solution:`In the decimal 0.45:

Tenths digit = 4  
Hundredths digit = 5  

0.45 means 45 hundredths.

So the fraction form is 45/100.`,

stepContent:[

{
key:"s1",
text:"Look at the decimal 0.45. Which digit shows the tenths place?"
},

{
key:"s2",
text:"Which digit shows the hundredths place?"
},

{
key:"s3",
text:"0.45 means 45 hundredths. Write this as a fraction. In short divide by 100 to convert to fraction if decimal has hundreths place"
}

],

steps:{
s1:"4",
s2:"5",
s3:"45/100"
}

}