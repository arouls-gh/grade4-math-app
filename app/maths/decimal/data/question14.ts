function randomDecimal(){

const type = Math.floor(Math.random()*5)

if(type===0){
return (Math.floor(Math.random()*90)+10) + "." + (Math.floor(Math.random()*9)+1)
}

if(type===1){
return (Math.floor(Math.random()*9)+1) + "." + (Math.floor(Math.random()*90)+10)
}

if(type===2){
return "0." + (Math.floor(Math.random()*9)+1)
}

if(type===3){
return "0.0" + (Math.floor(Math.random()*9)+1)
}

return "0.00" + (Math.floor(Math.random()*9)+1)

}

function buildComparison(){

let a = randomDecimal()
let b = randomDecimal()

let numA = parseFloat(a)
let numB = parseFloat(b)

let ans = numA > numB ? ">" : "<"

return {a,b,ans}

}

export const question14 = () => {

const q1 = buildComparison()
const q2 = buildComparison()
const q3 = buildComparison()
const q4 = buildComparison()
const q5 = buildComparison()
const q6 = buildComparison()
const q7 = buildComparison()
const q8 = buildComparison()
const q9 = buildComparison()
const q10 = buildComparison()

return{

id:14,

type:"multi",

text:`Compare the decimals and write < or > in the box.`,

multi:[

{key:"a",text:`A. ${q1.a} [input] ${q1.b}`},
{key:"b",text:`B. ${q2.a} [input] ${q2.b}`},
{key:"c",text:`C. ${q3.a} [input] ${q3.b}`},
{key:"d",text:`D. ${q4.a} [input] ${q4.b}`},
{key:"e",text:`E. ${q5.a} [input] ${q5.b}`},
{key:"f",text:`F. ${q6.a} [input] ${q6.b}`},
{key:"g",text:`G. ${q7.a} [input] ${q7.b}`},
{key:"h",text:`H. ${q8.a} [input] ${q8.b}`},
{key:"i",text:`I. ${q9.a} [input] ${q9.b}`},
{key:"j",text:`J. ${q10.a} [input] ${q10.b}`}

],

correctAnswer:{

a:q1.ans,
b:q2.ans,
c:q3.ans,
d:q4.ans,
e:q5.ans,
f:q6.ans,
g:q7.ans,
h:q8.ans,
i:q9.ans,
j:q10.ans

},

hint:`Compare digits from left to right.

Example:

0.3 = 0.30  
0.03 = 0.03  

So 0.3 > 0.03`,

solution:`

${q1.a} ${q1.ans} ${q1.b}
${q2.a} ${q2.ans} ${q2.b}
${q3.a} ${q3.ans} ${q3.b}
${q4.a} ${q4.ans} ${q4.b}
${q5.a} ${q5.ans} ${q5.b}

${q6.a} ${q6.ans} ${q6.b}
${q7.a} ${q7.ans} ${q7.b}
${q8.a} ${q8.ans} ${q8.b}
${q9.a} ${q9.ans} ${q9.b}
${q10.a} ${q10.ans} ${q10.b}

`,

stepContent:[
{key:"s1",text:"Compare the whole number part first."},
{key:"s2",text:"If they are equal, compare decimal digits."},
{key:"s3",text:"Add zeros if needed to compare place values."}
],

steps:{
s1:"whole number",
s2:"decimal place",
s3:"place value"
}

}

}