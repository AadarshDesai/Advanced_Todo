import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import prisma from "@/lib/db";


export async function GET(){
    const token = (await cookies()).get("token")?.value;

    if(!token){
        return Response.json({message: "No token found"}, {status: 401});
    }

    let decoded;
    try {
        decoded = verifyToken(token) as {id: string};
    } catch (error) {
        return Response.json({message: "Invalid Token"})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: decoded.id
        },select: {
            email: true,
            name: true
        }
    });

    if(!user){
        return Response.json({message: "User not found"})
    }else{
        return Response.json(user);
    }
}