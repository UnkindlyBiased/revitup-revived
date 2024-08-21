import { Router } from "express";

import AuthController from "./auth.controller";
import { validationMiddleware } from "../../utils/middleware/validation.middleware";
import { UserCreateDto } from "../user/dto/user.create.dto";
import { UserLoginDto } from "./dto/user.login.dto";

export const AuthRouter = Router()

AuthRouter.get('/refresh', AuthController.refresh)
AuthRouter.post('/register', validationMiddleware(UserCreateDto), AuthController.register)
AuthRouter.post('/login', validationMiddleware(UserLoginDto), AuthController.login)
AuthRouter.post('/logout', AuthController.logout)