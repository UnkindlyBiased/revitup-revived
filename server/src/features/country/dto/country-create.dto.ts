import { IsOptional, IsString, IsUrl } from 'class-validator';
import { CountryCheckDto } from './country-check.dto';

export class CountryCreateDto extends CountryCheckDto {
    @IsOptional()
    @IsString()
    @IsUrl()
    flagLink?: string
}