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

export const question2 = () => {

const data = generateData()

const a = data.values["Apples"]
const m = data.values["Mangoes"]
const g = data.values["Grapes"]
const b = data.values["Bananas"]

const vals = data.values

const total = a+m+g+b

/* B: DIFFERENCE */

const diffAB = Math.abs(a-b)

/* C: PICK RANDOM TARGET VALUE */

const numbers = Object.values(vals) as number[]
const randomIndex = Math.floor(Math.random()*numbers.length)
const targetValue = numbers[randomIndex]

const equalFruits = Object.keys(vals)
.filter(k => vals[k] === targetValue)
.map(x=>x.toLowerCase())

const equalAnswer = equalFruits.join(",")

/* D: MORE THAN 5 */

const moreThanFive = Object.keys(vals)
.filter(k => vals[k] > 5)
.map(x=>x.toLowerCase())

const moreAnswer = moreThanFive.join(",")

/* E: ORDER MOST → LEAST */

const ordered = Object.entries(vals)
.sort((a:any,b:any)=>b[1]-a[1])
.map(x=>x[0].toLowerCase())

const orderAnswer = ordered.join(",")

return{

id:2,

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
text:"A. How many students like Bananas?"
},

{
key:"b",
text:"B. What is the difference between the number of students who like Apples and Bananas?"
},

{
key:"c",
text:`C. Which fruits are liked by exactly ${targetValue} students?`
},

{
key:"d",
text:"D. Which fruits are liked by more than 5 students?"
},

{
key:"e",
text:"E. Arrange the fruits from most liked to least liked."
}

],

correctAnswer:{

a:b.toString(),

b:diffAB.toString(),

c:equalAnswer,

d:moreAnswer,

e:orderAnswer

},

hint:`Read the height of each bar carefully and compare the numbers.`,

solution:`Bananas = ${b}

Difference between Apples and Bananas = ${diffAB}

Fruits liked by exactly ${targetValue} students = ${equalAnswer}

Fruits liked by more than 5 students = ${moreAnswer}

Order from most liked to least liked = ${orderAnswer}

Total students surveyed = ${total}`,

stepContent:[
{key:"s1",text:"Look at the height of each bar."},
{key:"s2",text:"Compare the bars to answer the questions."},
{key:"s3",text:"Arrange the fruits based on bar height."}
],

steps:{
s1:"bars",
s2:"compare",
s3:"order"
}

}

}