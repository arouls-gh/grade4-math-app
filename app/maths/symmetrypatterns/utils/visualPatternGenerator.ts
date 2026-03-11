function rand(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

function shuffle(arr:any[]){
return [...arr].sort(()=>Math.random()-0.5)
}

/* PATTERN TYPES */

function growingPattern(){

const start = rand(1,3)

const p1 = "■".repeat(start)
const p2 = "■".repeat(start+1)
const p3 = "■".repeat(start+2)

return {
pattern:`${p1} → ${p2} → ${p3} → ?`,
correct:"A",
options:{
A:"■".repeat(start+3),
B:"■".repeat(start+2),
C:"■".repeat(start+4),
D:"■".repeat(start+1)
}
}

}

function alternatingPattern(){

return {
pattern:"▲ ■ ▲ ■ ▲ → ?",
correct:"A",
options:{
A:"■",
B:"▲",
C:"▲▲",
D:"■■"
}
}

}

function rotationPattern(){

return{
pattern:"↑ → ↓ ← ↑ → ?",
correct:"A",
options:{
A:"↓",
B:"←",
C:"→",
D:"↑"
}
}

}

function skipPattern(){

return{
pattern:"2 ■ , 4 ■ , 6 ■ , 8 ■ → ?",
correct:"A",
options:{
A:"10 ■",
B:"9 ■",
C:"12 ■",
D:"6 ■"
}
}

}

function colourPattern(){

return{
pattern:"⬛ ⬜ ⬛ ⬜ ⬛ → ?",
correct:"A",
options:{
A:"⬜",
B:"⬛",
C:"⬜⬛",
D:"⬛⬛"
}
}

}

function mirrorPattern(){

return{
pattern:"▲ ◼ ▲ → ?",
correct:"A",
options:{
A:"◼",
B:"▲",
C:"▲▲",
D:"◼◼"
}
}

}

function shapePattern(){

return{
pattern:"Triangle → Square → Pentagon → ?",
correct:"A",
options:{
A:"Hexagon",
B:"Triangle",
C:"Square",
D:"Pentagon"
}
}

}

function stepPattern(){

return{
pattern:"■ → ■■ → ■■■ → ■■■■ → ?",
correct:"A",
options:{
A:"■■■■■",
B:"■■■■",
C:"■■■",
D:"■■"
}
}

}

export function generateVisualPatterns(){

const generators = [

growingPattern,
alternatingPattern,
rotationPattern,
skipPattern,
colourPattern,
mirrorPattern,
shapePattern,
stepPattern

]

const questions:any[] = []
const answers:any = {}

generators.forEach((fn,index)=>{

const q = fn()

const key = `vp${index+1}`

questions.push({
key,
pattern:q.pattern,
options:q.options
})

answers[key] = q.correct

})

return{
visualPatterns:shuffle(questions),
answers
}

}