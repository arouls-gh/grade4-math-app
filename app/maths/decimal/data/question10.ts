function randomDecimalFraction(){

const types = [
{den:100, digits:2},
{den:1000, digits:3},
{den:10000, digits:4}
]

const pick = types[Math.floor(Math.random()*types.length)]

const numerator = Math.floor(Math.random()* (pick.den - 1)) + 1

const decimal = (numerator / pick.den).toFixed(pick.digits)

return{
decimal,
numerator,
denominator:pick.den
}

}

export const question10 = () => {

const q1 = randomDecimalFraction()
const q2 = randomDecimalFraction()
const q3 = randomDecimalFraction()

return{

id:10,

type:"multi",

text:`Convert the decimals into fractions.

Look carefully at the number of digits after the decimal point.`,

multi:[

{
key:"a",
text:`A. ${q1.decimal} = ____ / ${q1.denominator}`
},

{
key:"b",
text:`B. ${q2.decimal} = ____ / ${q2.denominator}`
},

{
key:"c",
text:`C. ${q3.decimal} = ____ / ${q3.denominator}`
},

{
key:"d",
text:`D. Which fraction represents 0.25 ?`
},

{
key:"e",
text:`E. Which fraction represents 0.304 ?`
}

],

correctAnswer:{

a:q1.numerator.toString(),
b:q2.numerator.toString(),
c:q3.numerator.toString(),
d:"25/100",
e:"304/1000"

},

hint:`Count the digits after the decimal point.

1 digit → /10  
2 digits → /100  
3 digits → /1000  
4 digits → /10000`,

solution:`
${q1.decimal} = ${q1.numerator}/${q1.denominator}

${q2.decimal} = ${q2.numerator}/${q2.denominator}

${q3.decimal} = ${q3.numerator}/${q3.denominator}

0.25 = 25/100

0.304 = 304/1000
`,

stepContent:[
{key:"s1",text:"Count digits after the decimal point."},
{key:"s2",text:"Write that many zeros in the denominator."},
{key:"s3",text:"Remove the decimal point for the numerator."}
],

steps:{
s1:"digits",
s2:"zeros",
s3:"fraction"
}

}

}