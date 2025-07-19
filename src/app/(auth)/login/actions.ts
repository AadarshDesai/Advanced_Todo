"use server"
import { generateToken } from "@/lib/auth";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

interface loginProps {
    email: string,
    password: string
}

export async function Login({email, password}: loginProps){
    try{
        const user = await prisma.user.findUnique({
            where: {email}
        });
        if(!user || !(await bcrypt.compare(password, user?.password))){
            throw new Error("Invalid credentials");
        }else{
            const token = generateToken({id: user.id, email: user.email});

            (await cookies()).set("token", token, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax"
            })

            return {
                success: true,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            };
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login!");
    }
}