import { Repository } from "typeorm";

import { UserEntity } from "./user.entity";
import { AppDataSource } from "../../utils/data/app.data-source";

export class UserRepository {
    private userRepo: Repository<UserEntity> = AppDataSource.getRepository(UserEntity)

    async getUsers(): Promise<UserEntity[]> {
        return this.userRepo.find()
    }
}