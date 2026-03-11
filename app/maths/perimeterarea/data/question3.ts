function randMultipleOf8(min:number,max:number){

  const minMult = Math.ceil(min/8);
  const maxMult = Math.floor(max/8);

  const n = Math.floor(Math.random()*(maxMult-minMult+1))+minMult;

  return n*8;

}

/* total distance for 2 laps */

const totalDistance = randMultipleOf8(80,240);

/* perimeter of square */

const perimeter = totalDistance / 2;

/* side length */

const side = perimeter / 4;

export const question3 = {

  id:3,

  type:"multi",

  text:`
An athlete runs <b>2 laps</b> around a square playground.

The total distance covered is <b>${totalDistance} m</b>.

Find the <b>length of one side</b> of the square playground.
`,

  correctAnswer:{
  perimeter:String(perimeter),
  side:String(side)
},

  stepContent:[

    {
      key:"step1",
      text:`
Step 1

Two laps means the athlete ran twice around the playground.

First find the perimeter of the square.

Perimeter = total distance ÷ 2

Perimeter = ${totalDistance} ÷ 2 =
`
    },

    {
      key:"step2",
      text:`
Step 2

For a square:

Perimeter = 4 × side

So,

Side = perimeter ÷ 4

Side = ${perimeter} ÷ 4 =
`
    }

  ],

  hint:`
Hint 1  
One lap around a square is its perimeter.

Hint 2  
The athlete ran 2 laps.

So first divide the total distance by 2 to find the perimeter.

Hint 3  
For a square:

Perimeter = 4 × side

So divide the perimeter by 4 to find the side length.
`,

  solution:`
Total distance for 2 laps = ${totalDistance} m

Step 1  
Perimeter = ${totalDistance} ÷ 2  
Perimeter = ${perimeter} m

Step 2  
Side = perimeter ÷ 4  
Side = ${perimeter} ÷ 4  
Side = ${side} m
`,

  lesson:`
Students learned that when a distance represents multiple laps around a shape, they must first find the perimeter before solving for the side length.

For a square:
Perimeter = 4 × side
`

};