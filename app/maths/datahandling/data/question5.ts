export const question5 = () => {

return{

id:5,

type:"multi",

text:`The tally chart shows the number of students who like different ice-cream flavours.

Study the tally marks and answer the questions.`,

tallyTable:[
{
item:"Chocolate",
tally:"||||| ||",
count:7
},
{
item:"Vanilla",
tally:"||||| |",
count:6
},
{
item:"Strawberry",
tally:"||||",
count:4
},
{
item:"Mango",
tally:"||||| ||||",
count:9
}
],

multi:[

{
key:"a",
text:"A. How many students like Vanilla?"
},

{
key:"b",
text:"B. Which flavour is liked by the most students?"
},

{
key:"c",
text:"C. Which flavour is liked by the least students?"
},

{
key:"d",
text:"D. How many students like Chocolate and Strawberry together?"
},

{
key:"e",
text:"E. How many students were surveyed in total?"
}

],

correctAnswer:{

a:"6",
b:"mango",
c:"strawberry",
d:"11",
e:"26"

},

hint:`Remember that every group of five tally marks looks like |||||.`,

solution:`Vanilla = 6  
Most liked flavour = Mango  
Least liked flavour = Strawberry  
Chocolate + Strawberry = 7 + 4 = 11  
Total students = 26`,

stepContent:[
{key:"s1",text:"Count each tally mark carefully."},
{key:"s2",text:"Each group of five tallies equals 5."},
{key:"s3",text:"Add values where required."}
],

steps:{
s1:"count",
s2:"group",
s3:"add"
}

}

}
