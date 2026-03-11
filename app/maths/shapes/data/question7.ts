function shuffle(arr:any){

const copy=[...arr]

for(let i=copy.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1))

const temp=copy[i]
copy[i]=copy[j]
copy[j]=temp

}

return copy

}

export function question7(){

const baseLines=[

{type:"horizontal line"},
{type:"vertical line"},
{type:"slanting line"},
{type:"curved line"},
{type:"horizontal line"},
{type:"slanting line"}

]

const lines = shuffle(baseLines)

const answers:any={}

answers.a = lines[0].type
answers.b = lines[1].type
answers.c = lines[2].type
answers.d = lines[3].type
answers.e = lines[4].type
answers.f = lines[5].type

return{

id:7,

type:"multi",

showLineTypes:true,

lines:lines,

text:`Look at each figure carefully.

Identify the type of line.

Possible answers:
horizontal line
vertical line
slanting line
curved line`,

multi:[

{key:"a",text:"A. The line is"},
{key:"b",text:"B. The line is"},
{key:"c",text:"C. The line is"},
{key:"d",text:"D. The line is"},
{key:"e",text:"E. The line is"},
{key:"f",text:"F. The line is"}

],

correctAnswer:answers,

hint:`Observe the direction of the line.

Horizontal → left to right
Vertical → up and down
Slanting → tilted
Curved → bent line`,

solution:`Identify the line by observing its direction or shape.`,

stepContent:[

{text:"Look at the line carefully."},
{text:"Check if the line is straight or curved."},
{text:"If straight, observe the direction."},
{text:"Horizontal, vertical, or slanting."}

]

}

}
