import { ArticleDetailed } from "../../utils/types/article/article-detailed.type";
import { ArticleShort } from "../../utils/types/article/article-short.type";
import api from "../api";

class ArticleService {
    private static PREFIX = "/articles";

    static getArticles = async (): Promise<ArticleShort[]> => {
        return (await api.get<ArticleShort[]>(this.PREFIX)).data;
    };
    static getArticleByLink = async (
        link: string,
    ): Promise<ArticleDetailed> => {
        return (await api.get<ArticleDetailed>(this.PREFIX + "/" + link)).data;
    };
}

export { ArticleService };
