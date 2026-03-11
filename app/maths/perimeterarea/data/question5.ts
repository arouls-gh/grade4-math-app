export const question5 = {

  id:5,

  type:"single",

  text:`

Find the perimeter of the shape.

<img src="/images/question5.png" style="width:350px;margin-top:20px"/>

`,

  correctAnswer:"88",

  hint:`

First find the missing sides.

Then calculate the perimeter.

`,

  steps:{},

  stepContent:[

    {
      key:"s1",
      text:`

To find missing sides,

1. first choose one missing side

2. look at the exact opposite and parallel line to the missing line

3. If the opposite and parallel line is of equal length write the same number for the missing side

4. if there is no equal length line available, search for another parallel line to the opposite line which should also be parallel to our missing side line

5. once 2 parallel lines are identified, the missing side is the length difference between 2 parallel lines


If the steps 3,4,5 are confusing follow the PEN and PEN with CAP analogy:


Take 2 identical PEN

Place one pen with PEN and CAP at the top

Place the other pen's CAP alone parallel and opposite to the first PEN

Place the cap-less PEN alone parallel and below the 2nd PEN


If the length of PEN + CAP is 10

If the length of CAP alone is 2

Then length of PEN alone is

10 − 2 = 8

`
    }

  ],

  solution:`

88 mm

`,

  lesson:`

Students learned that when some side lengths are missing, they can use parallel sides and length differences to determine the missing values before calculating the perimeter.

`

};