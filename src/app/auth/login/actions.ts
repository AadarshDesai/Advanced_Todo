"use server"
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

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