import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ImageTypes } from '../../../utils/enums/image-types.enum';

@Entity('Images')
export class ImageEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        name: 'image_title',
        length: 255,
        nullable: true
    })
    title: string

    @Column({
        name: 'image_link'
    })
    link: string

    @Column({
        name: 'image_is_main',
        default: false
    })
    isMain: boolean

    @Column({
        type: 'enum',
        enum: ImageTypes,
        nullable: true,
        name: 'image_type'
    })
    imageType: ImageTypes
}