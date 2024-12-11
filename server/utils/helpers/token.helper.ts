import { instanceToPlain } from "class-transformer";
import { sign, verify } from "jsonwebtoken";

import { UserPayloadDto } from "../../src/features/auth/dto/user.payload.dto";

export class TokenHelper {
    static generateAccessToken(payload: UserPayloadDto): string {
        return sign(instanceToPlain(payload), String(process.env.ACCESS_TOKEN_SECRET), {
            expiresIn: '30m'
        })
    }
    static generateRefreshToken(payload: UserPayloadDto): string {
        return sign(instanceToPlain(payload), String(process.env.REFRESH_TOKEN_SECRET), {
            expiresIn: '30d'
        })
    }
    static verifyAccessToken(token: string): UserPayloadDto | null {
        try {
            return verify(token, String(process.env.ACCESS_TOKEN_SECRET)) as UserPayloadDto
        } catch(e) {
            return null
        }
    }
    static verifyRefreshToken(token: string): UserPayloadDto | null {
        try {
            return verify(token, String(process.env.REFRESH_TOKEN_SECRET)) as UserPayloadDto
        } catch(e) {
            return null
        }
    }
}