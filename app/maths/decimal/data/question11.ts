export const question11 = () => {

/* HELPER: DECIMAL → FRACTION */

function decimalToFraction(d:number){

const s = d.toString()
const digits = s.includes(".") ? s.split(".")[1].length : 0
const denom = Math.pow(10,digits)
const numer = Math.round(d * denom)

return `${numer}/${denom}`

}

/* RANDOM DECIMALS */

const d1 = Number((Math.floor(Math.random()*9)+1 + Math.random()).toFixed(1))   // ones + tenths
const d2 = Number((Math.floor(Math.random()*50)+10 + Math.random()).toFixed(2)) // tens + hundredths
const d3 = Number((Math.random()).toFixed(3))                                   // thousandths

/* 4 DECIMAL PLACES */

const fourDigits = Math.floor(Math.random()*9000)+1000
const d4 = Number(`0.${fourDigits}`)

/* RANDOM FRACTIONS */

const f1_num = Math.floor(Math.random()*900)+100
const f1 = `${f1_num}/100`

/* /1000 FRACTION */

const f2_num = Math.floor(Math.random()*900)+100
const f2 = `${f2_num}/1000`

return {

id:11,

type:"multi",

text:`Convert the following numbers.

Some are decimals → fractions.  
Some are fractions → decimals.`,

multi:[

{ key:"a", text:`A. ${d1}` },
{ key:"b", text:`B. ${d2}` },
{ key:"c", text:`C. ${d3}` },
{ key:"d", text:`D. ${d4}` },
{ key:"e", text:`E. ${f1}` },
{ key:"f", text:`F. ${f2}` }

],

correctAnswer:{

a:decimalToFraction(d1),
b:decimalToFraction(d2),
c:decimalToFraction(d3),
d:decimalToFraction(d4),
e:(f1_num/100).toString(),
f:(f2_num/1000).toString()

},

hint:`Count digits after the decimal.

1 digit → denominator 10  
2 digits → denominator 100  
3 digits → denominator 1000  
4 digits → denominator 10000`,

solution:`Example conversions:

0.4 = 4/10  
0.35 = 35/100  
0.725 = 725/1000  
0.4837 = 4837/10000  

375/100 = 3.75  
428/1000 = 0.428`,

stepContent:[

{
key:"s1",
text:`For decimals → count digits after the decimal.`
},

{
key:"s2",
text:`For fractions → divide numerator by denominator.`
},

{
key:"s3",
text:`4 decimal places → denominator 10000`
}

],

steps:{
s1:"10",
s2:"100",
s3:"10000"
}

}

}