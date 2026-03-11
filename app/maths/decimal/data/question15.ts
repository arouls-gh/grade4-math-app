function shuffle(arr:any){

const copy=[...arr]

for(let i=copy.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1))

const temp=copy[i]
copy[i]=copy[j]
copy[j]=temp

}

return copy

}

export const question15 = () => {

const sets=[

["0.3","0.03","0.003","3.0"],
["0.5","0.05","0.005","5.0"],
["0.7","0.07","0.007","7.0"],
["0.9","0.09","0.009","9.0"],
["0.4","0.04","0.004","4.0"]

]

const chosen = sets[Math.floor(Math.random()*sets.length)]

const shuffled = shuffle(chosen)

const asc = [...chosen].sort((a,b)=>parseFloat(a)-parseFloat(b))
const desc = [...asc].reverse()

return{

id:15,

type:"multi",

text:`Arrange the decimals as asked.`,

order:{
numbers:shuffled
},

multi:[

{
key:"asc",
text:"A. Arrange the decimals in ascending order."
},

{
key:"desc",
text:"B. Arrange the decimals in descending order."
}

],

correctAnswer:{
asc:asc.join(","),
desc:desc.join(",")
},

hint:`Look carefully at the place values.

Example:

0.3 = 0.300  
0.03 = 0.030  
0.003 = 0.003`,

solution:`Compare decimal places carefully.

Smaller decimals have more leading zeros.`,

stepContent:[
{key:"s1",text:"Compare whole numbers first."},
{key:"s2",text:"Then compare tenths, hundredths and thousandths."},
{key:"s3",text:"Arrange numbers in required order."}
],

steps:{
s1:"whole",
s2:"place",
s3:"order"
}

}

}