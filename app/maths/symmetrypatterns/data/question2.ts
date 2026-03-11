export const question2 = {

id:2,

type:"multi",

text:`

Look at each **number pattern** and write the **next number**.

`,

patterns:[

{
key:"p1",
sequence:"4, 8, 12, 16",
rule:"Add 4"
},

{
key:"p2",
sequence:"7, 14, 21, 28",
rule:"Add 7"
},

{
key:"p3",
sequence:"50, 45, 40, 35",
rule:"Subtract 5"
},

{
key:"p4",
sequence:"90, 80, 70, 60",
rule:"Subtract 10"
},

{
key:"p5",
sequence:"3, 6, 12, 24",
rule:"Multiply by 2"
},

{
key:"p6",
sequence:"2, 6, 18, 54",
rule:"Multiply by 3"
},

{
key:"p7",
sequence:"64, 32, 16, 8",
rule:"Divide by 2"
},

{
key:"p8",
sequence:"81, 27, 9, 3",
rule:"Divide by 3"
},

{
key:"p9",
sequence:"1, 1, 2, 3, 5, 8",
rule:"Fibonacci"
},

{
key:"p10",
sequence:"2, 5, 9, 14",
rule:"Add increasing numbers"
}

],

correctAnswer:{

p1:"20",
p2:"35",
p3:"30",
p4:"50",
p5:"48",
p6:"162",
p7:"4",
p8:"1",
p9:"13",
p10:"20"

},

hint:`

Look at how the numbers change.

Ask yourself:

• Are we **adding** the same number?  
• Are we **subtracting**?  
• Are we **multiplying** or **dividing**?  
• Is the rule changing each step?

`,

steps:{

step1:"20",
step2:"35",
step3:"30",
step4:"50",
step5:"48",
step6:"162",
step7:"4",
step8:"1",
step9:"13",
step10:"20"

},

stepContent:[

{
key:"step1",
text:`

4 → 8 → 12 → 16

Each step adds **4**.

Next number = ______

`
},

{
key:"step2",
text:`

7 → 14 → 21 → 28

Each step adds **7**.

Next number = ______

`
},

{
key:"step3",
text:`

50 → 45 → 40 → 35

Each step subtracts **5**.

Next number = ______

`
},

{
key:"step4",
text:`

90 → 80 → 70 → 60

Each step subtracts **10**.

Next number = ______

`
},

{
key:"step5",
text:`

3 → 6 → 12 → 24

Each number is multiplied by **2**.

Next number = ______

`
},

{
key:"step6",
text:`

2 → 6 → 18 → 54

Each number is multiplied by **3**.

Next number = ______

`
},

{
key:"step7",
text:`

64 → 32 → 16 → 8

Each step divides by **2**.

Next number = ______

`
},

{
key:"step8",
text:`

81 → 27 → 9 → 3

Each step divides by **3**.

Next number = ______

`
},

{
key:"step9",
text:`

1, 1, 2, 3, 5, 8

Each number = sum of previous two numbers.

Next number = ______

`
},

{
key:"step10",
text:`

2 → 5 → 9 → 14

Pattern increases by:

+3  
+4  
+5  

Next increase = **+6**

Next number = ______

`
}

],

solution:`

4, 8, 12, 16, **20**

7, 14, 21, 28, **35**

50, 45, 40, 35, **30**

90, 80, 70, 60, **50**

3, 6, 12, 24, **48**

2, 6, 18, 54, **162**

64, 32, 16, 8, **4**

81, 27, 9, 3, **1**

1, 1, 2, 3, 5, 8, **13**

2, 5, 9, 14, **20**

`,

lesson:`

A **pattern** follows a rule.

Common pattern rules include:

• Adding the same number  
• Subtracting the same number  
• Multiplying or dividing  
• Fibonacci patterns  
• Increasing or changing steps

Recognizing the rule helps us **predict the next number**.

`

};