function shuffle(arr:any[]){

const copy=[...arr]

for(let i=copy.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1))

const temp=copy[i]
copy[i]=copy[j]
copy[j]=temp

}

return copy
}

export function question5(){

const basePolygons=[

{ type:"hexagon", sides:6 },
{ type:"pentagon", sides:5 },
{ type:"pentagon", sides:5 },
{ type:"triangle", sides:3 },
{ type:"quadrilateral", sides:4 },
{ type:"square", sides:4 }

]

const polygons = shuffle(basePolygons)

/* BUILD CORRECT ANSWERS FROM SHUFFLED ORDER */

const answers:any = {}

answers.a = `${polygons[0].sides},${polygons[0].sides}`
answers.b = `${polygons[1].sides},${polygons[1].sides}`
answers.c = `${polygons[2].sides},${polygons[2].sides}`
answers.d = `${polygons[3].sides},${polygons[3].sides}`
answers.e = `${polygons[4].sides},${polygons[4].sides}`
answers.f = `${polygons[5].sides},${polygons[5].sides}`

return{

id:5,

type:"multi",

showPolygonCount:true,

polygons:polygons,

text:`Look at each polygon carefully.

Count the number of sides and vertices.

Write your answer in this format:

Example: 4,4`,

multi:[

{ key:"a", text:"A. Sides,Vertices =" },
{ key:"b", text:"B. Sides,Vertices =" },
{ key:"c", text:"C. Sides,Vertices =" },
{ key:"d", text:"D. Sides,Vertices =" },
{ key:"e", text:"E. Sides,Vertices =" },
{ key:"f", text:"F. Sides,Vertices =" }

],

correctAnswer:answers,

hint:`Count the sides of each polygon carefully.

The number of vertices is always the same as the number of sides.`,

solution:`Triangle → 3,3  
Quadrilateral / Square → 4,4  
Pentagon → 5,5  
Hexagon → 6,6`,

stepContent:[

{ text:"Look at the polygon." },

{ text:"Count the number of sides." },

{ text:"Count the number of corners (vertices)." },

{ text:"Write the answer as sides,vertices." }

]

}

}