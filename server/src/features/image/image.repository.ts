import { Repository } from 'typeorm';

import { ImageEntity } from './image.entity';
import { AppDataSource } from '../../../utils/data/app.data-source';

export class ImageRepository {
    constructor(
        private repo: Repository<ImageEntity> = AppDataSource.getRepository(ImageEntity)
    ) {}

    
}