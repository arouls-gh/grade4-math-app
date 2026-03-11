"use client";

import { useEffect, useState, useRef } from "react";

export default function Modal({
  activeModal,
  setActiveModal,
  question,
  stepValues,
  setStepValues,
  submitStep
}: any) {

  const modalRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 200, y: 120 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [sectionIndex, setSectionIndex] = useState(0);

  const safeHint = question?.hint || "No hint available for this question.";
  const safeSolution = question?.solution || "Solution not provided.";
  const stepContent = question?.stepContent || [];

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveModal(null);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setActiveModal]);

  useEffect(() => {
    setSectionIndex(0);
  }, [question, activeModal]);

  // ---------------- DRAG LOGIC ----------------
  function handleMouseDown(e: React.MouseEvent) {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }

  function handleMouseMove(e: MouseEvent) {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    });
  }

  function handleMouseUp() {
    setDragging(false);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  // ---------------- STEP SECTIONS ----------------
  const sectionSize = 3;

  const sections = stepContent.length
    ? Array.from(
        { length: Math.ceil(stepContent.length / sectionSize) },
        (_, i) =>
          stepContent.slice(
            i * sectionSize,
            i * sectionSize + sectionSize
          )
      )
    : [];

  if (!activeModal) return null;

  return (

    <div className="fixed inset-0 z-50">

      {/* BACKGROUND DIM */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* MODAL WINDOW */}
      <div
        ref={modalRef}
        style={{ top: position.y, left: position.x }}
        className="absolute bg-white w-[600px] p-6 rounded-2xl shadow-2xl border-2 border-gray-300"
      >

        {/* HEADER */}
        <div
          onMouseDown={handleMouseDown}
          className="cursor-move bg-gray-100 p-3 rounded-t-xl flex justify-between items-center"
        >
          <h2 className="text-xl font-extrabold text-black">

            {activeModal === "hint"
              ? "Hint"
              : activeModal === "solution"
              ? "Solution"
              : "Think Step-by-Step"}

          </h2>

          <button
            onClick={() => setActiveModal(null)}
            className="text-xl font-bold text-red-600"
          >
            ✖
          </button>

        </div>

        <div className="mt-4">

          {/* HINT */}
          {activeModal === "hint" && (
            <p className="whitespace-pre-line font-bold text-black">
              {safeHint}
            </p>
          )}

          {/* SOLUTION */}
          {activeModal === "solution" && (
            <p className="whitespace-pre-line font-bold text-black">
              {safeSolution}
            </p>
          )}

          {/* STEP MODE */}
          {activeModal === "steps" && (

            sections.length > 0 ? (

            <>

              <div className="max-h-[420px] overflow-y-auto pr-2 space-y-4 text-black font-bold text-lg">

                {sections[sectionIndex].map((step: any) => {

                  let bgColor = "bg-blue-50";
                  if (sectionIndex % 3 === 1) bgColor = "bg-green-50";
                  if (sectionIndex % 3 === 2) bgColor = "bg-purple-50";

                  return (

                    <div
                      key={step.key}
                      className={`p-3 rounded-lg ${bgColor}`}
                    >

                      <p className="mb-2 whitespace-pre-line">
                        {step.text}
                      </p>

                      {question?.steps &&
                        question.steps[step.key] && (

                          <input
                            className="border-2 border-black w-32 text-center bg-white p-1"
                            onChange={(e) =>
                              setStepValues({
                                ...stepValues,
                                [step.key]: e.target.value
                              })
                            }
                          />

                      )}

                    </div>

                  );

                })}

              </div>

              {/* SECTION NAVIGATION */}
              <div className="flex justify-between mt-6 text-blue-800 font-bold">

                <button
                  disabled={sectionIndex === 0}
                  onClick={() => setSectionIndex(sectionIndex - 1)}
                  className="disabled:opacity-30"
                >
                  ← Previous Section
                </button>

                <span>
                  Section {sectionIndex + 1} of {sections.length}
                </span>

                <button
                  disabled={sectionIndex === sections.length - 1}
                  onClick={() => setSectionIndex(sectionIndex + 1)}
                  className="disabled:opacity-30"
                >
                  Next Section →
                </button>

              </div>

              <button
                onClick={submitStep}
                className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg w-full"
              >
                Submit
              </button>

            </>

            ) : (

              <p className="text-black font-bold">
                No step-by-step explanation available for this question.
              </p>

            )

          )}

        </div>

      </div>

    </div>

  );

}