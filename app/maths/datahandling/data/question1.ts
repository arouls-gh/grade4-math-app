function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

function generateData(){

const categories=[
"Apples",
"Mangoes",
"Grapes",
"Bananas"
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

export const question1 = () => {

const data = generateData()

const a = data.values["Apples"]
const m = data.values["Mangoes"]
const g = data.values["Grapes"]
const b = data.values["Bananas"]

const vals = data.values

const numbers = Object.values(vals) as number[]

const maxVal = Math.max(...numbers)
const minVal = Math.min(...numbers)

/* FIND ALL MAX FRUITS */

const maxFruits = Object.keys(vals)
.filter(k => vals[k] === maxVal)
.map(x => x.toLowerCase())

/* FIND ALL MIN FRUITS */

const minFruits = Object.keys(vals)
.filter(k => vals[k] === minVal)
.map(x => x.toLowerCase())

/* COMMA FORMAT */

const maxFruitAnswer = maxFruits.join(",")
const minFruitAnswer = minFruits.join(",")

/* SAFE DIFFERENCE (ALWAYS POSITIVE) */

const diff = Math.abs(m - g)

const total = a+m+g+b

return{

id:1,

type:"multi",

text:`The bar graph below shows the number of students who like different fruits.

Study the graph carefully and answer the questions.`,

graph:{
title:"Favourite Fruits of Students",
labels:data.categories,
values:data.values,
maxValue:10,
scale:1,
xLabel:"Fruits",
yLabel:"Number of Students"
},

multi:[

{
key:"a",
text:"A. How many students like Apples?"
},

{
key:"b",
text:"B. Which fruits are liked by the most students?"
},

{
key:"c",
text:"C. Which fruits are liked by the least students?"
},

{
key:"d",
text:"D. What is the difference between the number of students who like Mangoes and Grapes?"
},

{
key:"e",
text:"E. How many students were surveyed in total?"
}

],

correctAnswer:{

a:a.toString(),

b:maxFruitAnswer,

c:minFruitAnswer,

d:diff.toString(),

e:total.toString()

},

hint:`Look at the height of each bar and compare them.`,

solution:`Apples = ${a}

Most liked fruits = ${maxFruitAnswer}

Least liked fruits = ${minFruitAnswer}

Difference between Mangoes and Grapes = ${diff}

Total students surveyed = ${total}`,

stepContent:[
{key:"s1",text:"Look at the height of each bar."},
{key:"s2",text:"Find the tallest and shortest bars."},
{key:"s3",text:"Add all numbers to get total students."}
],

steps:{
s1:"bars",
s2:"compare",
s3:"total"
}

}

}