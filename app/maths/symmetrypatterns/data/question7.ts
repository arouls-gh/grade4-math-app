function rand(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min;
}

function generateGrid(){

const a = rand(0,1) ? "⬛" : "⬜";
const b = a === "⬛" ? "⬜" : "⬛";

return {

grid:[
[a,b,"?"],
[b,a,"?"],
["?",b,a]
],

answers:{
tile1:a,
tile2:b,
tile3:a
}

};

}

export function getQuestion7(){

const puzzle = generateGrid();

return {

id:7,

type:"multi",

tessellation:[

{
key:"tile1",
grid:puzzle.grid
}

],

correctAnswer:{
tile1:puzzle.answers.tile1,
tile2:puzzle.answers.tile2,
tile3:puzzle.answers.tile3
},

hint:`

Tessellation patterns repeat without gaps.

Look carefully at how the colours alternate.

`,

steps:{
step1:"observe",
step2:"pattern",
step3:"complete"
},

stepContent:[

{
key:"observe",
text:`Look at the repeating pattern in the grid.`
},

{
key:"pattern",
text:`Notice how the colours alternate.`
},

{
key:"complete",
text:`Fill the missing tile so the pattern continues.`
}

],

solution:`

The pattern alternates colours.

The missing tile must follow the same alternating rule.

`

};

}