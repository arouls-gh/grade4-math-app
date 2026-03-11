function shuffle(arr:any) {

const copy = [...arr]

for (let i = copy.length - 1; i > 0; i--) {

const j = Math.floor(Math.random() * (i + 1))

const temp = copy[i]
copy[i] = copy[j]
copy[j] = temp

}

return copy
}

export function question3(){

const basePolygons = [

{ type:"triangle", kind:"regular" },
{ type:"quadrilateral", kind:"irregular" },
{ type:"pentagon", kind:"regular" },
{ type:"pentagon", kind:"irregular" },
{ type:"hexagon", kind:"regular" },
{ type:"quadrilateral", kind:"irregular" }

]

const polygons = shuffle(basePolygons)

/* Build answer map directly from shuffled array */

const answers:any = {}

answers.a = polygons[0].kind
answers.b = polygons[1].kind
answers.c = polygons[2].kind
answers.d = polygons[3].kind
answers.e = polygons[4].kind
answers.f = polygons[5].kind

return {

id:3,

type:"multi",

showPolygonType:true,

polygons:polygons,

text:`Look at each polygon carefully.

Write **regular** or **irregular** for each figure.`,

multi:[

{ key:"a", text:"A. The polygon is ______" },
{ key:"b", text:"B. The polygon is ______" },
{ key:"c", text:"C. The polygon is ______" },
{ key:"d", text:"D. The polygon is ______" },
{ key:"e", text:"E. The polygon is ______" },
{ key:"f", text:"F. The polygon is ______" }

],

correctAnswer: answers,

hint:`Observe the sides carefully.`,

solution:`Regular polygons have equal sides and equal angles.
Irregular polygons do not.`,

stepContent:[

{ text:"Look at the shape." },
{ text:"Observe whether the sides appear equal." },
{ text:"Observe the angles." },
{ text:"Equal sides and angles → regular." },
{ text:"Different sides or angles → irregular." }

]

}

}
