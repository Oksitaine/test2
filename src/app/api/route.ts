import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request){
    const res = await req.json();

    return NextResponse.json({
        "message": "Les loutres sont grandes !",
    }, {
        status: 200
    })
}