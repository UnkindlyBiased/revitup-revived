import { useQuery } from "@tanstack/react-query";

import { ArticleService } from "../../services/article.service";

export const useGetArticles = () =>
    useQuery({
        queryKey: ["articles"],
        queryFn: ArticleService.getArticles,
    });
