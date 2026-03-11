"use client";

import { useEffect, useState } from "react";

export default function InteractiveClock({
  hour,
  minute,
  label,
  icon
}: any) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const minuteAngle = minute * 6;
  const hourAngle = (hour % 12) * 30 + minute * 0.5;

  const numbers = [
    { n: 12, x: 100, y: 28 },
    { n: 1, x: 140, y: 40 },
    { n: 2, x: 165, y: 70 },
    { n: 3, x: 172, y: 105 },
    { n: 4, x: 160, y: 140 },
    { n: 5, x: 135, y: 165 },
    { n: 6, x: 100, y: 175 },
    { n: 7, x: 65, y: 165 },
    { n: 8, x: 40, y: 140 },
    { n: 9, x: 28, y: 105 },
    { n: 10, x: 35, y: 70 },
    { n: 11, x: 60, y: 40 }
  ];

  return (

    <div className="flex flex-col items-center">

      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="bg-white rounded-full border-4 border-black"
      >

        {/* numbers */}
        {numbers.map((item) => (
          <text
            key={item.n}
            x={item.x}
            y={item.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black font-bold text-lg"
          >
            {item.n}
          </text>
        ))}

        {/* hour hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="55"
          stroke="black"
          strokeWidth="5"
          transform={`rotate(${hourAngle} 100 100)`}
          strokeLinecap="round"
        />

        {/* minute hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="35"
          stroke="red"
          strokeWidth="4"
          transform={`rotate(${minuteAngle} 100 100)`}
          strokeLinecap="round"
        />

        {/* center dot */}
        <circle cx="100" cy="100" r="5" fill="black" />

      </svg>

      {icon && (
        <div className="text-xl mt-2">
          {icon}
        </div>
      )}

      {label && (
        <div className="font-bold text-black mt-2 text-lg">
          {label}
        </div>
      )}

    </div>

  );
}