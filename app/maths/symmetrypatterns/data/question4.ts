import { generateGridPatterns } from "../utils/gridPatternGenerator"

export function getQuestion4(){

const generated = generateGridPatterns()

return{

id:4,

type:"multi",

text:`

Look at each **grid pattern**.

Find the **missing tile (?)**.

Type **A, B, C or D**.

`,

gridPatterns:generated.gridPatterns,

correctAnswer:generated.answers,

hint:`

Look at how shapes repeat in rows, columns or diagonals.

Find the rule before choosing the missing tile.

`,

steps:{},

stepContent:[],

solution:`

Each puzzle follows a rule such as:

• repeating rows
• repeating columns
• diagonal patterns
• mirror symmetry

`,

lesson:`

Grid puzzles require recognizing patterns across rows, columns and diagonals.

Finding the rule helps identify the missing element.

`

}

}