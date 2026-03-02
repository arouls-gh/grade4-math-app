"use client";

import { useRouter } from "next/navigation";

export default function MathsPage() {
  const router = useRouter();

  const chapters = [
    "Shapes and Figures",
    "Measurement",
    "Time",
    "Area and Perimeter",
    "Symmetry and Pattern",
    "Data Handling",
    "Money",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-8">
        Select Chapter
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            onClick={() =>
              chapter === "Measurement"
                ? router.push("/maths/measurement")
                : alert("Coming Soon")
            }
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg p-5 rounded-xl shadow-lg"
          >
            {chapter}
          </button>
        ))}
      </div>
    </div>
  );
}