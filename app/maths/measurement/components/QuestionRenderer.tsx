"use client";

export default function QuestionRenderer({
  question,
  answerInput,
  setAnswerInput,
  subAnswers,
  setSubAnswers
}: any) {

  return (
    <>
      <div
        className="text-xl font-bold text-black whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: question.text }}
      />

      <div className="mt-6"></div>

      {question.type === "single" && (
        <input
          type="text"
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
          className="border-2 border-black bg-white text-black p-3 font-bold rounded w-64"
        />
      )}

      {question.type === "multi" && question.id !== 7 && question.id !== 8 && (
        <div className="space-y-4 mt-6">
          {Object.keys(question.correctAnswer).map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.toUpperCase()}
              className="border-2 border-black bg-white text-black p-2 w-32"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  [key]: e.target.value
                })
              }
            />
          ))}
        </div>
      )}

      {/* Custom layout ONLY for Question 7 */}

      {question.id === 7 && (
        <div className="space-y-6 mt-6 text-lg">

          {/* Question A */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              A. How long did the student take to get ready after waking up and catch the bus?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="hr"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  a_h: e.target.value
                })
              }
            />

            <span>hr</span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="min"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  a_m: e.target.value
                })
              }
            />

            <span>min</span>
          </div>

          {/* Question B */}

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              B. How long is the lunch break?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="hr"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  b_h: e.target.value
                })
              }
            />

            <span>hr</span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="min"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  b_m: e.target.value
                })
              }
            />

            <span>min</span>
          </div>

          {/* Question C */}

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              C. At what time did the student reach back home from school?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-24 text-center"
              placeholder="time"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  c: e.target.value
                })
              }
            />

            <span>PM</span>
          </div>

        </div>
      )}

      {/* Custom layout ONLY for Question 8 */}

      {question.id === 8 && (
        <div className="space-y-6 mt-6 text-lg">

          {/* Question A */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              A. How long did the student take to reach school from home?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="hr"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  a_h: e.target.value
                })
              }
            />

            <span>hr</span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="min"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  a_m: e.target.value
                })
              }
            />

            <span>min</span>
          </div>

          {/* Question B */}

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              B. How long did the bus journey from school to the museum take?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="hr"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  b_h: e.target.value
                })
              }
            />

            <span>hr</span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="min"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  b_m: e.target.value
                })
              }
            />

            <span>min</span>
          </div>

          {/* Question C */}

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              C. How long did the students spend inside the museum?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="hr"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  c_h: e.target.value
                })
              }
            />

            <span>hr</span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="min"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  c_m: e.target.value
                })
              }
            />

            <span>min</span>
          </div>

          {/* Question D */}

          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold">
              D. How long did the student take to reach home after the bus reached school?
            </span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="hr"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  d_h: e.target.value
                })
              }
            />

            <span>hr</span>

            <input
              type="text"
              className="border-2 border-black p-2 w-16 text-center"
              placeholder="min"
              onChange={(e) =>
                setSubAnswers({
                  ...subAnswers,
                  d_m: e.target.value
                })
              }
            />

            <span>min</span>
          </div>

        </div>
      )}

    </>
  );
}