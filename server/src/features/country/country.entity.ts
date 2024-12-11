import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Countries')
export class CountryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        name: 'country_name',
        length: 75
    })
    name: string

    @Column({
        name: 'country_code',
        length: 5
    })
    code: string

    @Column({
        name: 'country_flag_url',
        nullable: true
    })
    flagLink: string
}