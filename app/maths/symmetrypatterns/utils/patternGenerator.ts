function random(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

/* ---------- LETTER PATTERNS ---------- */

/* Single letter skip (B,D,_,H) */

function letterSkip(){

const start = random(1,10)

const A = String.fromCharCode(64+start)
const B = String.fromCharCode(64+start+2)
const C = String.fromCharCode(64+start+4)
const D = String.fromCharCode(64+start+6)

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}

/* Continuous step letters */

function letterStep(){

const start = random(1,8)
const step = random(2,3)

const A = String.fromCharCode(64+start)
const B = String.fromCharCode(64+start+step)
const C = String.fromCharCode(64+start+step*2)
const D = String.fromCharCode(64+start+step*3)

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}

/* repeating block pattern */

function letterBlock(){

const blocks=["XYZ","ABC","PQR","LMN"]

const block = blocks[random(0,blocks.length-1)]

return{
sequence:`${block} , ${block} , ___ , ${block}`,
answer:block
}

}

/* growing letters */

function letterGrowing(){

const letter = String.fromCharCode(65+random(0,10))

const A = letter
const B = letter.repeat(2)
const C = letter.repeat(3)
const D = letter.repeat(4)

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}


/* ---------- NUMBER PATTERNS ---------- */

function addPattern(){

const start = random(2,20)
const step = random(2,6)

const A = start
const B = start+step
const C = start+step*2
const D = start+step*3

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}

function subtractPattern(){

const start = random(40,80)
const step = random(2,6)

const A = start
const B = start-step
const C = start-step*2
const D = start-step*3

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}

function multiplyPattern(){

const start = random(2,5)
const step = random(2,3)

const A = start
const B = A*step
const C = B*step
const D = C*step

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}

function dividePattern(){

const step = random(2,3)

const D = random(2,6)
const C = D*step
const B = C*step
const A = B*step

return{
sequence:`${A} , ${B} , ___ , ${D}`,
answer:C
}

}


/* ---------- GENERATOR ---------- */

export function generateQuestion5(){

const letterFns=[
letterSkip,
letterStep,
letterBlock,
letterGrowing
]

const numberFns=[
addPattern,
subtractPattern,
multiplyPattern,
dividePattern
]

const patterns:any[]=[]
const answers:any={}

/* letters */

letterFns.forEach((fn,i)=>{

const p = fn()

patterns.push({
key:`L${i+1}`,
sequence:p.sequence
})

answers[`L${i+1}`]=String(p.answer)

})

/* numbers */

numberFns.forEach((fn,i)=>{

const p = fn()

patterns.push({
key:`N${i+1}`,
sequence:p.sequence
})

answers[`N${i+1}`]=String(p.answer)

})

return{
patterns,
answers
}

}