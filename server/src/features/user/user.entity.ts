import {
    BeforeInsert,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { UserRoles } from "../../../utils/enums/user-roles.enum";
import { CountryEntity } from "../country/country.entity";

@Entity("Users")
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 75 })
    username: string;

    @Column()
    password: string;

    @Column({
        name: "email_address",
    })
    emailAddress: string;

    @Column({
        name: "user_nickname",
    })
    nickname: string;

    @Column({
        type: "enum",
        array: true,
        enum: UserRoles,
        name: "user_roles",
        default: [UserRoles.DEFAULT],
    })
    roles: UserRoles[];

    @Column({
        name: "user_number",
        generated: "increment",
    })
    number: number;

    @ManyToOne(() => CountryEntity)
    @JoinColumn({ name: "user_country_id" })
    country: CountryEntity;

    @BeforeInsert()
    generateNicknameIfNotGiven(): void {
        this.nickname =
            this.username.replaceAll(" ", "").toLowerCase() +
            "-" +
            Math.round(Math.random() * 100000);
    }
}
