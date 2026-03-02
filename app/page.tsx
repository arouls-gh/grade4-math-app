"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (isSignup) {
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully!");
      setIsSignup(false);
    } else {
      if (users[username] === password) {
        localStorage.setItem("currentUser", username);
        router.push("/workbook");
      } else {
        alert("Invalid username or password");
      }
    }
  }

  function resetPassword() {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    users[username] = "1234";
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password reset to 1234");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-96 border-4 border-blue-600">
        <h1 className="text-2xl font-extrabold text-blue-900 mb-6">
          Advik's Personal Math Workbook - Grade 4
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-400 p-3 w-full mb-4 rounded text-lg font-bold"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-400 p-3 w-full mb-4 rounded text-lg font-bold"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-4 py-3 rounded w-full mb-3"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm font-semibold text-blue-700"
        >
          {isSignup ? "Already have account?" : "Create new account"}
        </button>

        <br />

        <button
          onClick={resetPassword}
          className="text-sm font-semibold text-red-600 mt-3"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
}