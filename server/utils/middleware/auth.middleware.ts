import { Request, Response, NextFunction } from "express";

import { ApiError } from "../error/api.error";
import { TokenHelper } from "../helper/token.helper";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) {
            throw ApiError.Unauthorized('User is not authorized')
        }

        const accessToken = authorizationHeader.split(' ')[1]
        const payload = TokenHelper.verifyAccessToken(accessToken)
        if (!payload) {
            throw ApiError.Unauthorized('User is not authorized')
        }

        req.user = payload
        next()
    } catch(e) {
        next(e)
    }
}