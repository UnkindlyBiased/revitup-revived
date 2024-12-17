import { UserRoles } from "./UserRoles"

type UserAuthResponse = {
    id: number
    username: string
    emailAddress: string
    nickname: string
    roles: UserRoles[]
}

export default UserAuthResponse