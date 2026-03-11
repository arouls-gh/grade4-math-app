function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

export const question8 = () => {

/* VALUES */

const art = randomInt(4,6) * 2
const music = randomInt(3,5) * 2
const dance = randomInt(2,4) * 2
const sports = randomInt(2,5) * 2

return{

id:8,

type:"multi",

text:`The bar graph shows the number of students who joined different school clubs.

Study the graph and answer the questions.`,

graph:{
title:"Favourite School Clubs",

labels:["Art","Music","Dance","Sports"],

values:{
Art:art,
Music:music,
Dance:dance,
Sports:sports
},

maxValue:20,
scale:2,

xLabel:"Number of Students",
yLabel:"Clubs",

orientation:"horizontal"
},

multi:[

{
key:"a",
text:"A. How many students joined Sports club?"
},

{
key:"b",
text:"B. Which club has the most students?"
},

{
key:"c",
text:"C. Which club has the fewest students?"
},

{
key:"d",
text:"D. How many students joined Art and Music together?"
}

],

correctAnswer:{

a:sports.toString(),

b:
art>=music && art>=dance && art>=sports
? "art"
: music>=dance && music>=sports
? "music"
: dance>=sports
? "dance"
: "sports",

c:
art<=music && art<=dance && art<=sports
? "art"
: music<=dance && music<=sports
? "music"
: dance<=sports
? "dance"
: "sports",

d:(art+music).toString()

},

hint:`Compare the lengths of the bars.`,

solution:`Sports = ${sports}

Art + Music = ${art} + ${music}

= ${art + music}`,

stepContent:[
{key:"s1",text:"Read the values from the bars."},
{key:"s2",text:"Compare the bar lengths."},
{key:"s3",text:"Add the numbers if needed."}
],

steps:{
s1:"read",
s2:"compare",
s3:"calculate"
}

}

}