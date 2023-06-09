import { NextResponse } from "next/server";

const allowdOrigins = process.env.NODE_ENV === 'production' ? ['https://www.yoursite.com', 'https://yoursite.com'] : ['http:localhost:3000', 'https://www.google.com.br']

export async function middleware(request){

    const origin = request.headers.get('origin')
    console.log(origin)

    if(origin && !allowdOrigins.includes(origin)){
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Content-Type': 'text/plain'
            }

        })
    }

    console.log('Middleware!')
      

    return NextResponse.next()

}

export const config = {
    matcher: '/api/:path*',
}