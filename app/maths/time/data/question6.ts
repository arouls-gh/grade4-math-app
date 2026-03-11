"use client";

export type TimelineQuestion = {
  id: number;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  startPeriod: "AM" | "PM";
  endPeriod: "AM" | "PM";
};

export type TimelineState = {
  startPosition: number;
  endPosition: number;
};

export const question6Meta = {

  id: 6,

  text: "Given the start and end time, find the elapsed time.",

  hint:
  "A full day moves from 12 AM to 12 PM and then to 12 AM again.\n\n"+
  "When measuring elapsed time:\n"+
  "• Identify the start time\n"+
  "• Identify the end time\n"+
  "• Count the hours passed\n"+
  "• Count the remaining minutes\n"+
  "• Combine them to get the elapsed time.",

  solution:
  "Do it using step by step :)\n\n"+
  "1. Identify the start time.\n"+
  "2. Identify the end time.\n"+
  "3. Count the hours passed.\n"+
  "4. Count the remaining minutes.\n"+
  "5. Combine hours and minutes.",

  lesson:
  "You learned how time moves across a full day.\n\n"+
  "You also learned how elapsed time works when crossing noon and midnight.\n"+
  "Timelines help visually measure the difference between two times."

};

function randomMinute() {
  return Math.floor(Math.random() * 12) * 5;
}

function randomHour() {
  return Math.floor(Math.random() * 12) + 1;
}

function toMinutes(hour:number,minute:number,period:"AM"|"PM") {

  let h = hour % 12;

  if(period==="PM") h += 12;

  return h * 60 + minute;

}

function fromMinutes(total:number) {

  total = total % 1440;

  let h = Math.floor(total / 60);
  const m = total % 60;

  const period = h >= 12 ? "PM" : "AM";

  h = h % 12;
  if(h === 0) h = 12;

  return { hour:h, minute:m, period };

}

function generateSingle():TimelineQuestion {

  while(true){

    const startHour = randomHour();
    const startMinute = randomMinute();
    const startPeriod = Math.random() > 0.5 ? "AM" : "PM";

    const startTotal = toMinutes(startHour,startMinute,startPeriod);

    const duration = Math.floor(Math.random()*(10*60-30))+30;

    const endTotal = startTotal + duration;

    const end = fromMinutes(endTotal);

    const diff = endTotal - startTotal;

    if(diff < 30) continue;

    return {
      id:0,
      startHour,
      startMinute,
      endHour:end.hour,
      endMinute:end.minute,
      startPeriod,
      endPeriod:end.period
    };

  }

}

export function generateQuestion6():TimelineQuestion[] {

  const list:TimelineQuestion[] = [];

  for(let i=0;i<4;i++){

    const q = generateSingle();
    q.id = i;

    list.push(q);

  }

  return list;

}

export function computeElapsed(start:TimelineQuestion){

  const startMin = toMinutes(
    start.startHour,
    start.startMinute,
    start.startPeriod
  );

  const endMin = toMinutes(
    start.endHour,
    start.endMinute,
    start.endPeriod
  );

  let diff = endMin - startMin;

  if(diff < 0){
    diff += 1440;
  }

  const hr = Math.floor(diff / 60);
  const min = diff % 60;

  return {
    hours: hr,
    minutes: min,
    text: `${hr} hr ${min} min`
  };

}

export const timelineConfig = {

  min:0,
  max:1440,

  labels:[
    {pos:0,label:"12 AM"},
    {pos:180,label:"3 AM"},
    {pos:360,label:"6 AM"},
    {pos:540,label:"9 AM"},
    {pos:720,label:"12 PM"},
    {pos:900,label:"3 PM"},
    {pos:1080,label:"6 PM"},
    {pos:1260,label:"9 PM"},
    {pos:1440,label:"12 AM"}
  ]

};

export type StepStructure = {

  hourBox:number|null;
  minuteBox:number|null;
  finalHours:number|null;
  finalMinutes:number|null;

};

export function createEmptySteps():StepStructure{

  return {
    hourBox:null,
    minuteBox:null,
    finalHours:null,
    finalMinutes:null
  };

}

export function validateSteps(
  steps:StepStructure,
  correct:{hours:number,minutes:number}
){

  if(
    steps.finalHours === correct.hours &&
    steps.finalMinutes === correct.minutes
  ){
    return true;
  }

  return false;

}

export function nextQuestionLoader(){

  return {
    nextFile:"/maths/time/data/question7.ts",
    nextId:7
  };

}

const question6 = {
  id: 6,
  ...question6Meta
};

export default question6;