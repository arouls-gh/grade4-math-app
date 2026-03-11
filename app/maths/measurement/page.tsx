"use client";

import { useState } from "react";
import { questions } from "./data/questions";
import Modal from "./components/Modal";
import QuestionRenderer from "./components/QuestionRenderer";
import { saveFeedback } from "@/lib/feedback";
import { markChapterComplete } from "@/lib/progress";
import { useRouter } from "next/navigation";

export default function MeasurementPage() {

  const [current, setCurrent] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [subAnswers, setSubAnswers] = useState<any>({});
  const [activeModal, setActiveModal] = useState<any>(null);
  const [stepValues, setStepValues] = useState<any>({});
  const [feedback, setFeedback] = useState("");
  const [lessonPopup, setLessonPopup] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const [chapterComplete,setChapterComplete] = useState(false);
  const [feedbackText,setFeedbackText] = useState("");

  const [askPopup,setAskPopup] = useState(false);
const [studentQuestion,setStudentQuestion] = useState("");

  const router = useRouter();

  const question = questions[current];

  function triggerCelebration() {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 2000);
  }

  function submitMain() {

    if (question.type === "single") {

      if (answerInput.trim() === question.correctAnswer) {
        setFeedback("correct");
        triggerCelebration();
      } else {
        setFeedback("wrong");
      }
    }

    if (question.type === "multi") {

      const correct = question.correctAnswer;

      const isCorrect = Object.keys(correct).every(
        (key) => subAnswers[key]?.trim() === correct[key]
      );

      if (isCorrect) {
        setFeedback("correct");
        triggerCelebration();
      } else {
        setFeedback("wrong");
      }
    }
  }

  function submitStep() {

    if (!question.steps) return;

    const correctSteps = question.steps;

    const isCorrect = Object.keys(correctSteps).every(
      (key) => stepValues[key]?.trim() === correctSteps[key]
    );

    if (isCorrect) {

      if (question.type === "single") {
        setAnswerInput(question.correctAnswer);
      }

      if (question.type === "multi") {
        setSubAnswers(question.correctAnswer);
      }

      setFeedback("correct");
      setActiveModal(null);
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
      resetState();
    } else {

      const user = localStorage.getItem("currentUser");

      if(user){
        markChapterComplete(user,"measurement");
      }

      setChapterComplete(true);

    }
  }

  function previousQuestion() {
    if (current > 0) {
      setCurrent(current - 1);
      resetState();
    }
  }

  function resetState() {
    setAnswerInput("");
    setSubAnswers({});
    setStepValues({});
    setFeedback("");
    setActiveModal(null);
  }

  function submitFeedback(){

    const user = localStorage.getItem("currentUser");

    if(!user){
      router.push("/");
      return;
    }

    saveFeedback(user,"measurement",feedbackText);

    router.push("/maths");

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
              You completed the Measurement chapter
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

      <div className="max-w-4xl mx-auto text-left">

        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Measurement – Question {current + 1}
        </h1>

        <div className="text-black font-bold text-lg">
          <QuestionRenderer
            question={question}
            answerInput={answerInput}
            setAnswerInput={setAnswerInput}
            subAnswers={subAnswers}
            setSubAnswers={setSubAnswers}
          />
        </div>

        <div className="mt-6">
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
          question={question}
          stepValues={stepValues}
          setStepValues={setStepValues}
          submitStep={submitStep}
        />
      )}

      {lessonPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-2xl w-[400px] text-black">
            <h2 className="text-xl font-extrabold mb-4">
              What You Learned
            </h2>
            <p className="mb-6">
              {question.lesson}
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
onClick={()=>setAskPopup(true)}
className="fixed bottom-6 right-6 bg-red-700 text-white px-6 py-3 rounded-full shadow-2xl"
>
Ask Your Question
</button>
{askPopup && (

<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

  <div className="bg-white p-6 rounded-xl w-[450px] text-black">

    <h2 className="text-xl font-bold mb-4">
      Ask your question
    </h2>

    <textarea
      value={studentQuestion}
      onChange={(e)=>setStudentQuestion(e.target.value)}
      className="border-2 border-black w-full h-32 p-3"
      placeholder="Type your doubt here..."
    />

    <div className="flex justify-end gap-4 mt-4">

      <button
        onClick={()=>setAskPopup(false)}
        className="px-4 py-2 border"
      >
        Cancel
      </button>

      <button
        onClick={async()=>{

          const user = localStorage.getItem("currentUser")

          await fetch("/api/student-question",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              username:user,
              chapter:"measurement",
              questionNumber:current+1,
              question:studentQuestion
            })
          })

          setStudentQuestion("")
          setAskPopup(false)

        }}
        className="bg-blue-700 text-white px-6 py-2 rounded"
      >
        Submit
      </button>

    </div>

  </div>

</div>

)}
    </div>
  );
}