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

export const question8 = () => {

const numbers=["0.2","0.5","0.7","0.9"]

const shuffled = shuffle(numbers)

return{

id:8,

type:"multi",

text:`Arrange the decimals in ascending order.`,

order:{
numbers:shuffled
},

multi:[
{
key:"order",
text:"A. Write the correct order separated by commas."
}
],

correctAnswer:{
order:"0.2,0.5,0.7,0.9"
},

hint:`Compare tenths place of each decimal.`,

solution:`Ascending order means smallest to largest.

0.2 < 0.5 < 0.7 < 0.9`,

stepContent:[
{key:"s1",text:"Look at the tenths digit."},
{key:"s2",text:"Arrange from smallest to largest."},
{key:"s3",text:"Write the final order."}
],

steps:{
s1:"tenths",
s2:"compare",
s3:"0.2,0.5,0.7,0.9"
}

}

}