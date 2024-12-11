import { Expose } from "class-transformer";

import { UserRoles } from "../../../../utils/enums/user-roles.enum";

export class UserShortDto {
    @Expose()
    id: number;
    
    @Expose()
    username: string;

    @Expose()
    roles: UserRoles;
};