import { Expose } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Countries")
export class CountryEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: "country_name",
        length: 75,
    })
    @Expose()
    name: string;

    @Column({
        name: "country_code",
        length: 5,
    })
    @Expose()
    code: string;

    @Column({
        name: "country_flag_url",
        nullable: true,
    })
    @Expose()
    flagLink: string;
}
