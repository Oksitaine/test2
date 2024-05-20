import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request){
    const res = await req.json();

    return NextResponse.json({
        "message": "Hello World!",
    }, {
        status: 200
    })
}