import { NextResponse } from "next/server";

export async function GET(request) {

  const data = {"message": "Hello, Next.js!"}

  return NextResponse.json({ data });
}
