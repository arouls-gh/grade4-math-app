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

export function question4(){

const basePolygons = [

{ type:"triangle", sides:3 },
{ type:"square", sides:4 },
{ type:"pentagon", sides:5 },
{ type:"hexagon", sides:6 },
{ type:"quadrilateral", sides:4 },
{ type:"pentagon", sides:5 }

]

const polygons = shuffle(basePolygons)

/* Build correct answers dynamically */

const answers:any = {}

answers.a = String(polygons[0].sides)
answers.b = String(polygons[1].sides)
answers.c = String(polygons[2].sides)
answers.d = String(polygons[3].sides)
answers.e = String(polygons[4].sides)
answers.f = String(polygons[5].sides)

return {

id:4,

type:"multi",

showPolygonCount:true,

polygons:polygons,

text:`Look at each polygon and write the number of sides.`,

multi:[

{ key:"a", text:"A. Number of sides =" },
{ key:"b", text:"B. Number of sides =" },
{ key:"c", text:"C. Number of sides =" },
{ key:"d", text:"D. Number of sides =" },
{ key:"e", text:"E. Number of sides =" },
{ key:"f", text:"F. Number of sides =" }

],

correctAnswer:answers,

hint:`Count the straight sides of each polygon.`,

solution:`Triangle → 3 sides  
Quadrilateral → 4 sides  
Pentagon → 5 sides  
Hexagon → 6 sides`,

stepContent:[

{ text:"Look at the polygon." },

{ text:"Start counting from one corner." },

{ text:"Count each straight edge." },

{ text:"The total edges equal the number of sides." }

]

}

}
