function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function generate(){

  const length = rand(14,22);
  const breadth = rand(8,14);

  const perimeter = 2 * (length + breadth);

  const distance = perimeter + length;

  return {length,breadth,perimeter,distance};

}

const {length,breadth,perimeter,distance} = generate();

export const question10 = {

  id:10,

  type:"single",

  text:`

An **army soldier** is practicing marching around a rectangular field.

The **length of the field is ${length} m** and the **breadth is ${breadth} m**.

First, he marches **one full round around the field**.

After finishing one round, he does an **"about turn"** and walks **straight across the field along the length** to reach the opposite side.

What **total distance** did the soldier walk?

Distance = ______ m

`,

  correctAnswer:String(distance),

  hint:`

Hint 1  
Walking once around the field means walking the **perimeter**.

Hint 2  
Perimeter of rectangle = 2 × (length + breadth).

Hint 3  
After completing one round, the soldier walks **one more length** across the field.

Hint 4  
Add the perimeter and the extra length.

`,

  steps:{

    step1:String(perimeter),
    step2:String(distance)

  },

  stepContent:[

{
key:"step1",
text:`

Step 1 — Calculate the perimeter

Perimeter = 2 × (length + breadth)

Perimeter = 2 × (${length} + ${breadth})

Perimeter = ______

`
},

{
key:"step2",
text:`

Step 2 — Add the extra distance

After completing one round, the soldier walks **one more length**.

Total distance = perimeter + length

Distance = ______ m

`
}

],

solution:`

Length = ${length} m  
Breadth = ${breadth} m


Perimeter

= 2 × (length + breadth)

= 2 × (${length} + ${breadth})

= ${perimeter} m


Extra distance walked = ${length} m


Total distance

= ${perimeter} + ${length}

= ${distance} m

`,

lesson:`

Students learned that the **perimeter represents one full round around a rectangle**.  
If an additional path is walked after the round, that extra distance must be **added to the perimeter** to get the total distance.

`

};