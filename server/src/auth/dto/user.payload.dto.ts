import { Expose } from "class-transformer";

import { UserRoles } from "../../../utils/enum/user-roles.enum";

export class UserPayloadDto {
    @Expose()
    id: number

    @Expose()
    username: string

    @Expose()
    emailAddress: string

    @Expose()
    role: UserRoles
}