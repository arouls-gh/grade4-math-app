"use client";

import { useRouter } from "next/navigation";

export default function MathsPage() {
  const router = useRouter();

  const chapters = [
    { name: "Decimal", path: "/maths/decimal" },
    { name: "Shapes and Figures", path: "/maths/shapes" },
    { name: "Measurement", path: "/maths/measurement" },
    { name: "Time", path: "/maths/time" },
    { name: "Perimeter and Area", path: "/maths/perimeterarea" },
    { name: "Symmetry and Patterns", path: "/maths/symmetrypatterns" },
    { name: "Data Handling", path: "/maths/datahandling" },
    { name: "Money", path: "/maths/money" },
    { name: "Practice Test", path: "/maths/practicetest" },
  ];

  function handleClick(path: string | null) {
    if (path) {
      router.push(path);
    } else {
      alert("Chapter coming soon!");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10 text-center">
      <h1 className="text-3xl font-extrabold mb-10 text-black">
        Grade 4 - Term 2 - Maths
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">

        {chapters.map((chapter) => (
          <button
            key={chapter.name}
            onClick={() => handleClick(chapter.path)}
            className="bg-blue-800 hover:bg-blue-900 text-white text-lg font-bold p-6 rounded-xl shadow-lg"
          >
            {chapter.name}
          </button>
        ))}

      </div>
    </div>
  );
}