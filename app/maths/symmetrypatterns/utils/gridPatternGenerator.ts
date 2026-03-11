function shuffle(arr:any[]){
return [...arr].sort(()=>Math.random()-0.5)
}

function checkerPattern(){

return{
grid:[
["⬛","⬜","⬛"],
["⬜","⬛","⬜"],
["⬛","⬜","?"]
],
options:{
A:"⬛",
B:"⬜",
C:"⬛⬜",
D:"⬜⬛"
},
answer:"A"
}

}

function rowPattern(){

return{
grid:[
["▲","▲","▲"],
["■","■","■"],
["●","●","?"]
],
options:{
A:"●",
B:"■",
C:"▲",
D:"◆"
},
answer:"A"
}

}

function columnPattern(){

return{
grid:[
["▲","■","●"],
["▲","■","●"],
["▲","■","?"]
],
options:{
A:"●",
B:"■",
C:"▲",
D:"◆"
},
answer:"A"
}

}

function diagonalPattern(){

return{
grid:[
["⬛","⬜","⬜"],
["⬜","⬛","⬜"],
["⬜","⬜","?"]
],
options:{
A:"⬛",
B:"⬜",
C:"⬛⬜",
D:"⬜⬛"
},
answer:"A"
}

}

function mirrorPattern(){

return{
grid:[
["▲","■","▲"],
["●","◆","●"],
["▲","■","?"]
],
options:{
A:"▲",
B:"■",
C:"●",
D:"◆"
},
answer:"A"
}

}

export function generateGridPatterns(){

const pool=[
checkerPattern,
rowPattern,
columnPattern,
diagonalPattern,
mirrorPattern
]

const chosen = shuffle(pool).slice(0,5)

const puzzles:any[]=[]
const answers:any={}

chosen.forEach((fn,index)=>{

const q = fn()

const key=`gp${index+1}`

puzzles.push({
key,
grid:q.grid,
options:q.options
})

answers[key]=q.answer

})

return{
gridPatterns:puzzles,
answers
}

}