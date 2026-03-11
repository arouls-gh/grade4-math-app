function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function generate(){

  const length = rand(8,25);

  const breadth = rand(5,20);

  const perimeter = 2*(length + breadth);

  return {length,breadth,perimeter};

}

const {length,breadth,perimeter} = generate();

export const question4 = {

  id:4,

  type:"single",

  text:`

An athlete runs around a rectangular field.

The length of the field is ${length} m.

The total distance covered in one lap around the field is ${perimeter} m.

Find the breadth of the field.

`,

  correctAnswer:String(breadth),

  hint:`

Hint 1  
One lap around the field equals the **perimeter of the rectangle**.

Hint 2  
Perimeter formula:

Perimeter = 2 × (length + breadth)

Hint 3  
First divide the total distance by 2.

X + breadth = perimeter ÷ 2

Hint 4  
Then subtract the length.

breadth = (perimeter ÷ 2) − length

`,

  stepContent:[

{
text:`

1. take a paper and pencil\n

2. draw a rectangle\n

3. read the question and find out what is the length of the rectangle\n

4. write the lengths near the 2 length lines of rectangle\n

5. since we dont know breadth length, just write breadth lines as breadth\n

6. Read the question and find out what is the perimeter of the rectangle\n

7. write down perimeter value\n

8. Now think what makes perimeter?\n

9. CORRECT THINKING - it's the 2 lines of length and the 2 lines of breadth all added together will form a perimeter of rectangle because perimeter is sum of all sides\n

10. now if you subtract the 2 length lines from the rectangle - what do you get?\n

11. Take an Eraser and ERASE 2 length lines\n

12. now what do you see? it's the combined length of 2 breadth lines\n

13. EXACTLY - if you subtract 2 length lines from perimeter, you get 2 breadth lines\n

14. What is asked in question to find? its just the one breadth line\n

15. One breadth line = half of the combined value of both the breadth lines - this is your ANSWER\n

`
}

],

  solution:`

Length = ${length} m  
Perimeter = ${perimeter} m

Step 1

length + breadth = ${perimeter} ÷ 2

length + breadth = ${perimeter/2}

Step 2

breadth = ${perimeter/2} − ${length}

breadth = ${breadth} m

`,

  lesson:`

Students learned that the perimeter of a rectangle represents the total distance around it.

If the perimeter and one side are known, the other side can be found by rearranging the perimeter formula.

`

};