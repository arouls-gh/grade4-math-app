function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

function generateData(){

const categories=[
"Reading",
"Drawing",
"Sports",
"Music"
]

const values:any={}

categories.forEach(c=>{
values[c]=randomInt(2,10)
})

return{
categories,
values
}

}

export const question3 = () => {

const data = generateData()

const r = data.values["Reading"]
const d = data.values["Drawing"]
const s = data.values["Sports"]
const m = data.values["Music"]

const vals = data.values
const numbers = Object.values(vals) as number[]

const maxVal = Math.max(...numbers)
const minVal = Math.min(...numbers)

/* MAX ACTIVITIES */

const maxActs = Object.keys(vals)
.filter(k => vals[k] === maxVal)
.map(x=>x.toLowerCase())

/* MIN ACTIVITIES */

const minActs = Object.keys(vals)
.filter(k => vals[k] === minVal)
.map(x=>x.toLowerCase())

const maxAnswer = maxActs.join(",")
const minAnswer = minActs.join(",")

/* DIFFERENCE */

const diff = Math.abs(r - s)

/* TOTAL */

const total = r + d + s + m

return{

id:3,

type:"multi",

text:`The horizontal bar graph shows the number of students who like different school activities.

Study the graph carefully and answer the questions.`,

graph:{
title:"Favourite School Activities",
labels:data.categories,
values:data.values,
maxValue:10,
scale:1,
orientation:"horizontal",   // ⭐ THIS IS THE KEY
xLabel:"Number of Students",
yLabel:"Activities"
},

multi:[

{
key:"a",
text:"A. How many students like Sports?"
},

{
key:"b",
text:"B. Which activities are liked by the most students?"
},

{
key:"c",
text:"C. Which activities are liked by the least students?"
},

{
key:"d",
text:"D. What is the difference between the number of students who like Reading and Sports?"
},

{
key:"e",
text:"E. How many students were surveyed in total?"
}

],

correctAnswer:{

a:s.toString(),
b:maxAnswer,
c:minAnswer,
d:diff.toString(),
e:total.toString()

},

hint:`Look carefully at the length of each horizontal bar.`,

solution:`Sports = ${s}

Most liked activities = ${maxAnswer}

Least liked activities = ${minAnswer}

Difference between Reading and Sports = ${diff}

Total students surveyed = ${total}`,

stepContent:[
{key:"s1",text:"Read the length of each horizontal bar."},
{key:"s2",text:"Find the longest and shortest bars."},
{key:"s3",text:"Add all values to find the total."}
],

steps:{
s1:"bars",
s2:"compare",
s3:"total"
}

}

}