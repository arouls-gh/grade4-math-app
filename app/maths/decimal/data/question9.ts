export const question9 = () => {

function toFraction(decimal:number){

const str = decimal.toString()

if(str.includes(".")){

const digits = str.split(".")[1].length
const denominator = Math.pow(10,digits)
const numerator = Math.round(decimal * denominator)

return `${numerator}/${denominator}`

}

return `${decimal}/1`

}

/* RANDOM VALUES */

const ones = Math.floor(Math.random()*9)+1
const tenths = Math.floor(Math.random()*9)+1

const ones2 = Math.floor(Math.random()*9)+1
const hundredths = Math.floor(Math.random()*90)+10

const tens = (Math.floor(Math.random()*9)+1)*10
const hundredths2 = Math.floor(Math.random()*90)+10

const hundreds = (Math.floor(Math.random()*9)+1)*100
const tenths2 = Math.floor(Math.random()*9)+1

const hundreds2 = (Math.floor(Math.random()*9)+1)*100
const hundredths3 = Math.floor(Math.random()*90)+10

/* DECIMAL VALUES */

const q1 = Number((ones + tenths/10).toFixed(1))
const q2 = Number((ones2 + hundredths/100).toFixed(2))
const q3 = Number((tens + hundredths2/100).toFixed(2))
const q4 = Number((hundreds + tenths2/10).toFixed(1))
const q5 = Number((hundreds2 + hundredths3/100).toFixed(2))

return {

id:9,

type:"multi",

text:`Convert the following decimals into fractions.
click Hints to know the shortcut`,

multi:[

{
key:"a",
text:`A. ${q1}`
},

{
key:"b",
text:`B. ${q2}`
},

{
key:"c",
text:`C. ${q3}`
},

{
key:"d",
text:`D. ${q4}`
},

{
key:"e",
text:`E. ${q5}`
}

],

correctAnswer:{

a:toFraction(q1),
b:toFraction(q2),
c:toFraction(q3),
d:toFraction(q4),
e:toFraction(q5)

},

hint:`Count the digits after the decimal.

1 digit → denominator 10  
2 digits → denominator 100`,

solution:`Example:

0.3 = 3/10  
0.45 = 45/100`,

stepContent:[

{
key:"s1",
text:`Identify how many digits appear after the decimal point.`
},

{
key:"s2",
text:`Write the decimal without the decimal point as the numerator.`
},

{
key:"s3",
text:`Use 10 or 100 as the denominator depending on the decimal places.`
}

],

steps:{
s1:"10",
s2:"100",
s3:"45/100"
}

}

}