"use client";

import { useEffect, useState } from "react";

function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

export default function PerimeterShapesQuestion({
  subAnswers,
  setSubAnswers
}: any){

  const [values,setValues]=useState<any>(null);

  useEffect(()=>{
    generate();
  },[]);

  function generate(){

    const rectL=rand(6,20);
    const rectB=rand(3,12);

    const square=rand(4,15);

    const t1=rand(3,15);
    const t2=rand(3,15);
    const t3=rand(3,15);

    const p1=rand(3,15);
    const p2=rand(3,15);
    const p3=rand(3,15);
    const p4=rand(3,15);
    const p5=rand(3,15);

    setValues({
      rectL,
      rectB,
      square,
      tri:[t1,t2,t3],
      poly:[p1,p2,p3,p4,p5]
    });
  }

  if(!values) return null;

  const rectP=2*(values.rectL+values.rectB);
  const squareP=4*values.square;
  const triP=values.tri.reduce((a:number,b:number)=>a+b,0);
  const polyP=values.poly.reduce((a:number,b:number)=>a+b,0);

  return(

    <div className="mt-6 text-black">

      <h2 className="text-xl font-bold mb-8">
        Find the Perimeter of the following shapes
      </h2>

      {/* A RECTANGLE */}

      <div className="mb-12">

        <h3 className="font-bold mb-2">A. Rectangle</h3>

        <svg width="260" height="180">

          <rect
            x="40"
            y="30"
            width="160"
            height="90"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />

          <text x="120" y="25" textAnchor="middle" fontWeight="bold">
            {values.rectL}
          </text>

          <text x="210" y="75" textAnchor="middle" fontWeight="bold">
            {values.rectB}
          </text>

        </svg>

        Perimeter =
        <input
          className="border-2 border-black ml-2 w-24 p-1"
          onChange={(e)=>
            setSubAnswers({
              ...subAnswers,
              A:e.target.value
            })
          }
        />
        units

      </div>

      {/* B SQUARE */}

      <div className="mb-12">

        <h3 className="font-bold mb-2">B. Square</h3>

        <svg width="200" height="200">

          <rect
            x="40"
            y="40"
            width="120"
            height="120"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />

          <text x="100" y="35" textAnchor="middle" fontWeight="bold">
            {values.square}
          </text>

        </svg>

        Perimeter =
        <input
          className="border-2 border-black ml-2 w-24 p-1"
          onChange={(e)=>
            setSubAnswers({
              ...subAnswers,
              B:e.target.value
            })
          }
        />
        units

      </div>

      {/* C TRIANGLE */}

      <div className="mb-12">

        <h3 className="font-bold mb-2">C. Triangle</h3>

        <svg width="260" height="200">

          <polygon
            points="130,20 40,160 220,160"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />

          <text x="130" y="55" textAnchor="middle" fontWeight="bold">
            {values.tri[0]}
          </text>

          <text x="80" y="120" textAnchor="middle" fontWeight="bold">
            {values.tri[1]}
          </text>

          <text x="180" y="120" textAnchor="middle" fontWeight="bold">
            {values.tri[2]}
          </text>

        </svg>

        Perimeter =
        <input
          className="border-2 border-black ml-2 w-24 p-1"
          onChange={(e)=>
            setSubAnswers({
              ...subAnswers,
              C:e.target.value
            })
          }
        />
        units

      </div>

      {/* D POLYGON */}

      <div className="mb-12">

        <h3 className="font-bold mb-2">D. Irregular Polygon</h3>

        <svg width="260" height="200">

          <polygon
            points="120,20 220,70 190,170 60,170 40,80"
            stroke="black"
            fill="none"
            strokeWidth="3"
          />

          <text x="120" y="40" textAnchor="middle">{values.poly[0]}</text>
          <text x="205" y="110" textAnchor="middle">{values.poly[1]}</text>
          <text x="150" y="185" textAnchor="middle">{values.poly[2]}</text>
          <text x="70" y="185" textAnchor="middle">{values.poly[3]}</text>
          <text x="45" y="110" textAnchor="middle">{values.poly[4]}</text>

        </svg>

        Perimeter =
        <input
          className="border-2 border-black ml-2 w-24 p-1"
          onChange={(e)=>
            setSubAnswers({
              ...subAnswers,
              D:e.target.value
            })
          }
        />
        units

      </div>

    </div>
  );
}