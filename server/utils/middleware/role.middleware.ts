import { RequestHandler } from "express";

import { UserRoles } from "../enum/user-roles.enum";
import { ApiError } from "../error/api.error";

export function roleMiddleware(role: UserRoles): RequestHandler {
    return (req, _, next) => {
        try {
            const user = req.user
            if (user.role !== role) {
                throw ApiError.Forbidden("You can't access this route")
            }

            next()
        } catch(e) {
            next(e)
        }
    }
}