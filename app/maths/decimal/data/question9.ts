function randomTenths(){

const n = Math.floor(Math.random()*9)+1

return {
decimal:`0.${n}`,
numerator:n
}

}

export const question9 = () => {

const q1 = randomTenths()
const q2 = randomTenths()
const q3 = randomTenths()

return{

id:9,

type:"multi",

text:`Convert the decimals into fractions.

Remember: A decimal with one digit after the point means tenths.`,

multi:[

{
key:"a",
text:`A. ${q1.decimal} = ____ / 10`
},

{
key:"b",
text:`B. ${q2.decimal} = ____ / 10`
},

{
key:"c",
text:`C. ${q3.decimal} = ____ / 10`
},

{
key:"d",
text:`D. Which fraction represents 0.5 ?`
},

{
key:"e",
text:`E. Which fraction represents 0.9 ?`
}

],

correctAnswer:{

a:q1.numerator.toString(),
b:q2.numerator.toString(),
c:q3.numerator.toString(),
d:"5/10",
e:"9/10"

},

hint:`0.3 means 3 tenths → 3/10`,

solution:`${q1.decimal} = ${q1.numerator}/10  
${q2.decimal} = ${q2.numerator}/10  
${q3.decimal} = ${q3.numerator}/10  

0.5 = 5/10  
0.9 = 9/10`,

stepContent:[
{key:"s1",text:"Look at the digit after the decimal point."},
{key:"s2",text:"That digit becomes the numerator."},
{key:"s3",text:"The denominator is always 10."}
],

steps:{
s1:"digit",
s2:"numerator",
s3:"10"
}

}

}