import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({message: "Logged Out" });

    res.cookies.set("token", "", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        maxAge: 0
    });

    return res;
}