function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

function generateData(){

const categories=[
"Football",
"Cricket",
"Basketball",
"Badminton"
]

const values:any={}

/* values must align with scale of 5 */

categories.forEach(c=>{
values[c] = randomInt(1,3) * 5
})

return{
categories,
values
}

}

export const question4 = () => {

const data = generateData()

const f = data.values["Football"]
const c = data.values["Cricket"]
const b = data.values["Basketball"]
const d = data.values["Badminton"]

const vals = data.values
const numbers = Object.values(vals) as number[]

const maxVal = Math.max(...numbers)
const minVal = Math.min(...numbers)

/* activities with highest value */

const maxActs = Object.keys(vals)
.filter(k => vals[k] === maxVal)
.map(x=>x.toLowerCase())

/* activities with lowest value */

const minActs = Object.keys(vals)
.filter(k => vals[k] === minVal)
.map(x=>x.toLowerCase())

const maxAnswer = maxActs.join(",")
const minAnswer = minActs.join(",")

/* total students */

const total = f + c + b + d

/* between 5 and 10 inclusive */

const midRange = Object.keys(vals)
.filter(k => vals[k] >=5 && vals[k] <=10)
.map(x=>x.toLowerCase())
.join(",")

return{

id:4,

type:"multi",

text:`The bar graph shows the number of students who play different sports after school.

The scale of the graph increases in steps of 5.

Study the graph carefully and answer the questions.`,

graph:{
title:"After School Sports",
labels:data.categories,
values:data.values,
maxValue:15,
scale:5,
xLabel:"Sports",
yLabel:"Number of Students"
},

multi:[

{
key:"a",
text:"A. How many students play Cricket?"
},

{
key:"b",
text:"B. Which sport is played by the greatest number of students?"
},

{
key:"c",
text:"C. Which sport is played by the fewest students?"
},

{
key:"d",
text:"D. How many students play Football and Basketball together?"
},

{
key:"e",
text:"E. Which sports have between 5 and 10 students (inclusive)?"
}

],

correctAnswer:{

a:c.toString(),

b:maxAnswer,

c:minAnswer,

d:(f+b).toString(),

e:midRange

},

hint:`Remember that each step on the Y-axis represents 5 students.`,

solution:`Cricket = ${c}

Greatest number of students = ${maxAnswer}

Fewest students = ${minAnswer}

Football + Basketball = ${f+b}

Sports between 5 and 10 students = ${midRange}`,

stepContent:[
{key:"s1",text:"Read the scale of the Y-axis carefully."},
{key:"s2",text:"Each interval represents 5 students."},
{key:"s3",text:"Use the bar heights to find the values."}
],

steps:{
s1:"scale",
s2:"bars",
s3:"compare"
}

}

}
