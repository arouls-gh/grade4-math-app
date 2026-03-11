import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {

  try {

    const filePath = path.join(process.cwd(), "data", "studentQuestions.json");

    const fileData = fs.readFileSync(filePath, "utf8");

    const questions = JSON.parse(fileData);

    return NextResponse.json(questions);

  } catch (err) {

    console.log("Teacher questions API error:", err);

    return NextResponse.json([]);

  }

}