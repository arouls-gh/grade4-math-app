function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

export const question6 = () => {

/* RANDOM SCALE */

const scaleOptions = [1,2,3,4]
const scale = scaleOptions[randomInt(0,scaleOptions.length-1)]

/* RANDOM ICON COUNTS */

const appleIcons = randomInt(2,5)
const mangoIcons = randomInt(2,6)
const bananaIcons = randomInt(1,4)
const grapesIcons = randomInt(3,6)

/* CONVERT TO STUDENT COUNTS */

const apple = appleIcons * scale
const mango = mangoIcons * scale
const banana = bananaIcons * scale
const grapes = grapesIcons * scale

const total = apple + mango + banana + grapes

/* FIND MAX + MIN */

const data:any = {
apple,
mango,
banana,
grapes
}

const maxVal = Math.max(...Object.values(data))
const minVal = Math.min(...Object.values(data))

const maxFruit = Object.keys(data).find(k=>data[k]===maxVal)
const minFruit = Object.keys(data).find(k=>data[k]===minVal)

return{

id:6,

type:"multi",

text:`The pictograph shows the number of students who like different fruits.

Each icon represents ${scale} students.

Study the pictograph carefully and answer the questions.`,

pictograph:{
items:[
{item:"Apple",count:appleIcons},
{item:"Mango",count:mangoIcons},
{item:"Banana",count:bananaIcons},
{item:"Grapes",count:grapesIcons}
],
icon:"🍎",
scale:scale
},

multi:[

{
key:"a",
text:"A. How many students like Mango?"
},

{
key:"b",
text:"B. Which fruit is liked by the most students?"
},

{
key:"c",
text:"C. Which fruit is liked by the least students?"
},

{
key:"d",
text:"D. How many students like Apple and Banana together?"
},

{
key:"e",
text:"E. How many students were surveyed in total?"
}

],

correctAnswer:{

a:mango.toString(),
b:maxFruit,
c:minFruit,
d:(apple+banana).toString(),
e:total.toString()

},

hint:`Count the number of icons and multiply by ${scale}.`,

solution:`Each icon represents ${scale} students.

Apple = ${appleIcons} × ${scale} = ${apple}

Mango = ${mangoIcons} × ${scale} = ${mango}

Banana = ${bananaIcons} × ${scale} = ${banana}

Grapes = ${grapesIcons} × ${scale} = ${grapes}

Total students = ${total}`,

stepContent:[
{key:"s1",text:"Count the number of icons for each fruit."},
{key:"s2",text:"Multiply icons by the scale."},
{key:"s3",text:"Compare the values."}
],

steps:{
s1:"count",
s2:"multiply",
s3:"compare"
}

}

}
