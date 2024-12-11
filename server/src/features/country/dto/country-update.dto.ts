import { IsString, IsUUID } from 'class-validator';

import { CountryCreateDto } from './country-create.dto';

export class CountryUpdateDto extends CountryCreateDto {
    @IsString()
    @IsUUID()
    id: string
}