import { IsEmail, IsStrongPassword } from "class-validator";

export class UserLoginDto {
    @IsEmail()
    emailAddress: string

    @IsStrongPassword({
        minLength: 6,
        minSymbols: 1,
        minNumbers: 1,
        minLowercase: 0,
        minUppercase: 0
    })
    password: string
}