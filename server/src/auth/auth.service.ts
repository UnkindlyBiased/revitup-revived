import { compare, hash } from "bcrypt";

import { UserCreateDto } from "../user/dto/user.create.dto";
import { UserRepository } from "../user/user.repository";
import { ApiError } from "../../utils/error/api.error";
import { UserPayloadDto } from "./dto/user.payload.dto";
import { TokenHelper } from "../../utils/helper/token.helper";
import { UserTokenPayloadDto } from "./dto/user.token-payload.dto";
import { UserLoginDto } from "./dto/user.login.dto";
import { UserEntity } from "../user/user.entity";
import { AuthHelper as auth } from "./auth.helper";

export class AuthService {
    private userRespository: UserRepository = new UserRepository()

    async register(input: UserCreateDto): Promise<UserTokenPayloadDto> {
        const exists = await this.userRespository.exists({ emailAddress: input.emailAddress })
        if (exists) {
            throw ApiError.Conflict('User with this data already exists')
        }

        const hashedPassword = await hash(input.password, 3)
        const { password, ...rest } = input

        const changedInput: UserCreateDto = {
            ...rest,
            password: hashedPassword
        }
        await this.userRespository.createUser(changedInput)

        const createdUser = await this.userRespository.getUserByCondition({ emailAddress: input.emailAddress })

        return auth.generateDtoWithTokens(auth.generatePayload(createdUser))
    }
    async login(loginData: UserLoginDto): Promise<UserTokenPayloadDto> {
        const user = await this.userRespository.getUserByCondition({ emailAddress: loginData.emailAddress })

        const isPasswordEqual = await compare(loginData.password, user.password)
        if (!isPasswordEqual) {
            throw ApiError.Forbidden("Passwords aren't equal")
        }

        return auth.generateDtoWithTokens(auth.generatePayload(user))
    }
    async refresh(refreshToken: string): Promise<UserTokenPayloadDto> {
        const payload = TokenHelper.verifyRefreshToken(refreshToken)
        if (!payload) {
            throw ApiError.Forbidden('User is not authorized')
        }

        const user = await this.userRespository.getUserByCondition({ emailAddress: payload.emailAddress })

        return auth.generateDtoWithTokens(auth.generatePayload(user))
    }
}