function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

export const question7 = () => {

/* RANDOM DATA (multiples of 3 work better visually) */

const football = randomInt(2,4) * 3
const cricket = randomInt(3,5) * 3
const badminton = randomInt(2,4) * 3

/* MISSING VALUE */

const basketball = randomInt(2,4) * 3

/* TOTAL */

const total = football + cricket + badminton + basketball

return{

id:7,

type:"multi",

text:`The bar graph shows the number of students who play different sports after school.

One value is missing.

The total number of students surveyed is ${total}.

Find the missing number.`,

graph:{
title:"After School Sports",

labels:["Football","Cricket","Basketball","Badminton"],

values:{
Football:football,
Cricket:cricket,
Basketball:0,
Badminton:badminton
},

maxValue:21,   // works cleanly with scale 3
scale:3,

xLabel:"Sports",
yLabel:"Number of Students"

},

multi:[

{
key:"a",
text:"A. How many students play Football?"
},

{
key:"b",
text:"B. How many students play Cricket?"
},

{
key:"c",
text:"C. How many students play Badminton?"
},

{
key:"d",
text:"D. How many students play Basketball?"
},

{
key:"e",
text:`E. Check: Do the numbers add up to ${total}? (YES / NO)`
}

],

correctAnswer:{

a:football.toString(),
b:cricket.toString(),
c:badminton.toString(),
d:basketball.toString(),
e:"yes"

},

hint:`Add the known values and subtract from the total.`,

solution:`Football = ${football}
Cricket = ${cricket}
Badminton = ${badminton}

Total of known values = ${football + cricket + badminton}

Missing value = ${total} - ${football + cricket + badminton}

Basketball = ${basketball}`,

stepContent:[
{key:"s1",text:"Read the values from the bar graph."},
{key:"s2",text:"Add the known numbers."},
{key:"s3",text:"Subtract from the total to find the missing value."}
],

steps:{
s1:"read",
s2:"add",
s3:"subtract"
}

}

}