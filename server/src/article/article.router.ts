import { Router } from "express";

import ArticleController from "./article.controller";
import { roleMiddleware } from "../../utils/middleware/role.middleware";
import { UserRoles } from "../../utils/enum/user-roles.enum";
import { authMiddleware } from "../../utils/middleware/auth.middleware";
import { validationMiddleware } from "../../utils/middleware/validation.middleware";
import { ArticleCreateDto } from "./dto/article-create.dto";

export const ArticleRouter = Router()

ArticleRouter.get('/', ArticleController.getArticles)
ArticleRouter.get('/:link', ArticleController.getArticleByLink)
ArticleRouter.get('/by-id/:id', ArticleController.getArticleById)

ArticleRouter.post('/',
    authMiddleware,
    roleMiddleware(UserRoles.EDITOR),
    validationMiddleware(ArticleCreateDto),
    ArticleController.createArticle
)