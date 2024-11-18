import { IsOptional, IsString, IsUUID, MaxLength, MinLength} from "class-validator";

export class ArticleCreateDto {
    @IsString()
    @MinLength(20)
    @MaxLength(100)
    title: string

    @IsString()
    @MinLength(65)
    @MaxLength(250)
    previewText: string

    @IsOptional()
    @IsString()
    link?: string

    @IsOptional()
    @IsUUID()
    authorId?: string
}