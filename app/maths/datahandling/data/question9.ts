function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

export const question9 = () => {

/* DATA */

const football = randomInt(6,10) * 2
const cricket = randomInt(5,9) * 2
const basketball = randomInt(4,8) * 2
const badminton = randomInt(3,7) * 2

const total = football + cricket + basketball + badminton

return{

id:9,

type:"multi",

text:`The bar graph shows the number of students who like different sports.

Study the graph carefully and answer the questions.`,

graph:{
title:"Favourite Sports",

labels:["Football","Cricket","Basketball","Badminton"],

values:{
Football:football,
Cricket:cricket,
Basketball:basketball,
Badminton:badminton
},

maxValue:20,
scale:2,

xLabel:"Number of Students",
yLabel:"Sports",

orientation:"horizontal"
},

multi:[

{
key:"a",
text:"A. How many students like Football?"
},

{
key:"b",
text:"B. How many students like Cricket?"
},

{
key:"c",
text:"C. How many students like Basketball?"
},

{
key:"d",
text:"D. How many students like Badminton?"
},

{
key:"e",
text:"E. Which sport is liked by the most students?"
},

{
key:"f",
text:"F. Which sport is liked by the fewest students?"
},

{
key:"g",
text:"G. How many more students like Football than Basketball?"
},

{
key:"h",
text:"H. How many students like Cricket and Badminton together?"
},

{
key:"i",
text:"I. How many students like Football and Cricket together?"
},

{
key:"j",
text:"J. How many students were surveyed in total?"
}

],

correctAnswer:{

a:football.toString(),
b:cricket.toString(),
c:basketball.toString(),
d:badminton.toString(),

e:
football>=cricket && football>=basketball && football>=badminton
? "football"
: cricket>=basketball && cricket>=badminton
? "cricket"
: basketball>=badminton
? "basketball"
: "badminton",

f:
football<=cricket && football<=basketball && football<=badminton
? "football"
: cricket<=basketball && cricket<=badminton
? "cricket"
: basketball<=badminton
? "basketball"
: "badminton",

g:(football - basketball).toString(),

h:(cricket + badminton).toString(),

i:(football + cricket).toString(),

j:total.toString()

},

hint:`Read the values from the bars and compare their lengths.`,

solution:`Football = ${football}
Cricket = ${cricket}
Basketball = ${basketball}
Badminton = ${badminton}

Total students = ${total}`,

stepContent:[
{key:"s1",text:"Read the values shown by each bar."},
{key:"s2",text:"Compare the bar lengths to find greatest and smallest."},
{key:"s3",text:"Add or subtract values when needed."}
],

steps:{
s1:"read",
s2:"compare",
s3:"calculate"
}

}

}