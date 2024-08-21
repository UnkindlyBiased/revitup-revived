import { UserPayloadDto } from "../../../src/auth/dto/user.payload.dto";

declare module 'express-serve-static-core' {
    export interface Request {
        user: UserPayloadDto
    }
}