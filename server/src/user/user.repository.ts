import { Repository } from "typeorm";

import { UserEntity } from "./user.entity";
import { AppDataSource } from "../../utils/data/app.data-source";
import { UserCreateDto } from "./dto/user.create.dto";
import { PartialKeys } from "../../utils/types/partial-keys";
import { ApiError } from "../../utils/error/api.error";

export class UserRepository {
    private userRepo: Repository<UserEntity> = AppDataSource.getRepository(UserEntity)

    async getUsers(): Promise<UserEntity[]> {
        return this.userRepo.find()
    }
    async getUserByCondition(condition: PartialKeys<UserEntity>): Promise<UserEntity> {
        const user = await this.userRepo.findOneBy(condition)
        if (!user) {
            throw ApiError.NotFound('User was not found by such condition')
        }

        return user
    }
    async createUser(input: UserCreateDto) {
        const entity = this.userRepo.create(input)

        await this.userRepo.insert(entity)
    }
    async exists(entityPartial: PartialKeys<UserEntity>): Promise<boolean> {
        return this.userRepo.existsBy(entityPartial)
    }
}