import { Expose } from "class-transformer";

import { UserRoles } from "../../../../utils/enums/user-roles.enum";
import { CountryEntity } from '../../country/country.entity';

export class UserShortDto {
    @Expose()
    id: number;
    
    @Expose()
    username: string;

    @Expose()
    nickname: string

    @Expose()
    roles: UserRoles;

    @Expose()
    country: CountryEntity
};