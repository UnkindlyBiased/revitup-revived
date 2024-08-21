import { IsEmail, IsStrongPassword, MaxLength, MinLength } from 'class-validator'

export class UserCreateDto {
    @MinLength(3)
    @MaxLength(75)
    username: string

    @IsStrongPassword({
        minLength: 6,
        minSymbols: 1,
        minNumbers: 1,
        minLowercase: 0,
        minUppercase: 0
    })
    @MaxLength(32)
    password: string

    @IsEmail()
    emailAddress: string
}