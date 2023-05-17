import { NextResponse } from "next/server";

export function middleware(request){

    const regex = new RegExp('/api/*')

    if(regex.test(request.url)){

    }

    console.log('Middleware!')
    console.log(request.method)
    console.log(request.url)


}