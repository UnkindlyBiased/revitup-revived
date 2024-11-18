import { plainToInstance } from "class-transformer";

import { UserRepository } from "./user.repository";
import { UserShortDto } from "./dto/user.short.dto";

export class UserService {
    private repository: UserRepository = new UserRepository();

    async getUsers(): Promise<UserShortDto[]> {
        const user = await this.repository.getUsers();
        
        return plainToInstance(UserShortDto, user, {
            excludeExtraneousValues: true
        });
    };
};