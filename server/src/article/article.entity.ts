import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "../user/user.entity";

@Entity('Articles')
export class ArticleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
        name: 'article_title',
    })
    title: string;

    @Column({
        type: 'text',
        name: 'article_preview_text',
    })
    previewText: string;

    @Column({
        type: 'text',
        name: 'article_main_text',
        nullable: true,
    })
    mainText: string;

    @Column({
        name: 'article_link'
    })
    link: string

    @ManyToOne(() => UserEntity)
    @JoinColumn()
    author: UserEntity
};