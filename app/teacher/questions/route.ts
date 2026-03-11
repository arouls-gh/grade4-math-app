import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function GET() {

  const filePath = path.join(process.cwd(), "app/data/studentQuestions.json")

  try {

    const raw = fs.readFileSync(filePath, "utf8")

    const data = raw ? JSON.parse(raw) : []

    return NextResponse.json(data)

  } catch (err) {

    console.error(err)

    return NextResponse.json([])

  }

}