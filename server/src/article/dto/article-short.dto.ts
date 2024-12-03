import { Expose } from "class-transformer";

export class ArticleShortDto {
    @Expose()
    id: string

    @Expose()
    title: string

    @Expose()
    previewText: string

    @Expose()
    link: string
}