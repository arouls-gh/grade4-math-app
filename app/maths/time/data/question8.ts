"use client";

/* ---------- helper functions ---------- */

function diff(h1:number,m1:number,h2:number,m2:number){

  const start = h1*60+m1
  const end = h2*60+m2

  const d = end-start

  const hr = Math.floor(d/60)
  const min = d%60

  return {hr,min}

}

/* ---------- STORY TIMES ---------- */

const leaveHomeHour = 7
const leaveHomeMinute = 20

const reachSchoolHour = 7
const reachSchoolMinute = 55

const busLeaveHour = 8
const busLeaveMinute = 10

const reachMuseumHour = 9
const reachMuseumMinute = 35

const leaveMuseumHour = 13
const leaveMuseumMinute = 25

const reachSchoolBackHour = 14
const reachSchoolBackMinute = 50

const reachHomeHour = 15
const reachHomeMinute = 30


/* ---------- CALCULATIONS ---------- */

const homeToSchool = diff(
leaveHomeHour,
leaveHomeMinute,
reachSchoolHour,
reachSchoolMinute
)

const schoolToMuseum = diff(
busLeaveHour,
busLeaveMinute,
reachMuseumHour,
reachMuseumMinute
)

const museumStay = diff(
reachMuseumHour,
reachMuseumMinute,
leaveMuseumHour,
leaveMuseumMinute
)

const schoolToHome = diff(
reachSchoolBackHour,
reachSchoolBackMinute,
reachHomeHour,
reachHomeMinute
)


/* ---------- QUESTION OBJECT ---------- */

const question8 = {

id:8,

timeline:true,

text:

"Use the timeline above to help visualize the events of the trip.\n"+

"A student is going on a school science fair trip.\n"+

"He leaves home at 7:20 AM and reaches the school at 7:55 AM.\n"+

"The school bus leaves the school at 8:10 AM and reaches the science museum at 9:35 AM.\n"+

"Students spend time exploring the museum.\n"+

"They leave the museum at 1:25 PM and reach the school again at 2:50 PM.\n"+

"The student finally reaches home at 3:30 PM.\n"+

"\nTO FIND\n"+

"A. How long did the student take to reach school from home?\n"+

"B. How long did the bus journey from school to the museum take?\n"+

"C. How long did the students spend inside the museum?\n"+

"D. How long did the student take to reach home after the bus reached school?",

type:"multi",

correctAnswer:{

a_h:String(homeToSchool.hr),
a_m:String(homeToSchool.min),

b_h:String(schoolToMuseum.hr),
b_m:String(schoolToMuseum.min),

c_h:String(museumStay.hr),
c_m:String(museumStay.min),

d_h:String(schoolToHome.hr),
d_m:String(schoolToHome.min)

},

placeholders:{

a_h:"hr",
a_m:"min",

b_h:"hr",
b_m:"min",

c_h:"hr",
c_m:"min",

d_h:"hr",
d_m:"min"

},

hint:

"Elapsed time means the difference between two times.\n"+
"Find the start time and end time.\n"+
"Subtract the times to find the duration.",

stepContent:[

{
text:"7:20 → 7:55 = ____ minutes",
key:"s1"
},

{
text:"8:10 → 9:35 = ____ hr ____ min",
key:"s2"
},

{
text:"9:35 → 1:25 = ____ hr ____ min",
key:"s3"
},

{
text:"2:50 → 3:30 = ____ minutes",
key:"s4"
}

],

steps:{},

solution:

"7:20 → 7:55 = 35 minutes\n"+
"8:10 → 9:35 = 1 hr 25 min\n"+
"9:35 → 1:25 = 3 hr 50 min\n"+
"2:50 → 3:30 = 40 minutes",

lesson:

"You learned how to read time information from a story.\n"+
"You also learned how to calculate elapsed time between events."

}

export default question8