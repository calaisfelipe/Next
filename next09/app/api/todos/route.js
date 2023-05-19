import { NextResponse } from "next/server";

const url = "http://localhost:5000/todos";

export async function GET(request) {
  const origin = request.headers.get('origin')

  const response = await fetch(url);

  const data = await response.json();

  return new NextResponse(JSON.stringify(data),{
    headers:{
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json'
    }
  });
}

export async function POST(request) {
  const { userId, title, completed } = await request.json();

  if (!userId || !title) {
    return NextResponse.json({ "message": "Missing require data" });
  }

  const res = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const response = await res.json();

  return NextResponse.json(response);
}


