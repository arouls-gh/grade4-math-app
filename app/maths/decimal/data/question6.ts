export const question6 = () => {

/* RANDOM WHOLE NUMBER PARTS */

const tens = Math.floor(Math.random()*9+1) * 10
const ones = Math.floor(Math.random()*9)

/* RANDOM DECIMAL PARTS */

const tenths = Math.floor(Math.random()*9) / 10
const hundredths = Math.floor(Math.random()*9) / 100

/* FINAL DECIMAL */

const whole = tens + ones
const decimal = tenths + hundredths
const answer = Number((whole + decimal).toFixed(2))

return {

id:6,

type:"single",

text:`Write the decimal number for the following expanded form:

${tens} + ${ones} + ${tenths} + ${hundredths}

Answer = ______`,

correctAnswer:String(answer),

hint:`Add the whole number parts and the decimal parts separately.`,

solution:`${tens} + ${ones} = ${whole}

${tenths} + ${hundredths} = ${decimal}

${whole} + ${decimal} = ${answer}`,

stepContent:[

{
key:"s1",
text:`Add the whole number parts.

${tens} + ${ones} = ${whole}`
},

{
key:"s2",
text:`Add the decimal parts.

${tenths} + ${hundredths} = ${decimal}`
},

{
key:"s3",
text:`Combine both parts.

${whole} + ${decimal} = ${answer}`
}

],

steps:{
s1:String(whole),
s2:String(decimal),
s3:String(answer)
}

}

}