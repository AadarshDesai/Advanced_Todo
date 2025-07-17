import jwt from "jsonwebtoken";

const getJWTSecret = (): string => {
    const secret = process.env.JWT_SECRET;
    if(!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    return secret;
}

export function generateToken(payload: object){
    return jwt.sign(payload, getJWTSecret(), {expiresIn: '7d'});
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, getJWTSecret());
    } catch (error) {
        return null;
    }
}