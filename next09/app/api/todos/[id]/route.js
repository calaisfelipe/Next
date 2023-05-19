import { NextResponse } from "next/server";


const url = "http://localhost:5000/todos";

export async function GET(request, {params: {id}}) {
 
  const res = await fetch(`${url}/${id}`);

  const result = await res.json();

  if (!result.id) {
    return NextResponse.json({ "message": "Todo not founded" });
  }

  return NextResponse.json(result);
}

export async function DELETE(request, {params: {id}}) {
  

  if (!id) {
    return NextResponse.json({ "message": "Todo id required" });
  }

  const res = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": process.env.DATA_API_KEY
    },
  });

  const response = await res.json();

  return NextResponse.json({ "message": "Post deleted" });
}

export async function PUT(request, {params : {id}}) {

  const { userId, title, completed } = await request.json();

  if (!id || !userId || !title || typeof completed !== "boolean") {
    return NextResponse.json({ "message": "Missing require data" });
  }

  const data = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "appplication/json",
      "API-KEY": DATA_API_KEY
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updated = await data.json();

  return NextResponse.json({
    message: "todo modified",
    post: updated,
  });
}
