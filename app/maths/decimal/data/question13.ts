function randomTwoDigit(){
return Math.floor(Math.random()*90)+10
}

export const question13 = () => {

const n = randomTwoDigit()

return{

id:13,

type:"multi",

text:`Use the number ${n} to complete the following.`,

multi:[

{key:"a",text:`A. ${n} ÷ 10 = ______`},
{key:"b",text:`B. ${n} ÷ 100 = ______`},
{key:"c",text:`C. ${n} ÷ 1000 = ______`},
{key:"d",text:`D. ${n} ÷ 10000 = ______`}

],

correctAnswer:{

a:(n/10).toString(),
b:(n/100).toString(),
c:(n/1000).toString(),
d:(n/10000).toString()

},

hint:`Dividing by powers of 10 moves the decimal point to the left.

÷10 → move 1 place  
÷100 → move 2 places  
÷1000 → move 3 places  
÷10000 → move 4 places`,

solution:`
${n} ÷ 10 = ${n/10}
${n} ÷ 100 = ${n/100}
${n} ÷ 1000 = ${n/1000}
${n} ÷ 10000 = ${n/10000}
`,

stepContent:[
{key:"s1",text:"Dividing by 10 moves the decimal one place left."},
{key:"s2",text:"Dividing by 100 moves the decimal two places left."},
{key:"s3",text:"Dividing by 1000 moves the decimal three places left."}
],

steps:{
s1:"decimal shift",
s2:"place value",
s3:"move left"
}

}

}