import { UserPayloadDto } from "../../../src/features/auth/dto/user.payload.dto";

declare module 'express-serve-static-core' {
    export interface Request {
        user: UserPayloadDto
    }
}