"use client";

const question9 = {

id:9,

text:

"A music class starts at 4:15 PM.\n"+
"The class lasts 1 hour 30 minutes.\n\n"+
"What time does the music class end?",

type:"single",

correctAnswer:"5:45 PM",

hint:

"Start from 4:15 PM.\n\n"+
"First add 1 hour.\n"+
"Then add 30 minutes.",

stepContent:[

{
text:"Step 1\n4:15 PM + 1 hour = ____ PM",
key:"s1"
},

{
text:"Step 2\nAdd 30 minutes\nFinal time = ____ PM",
key:"s2"
}

],

steps:{},

solution:

"Start time = 4:15 PM\n"+
"Duration = 1 hour 30 minutes\n\n"+

"4:15 PM + 1 hour = 5:15 PM\n"+
"5:15 PM + 30 minutes = 5:45 PM\n\n"+

"The music class ends at 5:45 PM.",

lesson:

"You learned how to find the end time.\n"+
"Add the duration to the start time to find when an event finishes."

}

export default question9;