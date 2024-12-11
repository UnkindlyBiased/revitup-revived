import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { UserRoles } from "../../../utils/enums/user-roles.enum";

@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 75 })
    username: string

    @Column()
    password: string

    @Column({
        name: 'email_address'
    })
    emailAddress: string

    @Column({
        type: 'enum',
        array: true,
        enum: UserRoles,
        name: 'user_roles',
        default: [UserRoles.DEFAULT]
    })
    roles: UserRoles[]

    @Column({
        name: 'user_number',
        generated: 'increment'
    })
    number: number
}