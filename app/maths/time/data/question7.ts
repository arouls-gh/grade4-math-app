"use client";

function diff(h1:number,m1:number,h2:number,m2:number){

  const start = h1*60+m1
  const end = h2*60+m2

  const d = end-start

  const hr = Math.floor(d/60)
  const min = d%60

  return {hr,min}

}

function addMinutes(h:number,m:number,mins:number){

  const total = h*60+m+mins

  const hour = Math.floor(total/60)
  const minute = total%60

  return {hour,minute}

}

function to12(hour:number){

  const period = hour>=12 ? "PM":"AM"

  let h = hour%12
  if(h===0) h=12

  return {hour:h,period}

}

/* STORY TIMES */

const wakeHour = 7
const wakeMinute = 35

const busHour = 8
const busMinute = 37

const schoolHour = 9
const schoolMinute = 48

const lunchHour = 12
const lunchMinute = 30

const lunchEndHour = 13
const lunchEndMinute = 30

const schoolEndHour = 16
const schoolEndMinute = 30

const homeTime = addMinutes(schoolEndHour,schoolEndMinute,65)

/* CALCULATIONS */

const readyTime = diff(wakeHour,wakeMinute,busHour,busMinute)

const lunchBreak = diff(lunchHour,lunchMinute,lunchEndHour,lunchEndMinute)

const home = to12(homeTime.hour)

/* QUESTION OBJECT */

const question7 = {

id:7,

timeline:true,

text:


"A student wakes up at 7:35 AM.\n"+
"He gets ready for school and catches the school bus at 8:37 AM.\n"+
"The bus reaches school at 9:48 AM.\n"+
"The lunch bell rings at 12:30 PM and classes start again at 1:30 PM.\n"+
"School ends at 4:30 PM.\n"+
"After school the student travels for 1 hour 5 minutes to reach home.\n\n"+
"TO FIND",

type:"multi",

correctAnswer:{

a_h:String(readyTime.hr),
a_m:String(readyTime.min),

b_h:String(lunchBreak.hr),
b_m:String(lunchBreak.min),

c:`${home.hour}:${String(homeTime.minute).padStart(2,"0")} ${home.period}`

},

placeholders:{

a_h:"hr",
a_m:"min",

b_h:"hr",
b_m:"min",

c:"time"

},

hint:

"Example for Question A:\n"+
"7:35 AM → 8:00 AM = 25 minutes\n"+
"8:00 AM → 8:37 AM = 37 minutes\n\n"+
"Add the minutes:\n"+
"25 + 37 = 62 minutes\n\n"+
"62 minutes = 1 hr 2 min",

stepContent:[

{
text:"Step 1\n7:35 → 8:00 = ____ minutes",
key:"s1"
},

{
text:"Step 2\n8:00 → 8:37 = ____ minutes",
key:"s2"
},

{
text:"Step 3\nTotal minutes = ____ + ____ = ____ minutes",
key:"s3"
},

{
text:"Step 4\nConvert minutes into hours\nFinal = ____ hr ____ min",
key:"s4"
}

],

steps:{},

solution:

"7:35 → 8:00 = 25 minutes\n"+
"8:00 → 8:37 = 37 minutes\n\n"+
"Total = 62 minutes\n\n"+
"62 minutes = 1 hr 2 min",

lesson:

"You learned how to read time events from a story.\n"+
"You also learned how to calculate elapsed time.\n"+
"You can determine the final time after travel."

}

export default question7