import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(request){

    const origin = request.headers.get('origin')

    const remain = await limiter.removeTokens(1)
    console.log('remaining:,', remain )

    if(remain < 0 ){
        return new NextResponse(null, {
            status: 429,
            statusText: "Too many Requests",
            headers:{
                'Access-control-Allow-Origin': origin ||'*',
                'Content-Type': 'text/plain',
            }
        })

        
    }



    return NextResponse.json({"message":"hello, user"})



}