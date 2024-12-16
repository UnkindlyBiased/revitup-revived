import { IsEnum, IsOptional, IsString, IsUrl, IsUUID, MaxLength } from 'class-validator';

import { ImageTypes } from '../../../../utils/enums/image-types.enum';

export class ImageUploadDto {
    @IsString()
    @IsUUID()
    id: string

    @IsOptional()
    @IsString()
    @MaxLength(255)
    title: string

    @IsString()
    @IsUrl()
    link: string

    @IsEnum(ImageTypes)
    imageType: ImageTypes
}