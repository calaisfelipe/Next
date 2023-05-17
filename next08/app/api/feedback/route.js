import { NextResponse } from "next/server";



export async function POST(request){

    const data = await request.json()
    
    //TERMINAL
    console.log('data: ', data)

    
    //CONSOLE NETWORK
    return NextResponse.json(data)
}