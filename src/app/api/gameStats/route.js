import { NextResponse } from "next/server";

export async function POST(request) {
    const { gameId } = await request.json();

    console.log({
        gameId,
    });
    
    return NextResponse.json({ message: "Hello, World!" });
}