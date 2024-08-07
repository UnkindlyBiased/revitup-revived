import { Router } from "express";

import { UserRouter } from "../user/user.router";

export const MainRouter = Router()

MainRouter.use('/users', UserRouter)