import { generateQuestion5 } from "../utils/patternGenerator"

export function getQuestion5(){

const generated = generateQuestion5()

return{

id:5,

type:"multi",

text:`

Look at each patterns and find the missing numbers/letters in the series.

`,

patterns:generated.patterns,

correctAnswer:generated.answers,

hint:`

Look at how letters or numbers change.

• Is it increasing?
• decreasing?
• multiplying?
• repeating?

`,

steps:{},

stepContent:[],

solution:`

Patterns follow a rule.

Examples:

A B C D → +1 alphabet step  
5 10 20 → ×2 pattern  
30 25 20 → −5 pattern

Find the rule before filling the missing value.

`,

lesson:`

Patterns can follow rules like:

• addition
• subtraction
• multiplication
• division
• alphabet progression

Recognizing the rule helps find the missing term.

`

}

}