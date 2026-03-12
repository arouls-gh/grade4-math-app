"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const [questions, setQuestions] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<any[]>([]);

  useEffect(() => {

    const teacher = localStorage.getItem("teacher");

    if (!teacher) {
      router.push("/teacher");
      return;
    }

    loadData();

  }, []);

  async function loadData() {

    try {

      const q = await fetch("/api/teacher/questions");
const qData = await q.json();

const f = await fetch("/api/teacher/feedback");
const fData = await f.json();

setQuestions(qData.data || []);
setFeedback(fData.data || []);

    } catch (err) {

      console.log("Error loading dashboard data", err);

    }

  }

  /* -----------------------------
     MOST ASKED QUESTIONS
  ----------------------------- */

  function hardestQuestions() {

    const map: any = {};

    questions.forEach((q) => {

      const key = `${q.chapter} - Q${q.questionNumber}`;

      if (!map[key]) map[key] = 0;

      map[key]++;

    });

    return Object.entries(map).sort((a: any, b: any) => b[1] - a[1]);

  }

  /* -----------------------------
     HARDEST CHAPTERS
  ----------------------------- */

  function hardestChapters() {

    const map: any = {};

    questions.forEach((q) => {

      if (!map[q.chapter]) map[q.chapter] = 0;

      map[q.chapter]++;

    });

    return Object.entries(map).sort((a: any, b: any) => b[1] - a[1]);

  }

  return (

    <div className="min-h-screen bg-gray-100 p-10 text-black">

      <h1 className="text-4xl font-bold mb-10 text-black">
        Teacher Insights Dashboard
      </h1>

      {/* MOST ASKED QUESTIONS */}

      <div className="bg-white p-6 rounded-xl shadow mb-10 text-black">

        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Most Asked Questions
        </h2>

        {hardestQuestions().length === 0 && (
          <p>No student questions yet.</p>
        )}

        {hardestQuestions().map((q: any, i) => {

          return (

            <div
              key={i}
              className="border p-3 mb-2 rounded"
            >

              <b>{q[0]}</b> — {q[1]} doubts

            </div>

          );

        })}

      </div>

      {/* HARDEST CHAPTERS */}

      <div className="bg-white p-6 rounded-xl shadow mb-10 text-black">

        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Hardest Chapters
        </h2>

        {hardestChapters().length === 0 && (
          <p>No chapter difficulty data yet.</p>
        )}

        {hardestChapters().map((c: any, i) => {

          return (

            <div
              key={i}
              className="border p-3 mb-2 rounded"
            >

              <b>{c[0]}</b> — {c[1]} questions asked

            </div>

          );

        })}

      </div>

      {/* STUDENT QUESTIONS */}

      <div className="bg-white p-6 rounded-xl shadow mb-10 text-black">

        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Student Questions
        </h2>

        <table className="w-full border text-black">

          <thead>

            <tr className="bg-gray-200">

              <th className="border p-2">Student</th>
              <th className="border p-2">Chapter</th>
              <th className="border p-2">Question #</th>
              <th className="border p-2">Question</th>

            </tr>

          </thead>

          <tbody>

            {questions.map((q, i) => {

              return (

                <tr key={i}>

                  <td className="border p-2">{q.username}</td>
                  <td className="border p-2">{q.chapter}</td>
                  <td className="border p-2">{q.questionNumber}</td>
                  <td className="border p-2">{q.question}</td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

      {/* CHAPTER FEEDBACK */}

      <div className="bg-white p-6 rounded-xl shadow text-black">

        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Chapter Feedback
        </h2>

        <table className="w-full border text-black">

          <thead>

            <tr className="bg-gray-200">

              <th className="border p-2">Student</th>
              <th className="border p-2">Chapter</th>
              <th className="border p-2">Feedback</th>

            </tr>

          </thead>

          <tbody>

            {feedback.map((f, i) => {

              return (

                <tr key={i}>

                  <td className="border p-2">{f.username}</td>
                  <td className="border p-2">{f.chapter}</td>
                  <td className="border p-2">{f.feedback}</td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>

  );

}