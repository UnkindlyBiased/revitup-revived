import { UserAuthor } from "../user/user-author.type";

export type ArticleDetailed = {
    id: string;
    title: string;
    previewText: string;
    mainText: string;
    link: string;
    publishingDate: string;
    author: UserAuthor;
};
