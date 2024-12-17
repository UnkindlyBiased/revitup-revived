import { Expose } from "class-transformer";

import { UserRoles } from "../../../../utils/enums/user-roles.enum";

export class UserPayloadDto {
    @Expose()
    id: string

    @Expose()
    username: string

    @Expose()
    emailAddress: string

    @Expose()
    nickname: string

    @Expose()
    roles: UserRoles[]
}