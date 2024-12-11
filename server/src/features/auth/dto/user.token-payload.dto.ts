import { UserPayloadDto } from "./user.payload.dto";
import { UserTokensDto } from "./user.tokens.dto";

export interface UserTokenPayloadDto {
    user: UserPayloadDto
    tokens: UserTokensDto
}