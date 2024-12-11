import { plainToInstance } from "class-transformer"

import { TokenHelper } from "../../../utils/helpers/token.helper"
import { UserEntity } from "../user/user.entity"
import { UserPayloadDto } from "./dto/user.payload.dto"
import { UserTokenPayloadDto } from "./dto/user.token-payload.dto"
import { UserTokensDto } from "./dto/user.tokens.dto"

export class AuthHelper {
    static async generateDtoWithTokens(payload: UserPayloadDto): Promise<UserTokenPayloadDto> {
        const tokens: UserTokensDto = {
            accessToken: TokenHelper.generateAccessToken(payload),
            refreshToken: TokenHelper.generateRefreshToken(payload)
        }

        return {
            user: payload,
            tokens
        }
    }
    static generatePayload(entity: UserEntity): UserPayloadDto {
        return plainToInstance(UserPayloadDto, entity, {
            excludeExtraneousValues: true
        })
    }
}