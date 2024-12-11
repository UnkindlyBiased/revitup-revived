import { ILike, Repository } from 'typeorm';

import { CountryEntity } from './country.entity';
import { AppDataSource } from '../../../utils/data/app.data-source';
import { CountryCreateDto } from './dto/country-create.dto';
import { ApiError } from '../../../utils/error/api.error';

export class CountryRepository {
    constructor(
        private repo: Repository<CountryEntity> = AppDataSource.getRepository(CountryEntity)
    ) {}

    async getCountries(): Promise<CountryEntity[]> {
        return await this.repo.find({
            order: { name: 'ASC' }
        })
    }
    async getCountryByCode(code: string): Promise<CountryEntity> {
        const entity = await this.repo.findOneBy({
            code: ILike(code)
        })
        if (!entity) {
            throw ApiError.NotFound('Such country does not exist')
        }

        return entity
    }
    async create(input: CountryCreateDto): Promise<void> {
        const exists = await this.repo.existsBy([
            { code: ILike(input.name) },
            { name: ILike(input.name) }
        ])
        if (exists) {
            throw ApiError.Conflict('This country already exists')
        }

        const entity = this.repo.create(input)
        await this.repo.insert(entity)
    }
    async update(id: string, input: CountryCreateDto) {
        const exists = await this.repo.existsBy({ id })
        if (!exists) {
            throw ApiError.NotFound('Such country was not found for updating')
        }

        await this.repo.update({ id }, input)
    }
    async delete(code: string): Promise<void> {
        const entity = await this.repo.findOneBy({
            code: ILike(code)
        })
        if (!entity) {
            throw ApiError.NotFound('Such country does not exist')
        }

        await this.repo.remove(entity)        
    }
}