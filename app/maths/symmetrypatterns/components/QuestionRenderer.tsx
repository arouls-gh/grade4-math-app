"use client";

export default function QuestionRenderer({
  question,
  answerInput,
  setAnswerInput,
  subAnswers,
  setSubAnswers
}: any){

/* MULTI ANSWER QUESTIONS */

if(question.type === "multi"){

const shapes = question.shapes || [];
const patterns = question.patterns || [];
const visualPatterns = question.visualPatterns || [];
const gridPatterns = question.gridPatterns || [];
const codes = question.codes || [];
const tessellation = question.tessellation || [];

return(
<>

{/* QUESTION TEXT */}

{question.text && (
<div
className="text-xl font-bold text-black whitespace-pre-line text-center mb-8"
dangerouslySetInnerHTML={{__html:question.text}}
/>
)}

  {/* SHAPES (Question 1) */}

  {shapes.length > 0 && (

  <div className="mt-6 grid grid-cols-3 gap-20 text-center">

    {shapes.map((shape:any)=>(
      
      <div key={shape.key} className="flex flex-col items-center gap-4">

        <div className="font-semibold text-lg">
          {shape.name}
        </div>

        <div dangerouslySetInnerHTML={{__html:shape.svg}} />

        <input
          type="text"
          className="border-2 border-black w-20 p-1 text-center"
          onChange={(e)=>
            setSubAnswers({...subAnswers,[shape.key]:e.target.value})
          }
        />

      </div>

    ))}

  </div>

  )}

  {/* NUMBER PATTERNS (Question 2) */}

  {patterns.length > 0 && (

  <div className="mt-8 space-y-6">

    {patterns.map((p:any)=>(
      
      <div key={p.key} className="flex items-center gap-4 text-lg">

        <span className="w-72 font-semibold">
          {p.sequence} ,
        </span>

        <input
          type="text"
          className="border-2 border-black w-20 p-1 text-center"
          onChange={(e)=>
            setSubAnswers({...subAnswers,[p.key]:e.target.value})
          }
        />

      </div>

    ))}

  </div>

  )}

  {/* VISUAL MULTIPLE CHOICE PATTERNS (Question 3) */}

  {visualPatterns.length > 0 && (

  <div className="mt-8 space-y-10">

    {visualPatterns.map((q:any, index:number)=>(
      
      <div key={q.key} className="space-y-4">

        <div className="text-lg font-semibold">
          {index+1}. {q.pattern}
        </div>

        <div className="grid grid-cols-4 gap-6 text-center">

          {Object.entries(q.options).map(([letter,value]:any)=>(
            
            <div key={letter} className="flex flex-col items-center gap-2">

              <div className="text-xl">{letter}</div>

              <div className="text-2xl">
                {value}
              </div>

            </div>

          ))}

        </div>

        <div className="mt-2">

          Answer =
          <input
            type="text"
            className="border-2 border-black ml-2 w-20 p-1 text-center"
            placeholder="A/B/C/D"
            onChange={(e)=>
              setSubAnswers({...subAnswers,[q.key]:e.target.value.toUpperCase()})
            }
          />

        </div>

      </div>

    ))}

  </div>

  )}

 {/* CODING / DECODING (Question 6) */}

{codes.length > 0 && (

<div className="mt-8 space-y-12">

  {codes.map((c:any)=>(
    
    <div key={c.key} className="space-y-3 text-lg">

      <div className="font-semibold whitespace-pre-line leading-relaxed">
        {c.question}
      </div>

      <div className="flex items-center gap-3">
        Answer =
        <input
          type="text"
          className="border-2 border-black w-36 p-1 text-center"
          onChange={(e)=>
            setSubAnswers({...subAnswers,[c.key]:e.target.value})
          }
        />
      </div>

    </div>

  ))}

</div>

)}

{/* TESSELLATION PUZZLE (Question 7) */}

{tessellation.length > 0 && (

<div className="mt-10 space-y-8">

{tessellation.map((t:any)=>{

return(

<div key={t.key} className="space-y-6">

<div className="text-xl font-bold">
Make the tiles tessellate
</div>

<div className="grid grid-cols-3 gap-2 w-40 text-3xl">

{(() => {

let tileCounter = 0;

return t.grid.flat().map((cell:any,i:number)=>{

if(cell === "?"){

tileCounter++;
const tileKey = "tile" + tileCounter;

return(

<div
key={i}
className="border border-black p-3 text-center cursor-pointer bg-gray-100"
onClick={()=>{

const current = subAnswers[tileKey];

let next;

if(current === "⬛"){
  next = "⬜";
}else if(current === "⬜"){
  next = "⬛";
}else{
  next = "⬛";
}

setSubAnswers({...subAnswers,[tileKey]:next});

}}
>

{subAnswers[tileKey] || "?"}

</div>

)

}

return(

<div
key={i}
className="border border-black p-3 text-center"
>
{cell}
</div>

)

})

})()}

</div>

</div>

)

})}

</div>

)}

  {/* GRID PATTERNS (Question 4) */}

  {gridPatterns.length > 0 && (

  <div className="mt-10 space-y-10">

    {gridPatterns.map((g:any,index:number)=>{

      return(

      <div key={g.key} className="space-y-4">

        <div className="text-lg font-semibold">
          Puzzle {index+1}
        </div>

        {/* GRID */}

        <div className="grid grid-cols-3 gap-2 w-40 text-2xl">

          {g.grid.flat().map((cell:any,i:number)=>(
            <div
              key={i}
              className="border border-black p-2 text-center"
            >
              {cell}
            </div>
          ))}

        </div>

        {/* OPTIONS */}

        <div className="grid grid-cols-4 gap-6 text-center text-lg">

          {Object.entries(g.options).map(([k,v]:any)=>(
            <div key={k}>
              {k}. {v}
            </div>
          ))}

        </div>

        {/* ANSWER BOX */}

        <div>

          Answer =
          <input
            type="text"
            className="border-2 border-black ml-2 w-20 p-1 text-center"
            placeholder="A/B/C/D"
            onChange={(e)=>
              setSubAnswers({...subAnswers,[g.key]:e.target.value.toUpperCase()})
            }
          />

        </div>

      </div>

      )

    })}

  </div>

  )}

  </>
  );
}

/* SINGLE ANSWER QUESTIONS */

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
