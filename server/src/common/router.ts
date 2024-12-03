import { Router } from "express";

import { UserRouter } from "../user/user.router";
import { AuthRouter } from "../auth/auth.router";
import { ArticleRouter } from "../article/article.router";

export const MainRouter = Router()

MainRouter.use('/users', UserRouter)
MainRouter.use('/auth', AuthRouter)

MainRouter.use('/articles', ArticleRouter)