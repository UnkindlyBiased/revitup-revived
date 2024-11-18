import { plainToInstance } from "class-transformer";

import { ArticleRepository } from "./article.repository";
import { ArticleShortDto } from "./dto/article-short.dto";
import { ArticleEntity } from "./article.entity";
import { ArticleCreateDto } from "./dto/article-create.dto";
import { ArticleHelper } from "./article.helper";

export class ArticleService {
    constructor(private articleRepo: ArticleRepository = new ArticleRepository()) {};

    async getArticles(): Promise<ArticleShortDto[]> {
        return plainToInstance(ArticleShortDto, await this.articleRepo.getArticles(), {
            excludeExtraneousValues: true
        })
    }
    async getArticleById(id: string): Promise<ArticleEntity> {
        return await this.articleRepo.getArticleByCondition({ id })
    }
    async getArticleByLink(link: string): Promise<ArticleEntity> {
        return await this.articleRepo.getArticleByCondition({ link })
    }
    async createArticle(dto: ArticleCreateDto): Promise<void> {
        dto.link = ArticleHelper.createArticleLink(dto.title)

        await this.articleRepo.create(dto)
    }
};