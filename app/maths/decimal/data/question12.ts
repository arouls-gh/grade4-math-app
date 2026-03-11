function randomDecimalToFraction(){

const type = Math.floor(Math.random()*4)

if(type===0){
const whole = Math.floor(Math.random()*9)+1
const dec = Math.floor(Math.random()*9)+1

return{
decimal:`${whole}.${dec}`,
fraction:`${whole*10+dec}/10`
}
}

if(type===1){
const whole = Math.floor(Math.random()*90)+10
const dec = Math.floor(Math.random()*90)+10

return{
decimal:`${whole}.${dec}`,
fraction:`${whole*100+dec}/100`
}
}

if(type===2){
const whole = Math.floor(Math.random()*900)+100
const dec = Math.floor(Math.random()*900)+100

return{
decimal:`${whole}.${dec}`,
fraction:`${whole*1000+dec}/1000`
}
}

const whole = Math.floor(Math.random()*9)+1
const dec = Math.floor(Math.random()*9000)+1000

return{
decimal:`${whole}.${dec}`,
fraction:`${whole*10000+dec}/10000`
}

}

function randomFractionToDecimal(){

const type = Math.floor(Math.random()*4)

if(type===0){
const whole = Math.floor(Math.random()*9)+1
const dec = Math.floor(Math.random()*9)+1
const numerator = whole*10+dec

return{
fraction:`${numerator}/10`,
decimal:`${whole}.${dec}`
}
}

if(type===1){
const whole = Math.floor(Math.random()*90)+10
const dec = Math.floor(Math.random()*90)+10
const numerator = whole*100+dec

return{
fraction:`${numerator}/100`,
decimal:`${whole}.${dec}`
}
}

if(type===2){
const whole = Math.floor(Math.random()*900)+100
const dec = Math.floor(Math.random()*900)+100
const numerator = whole*1000+dec

return{
fraction:`${numerator}/1000`,
decimal:`${whole}.${dec}`
}
}

const whole = Math.floor(Math.random()*9)+1
const dec = Math.floor(Math.random()*9000)+1000
const numerator = whole*10000+dec

return{
fraction:`${numerator}/10000`,
decimal:`${whole}.${dec}`
}

}

export const question12 = () => {

const d1 = randomDecimalToFraction()
const d2 = randomDecimalToFraction()
const d3 = randomDecimalToFraction()
const d4 = randomDecimalToFraction()

const f1 = randomFractionToDecimal()
const f2 = randomFractionToDecimal()
const f3 = randomFractionToDecimal()
const f4 = randomFractionToDecimal()

return{

id:12,

type:"multi",

text:`Convert between decimals and fractions.`,

multi:[

{key:"a",text:`A. Write ${d1.decimal} as a fraction.`},
{key:"b",text:`B. Convert ${d2.decimal} into a fraction.`},
{key:"c",text:`C. Write ${d3.decimal} as a fraction.`},
{key:"d",text:`D. Convert ${d4.decimal} into a fraction.`},

{key:"e",text:`E. ${f1.fraction} = ______`},
{key:"f",text:`F. ${f2.fraction} = ______`},
{key:"g",text:`G. ${f3.fraction} = ______`},
{key:"h",text:`H. ${f4.fraction} = ______`}

],

correctAnswer:{

a:d1.fraction,
b:d2.fraction,
c:d3.fraction,
d:d4.fraction,

e:f1.decimal,
f:f2.decimal,
g:f3.decimal,
h:f4.decimal

},

hint:`Look at the digits after the decimal point.

1 digit → denominator 10  
2 digits → denominator 100  
3 digits → denominator 1000  
4 digits → denominator 10000`,

solution:`${d1.decimal} = ${d1.fraction}
${d2.decimal} = ${d2.fraction}
${d3.decimal} = ${d3.fraction}
${d4.decimal} = ${d4.fraction}

${f1.fraction} = ${f1.decimal}
${f2.fraction} = ${f2.decimal}
${f3.fraction} = ${f3.decimal}
${f4.fraction} = ${f4.decimal}`,

stepContent:[
{key:"s1",text:"Look at the digits after the decimal point."},
{key:"s2",text:"Remove the decimal point."},
{key:"s3",text:"Use 10, 100, 1000 or 10000 as denominator."}
],

steps:{
s1:"decimal places",
s2:"numerator",
s3:"denominator"
}

}

}