"use client";

import { useState } from "react";

type Props = {
  start: number;
  end: number;
  onChange?: (start: number, end: number) => void;
};

export default function Timeline24({ start, end, onChange }: Props) {

  const [startPos, setStartPos] = useState(start);
  const [endPos, setEndPos] = useState(end);

  function formatTime(mins:number){

    let h = Math.floor(mins/60);
    const m = mins%60;

    const period = h>=12 ? "PM" : "AM";

    h = h%12;
    if(h===0) h=12;

    return `${h}:${String(m).padStart(2,"0")} ${period}`;
  }

  function moveStart(e:React.ChangeEvent<HTMLInputElement>){

    const value = Number(e.target.value);

    setStartPos(value);

    if(onChange) onChange(value,endPos);
  }

  function moveEnd(e:React.ChangeEvent<HTMLInputElement>){

    const value = Number(e.target.value);

    setEndPos(value);

    if(onChange) onChange(startPos,value);
  }

  const hours = [];

  for(let i=0;i<=24;i++){

    let labelHour = i%24;
    let displayHour = labelHour%12;

    if(displayHour===0) displayHour=12;

    const period = labelHour<12 ? "AM" : "PM";

    hours.push({
      position:(i/24)*100,
      label:`${displayHour} ${period}`
    });

  }

  return (

    <div className="w-full mb-10">

      {/* Hour Labels */}
      <div className="relative w-full mb-3 h-6">

        {hours.map((h,i)=>(
          <div
            key={i}
            style={{left:`${h.position}%`}}
            className="absolute text-xs text-gray-600 -translate-x-1/2"
          >
            {h.label}
          </div>
        ))}

      </div>

      {/* Timeline Track */}
      <div className="relative w-full h-3 bg-gray-300 rounded-full" />

      {/* Sliders */}
      <div className="relative mt-3">

        {/* START SLIDER */}
        <input
          type="range"
          min={0}
          max={1440}
          value={startPos}
          onChange={moveStart}
          className="absolute w-full pointer-events-none appearance-none"
          style={{zIndex:30}}
        />

        {/* END SLIDER */}
        <input
          type="range"
          min={0}
          max={1440}
          value={endPos}
          onChange={moveEnd}
          className="absolute w-full pointer-events-none appearance-none"
          style={{zIndex:40}}
        />

        {/* Thumb styles */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            pointer-events: all;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #2563eb;
            cursor: pointer;
            border: none;
          }

          input[type="range"]:last-child::-webkit-slider-thumb {
            background: #dc2626;
          }

          input[type="range"]::-moz-range-thumb {
            pointer-events: all;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #2563eb;
            cursor: pointer;
            border: none;
          }

          input[type="range"]:last-child::-moz-range-thumb {
            background: #dc2626;
          }
        `}</style>

      </div>

      {/* Time Labels */}
      <div className="flex justify-between mt-5 font-bold text-sm">

        <span className="text-blue-600">
          Start: {formatTime(startPos)}
        </span>

        <span className="text-red-600">
          End: {formatTime(endPos)}
        </span>

      </div>

    </div>
  );
}