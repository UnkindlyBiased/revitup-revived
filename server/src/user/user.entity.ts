import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 75 })
    username: string

    @Column()
    password: string
}