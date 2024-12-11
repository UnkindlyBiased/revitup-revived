import { plainToInstance } from "class-transformer";

import { ArticleRepository } from "./article.repository";
import { ArticleShortDto } from "./dto/article-short.dto";
import { ArticleEntity } from "./article.entity";
import { ArticleCreateDto } from "./dto/article-create.dto";
import { ArticleHelper } from "./article.helper";
import CacheClient from "../../../utils/data/cache-client";

export class ArticleService {
    constructor(
        private articleRepo: ArticleRepository = new ArticleRepository(),
        private cacheClient: CacheClient = CacheClient.getInstance()
    ) {};

    async getArticles(): Promise<ArticleShortDto[]> {
        return plainToInstance(ArticleShortDto, await this.articleRepo.getArticles(), {
            excludeExtraneousValues: true
        })
    }
    async getArticleById(id: string): Promise<ArticleEntity> {
        return await this.articleRepo.getArticleByCondition({ id })
    }
    async getArticleByLink(link: string): Promise<ArticleEntity> {        
        const cachedArticle = await this.cacheClient.getCache<ArticleEntity>(`articles:${link}`)
        if (cachedArticle) return cachedArticle

        const article = await this.articleRepo.getArticleByCondition({ link })
        this.cacheClient.setCache(`articles:${link}`, article, {
            EX: 30
        })

        return article
    }
    async createArticle(dto: ArticleCreateDto): Promise<void> {
        dto.link = ArticleHelper.createArticleLink(dto.title)

        await this.articleRepo.create(dto)
    }
};