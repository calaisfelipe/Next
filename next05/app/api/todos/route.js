import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY = process.env.DATA_API_KEY;

export async function GET(request) {
  const res = await fetch(DATA_SOURCE_URL);

  const todos = await res.json();

  return NextResponse.json(todos);
}

export async function DELETE(request) {
  const { id } = await request.json();

  if (!id) return NextResponse.json({ "message" : "Todo id required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "API-KEY": API_KEY },
  });

  return NextResponse.json({ "message" : `Todo ${id} deleted` });
}

export async function POST(request) {
    const { userId, title } = await request.json();
  
    if (!userId || !title ) return NextResponse.json({ "message" : "Missing required data" });
  
    const res = await fetch(`${DATA_SOURCE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "API-KEY": API_KEY },
      body: JSON.stringify({
        userId,
        title,
        completed: false

      })
    });

    const newTodo = await res.json()
  
    return NextResponse.json(newTodo);
  }

  export async function PUT(request) {
    const { userId, id , title, completed } = await request.json();
  
    if (!userId || !title || !id || typeof(completed) !== 'boolean') return NextResponse.json({ "message" : "Missing required data" });
  
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "API-KEY": API_KEY },
      body: JSON.stringify({
        userId,
        title,
        completed

      })
    });

    const editedTodo = await res.json()
  
    return NextResponse.json(editedTodo);
  }