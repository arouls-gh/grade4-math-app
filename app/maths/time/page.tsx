"use client";


import { questions } from "./data/questions";
import Modal from "../measurement/components/Modal";
import QuestionRenderer from "../measurement/components/QuestionRenderer";
import InteractiveClock from "./components/InteractiveClock";
import { generateQuestion6 } from "./data/question6";
import Timeline24 from "./components/Timeline24";
import { useState, useMemo, useEffect } from "react";
import { markChapterComplete } from "@/lib/progress";
import { saveFeedback } from "@/lib/feedback";
import { useRouter } from "next/navigation";


export default function TimePage() {

  const [current, setCurrent] = useState(0);
  const [subAnswers, setSubAnswers] = useState<any>({});
  const [answerInput, setAnswerInput] = useState("");
  const [activeModal, setActiveModal] = useState<any>(null);
  const [feedback, setFeedback] = useState("");
  const [lessonPopup, setLessonPopup] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const baseQuestion = questions[current];
  const [chapterComplete, setChapterComplete] = useState(false);

  const [feedbackText,setFeedbackText] = useState("");

  const [askOpen,setAskOpen] = useState(false);
const [studentQuestion,setStudentQuestion] = useState("");

  const router = useRouter();

  function randTime() {
    const hour = Math.floor(Math.random() * 12) + 1;
    const minute = Math.floor(Math.random() * 12) * 5;
    return { hour, minute };
  }

  function rand24() {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 12) * 5;
    return { hour, minute };
  }

  // QUESTION 5 GENERATOR
  function generateElapsed(period: "AM" | "PM") {

    while (true) {

      const startHour = Math.floor(Math.random() * 11) + 1;
      const startMinute = Math.floor(Math.random() * 12) * 5;

      const durationMinutes =
        (Math.floor(Math.random() * (6 * 60 - 20)) + 20);

      const startTotal = startHour * 60 + startMinute;
      const endTotal = startTotal + durationMinutes;

      if (endTotal >= 12 * 60) continue;

      const endHour = Math.floor(endTotal / 60);
      const endMinute = endTotal % 60;

      if (endHour === startHour && endMinute === startMinute) continue;

      return {
        startHour,
        startMinute,
        endHour,
        endMinute,
        period
      };
    }
  }

  const clocks = useMemo(() => {

    if (baseQuestion.id === 1 || baseQuestion.id === 2) {
      return Array.from({ length: 6 }, () => randTime());
    }

    if (baseQuestion.id === 3) {

      const random = Array.from({ length: 4 }, () => randTime());

      return [
        ...random.map(c => ({
          ...c,
          period: Math.random() > 0.5 ? "PM" : "AM"
        })),
        { hour: 12, minute: 0, period: "PM" },
        { hour: 12, minute: 0, period: "AM" }
      ];
    }

    if (baseQuestion.id === 4) {

      const random = Array.from({ length: 6 }, () => rand24());

      return [
        { hour: 0, minute: Math.floor(Math.random() * 12) * 5 },
        { hour: 12, minute: Math.floor(Math.random() * 12) * 5 },
        ...random
      ];
    }

    // QUESTION 5
    if (baseQuestion.id === 5) {

      return [
        generateElapsed("AM"),
        generateElapsed("AM"),
        generateElapsed("PM"),
        generateElapsed("PM")
      ];
    }

    // NEW Q6
if (baseQuestion.id === 6) {
  return generateQuestion6();
}


    return [];

  }, [baseQuestion.id]);

  const correctAnswers = useMemo(() => {

    const ans: any = {};

    if (baseQuestion.id === 1) {
      clocks.forEach((c, i) => {
        ans[String.fromCharCode(97 + i)] = String(c.minute);
      });
    }

    if (baseQuestion.id === 2) {
      clocks.forEach((c, i) => {
        const time = `${c.hour}:${String(c.minute).padStart(2, "0")}`;
        ans[String.fromCharCode(97 + i)] = time;
      });
    }

    if (baseQuestion.id === 3) {

      clocks.forEach((c, i) => {

        let hour = c.hour;
        const minute = String(c.minute).padStart(2, "0");

        if (c.period === "PM") {
          if (hour !== 12) hour += 12;
        } else {
          if (hour === 12) hour = 0;
        }

        ans[String.fromCharCode(97 + i)] =
          `${String(hour).padStart(2, "0")}:${minute}`;
      });
    }

    if (baseQuestion.id === 4) {

      clocks.forEach((c, i) => {

        const key = String.fromCharCode(97 + i);

        let hour = c.hour;
        const minute = String(c.minute).padStart(2, "0");

        let period = "AM";

        if (hour === 0) {
          hour = 12;
          period = "AM";
        } else if (hour < 12) {
          period = "AM";
        } else if (hour === 12) {
          period = "PM";
        } else {
          hour -= 12;
          period = "PM";
        }

        ans[key] = `${hour}:${minute} ${period}`;
      });
    }

    if (baseQuestion.id === 5) {

      clocks.forEach((c, i) => {

        const key = String.fromCharCode(97 + i);

        const start = c.startHour * 60 + c.startMinute;
        const end = c.endHour * 60 + c.endMinute;

        const diff = end - start;

        const hr = Math.floor(diff / 60);
        const min = diff % 60;

        ans[key] = `${hr} hr ${min} min`;
      });
    }
    if (baseQuestion.id === 6) {

  clocks.forEach((c, i) => {

    const key = String.fromCharCode(97 + i);

    function toMin(h:number,m:number,p:string){
      let hr = h % 12;
      if(p==="PM") hr += 12;
      return hr*60+m;
    }

    const start = toMin(c.startHour,c.startMinute,c.startPeriod);
    const end = toMin(c.endHour,c.endMinute,c.endPeriod);

    let diff = end - start;
    if(diff < 0) diff += 1440;

    const hr = Math.floor(diff/60);
    const min = diff%60;

    ans[key] = `${hr} hr ${min} min`;

  });

}
if (baseQuestion.id === 8) {

  ans["a_h"] = "0";
  ans["a_m"] = "35";

  ans["b_h"] = "1";
  ans["b_m"] = "25";

  ans["c_h"] = "3";
  ans["c_m"] = "50";

  ans["d_h"] = "0";
  ans["d_m"] = "40";

}

if (baseQuestion.id === 9) {

  ans["answer"] = "5:45 PM";

}

if (baseQuestion.id === 10) {

  ans["answer"] = "5:35 PM";

}

if (baseQuestion.id === 7) {

  ans["a_h"] = "1";
  ans["a_m"] = "2";

  ans["b_h"] = "1";
  ans["b_m"] = "0";

  ans["c"] = "5:35 PM";

}

    return ans;

  }, [clocks, baseQuestion.id]);

  function triggerCelebration() {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 2000);
  }

  function submitMain() {

    console.log("SUB ANSWERS:", subAnswers);

// SPECIAL VALIDATION FOR QUESTION 7
if (baseQuestion.id === 7) {

  const ah = String(subAnswers["a_h"] ?? "").trim();
  const am = String(subAnswers["a_m"] ?? "").trim();
  const bh = String(subAnswers["b_h"] ?? "").trim();
  const bm = String(subAnswers["b_m"] ?? "").trim();
  let c  = String(subAnswers["c"] ?? "").trim();
c = c.replace(/^0/, "");

  const correct =
    ah === String(correctAnswers["a_h"]) &&
    am === String(correctAnswers["a_m"]) &&
    bh === String(correctAnswers["b_h"]) &&
    bm === String(correctAnswers["b_m"]) &&
    (
      c === correctAnswers["c"] ||
      `${c} PM` === correctAnswers["c"]
    );

  if (correct) {
    setFeedback("correct");
    triggerCelebration();
  } else {
    setFeedback("wrong");
  }

  return;
}
// SPECIAL VALIDATION FOR QUESTION 8
if (baseQuestion.id === 8) {

  const ah = subAnswers["a_h"]?.trim();
  const am = subAnswers["a_m"]?.trim();

  const bh = subAnswers["b_h"]?.trim();
  const bm = subAnswers["b_m"]?.trim();

  const ch = subAnswers["c_h"]?.trim();
  const cm = subAnswers["c_m"]?.trim();

  const dh = subAnswers["d_h"]?.trim();
  const dm = subAnswers["d_m"]?.trim();

  const correct =
    ah === correctAnswers["a_h"] &&
    am === correctAnswers["a_m"] &&
    bh === correctAnswers["b_h"] &&
    bm === correctAnswers["b_m"] &&
    ch === correctAnswers["c_h"] &&
    cm === correctAnswers["c_m"] &&
    dh === correctAnswers["d_h"] &&
    dm === correctAnswers["d_m"];

  if (correct) {
    setFeedback("correct");
    triggerCelebration();
  } else {
    setFeedback("wrong");
  }

  return;
}
// VALIDATION FOR SINGLE-ANSWER QUESTIONS (Q9, Q10)

if (baseQuestion.type === "single") {

  const answer = answerInput?.trim();

  console.log("Student Answer:", answer);
  console.log("Correct Answer:", correctAnswers["answer"]);


  const correct =
    answer?.toLowerCase() ===
    correctAnswers["answer"]?.toLowerCase();

console.log("Comparison result:", correct);

  if (correct) {
    setFeedback("correct");
    triggerCelebration();
  } else {
    setFeedback("wrong");
  }

  return;
}
// PREVENT EMPTY VALIDATION (fixes Q9/Q10 always-correct bug)
if (!correctAnswers || Object.keys(correctAnswers).length === 0) {
  setFeedback("wrong");
  return;
}
    const isCorrect = Object.keys(correctAnswers).every((key) => {

      if (baseQuestion.id === 4) {

        const time = subAnswers[key + "_time"];
        const period = subAnswers[key + "_period"];

        return `${time} ${period}` === correctAnswers[key];
      }

      if (baseQuestion.id === 5) {

        const hr = subAnswers[key + "_h"];
        const min = subAnswers[key + "_m"];

        return `${hr} hr ${min} min` === correctAnswers[key];
      }

      if (baseQuestion.id === 6) {

  const hr = subAnswers[key+"_h"];
  const min = subAnswers[key+"_m"];

  return `${hr} hr ${min} min` === correctAnswers[key];

}

if (baseQuestion.type === "single") {
  const correct = answerInput.trim() === correctAnswers;
  
  if (correct) {
    setFeedback("correct");
    triggerCelebration();
  } else {
    setFeedback("wrong");
  }

  return;
}
      return subAnswers[key]?.trim().toLowerCase() === String(correctAnswers[key]).trim().toLowerCase();
    });

    if (isCorrect) {
      setFeedback("correct");
      triggerCelebration();
    } else {
      setFeedback("wrong");
    }
  }

  function nextQuestion() {
    setLessonPopup(true);
  }

  function confirmNext() {

  setLessonPopup(false);

  if (current < questions.length - 1) {

    setCurrent(current + 1);
    setSubAnswers({});
    setFeedback("");

  } else {

    const user = localStorage.getItem("currentUser");

    if (user) {
      markChapterComplete(user,"time");
    }

    setChapterComplete(true);

  }

}

function previousQuestion() {

  if (current > 0) {
    setCurrent(current - 1);
    setSubAnswers({});
    setFeedback("");
  }

}

  function submitFeedback(){

  const user = localStorage.getItem("currentUser");

  if(!user){
    router.push("/");
    return;
  }

  saveFeedback(user,"time",feedbackText);

  router.push("/maths");

}


/* ADD THIS NEW FUNCTION BELOW submitFeedback */

async function submitStudentQuestion(){

  const user = localStorage.getItem("currentUser");

  if(!user){
    router.push("/");
    return;
  }

  await fetch("/api/student-question",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username:user,
      chapter:"time",
      questionNumber:current+1,
      question:studentQuestion
    })
  });

  setStudentQuestion("");
  setAskOpen(false);

}

  return (

    <div className="min-h-screen bg-white p-12 relative">

        {chapterComplete && (

  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">

    <div className="text-center">

      <div className="text-6xl mb-6">
        🎉
      </div>

      <h1
        style={{fontFamily:"var(--font-handwriting)", fontSize:"4rem"}}
      >
        Congrats!
      </h1>

      <p className="text-2xl mt-4">
        You completed the Time chapter
      </p>

     <div className="mt-8 flex flex-col items-center">

<p className="text-xl mb-4">
What do you think about this chapter?
</p>

<textarea
value={feedbackText}
onChange={(e)=>setFeedbackText(e.target.value)}
className="border-2 border-black p-4 w-96 h-32 text-lg"
placeholder="Write your feedback..."
/>

<button
onClick={submitFeedback}
className="mt-6 bg-blue-700 text-white px-8 py-4 text-xl rounded-xl"
>
Submit Feedback
</button>

</div>

    </div>

  </div>

)}

      {celebrate && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="text-7xl animate-bounce">
            🎉✨🎊
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto text-left">

        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Time – Question {current + 1}
        </h1>

        <div className="text-black font-bold text-lg">

          <QuestionRenderer
              question={baseQuestion}
  answerInput={answerInput}
  setAnswerInput={setAnswerInput}
  subAnswers={subAnswers}
  setSubAnswers={setSubAnswers}
          />

        </div>

        {/* Q1 Q2 Q3 CLOCK QUESTIONS */}

        {(baseQuestion.id === 1 ||
          baseQuestion.id === 2 ||
          baseQuestion.id === 3) && (

          <div className="grid grid-cols-3 gap-12 mt-10">

            {clocks.map((clock, index) => {

              const key = String.fromCharCode(97 + index);

              return (

                <div key={index} className="flex flex-col items-center">

                  <InteractiveClock
                    hour={clock.hour}
                    minute={clock.minute}
                    label={String.fromCharCode(65 + index)}
                  />

                  {baseQuestion.id === 3 && clock.period && (
                    <div className="font-bold text-black text-lg mt-1">
                      {clock.period}
                    </div>
                  )}

                  <input
                    className="border-2 border-black text-black font-bold text-center w-28 p-2 mt-3 placeholder-gray-500"
                    placeholder="Answer"
                    value={subAnswers[key] || ""}
                    onChange={(e) =>
                      setSubAnswers({
                        ...subAnswers,
                        [key]: e.target.value
                      })
                    }
                  />

                </div>

              );
            })}

          </div>

        )}

        {/* Q4 DIGITAL TIME QUESTION */}

        {baseQuestion.id === 4 && (

          <div className="space-y-6 mt-10">

            {clocks.map((clock, index) => {

              const key = String.fromCharCode(97 + index);
              const label = String.fromCharCode(65 + index);

              const time24 =
                `${String(clock.hour).padStart(2, "0")}:${String(clock.minute).padStart(2, "0")}`;

              return (

                <div key={index} className="flex items-center gap-4 text-lg">

                  <span className="font-bold text-black">
                    {label}. {time24} =
                  </span>

                  <input
                    className="border-2 border-black text-black font-bold text-center w-28 p-2"
                    placeholder="HH:MM"
                    value={subAnswers[key + "_time"] || ""}
                    onChange={(e) =>
                      setSubAnswers({
                        ...subAnswers,
                        [key + "_time"]: e.target.value
                      })
                    }
                  />

                  <input
                    className="border-2 border-black text-black font-bold text-center w-20 p-2"
                    placeholder="AM/PM"
                    value={subAnswers[key + "_period"] || ""}
                    onChange={(e) =>
                      setSubAnswers({
                        ...subAnswers,
                        [key + "_period"]: e.target.value
                      })
                    }
                  />

                </div>
              );
            })}
          </div>
        )}

        {/* Q5 ELAPSED TIME */}

        {baseQuestion.id === 5 && (

          <div className="space-y-6 mt-10">

            {clocks.map((clock, index) => {

              const key = String.fromCharCode(97 + index);
              const label = String.fromCharCode(65 + index);

              return (

                <div key={index} className="flex items-center gap-4 text-lg">

                  <span className="font-bold text-black">
                    {label}. Start Time: {clock.startHour}:{String(clock.startMinute).padStart(2,"0")} {clock.period}
                    &nbsp;&nbsp;End Time: {clock.endHour}:{String(clock.endMinute).padStart(2,"0")} {clock.period} =
                  </span>

                  <input
                    className="border-2 border-black text-black font-bold text-center w-20 p-2"
                    placeholder="H"
                    value={subAnswers[key + "_h"] || ""}
                    onChange={(e) =>
                      setSubAnswers({
                        ...subAnswers,
                        [key + "_h"]: e.target.value
                      })
                    }
                  />

                  <span className="font-bold">hr</span>

                  <input
                    className="border-2 border-black text-black font-bold text-center w-20 p-2"
                    placeholder="M"
                    value={subAnswers[key + "_m"] || ""}
                    onChange={(e) =>
                      setSubAnswers({
                        ...subAnswers,
                        [key + "_m"]: e.target.value
                      })
                    }
                  />

                  <span className="font-bold">min</span>

                </div>
              );
            })}
          </div>
        )}

        {/* Q6 TIMELINE ELAPSED TIME */}

{baseQuestion.id === 6 && (

  <div className="space-y-8 mt-10">

    <Timeline24
      start={300}
      end={600}
      onChange={()=>{}}
    />

    {clocks.map((clock, index) => {

      const key = String.fromCharCode(97 + index);
      const label = String.fromCharCode(65 + index);

      const start =
        `${clock.startHour}:${String(clock.startMinute).padStart(2,"0")} ${clock.startPeriod}`;

      const end =
        `${clock.endHour}:${String(clock.endMinute).padStart(2,"0")} ${clock.endPeriod}`;

      return (

        <div key={index} className="flex items-center gap-4 text-lg">

          <span className="font-bold text-black">
            {label}. Start Time: {start}   End Time: {end} =
          </span>

          <input
            className="border-2 border-black text-black font-bold text-center w-20 p-2"
            placeholder="H"
            value={subAnswers[key+"_h"] || ""}
            onChange={(e) =>
              setSubAnswers({
                ...subAnswers,
                [key+"_h"]: e.target.value
              })
            }
          />

          <span className="font-bold">hr</span>

          <input
            className="border-2 border-black text-black font-bold text-center w-20 p-2"
            placeholder="M"
            value={subAnswers[key+"_m"] || ""}
            onChange={(e) =>
              setSubAnswers({
                ...subAnswers,
                [key+"_m"]: e.target.value
              })
            }
          />

          <span className="font-bold">min</span>

        </div>

      );

    })}

  </div>

)}

        <div className="mt-8">

          <button
            onClick={submitMain}
            className="bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            Submit
          </button>

        </div>

        <div className="flex gap-8 mt-6 text-lg font-bold text-blue-900">

          <span
            onClick={() => setActiveModal("solution")}
            className="cursor-pointer hover:underline"
          >
            View Solution
          </span>

          <span
            onClick={() => setActiveModal("steps")}
            className="cursor-pointer hover:underline"
          >
            Think Step-by-Step
          </span>

          <span
            onClick={() => setActiveModal("hint")}
            className="cursor-pointer hover:underline"
          >
            Hint
          </span>

        </div>

        <div className="mt-16 flex justify-between text-lg font-bold text-indigo-900">

          <span
            onClick={previousQuestion}
            className="cursor-pointer hover:underline"
          >
            &lt;&lt; Previous
          </span>

          <span
            onClick={nextQuestion}
            className="cursor-pointer hover:underline"
          >
            Next &gt;&gt;
          </span>

        </div>

        {feedback && (
          <p className="mt-6 font-extrabold text-lg text-black">
            {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect"}
          </p>
        )}

      </div>

      {activeModal && (

        <Modal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          question={{
            ...baseQuestion,
            correctAnswer: correctAnswers
          }}
          stepValues={{}}
          setStepValues={() => {}}
          submitStep={() => {}}
        />

      )}

      {lessonPopup && (

        <div className="fixed inset-0 flex items-center justify-center z-50">

          <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-2xl w-[400px] text-black">

            <h2 className="text-xl font-extrabold mb-4">
              What You Learned
            </h2>

            <p className="mb-6">
              {baseQuestion.lesson}
            </p>

            <button
              onClick={confirmNext}
              className="bg-blue-800 text-white px-6 py-3 rounded-xl"
            >
              Continue
            </button>

          </div>

        </div>

      )}

<button
onClick={()=>setAskOpen(true)}
className="fixed bottom-6 right-6 bg-red-700 text-white px-6 py-3 rounded-full shadow-2xl"
>
Ask Your Question
</button>
{askOpen && (

<div className="fixed inset-0 flex items-center justify-center z-50">

<div className="bg-white border-2 border-black p-6 rounded-2xl shadow-2xl w-[420px] text-black">

<h2 className="text-xl font-extrabold mb-4">
Ask Your Question
</h2>

<p className="mb-3">
Question {current+1}
</p>

<textarea
value={studentQuestion}
onChange={(e)=>setStudentQuestion(e.target.value)}
className="border-2 border-black p-3 w-full h-28"
placeholder="Type your doubt here..."
/>

<div className="flex justify-end gap-4 mt-4">

<button
onClick={()=>setAskOpen(false)}
className="px-4 py-2 border border-black"
>
Cancel
</button>

<button
onClick={submitStudentQuestion}
className="px-6 py-2 bg-blue-700 text-white rounded"
>
Send
</button>

</div>

</div>

</div>

)}
    </div>
  );
}