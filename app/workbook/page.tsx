"use client";

import { useRouter } from "next/navigation";

export default function WorkbookPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={() => router.push("/maths")}
        className="bg-green-700 hover:bg-green-800 text-white font-extrabold text-2xl px-10 py-6 rounded-2xl shadow-xl"
      >
        Grade 4 - Term 2 - Maths
      </button>
    </div>
  );
}