import { useQuery } from "@tanstack/react-query";

import { ArticleService } from "../../services/article.service";

export const useGetArticleByLink = (link: string) =>
    useQuery({
        queryKey: ["article-detailed", link],
        queryFn: () => ArticleService.getArticleByLink(link),
    });
