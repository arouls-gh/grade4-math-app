function nextLetter(word:string,step:number){
const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

return word.split("").map(c=>{
const i=alphabet.indexOf(c);
return alphabet[(i+step)%26];
}).join("");
}

function reverseWord(word:string){
return word.split("").reverse().join("");
}

function wordToNumbers(word:string){
const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

return word.split("")
.map(c=>alphabet.indexOf(c)+1)
.join("-");
}

function randomWord(length:number){
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let w="";

for(let i=0;i<length;i++){
w+=letters[Math.floor(Math.random()*letters.length)];
}

return w;
}

export function getQuestion6(){

/* Example words (show rule) */

const example1=randomWord(3);
const example2=randomWord(3);
const example3=randomWord(4);
const example4=randomWord(3);

/* Words student must solve */

const target1=randomWord(5);
const target2=randomWord(3);
const target3=randomWord(4);
const target4=randomWord(3);

/* Generate coded examples */

const exampleCode1=nextLetter(example1,1);
const exampleCode2=nextLetter(example2,2);
const exampleCode3=reverseWord(example3);
const exampleCode4=wordToNumbers(example4);

/* Generate correct answers */

const answer1=nextLetter(target1,1);
const answer2=nextLetter(target2,2);
const answer3=reverseWord(target3);
const answer4=wordToNumbers(target4);

return{

id:6,

type:"multi",

codes:[

{
key:"code1",
question:`
In a certain code language:

${example1} → ${exampleCode1}

How will ${target1} be written?
`
},

{
key:"code2",
question:`
In a certain code language:

${example2} → ${exampleCode2}

How will ${target2} be written?
`
},

{
key:"code3",
question:`
In a certain code language:

${example3} → ${exampleCode3}

How will ${target3} be written?
`
},

{
key:"code4",
question:`
In a certain code language:

${example4} → ${exampleCode4}

How will ${target4} be written?
`
}

],

correctAnswer:{

code1:answer1,
code2:answer2,
code3:answer3,
code4:answer4

},

hint:`

Look carefully at how the first word changes.

Try applying the same rule to the new word.

`,

steps:{

step1:"identify",
step2:"apply",
step3:"write"

},

stepContent:[

{
key:"identify",
text:`
Step 1

Look at the example and find how the letters change.
`
},

{
key:"apply",
text:`
Step 2

Apply the same pattern to the new word.
`
},

{
key:"write",
text:`
Step 3

Write the coded word as your final answer.
`
}

],

solution:`

Each question follows a pattern such as:

• Letters moving forward in the alphabet  
• Letters moving two steps forward  
• Word written in reverse  
• Letters replaced with alphabet numbers

Apply the pattern from the example to find the answer.

`

};

}