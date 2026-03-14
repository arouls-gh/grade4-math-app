export const question10 = () => {

/* RANDOM BASE NUMBERS */

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

/* FRACTIONS */

const f1 = `${ones*10 + tenths}/10`
const f2 = `${ones2*100 + hundredths}/100`
const f3 = `${tens*100 + hundredths2}/100`
const f4 = `${hundreds*10 + tenths2}/10`
const f5 = `${hundreds2*100 + hundredths3}/100`

/* DECIMAL ANSWERS */

const a1 = ((ones*10 + tenths)/10).toString()
const a2 = ((ones2*100 + hundredths)/100).toString()
const a3 = ((tens*100 + hundredths2)/100).toString()
const a4 = ((hundreds*10 + tenths2)/10).toString()
const a5 = ((hundreds2*100 + hundredths3)/100).toString()

return {

id:10,

type:"multi",

text:`Convert the following fractions into decimals.`,

multi:[

{ key:"a", text:`A. ${f1}` },
{ key:"b", text:`B. ${f2}` },
{ key:"c", text:`C. ${f3}` },
{ key:"d", text:`D. ${f4}` },
{ key:"e", text:`E. ${f5}` }

],

correctAnswer:{
a:a1,
b:a2,
c:a3,
d:a4,
e:a5
},

hint:`Divide the numerator by the denominator.

Denominator 10 → move decimal 1 place  
Denominator 100 → move decimal 2 places

Remember a whole number have a hidden decimal point (.0) after the right most digit`,

solution:`Example:

45/10 = 4.5  
327/100 = 3.27`,

stepContent:[

{
key:"s1",
text:`Look at the denominator.`
},

{
key:"s2",
text:`If the denominator is 10, move the decimal 1 place left.`
},

{
key:"s3",
text:`If the denominator is 100, move the decimal 2 places left.`
}

],

steps:{
s1:"10",
s2:"1",
s3:"2"
}

}

}