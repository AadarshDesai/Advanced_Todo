"use server"
import { generateToken } from "@/lib/auth";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

interface signupProps {
    name: string,
    email: string,
    password: string
}

export async function Signup({name, email, password}: signupProps){
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {name, email, password: hashedPassword}
        });
        const token = generateToken({id: user.id, email: user.email});
        
        (await cookies()).set("token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "lax"
        });
        
        return user;
    } catch (error) {
        return {error: "failed to create user"};
    }
}