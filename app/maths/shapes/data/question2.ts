export function question2(){

const length = Math.floor(Math.random()*9) + 6   // 6–14 cm

return {

id:2,

type:"single",

text:`Look at the line segment AB below.

Use a ruler to measure the length from point A to point B.

Write the length in centimetres.`,

showMeasureLine:true,

length:length,

correctAnswer:String(length),

hint:`Place a ruler on the screen.

Measure from point A to point B.`,

solution:`The line segment AB measures ${length} cm.`,

stepContent:[
{ text:"Find point A." },
{ text:"Find point B." },
{ text:"Place ruler at A." },
{ text:"Read the value at B." }
]

}

}