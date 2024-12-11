import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class CountryCreateDto {
    @IsString()
    @MaxLength(75, { message: 'Name must not exceed the length of 75 symbols' })
    name: string

    @IsString()
    @MaxLength(5, { message: "Country's code shouldn't be longer than 5 symbols" })
    @Transform(({ value }) => (value as string).toUpperCase())
    code: string

    @IsOptional()
    @IsString()
    @IsUrl()
    flagLink?: string
}