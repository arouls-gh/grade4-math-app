"use client";

import { useEffect, useState } from "react";

function rand(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function mid(a:number,b:number){
  return (a+b)/2;
}

export default function QuestionRenderer({
  question,
  answerInput,
  setAnswerInput,
  subAnswers,
  setSubAnswers
}:any){

/* ---------------- WORD QUESTIONS ---------------- */

if(question.id !== 1){

  /* QUESTION 3 SPECIAL LAYOUT */

  

  if(question.id === 3){

    return(
      <>
        <div
          className="text-xl font-bold text-black whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: question.text }}
        />

        <div className="mt-6 space-y-4">

          <div>
            Perimeter =
            <input
              type="text"
              className="border-2 border-black ml-2 w-32 p-2"
              onChange={(e)=>
                setSubAnswers({...subAnswers,perimeter:e.target.value})
              }
            />
            m
          </div>

          <div>
            One side of square =
            <input
              type="text"
              className="border-2 border-black ml-2 w-32 p-2"
              onChange={(e)=>
                setSubAnswers({...subAnswers,side:e.target.value})
              }
            />
            m
          </div>

        </div>
      </>
    );
  }

  /* QUESTION 7 SPECIAL LAYOUT */

if(question.id === 7){

  return(
    <>
      <div
        className="text-xl font-bold text-black whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: question.text }}
      />

      <div className="mt-6 space-y-4">

        <div>
          Area of the shape =
          <input
            type="text"
            className="border-2 border-black ml-2 w-32 p-2"
            onChange={(e)=>
              setSubAnswers({...subAnswers,area:e.target.value})
            }
          />
        </div>

        <div>
          Perimeter of the shape =
          <input
            type="text"
            className="border-2 border-black ml-2 w-32 p-2"
            onChange={(e)=>
              setSubAnswers({...subAnswers,perimeter:e.target.value})
            }
          />
        </div>

      </div>
    </>
  );
}

  /* DEFAULT WORD QUESTION */

  return(
    <>
      <div
        className="text-xl font-bold text-black whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: question.text }}
      />

      <div className="mt-6">
        Answer =
        <input
          type="text"
          value={answerInput}
          onChange={(e)=>setAnswerInput(e.target.value)}
          className="border-2 border-black ml-2 w-32 p-2"
        />
      </div>
    </>
  );
}

/* ---------------- SHAPE QUESTION (Q1) ---------------- */

const [values,setValues]=useState<any>(null);

useEffect(()=>{

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

  const generated={
    rectL,
    rectB,
    square,
    tri:[t1,t2,t3],
    poly:[p1,p2,p3,p4,p5]
  };

  setValues(generated);

  question.values = generated;

},[]);

if(!values) return null;

return(
<>
<div className="text-xl font-bold text-black whitespace-pre-line">
{question.text}
</div>

<div className="mt-6"></div>

{/* RECTANGLE */}

<div className="mb-10">

<h3 className="font-bold">A. Rectangle</h3>

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

<text x={mid(40,200)} y="20" textAnchor="middle" fontWeight="bold">
{values.rectL}
</text>

<text x="210" y={mid(30,120)} textAnchor="middle" fontWeight="bold">
{values.rectB}
</text>

</svg>

Perimeter =
<input
className="border-2 border-black ml-2 w-24"
onChange={(e)=>
setSubAnswers({...subAnswers,A:e.target.value})
}
/>
units

</div>

{/* SQUARE */}

<div className="mb-10">

<h3 className="font-bold">B. Square</h3>

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

<text x={mid(40,160)} y="30" textAnchor="middle" fontWeight="bold">
{values.square}
</text>

</svg>

Perimeter =
<input
className="border-2 border-black ml-2 w-24"
onChange={(e)=>
setSubAnswers({...subAnswers,B:e.target.value})
}
/>
units

</div>

{/* TRIANGLE */}

<div className="mb-10">

<h3 className="font-bold">C. Triangle</h3>

<svg width="260" height="200">

{(() => {

const A=[130,20];
const B=[40,160];
const C=[220,160];

return (
<>
<polygon
points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`}
stroke="black"
fill="none"
strokeWidth="3"
/>

<text x={mid(A[0],B[0])} y={mid(A[1],B[1])} textAnchor="middle" fontWeight="bold">
{values.tri[0]}
</text>

<text x={mid(B[0],C[0])} y={mid(B[1],C[1])} textAnchor="middle" fontWeight="bold">
{values.tri[1]}
</text>

<text x={mid(C[0],A[0])} y={mid(C[1],A[1])} textAnchor="middle" fontWeight="bold">
{values.tri[2]}
</text>
</>
);

})()}

</svg>

Perimeter =
<input
className="border-2 border-black ml-2 w-24"
onChange={(e)=>
setSubAnswers({...subAnswers,C:e.target.value})
}
/>
units

</div>

{/* POLYGON */}

<div className="mb-10">

<h3 className="font-bold">D. Irregular Polygon</h3>

<svg width="260" height="200">

{(() => {

const P1=[120,20];
const P2=[220,70];
const P3=[190,170];
const P4=[60,170];
const P5=[40,80];

const pts=[P1,P2,P3,P4,P5];

return (
<>
<polygon
points={pts.map(p=>p.join(",")).join(" ")}
stroke="black"
fill="none"
strokeWidth="3"
/>

{pts.map((p,i)=>{

const next=pts[(i+1)%pts.length];

return(
<text
key={i}
x={mid(p[0],next[0])}
y={mid(p[1],next[1])}
textAnchor="middle"
fontWeight="bold"
>
{values.poly[i]}
</text>
);

})}
</>
);

})()}

</svg>

Perimeter =
<input
className="border-2 border-black ml-2 w-24"
onChange={(e)=>
setSubAnswers({...subAnswers,D:e.target.value})
}
/>
units

</div>

</>
);

}