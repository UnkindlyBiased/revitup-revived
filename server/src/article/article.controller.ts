import { NextFunction, Request, Response } from "express";

import { ArticleService } from "./article.service";
import { RequestWithBody, RequestWithParams } from "../../utils/types/typed-requests";
import { ArticleCreateDto } from "./dto/article-create.dto";
import { HttpErrorCodes } from "../../utils/enum/http-error-codes.enum";

class ArticleController {
    constructor(
        private service = new ArticleService()
    ) {};

    getArticles = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const articles = await this.service.getArticles()

            return res.send(articles)
        } catch(e) {
            next(e)
        }
    }
    getArticleById = async (req: RequestWithParams<{ id: string }>, res: Response, next: NextFunction) => {
        try {
            const article = await this.service.getArticleById(req.params.id)
            return res.send(article)
        } catch(e) {
            next(e)
        }
    }
    getArticleByLink = async (req: RequestWithParams<{ link: string }>, res: Response, next: NextFunction) => {
        try {
            const article = await this.service.getArticleByLink(req.params.link)
            return res.send(article)
        } catch(e) {
            next(e)
        }
    }
    createArticle = async (req: RequestWithBody<ArticleCreateDto>, res: Response, next: NextFunction) => {
        try {
            req.body.authorId = req.user.id

            await this.service.createArticle(req.body)
            return res.status(HttpErrorCodes.CREATED).send({ mesaage: 'Article was created successfully' })
        } catch(e) {
            next(e)
        }
    }
};

export default new ArticleController();