import { REMOVABLE_SYMBOLS } from "../../../utils/constants/string.constants";

export class ArticleHelper {
    static createArticleLink(articleTitle: string) {
        for (const symbol of REMOVABLE_SYMBOLS) {
            articleTitle.replace(symbol, "");
        }

        return articleTitle.split(' ').join('-').toLowerCase()
    }
}