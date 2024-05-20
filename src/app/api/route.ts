import { NextRequest, NextResponse } from "next/server";


export async function GET(req: Request){
    const res = await req.json();

    return NextResponse.json({
        message: "Les loutres sont grandes !",
    }, {
        status: 200
    })
}

export async function POST(req: Request){
    const res = await req.json();

    return NextResponse.json({
        message: "Les loutres sont mignonnes mais ca ne vaut pas des robots de 100 metres de haut comme WGlint !!!",
    }, {
        status: 200
    })
}   
