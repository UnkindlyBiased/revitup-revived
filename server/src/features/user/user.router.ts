import { Router } from "express";

import UserController from "./user.controller";
import { authMiddleware } from "../../../utils/middleware/auth.middleware";
import { roleMiddleware } from "../../../utils/middleware/role.middleware";
import { UserRoles } from "../../../utils/enums/user-roles.enum";

export const UserRouter = Router()

UserRouter.get('/', authMiddleware, roleMiddleware(
    UserRoles.ADMIN, UserRoles.CREATOR
), UserController.getUsers)