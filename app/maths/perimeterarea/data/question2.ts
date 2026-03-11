function randEven(min:number,max:number){

  let n = Math.floor(Math.random()*(max-min+1))+min;

  if(n % 2 !== 0) n++;

  if(n > max) n -= 2;

  return n;

}

const breadth = randEven(8,30);

const length = breadth / 2;

const perimeter = 2 * (length + breadth);

export const question2 = {

  id:2,

  type:"single",

  text:`
A rectangular playground has a breadth of <b>${breadth} m</b>.

The length is half of its breadth.

Find the perimeter of the playground.
`,

  correctAnswer:String(perimeter),

  steps:{

    step1:String(length),

    step2:String(length + breadth),

    step3:String(perimeter)

  },

  stepContent:[

    {
      key:"step1",
      text:`
Step 1

Find the length.

Length = breadth ÷ 2

Length = ${breadth} ÷ 2 =
`
    },

    {
      key:"step2",
      text:`
Step 2

Add the length and breadth.

length + breadth =
`
    },

    {
      key:"step3",
      text:`
Step 3

Multiply by 2.

Perimeter = 2 × (length + breadth)

Perimeter =
`
    }

  ],

  hint:`
Hint 1
The length is half of the breadth.

Hint 2
First calculate the length.

length = breadth ÷ 2

Hint 3
Use the rectangle perimeter formula.

Perimeter = 2 × (length + breadth)
`,

  solution:`
Breadth = ${breadth} m

Length = ${breadth} ÷ 2
Length = ${length} m

Perimeter

P = 2 × (length + breadth)

P = 2 × (${length} + ${breadth})

P = 2 × ${length + breadth}

P = ${perimeter} m
`,

  lesson:`
Students learned that when the length is half of the breadth, they must first calculate the length before applying the perimeter formula.

Steps:
1. Find the length.
2. Add length and breadth.
3. Multiply by 2 to find the perimeter.
`

};