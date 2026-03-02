"use client";

import { useState } from "react";
import { measurementQuestions } from "@/lib/questions";

export default function MeasurementPage() {
  const [current, setCurrent] = useState(0);
  const [steps, setSteps] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const q = measurementQuestions[current];

  function submit() {
    if (parseFloat(answer) === q.answer) {
      setFeedback("✅ Correct! Excellent Work!");
    } else {
      setFeedback(`❌ Incorrect. Correct answer is ${q.answer}`);
    }
  }

  function next() {
    setCurrent((prev) => (prev + 1) % measurementQuestions.length);
    setAnswer("");
    setSteps("");
    setFeedback("");
  }

  return (
    <div className="min-h-screen bg-white p-8 text-center">
      <h1 className="text-3xl font-extrabold text-black mb-6">
        Measurement Practice
      </h1>

      <div className="bg-yellow-50 border-4 border-black p-6 rounded-2xl max-w-2xl mx-auto shadow-xl">

        <img
          src={q.image}
          alt="Question illustration"
          className="mx-auto mb-4"
        />

        {/* Question */}
        <h2 className="text-2xl font-extrabold text-black mb-4">
          {q.question}
        </h2>

        {/* Hint */}
        <p className="mb-4 text-lg font-bold text-blue-900">
          Hint: {q.hint}
        </p>

        {/* Steps Text Area */}
        <textarea
          placeholder="Write your steps clearly here..."
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border-2 border-black bg-white text-black placeholder-gray-600 p-4 w-full mb-4 rounded text-xl font-bold"
          rows={4}
        />

        {/* Final Answer Input */}
        <input
          type="number"
          placeholder="Enter Final Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border-2 border-black bg-white text-black placeholder-gray-600 p-4 mb-4 rounded text-xl font-extrabold w-full"
        />

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={submit}
            className="bg-blue-800 hover:bg-blue-900 text-white font-extrabold text-lg px-6 py-3 rounded"
          >
            Submit
          </button>

          <button
            onClick={next}
            className="bg-green-700 hover:bg-green-800 text-white font-extrabold text-lg px-6 py-3 rounded"
          >
            Next Question
          </button>
        </div>

        {/* Feedback */}
        <p className="mt-6 text-2xl font-extrabold text-black">
          {feedback}
        </p>
      </div>
    </div>
  );
}