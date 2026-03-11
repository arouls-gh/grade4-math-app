import question6 from "./question6";
import question7 from "./question7";
import question8 from "./question8";
import question9 from "./question9";
import question10 from "./question10";

export const questions = [

{
id:1,

text:
"Look at the clocks carefully.\n\n"+
"Write how many minutes the LONG hand shows.\n"+
"Write only the number of minutes.",

type:"multi",

correctAnswer:{},

hint:
"The long hand is called the minute hand.\n"+
"Each number on the clock equals 5 minutes.\n"+
"If the hand points to 4 → 4 × 5 = 20 minutes.",

solution:
"Each number represents 5 minutes.\n"+
"So multiply the number by 5 to get minutes.",

lesson:
"You learned that the long hand shows minutes and every number equals 5 minutes.",

stepContent:[
{ text:"Clock A: long hand in ____ × 5 = ____ min", key:"a1"},
{ text:"Clock B: long hand in ____ × 5 = ____ min", key:"b1"},
{ text:"Clock C: long hand in ____ × 5 = ____ min", key:"c1"},
{ text:"Clock D: long hand in ____ × 5 = ____ min", key:"d1"},
{ text:"Clock E: long hand in ____ × 5 = ____ min", key:"e1"},
{ text:"Clock F: long hand in ____ × 5 = ____ min", key:"f1"}
],

steps:{}

},

{
id:2,

text:
"Look at the clocks and write the correct time.\n\n"+
"Write answers in HH:MM format.",

type:"multi",

correctAnswer:{},

hint:
"Short hand = hour.\n"+
"Long hand = minutes.\n"+
"Each number equals 5 minutes.",

solution:
"First identify the hour using the short hand.\n"+
"Then multiply the long-hand number by 5 to get minutes.",

lesson:
"You learned how to read both hour and minute hands together.",

stepContent:[
{ text:"Clock A: long hand in ____ × 5 = ____ min & short hand in ___ hr", key:"a2"},
{ text:"Clock B: long hand in ____ × 5 = ____ min & short hand in ___ hr", key:"b2"},
{ text:"Clock C: long hand in ____ × 5 = ____ min & short hand in ___ hr", key:"c2"},
{ text:"Clock D: long hand in ____ × 5 = ____ min & short hand in ___ hr", key:"d2"},
{ text:"Clock E: long hand in ____ × 5 = ____ min & short hand in ___ hr", key:"e2"},
{ text:"Clock F: long hand in ____ × 5 = ____ min & short hand in ___ hr", key:"f2"}
],

steps:{}

},

{
id:3,

text:
"Convert the following clock time into 24-hour format.\n"+
"Use AM or PM under each during the conversion.",

type:"multi",

correctAnswer:{},

hint:
"If time is PM add 12 hours (except 12 PM).\n"+
"If time is AM keep the hour same (except 12 AM which becomes 00).",

solution:
"Example:\n"+
"3:45 PM → 15:45\n"+
"Because 3 + 12 = 15.",

lesson:
"You learned how to convert 12-hour clock time into 24-hour time.",

stepContent:[
{ text:"Clock A: long hand in ____ × 5 = ____ min & short hand in ___ hr. Time is ____ AM or PM = HH:MM hours", key:"a3"},
{ text:"Clock B: long hand in ____ × 5 = ____ min & short hand in ___ hr. Time is ____ AM or PM = HH:MM hours", key:"b3"},
{ text:"Clock C: long hand in ____ × 5 = ____ min & short hand in ___ hr. Time is ____ AM or PM = HH:MM hours", key:"c3"},
{ text:"Clock D: long hand in ____ × 5 = ____ min & short hand in ___ hr. Time is ____ AM or PM = HH:MM hours", key:"d3"},
{ text:"Clock E: long hand in ____ × 5 = ____ min & short hand in ___ hr. Time is ____ AM or PM = HH:MM hours", key:"e3"},
{ text:"Clock F: long hand in ____ × 5 = ____ min & short hand in ___ hr. Time is ____ AM or PM = HH:MM hours", key:"f3"}
],

steps:{}

},

{
id:4,

text:
"Convert the following 24-hour times into 12-hour format with AM or PM.",

type:"multi",

correctAnswer:{},

hint:
"If hour > 12 subtract 12.\n"+
"If hour = 00 → 12 AM.\n"+
"If hour = 12 → 12 PM.",

solution:
"14:30 → 2:30 PM\n"+
"00:20 → 12:20 AM",

lesson:
"You learned how to convert 24-hour time into 12-hour format."
},

{
id:5,

text:
"Find the elapsed time for each pair of times.\n\n"+
"Write your answer in the format:\n"+
"H hr M min",

type:"multi",

correctAnswer:{},

hint:
"Use the Simplified Timeline Method.\n\n"+
"Step 1: Move from the start time to the next full hour.\n"+
"Step 2: Count the full hours until the hour before the end time.\n"+
"Step 3: Move from that hour to the exact end time.\n"+
"Step 4: Add the hours and minutes.\n\n"+
"If minutes are more than 60:\n"+
"Subtract 60 minutes and add 1 hour.\n\n"+
"Example:\n"+
"Start: 8:15 AM  End: 11:30 AM\n\n"+
"8:15 → 9:00 = 45 min\n"+
"9:00 → 11:00 = 2 hr\n"+
"11:00 → 11:30 = 30 min\n\n"+
"Minutes: 45 + 30 = 75 min\n"+
"75 − 60 = 15 min and add 1 hr\n\n"+
"Final time = 3 hr 15 min",

solution:
"Use timeline jumps.\n\n"+
"Example:\n"+
"8:15 → 11:15 = 3 hr\n"+
"11:15 → 11:30 = 15 min\n\n"+
"Total hours = 3\n"+
"Total minutes = 15\n\n"+
"Final elapsed time = 3 hr 15 min",

lesson:
"You learned how to find elapsed time using a timeline method.\n\n"+
"First move from the start time to the next full hour.\n"+
"Then count the full hours.\n"+
"Finally move from the last hour to the end time.\n\n"+
"If minutes exceed 60, convert them into hours.",

stepContent:[

{
text:
"Timeline Visualization\n"+
"Start Time ───► Next Hour ───► Last Hour ───► End Time\n"+
"Visualize the jumps before solving.",
key:"timeline"
},

{
text:
"A) Start → Next Hour\n"+
"____ → ____ = ____ min",
key:"a1"
},

{
text:
"A) Next Hour → Last Hour\n"+
"____ → ____ = ____ hr",
key:"a2"
},

{
text:
"A) Last Hour → End\n"+
"____ → ____ = ____ min",
key:"a3"
},

{
text:
"A) Add Minutes\n"+
"____ + ____ = ____ min",
key:"a4"
},

{
text:
"A) Final Elapsed Time\n"+
"____ hr ____ min",
key:"a5"
},

{
text:
"B) Start → Next Hour\n"+
"____ → ____ = ____ min",
key:"b1"
},

{
text:
"B) Next Hour → Last Hour\n"+
"____ → ____ = ____ hr",
key:"b2"
},

{
text:
"B) Last Hour → End\n"+
"____ → ____ = ____ min",
key:"b3"
},

{
text:
"B) Add Minutes\n"+
"____ + ____ = ____ min",
key:"b4"
},

{
text:
"B) Final Elapsed Time\n"+
"____ hr ____ min",
key:"b5"
},

{
text:
"C) Start → Next Hour\n"+
"____ → ____ = ____ min",
key:"c1"
},

{
text:
"C) Next Hour → Last Hour\n"+
"____ → ____ = ____ hr",
key:"c2"
},

{
text:
"C) Last Hour → End\n"+
"____ → ____ = ____ min",
key:"c3"
},

{
text:
"C) Add Minutes\n"+
"____ + ____ = ____ min",
key:"c4"
},

{
text:
"C) Final Elapsed Time\n"+
"____ hr ____ min",
key:"c5"
},

{
text:
"D) Start → Next Hour\n"+
"____ → ____ = ____ min",
key:"d1"
},

{
text:
"D) Next Hour → Last Hour\n"+
"____ → ____ = ____ hr",
key:"d2"
},

{
text:
"D) Last Hour → End\n"+
"____ → ____ = ____ min",
key:"d3"
},

{
text:
"D) Add Minutes\n"+
"____ + ____ = ____ min",
key:"d4"
},

{
text:
"D) Final Elapsed Time\n"+
"____ hr ____ min",
key:"d5"
}

],

steps:{}

},
question6,
question7,
question8,
question9,
question10


];