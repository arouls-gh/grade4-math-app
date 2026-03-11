import { generateVisualPatterns } from "../utils/visualPatternGenerator"

export function getQuestion3(){

const generated = generateVisualPatterns()

return {

id:3,

type:"multi",

text:`

Look at each **visual pattern**.

Choose the **correct next pattern**.

Type **A, B, C or D**.

`,

visualPatterns:generated.visualPatterns,

correctAnswer:generated.answers,

hint:`

Look carefully at how shapes change.

Patterns may involve:

• growing shapes  
• alternating shapes  
• rotation  
• mirror patterns  
• colour changes

`,

steps:{},

stepContent:[],

solution:`

Each pattern follows a rule such as:

• growing pattern
• alternating pattern
• rotation
• mirror symmetry
• shape progression

Find the rule to determine the next figure.

`,

lesson:`

Patterns follow rules.

These rules can include:

• repeating  
• increasing  
• alternating  
• rotating  
• mirror reflection

Recognizing the rule helps predict the next pattern.

`

}

}