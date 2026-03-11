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

export function question6(){

const basePolygons=[

{ sides:3, name:"triangle" },
{ sides:4, name:"quadrilateral" },
{ sides:5, name:"pentagon" },
{ sides:6, name:"hexagon" },
{ sides:7, name:"heptagon" },
{ sides:8, name:"octagon" },
{ sides:9, name:"nonagon" },
{ sides:10, name:"decagon" }

]

/* choose 6 random polygons */

const shuffled = shuffle(basePolygons).slice(0,6)

/* build answers */

const answers:any={}

answers.a = shuffled[0].name
answers.b = shuffled[1].name
answers.c = shuffled[2].name
answers.d = shuffled[3].name
answers.e = shuffled[4].name
answers.f = shuffled[5].name

return{

id:6,

type:"multi",

showPolygonCount:true,

polygons:shuffled,

text:`Look at each figure carefully.

Identify the name of each polygon.

Possible answers:
triangle, quadrilateral, pentagon,
hexagon, heptagon, octagon,
nonagon, decagon.`,

multi:[

{ key:"a", text:"A. The polygon is" },
{ key:"b", text:"B. The polygon is" },
{ key:"c", text:"C. The polygon is" },
{ key:"d", text:"D. The polygon is" },
{ key:"e", text:"E. The polygon is" },
{ key:"f", text:"F. The polygon is" }

],

correctAnswer:answers,

hint:`Count the number of sides of the polygon.`,

solution:`3 sides → triangle  
4 sides → quadrilateral  
5 sides → pentagon  
6 sides → hexagon  
7 sides → heptagon  
8 sides → octagon  
9 sides → nonagon  
10 sides → decagon`,

stepContent:[

{ text:"Look at the polygon carefully." },

{ text:"Count the number of sides." },

{ text:"Match the number of sides to the polygon name." }

]

}

}