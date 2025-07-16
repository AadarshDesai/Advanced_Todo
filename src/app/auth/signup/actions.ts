"use server"
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

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
        return user;
    } catch (error) {
        return {error: "failed to create user"};
    }
}