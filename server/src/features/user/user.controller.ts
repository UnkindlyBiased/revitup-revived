import { Request, Response, NextFunction } from "express";

import { UserService } from "./user.service";

class UserController {
    private service: UserService = new UserService();

    getUsers = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.service.getUsers()

            return res.send(users)
        } catch(e) {
            next(e)
        }
    }
}

export default new UserController()