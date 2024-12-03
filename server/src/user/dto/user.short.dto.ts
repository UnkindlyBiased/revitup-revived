import { Expose } from "class-transformer";

import { UserRoles } from "../../../utils/enum/user-roles.enum";

export class UserShortDto {
    @Expose()
    id: number;
    
    @Expose()
    username: string;

    @Expose()
    roles: UserRoles;
};