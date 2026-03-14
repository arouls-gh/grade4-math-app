export const question13 = {

id:13,

type:"multi",

text:`Fill the correct symbol (<, >, =) to compare the decimals.`,

multi:[

{
key:"a",
text:`A. 0.6 [input] 0.60`
},

{
key:"b",
text:`B. 0.45 [input] 0.5`
},

{
key:"c",
text:`C. 0.72 [input] 0.70`
}

],

correctAnswer:{

a:"=",
b:"<",
c:">"

},

hint:`Compare digits from left to right.

Add zeros if needed to make decimal places equal.`,

solution:`A. 0.6 = 0.60  
B. 0.45 < 0.5  
C. 0.72 > 0.70`,

stepContent:[

{
key:"s1",
text:`0.6 and 0.60 are equivalent decimals.`
},

{
key:"s2",
text:`0.45 is less than 0.5 because 45 hundredths is less than 50 hundredths.`
},

{
key:"s3",
text:`0.72 is greater than 0.70 because 72 hundredths is greater than 70 hundredths.`
}

],

steps:{
s1:"=",
s2:"<",
s3:">"
}

}