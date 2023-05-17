import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  //const name = searchParams.get('name')
  //const lastname = searchParams.get('lastname')

  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(
    obj
    //  {"message" : `hello ${name} ${lastname}`}
  );
}
