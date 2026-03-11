function randomDecimalToFraction(){

const type = Math.floor(Math.random()*3)

if(type===0){
const n = Math.floor(Math.random()*9)+1
return{
decimal:`0.${n}`,
fraction:`${n}/10`
}
}

if(type===1){
const n = Math.floor(Math.random()*90)+10
return{
decimal:`0.${n}`,
fraction:`${n}/100`
}
}

const n = Math.floor(Math.random()*900)+100
return{
decimal:`0.${n}`,
fraction:`${n}/1000`
}

}

function randomFractionToDecimal(){

const type = Math.floor(Math.random()*3)

if(type===0){
const n = Math.floor(Math.random()*9)+1
return{
fraction:`${n}/10`,
decimal:`0.${n}`
}
}

if(type===1){
const n = Math.floor(Math.random()*90)+10
return{
fraction:`${n}/100`,
decimal:`0.${n}`
}
}

const n = Math.floor(Math.random()*900)+100
return{
fraction:`${n}/1000`,
decimal:`0.${n}`
}

}

export const question11 = () => {

const d1 = randomDecimalToFraction()
const d2 = randomDecimalToFraction()
const d3 = randomDecimalToFraction()
const d4 = randomDecimalToFraction()
const d5 = randomDecimalToFraction()

const f1 = randomFractionToDecimal()
const f2 = randomFractionToDecimal()
const f3 = randomFractionToDecimal()
const f4 = randomFractionToDecimal()
const f5 = randomFractionToDecimal()

return{

id:11,

type:"multi",

text:`Convert the numbers.

Decimals can be written as fractions and fractions can be written as decimals.`,

multi:[

{key:"a",text:`A. Write ${d1.decimal} as a fraction.`},
{key:"b",text:`B. Convert ${d2.decimal} into a fraction.`},
{key:"c",text:`C. Write ${d3.decimal} as a fraction.`},
{key:"d",text:`D. Convert ${d4.decimal} into a fraction.`},
{key:"e",text:`E. Write ${d5.decimal} as a fraction.`},

{key:"f",text:`F. ${f1.fraction} = ______`},
{key:"g",text:`G. ${f2.fraction} = ______`},
{key:"h",text:`H. ${f3.fraction} = ______`},
{key:"i",text:`I. ${f4.fraction} = ______`},
{key:"j",text:`J. ${f5.fraction} = ______`}

],

correctAnswer:{

a:d1.fraction,
b:d2.fraction,
c:d3.fraction,
d:d4.fraction,
e:d5.fraction,

f:f1.decimal,
g:f2.decimal,
h:f3.decimal,
i:f4.decimal,
j:f5.decimal

},

hint:`Count the digits after the decimal.

1 digit → tenths  
2 digits → hundredths  
3 digits → thousandths`,

solution:`${d1.decimal} = ${d1.fraction}
${d2.decimal} = ${d2.fraction}
${d3.decimal} = ${d3.fraction}
${d4.decimal} = ${d4.fraction}
${d5.decimal} = ${d5.fraction}

${f1.fraction} = ${f1.decimal}
${f2.fraction} = ${f2.decimal}
${f3.fraction} = ${f3.decimal}
${f4.fraction} = ${f4.decimal}
${f5.fraction} = ${f5.decimal}`,

stepContent:[
{key:"s1",text:"Look at how many digits are after the decimal point."},
{key:"s2",text:"Write the number without the decimal as the numerator."},
{key:"s3",text:"Use 10, 100 or 1000 as the denominator."}
],

steps:{
s1:"decimal places",
s2:"numerator",
s3:"denominator"
}

}

}