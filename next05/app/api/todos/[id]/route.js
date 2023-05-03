import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request, {params : {id}}) {
 
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo = await res.json();

  if (!todo.id) return NextResponse.json({ "message": "todo not found" });

  return NextResponse.json(todo);
}
