"use client";

const question10 = {

id:10,

text:

"A movie finished at 7:20 PM.\n"+
"The movie lasted 1 hour 45 minutes.\n\n"+
"At what time did the movie start?",

type:"single",

correctAnswer:"5:35 PM",

hint:

"Start from the end time.\n\n"+
"Subtract the minutes first.\n"+
"Then subtract the hours.",

stepContent:[

{
text:"Step 1\n7:20 PM − 45 minutes = ____",
key:"s1"
},

{
text:"Step 2\nSubtract 1 hour\nFinal time = ____ PM",
key:"s2"
}

],

steps:{},

solution:

"End time = 7:20 PM\n"+
"Duration = 1 hour 45 minutes\n\n"+

"7:20 PM − 45 minutes = 6:35 PM\n"+
"6:35 PM − 1 hour = 5:35 PM\n\n"+

"The movie started at 5:35 PM.",

lesson:

"You learned how to find the start time.\n"+
"Subtract the duration from the end time to find when the event began."

}

export default question10;