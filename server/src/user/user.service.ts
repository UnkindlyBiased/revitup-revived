import { UserEntity } from "./user.entity";
import { UserRepository } from "./user.repository";

export class UserService {
    private repository: UserRepository = new UserRepository()

    async getUsers(): Promise<UserEntity[]> {
        return this.repository.getUsers()
    }
}