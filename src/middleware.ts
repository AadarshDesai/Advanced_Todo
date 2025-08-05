import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
import { verifyToken } from "@/lib/auth";

const PUBLIC_PATHS = ['/login', '/signup',];

export function middleware(req: NextRequest){

    const {pathname} = req.nextUrl;

    if(PUBLIC_PATHS.includes(pathname)){
        return NextResponse.next();
    }

    const token = req.cookies.get('token')?.value;

    if(!token){
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        verifyToken(token);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|ico)|login|signup|register|api/public).*)',
};