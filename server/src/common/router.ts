import { Router } from "express";

import { UserRouter } from "../features/user/user.router";
import { AuthRouter } from "../features/auth/auth.router";
import { ArticleRouter } from "../features/article/article.router";
import { CountryRouter } from '../features/country/country.router';

export const MainRouter = Router()

MainRouter.use('/users', UserRouter)
MainRouter.use('/auth', AuthRouter)

MainRouter.use('/articles', ArticleRouter)
MainRouter.use('/countries', CountryRouter)