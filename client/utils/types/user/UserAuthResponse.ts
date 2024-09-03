import { UserRoles } from "./UserRoles"

type UserAuthResponse = {
    id: number
    username: string
    emailAddress: string
    role: UserRoles
}

export default UserAuthResponse