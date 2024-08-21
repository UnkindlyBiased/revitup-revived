import { Response, NextFunction, Request } from "express";

import { AuthService } from "./auth.service";
import { RequestWithBody } from "../../utils/types/typed-requests";
import { UserCreateDto } from "../user/dto/user.create.dto";
import { CookieHelper } from "../../utils/helper/cookie.helper";
import { UserLoginDto } from "./dto/user.login.dto";

class AuthController {
    private readonly REFRESH_TOKEN_CONST = 'refreshToken'

    private service: AuthService = new AuthService()

    register = async (req: RequestWithBody<UserCreateDto>, res: Response, next: NextFunction) => {
        try {
            const data = await this.service.register(req.body)

            CookieHelper.setCookie(this.REFRESH_TOKEN_CONST, data.tokens.refreshToken, res)
            return res.send(data)
        } catch(e) {
            next(e)
        }
    }
    login = async (req: RequestWithBody<UserLoginDto>, res: Response, next: NextFunction) => {
        try {
            const data = await this.service.login(req.body)

            CookieHelper.setCookie(this.REFRESH_TOKEN_CONST, data.tokens.refreshToken, res)
            return res.send(data)
        } catch(e) {
            next(e)
        }
    }
    logout = (_: Request, res: Response, next: NextFunction) => {
        try {
            CookieHelper.clearCookie(this.REFRESH_TOKEN_CONST, res)

            return res.send({ message: 'You were logged out successfully' })
        } catch(e) {
            next(e)
        }
    }
    refresh = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const refreshToken = req.cookies['refreshToken']
            const data = await this.service.refresh(refreshToken)

            CookieHelper.setCookie(this.REFRESH_TOKEN_CONST, data.tokens.refreshToken, res)
            return res.send(data)
        } catch(e) {
            next(e)
        }
    }
}

export default new AuthController()