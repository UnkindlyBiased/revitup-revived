import { RequestHandler } from "express";

import { UserRoles } from "../enums/user-roles.enum";
import { ApiError } from "../error/api.error";

export function roleMiddleware(...roles: UserRoles[]): RequestHandler {
    return (req, _, next) => {
        try {
            const user = req.user
            if (!user.roles.some(role => roles.includes(role))) {
                throw ApiError.Forbidden("You can't access this route")
            }

            next()
        } catch(e) {
            next(e)
        }
    }
}