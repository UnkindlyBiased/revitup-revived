import { Router } from "express";

import { UserRouter } from "../user/user.router";
import { AuthRouter } from "../auth/auth.router";

export const MainRouter = Router()

MainRouter.use('/users', UserRouter)
MainRouter.use('/auth', AuthRouter)

MainRouter.get('/', (req, res) => { return res.send('hello') })