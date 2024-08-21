import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { UserRoles } from "../../utils/enum/user-roles.enum";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 75 })
    username: string

    @Column()
    password: string

    @Column({
        name: 'email_address',
        nullable: true
    })
    emailAddress: string

    @Column({
        type: 'enum',
        enum: UserRoles,
        default: UserRoles.DEFAULT
    })
    role: UserRoles
}