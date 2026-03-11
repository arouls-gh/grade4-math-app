"use client";

import { useState } from "react";
import { questions } from "./data/questions";
import Modal from "./components/Modal";
import dynamic from "next/dynamic";
import { saveFeedback } from "@/lib/feedback";
import AskQuestion from "./components/AskQuestion";
import ChapterFeedback from "./components/ChapterFeedback";
import { markChapterComplete } from "@/lib/progress";
import { useRouter } from "next/navigation";

const QuestionRenderer = dynamic(
  () => import("./components/QuestionRenderer"),
  { ssr: false }
);

export default function PerimeterAreaPage() {

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

  const router = useRouter();

  const question = questions[current];

  function triggerCelebration() {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 2000);
  }

  function normalize(v:any){
    return String(v ?? "")
      .trim()
      .toLowerCase()
      .replace(/^0+(\d)/,"$1");
  }

function submitMain() {

  if (question.type === "single") {

    if (answerInput.trim() === question.correctAnswer) {
      setFeedback("correct");
      triggerCelebration();
    } else {
      setFeedback("wrong");
    }

    return;
  }

  if (question.type === "multi") {

    let correct = question.correctAnswer;

    if (question.values) {

      const v = question.values;

      correct = {
        A: String(2 * (v.rectL + v.rectB)),
        B: String(4 * v.square),
        C: String(v.tri[0] + v.tri[1] + v.tri[2]),
        D: String(v.poly.reduce((a:any,b:any)=>a+b,0))
      };

    }

    const normalize = (v:any) =>
      String(v ?? "")
        .trim()
        .replace(/^0+(\d)/,"$1");

    const isCorrect = Object.keys(correct).every(
      (key) => normalize(subAnswers[key]) === normalize(correct[key])
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

    const isCorrect = Object.keys(correctSteps || {}).every((key) => {

      if(correctSteps[key] === undefined) return true;

      return normalize(stepValues[key]) === normalize(correctSteps[key]);

    });

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
        markChapterComplete(user,"perimeterarea");
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

    saveFeedback(user,"perimeterarea",feedbackText);

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
              style={{fontFamily:"var(--font-handwriting)",fontSize:"4rem"}}
            >
              Congrats!
            </h1>

            <p className="text-2xl mt-4">
              You completed the Perimeter and Area chapter
            </p>

<ChapterFeedback chapter="perimeterarea" />

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
          Perimeter and Area – Question {current + 1}
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

<AskQuestion
  chapter="perimeterarea"
  questionNumber={current+1}
/>

    </div>
  );
}