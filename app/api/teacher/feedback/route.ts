import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {

  try {

    const filePath = path.join(process.cwd(), "data", "studentFeedback.json");

    const fileData = fs.readFileSync(filePath, "utf8");

    const feedback = JSON.parse(fileData);

    return NextResponse.json(feedback);

  } catch (err) {

    console.log("Teacher feedback API error:", err);

    return NextResponse.json([]);

  }

}