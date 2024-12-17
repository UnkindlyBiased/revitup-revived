import { Repository } from "typeorm";

import { ArticleEntity } from "./article.entity";
import { AppDataSource } from "../../../utils/data/app.data-source";
import { ApiError } from "../../../utils/error/api.error";
import { PartialKeys } from "../../../utils/types/partial-keys";
import { ArticleCreateDto } from "./dto/article-create.dto";
import { EntityHelper } from "../../../utils/helpers/entity.helper";

export class ArticleRepository {
    constructor(
        private repo: Repository<ArticleEntity> = AppDataSource.getRepository(
            ArticleEntity,
        ),
    ) {}

    async getArticles(): Promise<ArticleEntity[]> {
        return this.repo.find();
    }
    async getArticleByCondition(
        condition: PartialKeys<ArticleEntity>,
    ): Promise<ArticleEntity> {
        const cols = EntityHelper.getTruesObj(
            EntityHelper.includeWithRemoval(this.repo, ["author"]),
        );
        const article = await this.repo.findOne({
            where: condition,
            relations: ["author", "author.country"],
            select: {
                ...cols,
                author: {
                    username: true,
                    nickname: true,
                    roles: true,
                    country: {
                        name: true,
                        flagLink: true,
                    }
                },
            },
        });
        if (!article) {
            throw ApiError.NotFound("Such article doesn't exist");
        }

        return article;
    }
    async create(dto: ArticleCreateDto): Promise<void> {
        const authorId = dto.authorId;
        delete dto.authorId;

        const exists = await this.repo.existsBy({
            title: dto.title,
            link: dto.link,
        });
        if (exists) {
            throw ApiError.Conflict(
                "Article with such data is creating conflicts",
            );
        }

        const entity = this.repo.create({
            ...dto,
            author: { id: authorId },
        });

        await this.repo.save(entity);
    }
}
