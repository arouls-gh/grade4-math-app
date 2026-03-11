function randomInt(min:number,max:number){
return Math.floor(Math.random()*(max-min+1))+min
}

export const question10 = () => {

/* DATA */

const story = randomInt(6,10)
const science = randomInt(4,8)
const history = randomInt(3,7)
const comics = randomInt(5,9)

const total = story + science + history + comics

return{

id:10,

type:"multi",

text:`The table shows the number of students who like different types of books.

Study the table carefully and answer the questions.`,

table:{
headers:["Type of Book","Number of Students"],

rows:[
["Story Books",story],
["Science Books",science],
["History Books",history],
["Comics",comics]
]

},

multi:[

{
key:"a",
text:"A. How many students like Story Books?"
},

{
key:"b",
text:"B. How many students like Science Books?"
},

{
key:"c",
text:"C. Which type of book is liked by the most students?"
},

{
key:"d",
text:"D. Which type of book is liked by the fewest students?"
},

{
key:"e",
text:"E. How many students like Story Books and Comics together?"
},

{
key:"f",
text:"F. How many more students like Story Books than History Books?"
},

{
key:"g",
text:"G. How many students like Science Books and History Books together?"
},

{
key:"h",
text:"H. How many students like Comics?"
},

{
key:"i",
text:"I. How many students like Story and Science books together?"
},

{
key:"j",
text:"J. How many students were surveyed in total?"
}

],

correctAnswer:{

a:story.toString(),

b:science.toString(),

c:
story>=science && story>=history && story>=comics
? "story books"
: science>=history && science>=comics
? "science books"
: history>=comics
? "history books"
: "comics",

d:
story<=science && story<=history && story<=comics
? "story books"
: science<=history && science<=comics
? "science books"
: history<=comics
? "history books"
: "comics",

e:(story + comics).toString(),

f:(story - history).toString(),

g:(science + history).toString(),

h:comics.toString(),

i:(story + science).toString(),

j:total.toString()

},

hint:`Look at the numbers in the table and compare them.`,

solution:`Story Books = ${story}
Science Books = ${science}
History Books = ${history}
Comics = ${comics}

Total students = ${total}`,

stepContent:[
{key:"s1",text:"Read the numbers in the table."},
{key:"s2",text:"Compare the values."},
{key:"s3",text:"Add or subtract when required."}
],

steps:{
s1:"read",
s2:"compare",
s3:"calculate"
}

}

}